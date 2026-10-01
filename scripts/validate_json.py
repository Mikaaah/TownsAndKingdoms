from pathlib import Path
import json, sys
root=Path(__file__).resolve().parents[1]
bad=False; checked=0
for p in root.rglob("*.json"):
    if ".git" in p.parts: continue
    checked += 1
    try:
        json.loads(p.read_text(encoding="utf-8"))
    except Exception as e:
        bad=True
        print(f"[INVALID JSON] {p.relative_to(root)}: {e}")
print(f"Checked {checked} JSON file(s).")
sys.exit(1 if bad else 0)
