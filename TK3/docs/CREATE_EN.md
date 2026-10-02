# Create support layer

**114 ADDED RECIPES · 91 OUTPUT ITEMS · 776 TOTAL CHAPTER 1–5 RECIPES**

Casings, sheets, tools, windmill parts, filters, Item Vaults, railways and factory logistics are part of the authored route. The player guide groups the exact recipes by tier and links each one to the workshop.

## Approved routes

Controlled outputs have an explicit recipe whitelist. Handcrafted and automatic casing recipes are both approved. Packing and unpacking use 9:1 metal ratios. Filter, clipboard, stock-link, stock-ticker, schedule and factory-gauge reset recipes are explicitly retained.

The native mining/worldgen sources of Create stones, zinc ores, filled-burner capture and purely decorative recipes remain intentional acquisition routes. This update does not replace all 1,884 native Create recipe JSON files indiscriminately.

## Script order

`tk3_recipe_cleanup.js` removes controlled native outputs at priority 10000, before registration. Recipe scripts register at priority 0. `tk3_whitelist.js` runs last at priority -10000 and rejects unapproved native or injected alternatives.

The cleanup pass is centralised so one subsystem cannot remove approved recipes already registered by another.

## Rebuild & checks

Install the developer formatter dependency with `python3 -m pip install jsbeautifier==2.0.3`; the builder applies the shared section style after generation. See [Editing recipe scripts](RECIPE_SCRIPT_STYLE.md).

`python TK3/tools/extend_create.py --pack TK3 --create-jar /path/to/create-6.0.10.jar`

`node TK3/tools/verify_create.cjs`

`node TK3/tools/verify_expansion.cjs`

Create 6.0.10 native JSON supplies the verified smelting, blasting and sandpaper-polishing schemas. Static checks cover registration order, tiers, material ratios, reset routes and direct Create ingredient coverage. Minecraft integration remains to be tested in the assembled pack.
