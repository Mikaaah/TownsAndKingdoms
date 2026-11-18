"""Static inventory previews for explicitly verified GeckoLib item resources.

Celestisynth's CSGeoWeaponModel resolves ``geo/item/<identifier>.geo.json`` and
``textures/item/<identifier>.png``; its eight base weapon identifiers match
their registry names. Only this verified mapping is enabled. Other custom
renderers retain the normal catalogue fallback rather than showing a UV atlas.

Geometry coordinate conversion, pivots and face UV order follow GeckoLib's
1.21.1 BakedModelFactory/GeoQuad. Previews use the unmodified resting geometry
and the item's GUI orientation; runtime animation and conditional variants are
not evaluated. No mod code is loaded or executed by this exporter.
"""
from __future__ import annotations

from io import BytesIO
import json
from types import SimpleNamespace
from typing import Callable

import numpy as np
from PIL import Image


CELESTISYNTH_WEAPONS = frozenset({
    "aquaflora", "breezebreaker", "crescentia", "frostbound", "keres",
    "poltergeist", "rainfall_serenity", "solaris",
})


def _rotation(angles: list[float]) -> np.ndarray:
    """GeckoLib applies native geometry rotations in Z, Y, X order."""
    # Import lazily: the primary exporter calls this module after its own load.
    from export_weapon_icons import axis_rotation
    x, y, z = angles
    return axis_rotation("z", z) @ axis_rotation("y", -y) @ axis_rotation("x", -x)


def _matrix(pivot: list[float], angles: list[float]) -> np.ndarray:
    pivot = np.asarray(pivot, dtype=float) * [-1, 1, 1]
    result = np.eye(4)
    result[:3, :3] = _rotation(angles)
    result[:3, 3] = pivot - result[:3, :3] @ pivot
    return result


def _points(values: np.ndarray, matrix: np.ndarray) -> np.ndarray:
    return values @ matrix[:3, :3].T + matrix[:3, 3]


def _cube_faces(cube: dict, bone: dict, transform: np.ndarray,
                width: float, height: float, image: Image.Image) -> list[tuple]:
    ox, oy, oz = cube["origin"]
    sx, sy, sz = cube["size"]
    inflate = float(cube.get("inflate", bone.get("inflate", 0)) or 0)
    x, y, z = -(ox + sx) - inflate, oy - inflate, oz - inflate
    X, Y, Z = -ox + inflate, oy + sy + inflate, oz + sz + inflate
    # Vertex sets are GeckoLib's WEST/EAST/NORTH/SOUTH/UP/DOWN order.
    corners = {
        "west": [[x,Y,Z], [x,Y,z], [x,y,z], [x,y,Z]],
        "east": [[X,Y,z], [X,Y,Z], [X,y,Z], [X,y,z]],
        "north": [[x,Y,z], [X,Y,z], [X,y,z], [x,y,z]],
        "south": [[X,Y,Z], [x,Y,Z], [x,y,Z], [X,y,Z]],
        "up": [[x,Y,Z], [X,Y,Z], [X,Y,z], [x,Y,z]],
        "down": [[x,y,z], [X,y,z], [X,y,Z], [x,y,Z]],
    }
    uv_data = cube.get("uv", [0, 0])
    box_uv = isinstance(uv_data, list)
    if box_uv:
        u, v = uv_data
        # The native factory floors box-UV cube dimensions.
        w, h, d = np.floor([sx, sy, sz])
        uv_data = {
            "west": {"uv":[u+d+w,v+d], "uv_size":[d,h]},
            "east": {"uv":[u,v+d], "uv_size":[d,h]},
            "north": {"uv":[u+d,v+d], "uv_size":[w,h]},
            "south": {"uv":[u+d+w+d,v+d], "uv_size":[w,h]},
            "up": {"uv":[u+d,v], "uv_size":[w,d]},
            "down": {"uv":[u+d+w,v+d], "uv_size":[w,-d]},
        }
    mirror = cube.get("mirror", False) is True
    swap = {"west":"east", "east":"west"}
    if not box_uv:
        swap.update({"up":"down", "down":"up"})
    cube_matrix = transform @ _matrix(cube.get("pivot", [0,0,0]), cube.get("rotation", [0,0,0]))
    result = []
    for side, face in uv_data.items():
        if side not in corners:
            continue
        u, v = face["uv"]
        du, dv = face["uv_size"]
        U, V = u + du, v + dv
        # GeoQuad reverses U when mirror is false.
        uv = np.asarray([[u,v], [U,v], [U,V], [u,V]] if mirror else
                        [[U,v], [u,v], [u,V], [U,V]], dtype=float)
        uv = np.roll(uv, -int(face.get("uv_rotation", 0)) // 90, axis=0)
        uv /= [width, height]
        points = np.asarray(corners[swap.get(side, side) if mirror else side], dtype=float)
        result.append((_points(points, cube_matrix), uv, image, side))
    return result


def _geometry_faces(geometry: dict, image: Image.Image) -> list[tuple]:
    geometries = geometry.get("minecraft:geometry", [])
    if len(geometries) != 1:
        raise ValueError("Geo preview requires one explicit geometry")
    data = geometries[0]
    props = data["description"]
    width, height = props["texture_width"], props["texture_height"]
    bones = {bone["name"]: bone for bone in data["bones"]}
    transforms = {}

    def transform(name: str, stack: tuple = ()) -> np.ndarray:
        if name in transforms:
            return transforms[name]
        if name in stack:
            raise ValueError("Cyclic geo bone hierarchy")
        bone = bones[name]
        parent = transform(bone["parent"], stack + (name,)) if bone.get("parent") else np.eye(4)
        transforms[name] = parent @ _matrix(bone.get("pivot", [0,0,0]), bone.get("rotation", [0,0,0]))
        return transforms[name]

    faces = []
    for name, bone in bones.items():
        if bone.get("neverRender") or bone.get("never_render"):
            continue
        for cube in bone.get("cubes", []):
            faces.extend(_cube_faces(cube, bone, transform(name), width, height, image))
    return faces


def try_geo_icon(item_id: str, model: dict, raw: Callable[[str], bytes | None],
                 size: int = 96) -> tuple[Image.Image, set[str], str] | None:
    """Return a base-item preview only for the verified Celestisynth mapping."""
    namespace, name = item_id.split(":", 1)
    if namespace != "celestisynth" or name not in CELESTISYNTH_WEAPONS:
        return None
    geometry_key = f"assets/{namespace}/geo/item/{name}.geo.json"
    texture_key = f"assets/{namespace}/textures/item/{name}.png"
    model_key = f"assets/{namespace}/models/item/{name}.json"
    geometry_raw, image_raw = raw(geometry_key), raw(texture_key)
    if not geometry_raw or not image_raw:
        return None
    resources = {geometry_key, texture_key, model_key}
    image = Image.open(BytesIO(image_raw)).convert("RGBA")
    geometry = json.loads(geometry_raw)
    properties = geometry["minecraft:geometry"][0]["description"]
    frame_width, frame_height = int(properties["texture_width"]), int(properties["texture_height"])
    metadata_raw = raw(texture_key + ".mcmeta")
    if metadata_raw:
        resources.add(texture_key + ".mcmeta")
        animation = json.loads(metadata_raw).get("animation", {})
        frame_width = int(animation.get("width", frame_width))
        frame_height = int(animation.get("height", frame_height))
        frames = animation.get("frames", [0])
        first = frames[0] if frames else 0
        frame_index = int(first.get("index", 0) if isinstance(first, dict) else first)
    else:
        frame_index = 0
    if image.size != (frame_width, frame_height):
        columns = image.width // frame_width
        if columns < 1 or image.height < frame_height:
            raise ValueError("Geo texture frame dimensions do not fit source")
        x = frame_index % columns * frame_width
        y = frame_index // columns * frame_height
        if y + frame_height > image.height:
            raise ValueError("Geo texture first animation frame is out of bounds")
        image = image.crop((x, y, x + frame_width, y + frame_height))
    faces = _geometry_faces(geometry, image)
    if not faces:
        return None
    # Reuse the standard thumbnail rasterizer so clipping and pixel sampling are
    # identical to ordinary Minecraft JSON model previews.
    from export_weapon_icons import IconExporter
    preview = IconExporter.rasterize(SimpleNamespace(size=size), faces, model)
    return preview, resources, "geckolib_base_gui_model"
