#!/usr/bin/env python3
"""Export inventory artwork from supplied 1.21.1 resources into the weapon wiki.

Later --input archives override earlier ones, as resource packs do. JARs and
pack ZIPs (overrides/kubejs/assets/) are supported. No mod code is executed.
Unsupported custom model loaders keep the catalogue's category fallback.

Example:
  python3 TK3/tools/export_weapon_icons.py --input minecraft.jar \\
    --input-dir downloaded-mods --input pack.zip --apply

Requires Pillow and NumPy. Exported PNGs and provenance are committed; normal
wiki builds do not need the source JARs or these Python dependencies.
"""
from __future__ import annotations

import argparse
from collections import Counter
from functools import lru_cache
import hashlib
from io import BytesIO
import json
import math
from pathlib import Path
import re
from typing import Any
from zipfile import ZipFile

import numpy as np
from PIL import Image

PACK = Path(__file__).resolve().parents[1]
SOURCE = PACK / "handbook-source/current"
SIZE = 96
PADDING = 6
BUILTIN_GENERATED = {"builtin/generated", "minecraft:builtin/generated"}
# ACItemstackRenderer.renderStaticItemSprite selects these exact _inventory
# models for GUI rendering. The ordinary model delegates to a Java renderer.
NATIVE_GUI_MODELS = {
    "alexscaves:" + name: "alexscaves:item/" + name + "_inventory"
    for name in ("dreadbow", "extinction_spear", "frostmint_spear", "limestone_spear",
                 "ortholance", "primitive_club", "sea_staff", "sugar_staff")
}


def read_json(raw: bytes) -> dict[str, Any]:
    """Minecraft's resource JSON permits comments and trailing separators."""
    text = raw.decode("utf-8-sig")
    text = re.sub(r'("(?:\\.|[^"\\])*")|//[^\r\n]*|/\*[\s\S]*?\*/',
                  lambda match: match.group(1) or "", text)
    text = re.sub(r'("(?:\\.|[^"\\])*")|,\s*([}\]])',
                  lambda match: match.group(1) or match.group(2), text)
    return json.loads(text)


def qualified(value: str) -> str:
    return value if ":" in value else "minecraft:" + value


def location(value: str, kind: str, suffix: str) -> str:
    namespace, path = qualified(value).split(":", 1)
    return f"assets/{namespace}/{kind}/{path}{suffix}"


def digest(path: Path) -> str:
    result = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            result.update(chunk)
    return result.hexdigest()


class AssetStore:
    """Keep archive entries lazy; final input has highest resource priority."""

    def __init__(self, paths: list[Path]):
        self.files: dict[str, tuple[ZipFile, str, str]] = {}
        self.archives: list[ZipFile] = []
        self.sources: list[dict[str, Any]] = []
        for path in paths:
            self.add_archive(ZipFile(path), path.name)
            self.sources.append({"archive": path.name, "sha256": digest(path)})

    def add_archive(self, archive: ZipFile, source: str) -> None:
        self.archives.append(archive)
        # Embedded resource packs are not auto-enabled. Only the ordinary JAR
        # assets and explicit KubeJS overrides enter the lookup.
        for member in archive.namelist():
            if member.startswith("assets/"):
                key = member
            elif member.startswith("overrides/kubejs/assets/"):
                key = member.removeprefix("overrides/kubejs/")
            elif member.startswith("kubejs/assets/"):
                key = member.removeprefix("kubejs/")
            else:
                continue
            if key.endswith((".json", ".png", ".png.mcmeta")):
                self.files[key] = (archive, member, source)
        for member in archive.namelist():
            if member.startswith("META-INF/jarjar/") and member.endswith(".jar"):
                self.add_archive(ZipFile(BytesIO(archive.read(member))), source + "!" + member)

    def raw(self, key: str) -> bytes | None:
        entry = self.files.get(key)
        return entry[0].read(entry[1]) if entry else None

    def provenance(self, paths: set[str]) -> list[dict[str, str]]:
        return [{"path": path, "archive": self.files[path][2]}
                for path in sorted(paths) if path in self.files]

    def close(self) -> None:
        for archive in reversed(self.archives):
            archive.close()


class IconExporter:
    def __init__(self, store: AssetStore, size: int = SIZE):
        self.store = store
        self.size = size

    @lru_cache(maxsize=None)
    def model(self, name: str, stack: tuple[str, ...] = ()) -> dict[str, Any]:
        name = qualified(name)
        if name in stack or len(stack) > 24:
            raise ValueError("Cyclic model parent")
        key = location(name, "models", ".json")
        data = self.store.raw(key)
        if not data:
            # The two vanilla item templates are valid even without the client
            # JAR. Their GUI perspective is front-facing and unscaled.
            if name in {"minecraft:item/generated", "minecraft:item/handheld",
                        "minecraft:item/handheld_rod"}:
                return {"_generated": True, "_resources": set()}
            if name in BUILTIN_GENERATED:
                return {"_generated": True, "_resources": set()}
            raise ValueError("Missing model: " + key)
        return self.resolve(read_json(data), stack + (name,), {key})

    def resolve(self, data: dict[str, Any], stack: tuple[str, ...],
                resources: set[str] | None = None) -> dict[str, Any]:
        resources = set(resources or ())
        loader = data.get("loader")
        if loader in {"neoforge:separate_transforms", "forge:separate_transforms"}:
            # Inventory art is the GUI perspective, never the held OBJ/geo UV
            # atlas. Many combat mods ship an explicit generated GUI sprite.
            selected = data.get("perspectives", {}).get("gui", data.get("base"))
            if not isinstance(selected, dict):
                raise ValueError("Missing separate-transforms GUI model")
            return self.resolve(selected, stack, resources)
        if loader in {"neoforge:item_layers", "forge:item_layers"}:
            # ItemLayerModel uses the same generated layer geometry. Extra
            # block/sky light entries affect lighting, not the sprite mapping.
            data = {key: value for key, value in data.items() if key != "loader"}
        elif loader:
            raise ValueError("Unsupported custom loader: " + str(loader))
        parent = self.model(data["parent"], stack) if data.get("parent") else {}
        combined = {**parent, **data,
                    "textures": {**parent.get("textures", {}), **data.get("textures", {})},
                    "display": {**parent.get("display", {}), **data.get("display", {})},
                    "_resources": resources | set(parent.get("_resources", ()))}
        # Entity renderers are opaque to a resource-only exporter; a texture
        # entry by itself is not evidence that the texture is an inventory icon.
        if data.get("parent") in {"builtin/entity", "minecraft:builtin/entity"}:
            raise ValueError("Builtin entity renderer")
        return combined

    @staticmethod
    def resolve_texture(value: str, textures: dict[str, str]) -> str:
        for _ in range(24):
            if not value.startswith("#"):
                return qualified(value)
            value = textures.get(value[1:], "")
            if not value:
                break
        raise ValueError("Unresolved texture reference")

    @lru_cache(maxsize=None)
    def texture(self, name: str) -> tuple[Image.Image, frozenset[str]]:
        key = location(name, "textures", ".png")
        data = self.store.raw(key)
        if not data:
            raise ValueError("Missing texture: " + key)
        image = Image.open(BytesIO(data)).convert("RGBA")
        resources = {key}
        metadata = self.store.raw(key + ".mcmeta")
        if metadata:
            resources.add(key + ".mcmeta")
            animation = read_json(metadata).get("animation")
            if isinstance(animation, dict):
                # Match Minecraft's default dimensions, plus explicitly sized
                # rectangular frames and nonzero first animation frame.
                width = int(animation.get("width", image.width if "height" in animation else min(image.size)))
                height = int(animation.get("height", image.height if "width" in animation else min(image.size)))
                if width <= 0 or height <= 0 or image.width % width or image.height % height:
                    raise ValueError("Invalid animation frame size: " + key)
                frames = animation.get("frames", [])
                first = frames[0] if frames else 0
                index = first.get("index", 0) if isinstance(first, dict) else first
                columns = image.width // width
                if not isinstance(index, int) or index < 0 or index >= columns * (image.height // height):
                    raise ValueError("Invalid animation frame index: " + key)
                x, y = index % columns * width, index // columns * height
                image = image.crop((x, y, x + width, y + height))
        return image, frozenset(resources)

    def flat_icon(self, data: dict[str, Any]) -> tuple[Image.Image, set[str], str]:
        textures = data.get("textures", {})
        layer_names = sorted((key for key in textures if re.fullmatch(r"layer\d+", key)),
                             key=lambda key: int(key[5:]))
        if not layer_names:
            raise ValueError("No supported inventory geometry or texture layers")
        # Missing parent resources may conceal custom geometry; require a known
        # generated inheritance rather than interpreting arbitrary atlas layers.
        if not data.get("_generated"):
            raise ValueError("Texture layers do not inherit a generated item")
        resources = set(data.get("_resources", ()))
        layers = []
        for key in layer_names:
            name = self.resolve_texture(textures[key], textures)
            image, paths = self.texture(name)
            resources.update(paths)
            layers.append(image)
        native_size = layers[0].size
        result = Image.new("RGBA", native_size)
        for image in layers:
            result.alpha_composite(image.resize(native_size, Image.Resampling.NEAREST))
        if result.getbbox() is None:
            raise ValueError("Transparent inventory sprite")
        # Preserve native pixels and proportions; catalogue CSS scales this small
        # thumbnail. Inherited GUI translation/rotation/scale is retained below.
        plane = Image.new("RGBA", (self.size, self.size))
        fit = min((self.size - 2 * PADDING) / result.width, (self.size - 2 * PADDING) / result.height)
        result = result.resize((max(1, round(result.width * fit)), max(1, round(result.height * fit))), Image.Resampling.NEAREST)
        plane.alpha_composite(result, ((self.size - result.width) // 2,
                                      (self.size - result.height) // 2))
        gui = data.get("display", {}).get("gui", {})
        angles = gui.get("rotation", [0, 0, 0])
        # Flat sprites with a custom 3D GUI rotation need the same projected quad
        # path as element models to avoid guessing an orientation.
        if any(abs(float(angle)) > 1e-6 for angle in angles):
            return self.flat_projected(layers, data, resources)
        scale = gui.get("scale", [1, 1, 1])
        translation = gui.get("translation", [0, 0, 0])
        if scale[0] != 1 or scale[1] != 1 or translation[0] or translation[1]:
            resized = plane.resize((max(1, round(self.size * abs(scale[0]))),
                                    max(1, round(self.size * abs(scale[1])))), Image.Resampling.NEAREST)
            if scale[0] < 0:
                resized = resized.transpose(Image.Transpose.FLIP_LEFT_RIGHT)
            if scale[1] < 0:
                resized = resized.transpose(Image.Transpose.FLIP_TOP_BOTTOM)
            # Fit unusually large held-derived GUI scales into this documentation
            # thumbnail, without cutting off the weapon.
            if resized.width > self.size or resized.height > self.size:
                resized.thumbnail((self.size - 2 * PADDING, self.size - 2 * PADDING), Image.Resampling.NEAREST)
            plane = Image.new("RGBA", (self.size, self.size))
            plane.alpha_composite(resized, ((self.size - resized.width) // 2 + round(translation[0] * self.size / 16),
                                           (self.size - resized.height) // 2 - round(translation[1] * self.size / 16)))
        return plane, resources, "generated_inventory_layers"

    def flat_projected(self, layers: list[Image.Image], data: dict[str, Any],
                       resources: set[str]) -> tuple[Image.Image, set[str], str]:
        image = Image.new("RGBA", layers[0].size)
        for layer in layers:
            image.alpha_composite(layer.resize(image.size, Image.Resampling.NEAREST))
        points = np.array([[0, 16, 8], [16, 16, 8], [16, 0, 8], [0, 0, 8]], dtype=float)
        uv = np.array([[0, 0], [1, 0], [1, 1], [0, 1]], dtype=float)
        return self.rasterize([(points, uv, image, "front")], data), resources, "generated_gui_projection"

    def faces(self, data: dict[str, Any]) -> tuple[list[tuple], set[str]]:
        resources = set(data.get("_resources", ()))
        result = []
        textures = data.get("textures", {})
        for element in data.get("elements", []):
            x, y, z = element["from"]
            X, Y, Z = element["to"]
            corners = {
                "north": [[X, Y, z], [x, Y, z], [x, y, z], [X, y, z]],
                "south": [[x, Y, Z], [X, Y, Z], [X, y, Z], [x, y, Z]],
                "east": [[X, Y, Z], [X, Y, z], [X, y, z], [X, y, Z]],
                "west": [[x, Y, z], [x, Y, Z], [x, y, Z], [x, y, z]],
                "up": [[x, Y, z], [X, Y, z], [X, Y, Z], [x, Y, Z]],
                "down": [[x, y, Z], [X, y, Z], [X, y, z], [x, y, z]],
            }
            default_uv = {
                "north": [16-X, 16-Y, 16-x, 16-y], "south": [x, 16-Y, X, 16-y],
                "east": [16-Z, 16-Y, 16-z, 16-y], "west": [z, 16-Y, Z, 16-y],
                "up": [x, z, X, Z], "down": [x, 16-Z, X, 16-z],
            }
            for side, face in element.get("faces", {}).items():
                name = self.resolve_texture(face["texture"], textures)
                image, paths = self.texture(name)
                resources.update(paths)
                if face.get("tintindex") is not None:
                    raise ValueError("Item requires runtime tint color")
                points = np.array(corners[side], dtype=float)
                rotation = element.get("rotation")
                if rotation:
                    origin = np.array(rotation["origin"])
                    matrix = axis_rotation(rotation["axis"], rotation["angle"])
                    if rotation.get("rescale"):
                        factor = 1 / max(abs(math.cos(math.radians(rotation["angle"]))), 1e-8)
                        resize = np.ones(3) * factor
                        resize["xyz".index(rotation["axis"])] = 1
                        matrix = np.diag(resize) @ matrix
                    points = (points - origin) @ matrix.T + origin
                u, v, U, V = face.get("uv", default_uv[side])
                uv = np.array([[U, v], [u, v], [u, V], [U, V]], dtype=float) / 16
                if side in {"up", "down"}:
                    uv = np.array([[u, v], [U, v], [U, V], [u, V]], dtype=float) / 16
                uv = np.roll(uv, -int(face.get("rotation", 0)) // 90, axis=0)
                result.append((points, uv, image, side))
        return result, resources

    def rasterize(self, faces: list[tuple], data: dict[str, Any]) -> Image.Image:
        gui = data.get("display", {}).get("gui", {})
        angles = gui.get("rotation", [0, 0, 0])
        scale = np.array(gui.get("scale", [1, 1, 1]), dtype=float)
        matrix = axis_rotation("x", angles[0]) @ axis_rotation("y", angles[1]) @ axis_rotation("z", angles[2])
        shift = np.array(gui.get("translation", [0, 0, 0]), dtype=float)
        projected = []
        for points, uv, image, side in faces:
            p = ((points - 8) * scale) @ matrix.T + shift
            p[:, 1] *= -1
            projected.append((p, uv, image, side))
        all_points = np.concatenate([face[0] for face in projected])
        low, high = all_points[:, :2].min(0), all_points[:, :2].max(0)
        span = float(max(high - low))
        if span < 1e-7:
            raise ValueError("Inventory geometry is edge-on")
        fit = (self.size - 2 * PADDING) / span
        # Native GUI transforms set orientation; fit into the thumbnail to retain
        # complete oversized weapons instead of cropping them at the card edge.
        center = (low + high) / 2
        pixels = np.zeros((self.size, self.size, 4), dtype=np.uint8)
        zbuffer = np.full((self.size, self.size), -np.inf)
        lights = {"up": 1.0, "down": .64, "north": .88, "south": .88,
                  "east": .76, "west": .76, "front": 1.0}
        for points, uv, image, side in projected:
            points = points.copy()
            points[:, :2] = (points[:, :2] - center) * fit + self.size / 2
            tex = np.asarray(image)
            height, width = tex.shape[:2]
            for tri in ((0, 1, 2), (0, 2, 3)):
                q, uvs = points[list(tri)], uv[list(tri)]
                a, b, c = q[:, :2]
                denominator = (b[1]-c[1])*(a[0]-c[0]) + (c[0]-b[0])*(a[1]-c[1])
                if abs(denominator) < 1e-9:
                    continue
                x0 = max(0, math.floor(q[:, 0].min()))
                x1 = min(self.size-1, math.ceil(q[:, 0].max()))
                y0 = max(0, math.floor(q[:, 1].min()))
                y1 = min(self.size-1, math.ceil(q[:, 1].max()))
                if x0 > x1 or y0 > y1:
                    continue
                xx, yy = np.meshgrid(np.arange(x0, x1+1)+.5, np.arange(y0, y1+1)+.5)
                wa = ((b[1]-c[1])*(xx-c[0]) + (c[0]-b[0])*(yy-c[1])) / denominator
                wb = ((c[1]-a[1])*(xx-c[0]) + (a[0]-c[0])*(yy-c[1])) / denominator
                wc = 1-wa-wb
                depth = wa*q[0, 2]+wb*q[1, 2]+wc*q[2, 2]
                uu = wa*uvs[0, 0]+wb*uvs[1, 0]+wc*uvs[2, 0]
                vv = wa*uvs[0, 1]+wb*uvs[1, 1]+wc*uvs[2, 1]
                colors = tex[np.clip((vv*height).astype(int), 0, height-1),
                             np.clip((uu*width).astype(int), 0, width-1)].copy()
                if data.get("gui_light") != "front":
                    colors[:, :, :3] = (colors[:, :, :3] * lights[side]).astype(np.uint8)
                mask = ((wa >= -1e-6) & (wb >= -1e-6) & (wc >= -1e-6) &
                        (colors[:, :, 3] > 0) & (depth >= zbuffer[y0:y1+1, x0:x1+1]))
                pixels[y0:y1+1, x0:x1+1][mask] = colors[mask]
                zbuffer[y0:y1+1, x0:x1+1][mask] = depth[mask]
        image = Image.fromarray(pixels)
        if image.getbbox() is None:
            raise ValueError("Inventory model rendered transparent")
        return image

    def export(self, item_id: str) -> tuple[Image.Image, set[str], str]:
        namespace, name = item_id.split(":", 1)
        model_name = NATIVE_GUI_MODELS.get(item_id, namespace + ":item/" + name)
        try:
            data = self.model(model_name)
            if data.get("elements"):
                faces, resources = self.faces(data)
                if not faces:
                    raise ValueError("Inventory model has no textured faces")
                return self.rasterize(faces, data), resources, "minecraft_json_gui_model"
            image, resources, method = self.flat_icon(data)
            if item_id in NATIVE_GUI_MODELS:
                method = "verified_native_inventory_model"
            return image, resources, method
        except ValueError:
            # A small optional adapter handles explicitly verified geo bindings.
            # It must resolve actual geometry; UV atlases are never thumbnails.
            try:
                from weapon_geo_icons import try_geo_icon
            except ImportError:
                try_geo_icon = None
            if try_geo_icon is None:
                raise
            key = location(namespace + ":item/" + name, "models", ".json")
            raw = self.store.raw(key)
            original = read_json(raw) if raw else {}
            geo = try_geo_icon(item_id, original, self.store.raw, size=self.size)
            if geo is None:
                raise
            image, resources = geo[:2]
            method = geo[2] if len(geo) > 2 else "verified_geo_inventory_model"
            return image, set(resources) | {key}, method


def axis_rotation(axis: str, angle: float) -> np.ndarray:
    c, s = math.cos(math.radians(angle)), math.sin(math.radians(angle))
    if axis == "x":
        return np.array([[1, 0, 0], [0, c, -s], [0, s, c]])
    if axis == "y":
        return np.array([[c, 0, s], [0, 1, 0], [-s, 0, c]])
    return np.array([[c, -s, 0], [s, c, 0], [0, 0, 1]])


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--input", action="append", type=Path, default=[], help="JAR or pack ZIP; later input wins")
    parser.add_argument("--input-dir", action="append", type=Path, default=[], help="Read sorted JARs in this directory")
    parser.add_argument("--catalogue", type=Path, default=SOURCE / "data/weapons.json")
    parser.add_argument("--output", type=Path, default=SOURCE / "assets/weapons")
    parser.add_argument("--report", type=Path, help="Provenance report; defaults to OUTPUT/icon-sources.json")
    parser.add_argument("--only", action="append", default=[], help="Optional exact item ID(s) for preview")
    parser.add_argument("--replace-existing", action="store_true", help="Re-export existing icon paths as well")
    parser.add_argument("--apply", action="store_true", help="Set successfully exported catalogue icon fields")
    args = parser.parse_args()
    paths = [p for directory in args.input_dir for p in sorted(directory.glob("*.jar"))] + args.input
    paths = list(dict.fromkeys(path.resolve() for path in paths))
    if not paths:
        parser.error("Supply at least one --input or --input-dir")
    if args.apply and args.output.resolve() != (SOURCE / "assets/weapons").resolve():
        parser.error("--apply requires the standard wiki assets output directory")
    catalogue = json.loads(args.catalogue.read_text())
    report_path = args.report or args.output / "icon-sources.json"
    previous = json.loads(report_path.read_text()) if report_path.exists() else {}
    entries = dict(previous.get("items", {}))
    missing = {}
    store = AssetStore(paths)
    exporter = IconExporter(store)
    exported, preserved = 0, 0
    try:
        for item in catalogue["items"]:
            item_id = item["id"]
            if args.only and item_id not in args.only:
                continue
            current = item.get("icon")
            if current and (args.output / current).is_file() and not args.replace_existing:
                preserved += 1
                entries.setdefault(item_id, {"path": current, "method": "previously_exported_native_sprite"})
                continue
            try:
                image, resources, method = exporter.export(item_id)
                namespace, name = item_id.split(":", 1)
                if not re.fullmatch(r"[a-z0-9_.-]+", namespace) or not re.fullmatch(r"[a-z0-9_./-]+", name) or ".." in name:
                    raise ValueError("Unsafe registry path")
                relative = "icons/" + namespace + "/" + name + ".png"
                target = args.output / relative
                target.parent.mkdir(parents=True, exist_ok=True)
                image.save(target, optimize=True)
                entries[item_id] = {"path": relative, "method": method,
                                    "sha256": digest(target), "resources": store.provenance(resources)}
                if args.apply:
                    item["icon"] = relative
                exported += 1
            except (ValueError, KeyError, TypeError, json.JSONDecodeError) as error:
                missing[item_id] = str(error)
        report = {"format": 1, "size": SIZE, "sources": store.sources,
                  "exported": exported, "preserved": preserved,
                  "items": dict(sorted(entries.items())), "missing": dict(sorted(missing.items()))}
        report_path.parent.mkdir(parents=True, exist_ok=True)
        report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n")
        if args.apply:
            catalogue["meta"]["iconCount"] = sum(bool(item.get("icon")) for item in catalogue["items"])
            args.catalogue.write_text(json.dumps(catalogue, ensure_ascii=False, indent=2) + "\n")
        print(json.dumps({"exported": exported, "preserved": preserved, "missing": len(missing),
                          "missing_by_mod": dict(Counter(item.split(":", 1)[0] for item in missing)),
                          "report": str(report_path)}, indent=2))
    finally:
        store.close()


if __name__ == "__main__":
    main()
