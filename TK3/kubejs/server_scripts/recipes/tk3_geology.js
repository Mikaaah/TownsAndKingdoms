// priority: 0
// T&K3 1.21.1 · assembly revision
ServerEvents.recipes(event => {
  ["create:asurine", "create:copper_nugget", "create:crimsite", "create:crushed_raw_copper", "create:crushed_raw_gold", "create:crushed_raw_iron", "create:crushed_raw_zinc", "create:limestone", "create:ochrum", "create:scorchia", "create:scoria", "create:veridium", "create:zinc_nugget", "minecraft:andesite", "minecraft:bone_meal", "minecraft:clay_ball", "minecraft:coal", "minecraft:diorite", "minecraft:gold_nugget", "minecraft:granite", "minecraft:iron_nugget", "minecraft:lapis_lazuli", "minecraft:quartz", "minecraft:redstone"].forEach(id => { if (Item.of(id).isEmpty()) throw new Error('[TK3] Missing required item: ' + id); });

  // tier 1 | kubejs:tk3/geology/milling_andesite
  event.recipes.create.milling(["minecraft:clay_ball"], ["minecraft:andesite"]).id("kubejs:tk3/geology/milling_andesite");

  // tier 1 | kubejs:tk3/geology/crushing_andesite
  event.recipes.create.crushing(["2x minecraft:clay_ball"], ["minecraft:andesite"]).id("kubejs:tk3/geology/crushing_andesite");

  // tier 1 | kubejs:tk3/geology/milling_diorite
  event.recipes.create.milling(["minecraft:quartz"], ["minecraft:diorite"]).id("kubejs:tk3/geology/milling_diorite");

  // tier 1 | kubejs:tk3/geology/crushing_diorite
  event.recipes.create.crushing(["2x minecraft:quartz"], ["minecraft:diorite"]).id("kubejs:tk3/geology/crushing_diorite");

  // tier 1 | kubejs:tk3/geology/milling_granite
  event.recipes.create.milling(["minecraft:lapis_lazuli"], ["minecraft:granite"]).id("kubejs:tk3/geology/milling_granite");

  // tier 1 | kubejs:tk3/geology/crushing_granite
  event.recipes.create.crushing(["2x minecraft:lapis_lazuli"], ["minecraft:granite"]).id("kubejs:tk3/geology/crushing_granite");

  // tier 1 | kubejs:tk3/geology/milling_limestone
  event.recipes.create.milling(["minecraft:bone_meal"], ["create:limestone"]).id("kubejs:tk3/geology/milling_limestone");

  // tier 1 | kubejs:tk3/geology/crushing_limestone
  event.recipes.create.crushing(["2x minecraft:bone_meal"], ["create:limestone"]).id("kubejs:tk3/geology/crushing_limestone");

  // tier 2 | kubejs:tk3/geology/milling_scoria
  event.recipes.create.milling(["minecraft:redstone"], ["create:scoria"]).id("kubejs:tk3/geology/milling_scoria");

  // tier 2 | kubejs:tk3/geology/crushing_scoria
  event.recipes.create.crushing(["2x minecraft:redstone"], ["create:scoria"]).id("kubejs:tk3/geology/crushing_scoria");

  // tier 2 | kubejs:tk3/geology/milling_scorchia
  event.recipes.create.milling(["minecraft:coal"], ["create:scorchia"]).id("kubejs:tk3/geology/milling_scorchia");

  // tier 2 | kubejs:tk3/geology/crushing_scorchia
  event.recipes.create.crushing(["2x minecraft:coal"], ["create:scorchia"]).id("kubejs:tk3/geology/crushing_scorchia");

  // tier 2 | kubejs:tk3/geology/milling_veridium
  event.recipes.create.milling(["3x create:copper_nugget"], ["create:veridium"]).id("kubejs:tk3/geology/milling_veridium");

  // tier 2 | kubejs:tk3/geology/crushing_veridium
  event.recipes.create.crushing(["create:crushed_raw_copper"], ["create:veridium"]).id("kubejs:tk3/geology/crushing_veridium");

  // tier 3 | kubejs:tk3/geology/wash_copper
  event.recipes.create.splashing(["9x create:copper_nugget"], ["create:crushed_raw_copper"]).id("kubejs:tk3/geology/wash_copper");

  // tier 2 | kubejs:tk3/geology/milling_crimsite
  event.recipes.create.milling(["3x minecraft:iron_nugget"], ["create:crimsite"]).id("kubejs:tk3/geology/milling_crimsite");

  // tier 2 | kubejs:tk3/geology/crushing_crimsite
  event.recipes.create.crushing(["create:crushed_raw_iron"], ["create:crimsite"]).id("kubejs:tk3/geology/crushing_crimsite");

  // tier 3 | kubejs:tk3/geology/wash_iron
  event.recipes.create.splashing(["9x minecraft:iron_nugget"], ["create:crushed_raw_iron"]).id("kubejs:tk3/geology/wash_iron");

  // tier 3 | kubejs:tk3/geology/milling_asurine
  event.recipes.create.milling(["3x create:zinc_nugget"], ["create:asurine"]).id("kubejs:tk3/geology/milling_asurine");

  // tier 3 | kubejs:tk3/geology/crushing_asurine
  event.recipes.create.crushing(["create:crushed_raw_zinc"], ["create:asurine"]).id("kubejs:tk3/geology/crushing_asurine");

  // tier 3 | kubejs:tk3/geology/wash_zinc
  event.recipes.create.splashing(["9x create:zinc_nugget"], ["create:crushed_raw_zinc"]).id("kubejs:tk3/geology/wash_zinc");

  // tier 3 | kubejs:tk3/geology/milling_ochrum
  event.recipes.create.milling(["3x minecraft:gold_nugget"], ["create:ochrum"]).id("kubejs:tk3/geology/milling_ochrum");

  // tier 3 | kubejs:tk3/geology/crushing_ochrum
  event.recipes.create.crushing(["create:crushed_raw_gold"], ["create:ochrum"]).id("kubejs:tk3/geology/crushing_ochrum");

  // tier 3 | kubejs:tk3/geology/wash_gold
  event.recipes.create.splashing(["9x minecraft:gold_nugget"], ["create:crushed_raw_gold"]).id("kubejs:tk3/geology/wash_gold");
});
