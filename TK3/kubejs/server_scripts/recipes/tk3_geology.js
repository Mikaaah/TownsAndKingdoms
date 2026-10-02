// priority: 0
// T&K3 1.21.1 · assembly revision
ServerEvents.recipes(event => {

    //->------------------------]  Required Items [------------------------<-//

    [
        "create:asurine",
        "create:copper_nugget",
        "create:crimsite",
        "create:crushed_raw_copper",
        "create:crushed_raw_gold",
        "create:crushed_raw_iron",
        "create:crushed_raw_zinc",
        "create:limestone",
        "create:ochrum",
        "create:scorchia",
        "create:scoria",
        "create:veridium",
        "create:zinc_nugget",
        "minecraft:andesite",
        "minecraft:bone_meal",
        "minecraft:clay_ball",
        "minecraft:coal",
        "minecraft:diorite",
        "minecraft:gold_nugget",
        "minecraft:granite",
        "minecraft:iron_nugget",
        "minecraft:lapis_lazuli",
        "minecraft:quartz",
        "minecraft:redstone"
    ].forEach(id => {
            if (Item.of(id)
                    .isEmpty()) throw new Error('[TK3] Missing required item: ' + id);
        });

    //->------------------------]  Tier 1 / Resource processing / Crushing [------------------------<-//

    // Clay Ball / Crushing
    event.recipes.create.crushing(
        [
            "2x minecraft:clay_ball"
        ],
        [
            "minecraft:andesite"
        ])
        .id("kubejs:tk3/geology/crushing_andesite");

    // Quartz / Crushing
    event.recipes.create.crushing(
        [
            "2x minecraft:quartz"
        ],
        [
            "minecraft:diorite"
        ])
        .id("kubejs:tk3/geology/crushing_diorite");

    // Lapis Lazuli / Crushing
    event.recipes.create.crushing(
        [
            "2x minecraft:lapis_lazuli"
        ],
        [
            "minecraft:granite"
        ])
        .id("kubejs:tk3/geology/crushing_granite");

    // Bone Meal / Crushing
    event.recipes.create.crushing(
        [
            "2x minecraft:bone_meal"
        ],
        [
            "create:limestone"
        ])
        .id("kubejs:tk3/geology/crushing_limestone");

    //->------------------------]  Tier 1 / Resource processing / Milling [------------------------<-//

    // Clay Ball / Milling
    event.recipes.create.milling(
        [
            "minecraft:clay_ball"
        ],
        [
            "minecraft:andesite"
        ])
        .id("kubejs:tk3/geology/milling_andesite");

    // Quartz / Milling
    event.recipes.create.milling(
        [
            "minecraft:quartz"
        ],
        [
            "minecraft:diorite"
        ])
        .id("kubejs:tk3/geology/milling_diorite");

    // Lapis Lazuli / Milling
    event.recipes.create.milling(
        [
            "minecraft:lapis_lazuli"
        ],
        [
            "minecraft:granite"
        ])
        .id("kubejs:tk3/geology/milling_granite");

    // Bone Meal / Milling
    event.recipes.create.milling(
        [
            "minecraft:bone_meal"
        ],
        [
            "create:limestone"
        ])
        .id("kubejs:tk3/geology/milling_limestone");

    //->------------------------]  Tier 2 / Resource processing / Crushing [------------------------<-//

    // Redstone / Crushing
    event.recipes.create.crushing(
        [
            "2x minecraft:redstone"
        ],
        [
            "create:scoria"
        ])
        .id("kubejs:tk3/geology/crushing_scoria");

    // Coal / Crushing
    event.recipes.create.crushing(
        [
            "2x minecraft:coal"
        ],
        [
            "create:scorchia"
        ])
        .id("kubejs:tk3/geology/crushing_scorchia");

    // Crushed Raw Copper / Crushing
    event.recipes.create.crushing(
        [
            "create:crushed_raw_copper"
        ],
        [
            "create:veridium"
        ])
        .id("kubejs:tk3/geology/crushing_veridium");

    // Crushed Raw Iron / Crushing
    event.recipes.create.crushing(
        [
            "create:crushed_raw_iron"
        ],
        [
            "create:crimsite"
        ])
        .id("kubejs:tk3/geology/crushing_crimsite");

    //->------------------------]  Tier 2 / Resource processing / Milling [------------------------<-//

    // Redstone / Milling
    event.recipes.create.milling(
        [
            "minecraft:redstone"
        ],
        [
            "create:scoria"
        ])
        .id("kubejs:tk3/geology/milling_scoria");

    // Coal / Milling
    event.recipes.create.milling(
        [
            "minecraft:coal"
        ],
        [
            "create:scorchia"
        ])
        .id("kubejs:tk3/geology/milling_scorchia");

    // Copper Nugget / Milling
    event.recipes.create.milling(
        [
            "3x create:copper_nugget"
        ],
        [
            "create:veridium"
        ])
        .id("kubejs:tk3/geology/milling_veridium");

    // Iron Nugget / Milling
    event.recipes.create.milling(
        [
            "3x minecraft:iron_nugget"
        ],
        [
            "create:crimsite"
        ])
        .id("kubejs:tk3/geology/milling_crimsite");

    //->------------------------]  Tier 3 / Resource processing / Crushing [------------------------<-//

    // Crushed Raw Zinc / Crushing
    event.recipes.create.crushing(
        [
            "create:crushed_raw_zinc"
        ],
        [
            "create:asurine"
        ])
        .id("kubejs:tk3/geology/crushing_asurine");

    // Crushed Raw Gold / Crushing
    event.recipes.create.crushing(
        [
            "create:crushed_raw_gold"
        ],
        [
            "create:ochrum"
        ])
        .id("kubejs:tk3/geology/crushing_ochrum");

    //->------------------------]  Tier 3 / Resource processing / Milling [------------------------<-//

    // Zinc Nugget / Milling
    event.recipes.create.milling(
        [
            "3x create:zinc_nugget"
        ],
        [
            "create:asurine"
        ])
        .id("kubejs:tk3/geology/milling_asurine");

    // Gold Nugget / Milling
    event.recipes.create.milling(
        [
            "3x minecraft:gold_nugget"
        ],
        [
            "create:ochrum"
        ])
        .id("kubejs:tk3/geology/milling_ochrum");

    //->------------------------]  Tier 3 / Resource processing / Splashing [------------------------<-//

    // Copper Nugget / Splashing
    event.recipes.create.splashing(
        [
            "9x create:copper_nugget"
        ],
        [
            "create:crushed_raw_copper"
        ])
        .id("kubejs:tk3/geology/wash_copper");

    // Iron Nugget / Splashing
    event.recipes.create.splashing(
        [
            "9x minecraft:iron_nugget"
        ],
        [
            "create:crushed_raw_iron"
        ])
        .id("kubejs:tk3/geology/wash_iron");

    // Zinc Nugget / Splashing
    event.recipes.create.splashing(
        [
            "9x create:zinc_nugget"
        ],
        [
            "create:crushed_raw_zinc"
        ])
        .id("kubejs:tk3/geology/wash_zinc");

    // Gold Nugget / Splashing
    event.recipes.create.splashing(
        [
            "9x minecraft:gold_nugget"
        ],
        [
            "create:crushed_raw_gold"
        ])
        .id("kubejs:tk3/geology/wash_gold");

});
