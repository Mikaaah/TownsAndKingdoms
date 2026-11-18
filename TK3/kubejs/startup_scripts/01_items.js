// priority: 1000
// TNK3 | Item registrations and shared content catalogs
// Minecraft 1.21.1 / NeoForge / KubeJS 2101. Full restart required.

// Initialize data and register prepared batches before the ordinary items.
StartupEvents.registry('item', event => {
    global.TNK_CONTENT = JSON.parse(String(JsonIO.readString('kubejs/pack_data/pack_catalog.json')));
    if (!global.TNK_CONTENT || global.TNK_CONTENT.format !== 1) {
        throw new Error('[TNK Content] Missing or unsupported kubejs/pack_data/pack_catalog.json');
    }

    let catalog = JSON.parse(String(JsonIO.readString('kubejs/pack_data/prepared_batch_items.json')));
    if (!catalog || catalog.format !== 1 || !Array.isArray(catalog.items) || !catalog.model) {
        throw new Error('[TNK Batches] Missing or invalid prepared_batch_items.json');
    }
    let byKey = {};
    let seenIds = {};
    catalog.items.forEach(entry => {
        let key = entry.group + '\n' + entry.marker;
        if (!/^(ie|qol)$/.test(entry.group) || typeof entry.marker !== 'string' ||
            typeof entry.id !== 'string' || !/^kubejs:prepared_(ie|qol)\/[a-z0-9_./-]+$/.test(entry.id) ||
            !entry.id.startsWith('kubejs:prepared_' + entry.group + '/') ||
            !entry.name || !entry.texture || byKey[key] || seenIds[entry.id]) {
            throw new Error('[TNK Batches] Invalid or duplicate batch: ' + String(entry.id));
        }
        byKey[key] = entry.id;
        seenIds[entry.id] = true;
    });
    global.TNK_BATCH_ITEMS = {
        format: 1,
        entries: catalog.items,
        id: (group, marker) => byKey[group + '\n' + marker] || null,
        legacyRecipeId: entry => 'tnk:prepared_batches/legacy/' + entry.id.substring('kubejs:'.length)
    };

    catalog.items.forEach(entry => {
        let itemModel = JSON.parse(JSON.stringify(catalog.model));
        let namespace = entry.texture.split(':')[0];
        itemModel.textures.label = namespace === 'minecraft' || Platform.isLoaded(namespace)
            ? entry.texture : 'minecraft:item/iron_ingot';
        event.create(entry.id).displayName(entry.name).maxStackSize(entry.max_stack_size || 64).modelGenerator(model => {
            model.parent(null);
            model.custom(json => {
                ['gui_light', 'ambientocclusion', 'textures', 'elements', 'display'].forEach(key => {
                    json.add(key, JsonIO.parseRaw(JSON.stringify(itemModel[key])));
                });
            });
        });
    });
    console.info('[TNK Batches] Registered ' + catalog.items.length + ' named batch items.');
});

// Creation intermediates
StartupEvents.registry('item', event => {
    let items = [
        [
            'incomplete_graphite_electrode',
            'immersiveengineering:item/graphite_electrode',
            'Incomplete Graphite Electrode'
        ],
        [
            'incomplete_overcharge_alloy_sheet',
            'kubejs:item/resources/overcharge_alloy',
            'Incomplete Overcharge Alloy Sheet'
        ],
        [
            'incomplete_unstable_creation_core',
            'kubejs:item/crafting_items/unstable_creative_core',
            'Incomplete Unstable Creation Core'
        ],
        [
            'incomplete_amethyst_circuit_gate',
            'kubejs:item/crafting_items/part_electronic_amethyst_gate',
            'Incomplete Amethyst Circuit Gate'
        ],
        ['incomplete_creation_core', 'kubejs:item/crafting_items/creative_core', 'Incomplete Creation Core'],
        ['compressed_matter_batch', 'kubejs:item/crafting_items/matter_construct', 'Compressed Matter Batch'],
        [
            'incomplete_compressed_matter_batch',
            'kubejs:item/crafting_items/incomplete_matter_construct',
            'Incomplete Compressed Matter Batch'
        ]
    ];
    items.forEach(entry => event.create(entry[0]).texture(entry[1]).displayName(entry[2]));
});

// Pack materials and mechanisms
StartupEvents.registry('item', event => {
    // [item ID, texture resource, display name]
    const items = [
        // Compat
        ['unfinished_blood_scroll', 'kubejs:item/compat/unfinished_blood_scroll', 'Unfinished Blood Scroll'],
        ['unfinished_eldritch_scroll', 'kubejs:item/compat/unfinished_eldritch_scroll', 'Unfinished Eldritch Scroll'],
        ['unfinished_ender_scroll', 'kubejs:item/compat/unfinished_ender_scroll', 'Unfinished Ender Scroll'],
        [
            'unfinished_evocation_scroll',
            'kubejs:item/compat/unfinished_evocation_scroll',
            'Unfinished Evocation Scroll'
        ],
        ['unfinished_fire_scroll', 'kubejs:item/compat/unfinished_fire_scroll', 'Unfinished Fire Scroll'],
        ['unfinished_holy_scroll', 'kubejs:item/compat/unfinished_holy_scroll', 'Unfinished Holy Scroll'],
        ['unfinished_ice_scroll', 'kubejs:item/compat/unfinished_ice_scroll', 'Unfinished Ice Scroll'],
        [
            'unfinished_lightning_scroll',
            'kubejs:item/compat/unfinished_lightning_scroll',
            'Unfinished Lightning Scroll'
        ],
        ['unfinished_nature_scroll', 'kubejs:item/compat/unfinished_nature_scroll', 'Unfinished Nature Scroll'],
        // Crafting Items
        ['amethyst_tube', 'kubejs:item/crafting_items/amethyst_bulb', 'Amethyst Tube'],
        ['andesite_template', 'kubejs:item/crafting_items/andesite_template', 'Andesite Template'],
        ['blue_tube', 'kubejs:item/crafting_items/blue_tube', 'Blue Tube'],
        ['boot_drive', 'kubejs:item/crafting_items/boot_medium', 'Boot Drive'],
        ['brass_template', 'kubejs:item/crafting_items/brass_template', 'Brass Template'],
        ['capacitor_ceramic', 'kubejs:item/crafting_items/capacitor_ceramic', 'Capacitor Ceramic'],
        ['capacitor_ceramic_dirt', 'kubejs:item/crafting_items/capacitor_ceramic_dirt', 'Capacitor Ceramic Dirt'],
        [
            'capacitor_ceramic_incomplete',
            'kubejs:item/crafting_items/capacitor_ceramic_incomplete',
            'Capacitor Ceramic Incomplete'
        ],
        ['capacitor_electrolytic', 'kubejs:item/crafting_items/capacitor_electrolytic', 'Capacitor Electrolytic'],
        [
            'capacitor_electrolytic_dirt',
            'kubejs:item/crafting_items/capacitor_electrolytic_dirt',
            'Capacitor Electrolytic Dirt'
        ],
        [
            'capacitor_electrolytic_incomplete',
            'kubejs:item/crafting_items/capacitor_electrolytic_incomplete',
            'Capacitor Electrolytic Incomplete'
        ],
        ['creation_core', 'kubejs:item/crafting_items/creative_core', 'Creation Core'],
        [
            'dye_entangled_singularity',
            'kubejs:item/crafting_items/dye_entangled_singularity',
            'Dye Entangled Singularity'
        ],
        ['empty_tube', 'kubejs:item/crafting_items/empty_tube', 'Empty Tube'],
        ['fan_component', 'kubejs:item/crafting_items/fan_component', 'Fan Component'],
        [
            'incomplete_calculation_processor',
            'kubejs:item/crafting_items/incomplete_calculation_processor',
            'Incomplete Calculation Processor'
        ],
        [
            'incomplete_engineering_processor',
            'kubejs:item/crafting_items/incomplete_engineering_processor',
            'Incomplete Engineering Processor'
        ],
        [
            'incomplete_integrated_circuit',
            'kubejs:item/crafting_items/incomplete_integrated_circuit',
            'Incomplete Integrated Circuit'
        ],
        [
            'incomplete_logic_processor',
            'kubejs:item/crafting_items/incomplete_logic_processor',
            'Incomplete Logic Processor'
        ],
        [
            'incomplete_matter_construct',
            'kubejs:item/crafting_items/incomplete_matter_construct',
            'Incomplete Matter Construct'
        ],
        ['incomplete_tech_tube', 'kubejs:item/crafting_items/incomplete_tech_tube', 'Incomplete Tech Tube'],
        ['integrated_circuit', 'kubejs:item/crafting_items/integrated_circuit', 'Integrated Circuit'],
        ['matter_construct', 'kubejs:item/crafting_items/matter_construct', 'Matter Construct'],
        ['matter_plastics', 'kubejs:item/crafting_items/matter_plastics', 'Matter Plastics'],
        ['part_blaze_core', 'kubejs:item/crafting_items/part_blaze_core', 'Part Blaze Core'],
        [
            'part_electronic_amethyst_coil',
            'kubejs:item/crafting_items/part_electronic_amethyst_coil',
            'Part Electronic Amethyst Coil'
        ],
        ['amethyst_circuit_gate', 'kubejs:item/crafting_items/part_electronic_amethyst_gate', 'Amethyst Circuit Gate'],
        [
            'part_electronic_amethyst_gate_2',
            'kubejs:item/crafting_items/part_electronic_amethyst_gate_2',
            'Part Electronic Amethyst Gate 2'
        ],
        [
            'polished_spectral_ruby_electron_tube',
            'kubejs:item/crafting_items/polished_spectral_ruby_electron_tube',
            'Polished Spectral Ruby Electron Tube'
        ],
        ['radiant_coil', 'kubejs:item/crafting_items/radiant_coil', 'Radiant Coil'],
        ['resistor', 'kubejs:item/crafting_items/resistor', 'Resistor'],
        ['resistor_dirt', 'kubejs:item/crafting_items/resistor_dirt', 'Resistor Dirt'],
        ['resistor_incomplete', 'kubejs:item/crafting_items/resistor_incomplete', 'Resistor Incomplete'],
        ['rough_sand', 'kubejs:item/crafting_items/rough_sand', 'Rough Sand'],
        ['siliceous_compound', 'kubejs:item/crafting_items/siliceous_compound', 'Siliceous Compound'],
        ['unstable_creation_gem', 'kubejs:item/crafting_items/singularity_gem', 'Unstable Creation Gem'],
        ['tech_tube', 'kubejs:item/crafting_items/tech_tube', 'Tech Tube'],
        ['unstable_creation_core', 'kubejs:item/crafting_items/unstable_creative_core', 'Unstable Creation Core'],
        // Zinc has no native dust in the installed metal set; use existing IE grey dust art.
        ['zinc_dust', 'immersiveengineering:item/metal_dust_silver', 'Zinc Dust'],
        // Mechanisms: active progression plus Ender, Infernal and Inductive reserves.
        // Current progression mechanisms missing from the older artwork registry.
        ['industrial_mechanism', 'kubejs:item/mechanisms/industrial_mechanism', 'Industrial Mechanism'],
        ['arcane_mechanism', 'kubejs:item/mechanisms/arcane_mechanism', 'Arcane Mechanism'],
        ['eclipse_mechanism', 'kubejs:item/mechanisms/eclipse_mechanism', 'Eclipse Mechanism'],
        ['calculation_mechanism', 'kubejs:item/mechanisms/calculation_mechanism', 'Calculation Mechanism'],
        ['ender_mechanism', 'kubejs:item/mechanisms/ender_mechanism', 'Ender Mechanism'],
        [
            'incomplete_calculation_mechanism',
            'kubejs:item/mechanisms/incomplete_calculation_mechanism',
            'Incomplete Calculation Mechanism'
        ],
        [
            'incomplete_ender_mechanism',
            'kubejs:item/mechanisms/incomplete_ender_mechanism',
            'Incomplete Ender Mechanism'
        ],
        [
            'incomplete_inductive_mechanism',
            'kubejs:item/mechanisms/incomplete_inductive_mechanism',
            'Incomplete Inductive Mechanism'
        ],
        [
            'incomplete_infernal_mechanism',
            'kubejs:item/mechanisms/incomplete_infernal_mechanism',
            'Incomplete Infernal Mechanism'
        ],
        [
            'incomplete_reinforced_mechanism',
            'kubejs:item/mechanisms/incomplete_reinforced_mechanism',
            'Incomplete Reinforced Mechanism'
        ],
        [
            'incomplete_rotation_mechanism',
            'kubejs:item/mechanisms/incomplete_rotation_mechanism',
            'Incomplete Rotation Mechanism'
        ],
        [
            'incomplete_sealed_mechanism',
            'kubejs:item/mechanisms/incomplete_sealed_mechanism',
            'Incomplete Sealed Mechanism'
        ],
        ['inductive_mechanism', 'kubejs:item/mechanisms/inductive_mechanism', 'Inductive Mechanism'],
        ['infernal_mechanism', 'kubejs:item/mechanisms/infernal_mechanism', 'Infernal Mechanism'],
        ['reinforced_mechanism', 'kubejs:item/mechanisms/reinforced_mechanism', 'Reinforced Mechanism'],
        ['makeshift_kinetic_mechanism', 'kubejs:item/mechanisms/makeshift_kinetic_mechanism', 'Makeshift Mechanism'],
        ['rotation_mechanism', 'kubejs:item/mechanisms/rotation_mechanism', 'Rotation Mechanism'],
        ['sealed_mechanism', 'kubejs:item/mechanisms/sealed_mechanism', 'Sealed Mechanism'],
        // Quest Icons
        ['quest_icon_bell', 'kubejs:item/quest_icons/bell', 'Bell (Quest Icon)'],
        ['quest_icon_book', 'kubejs:item/quest_icons/book', 'Book (Quest Icon)'],
        ['quest_icon_bookopen', 'kubejs:item/quest_icons/bookopen', 'Bookopen (Quest Icon)'],
        ['quest_icon_bookred', 'kubejs:item/quest_icons/bookred', 'Bookred (Quest Icon)'],
        ['quest_icon_buyorderblue', 'kubejs:item/quest_icons/buyorderblue', 'Buy Order: Blue (Quest Icon)'],
        [
            'quest_icon_buyorderdarkblue',
            'kubejs:item/quest_icons/buyorderdarkblue',
            'Buy Order: Dark Blue (Quest Icon)'
        ],
        ['quest_icon_buyordergreen', 'kubejs:item/quest_icons/buyordergreen', 'Buy Order: Green (Quest Icon)'],
        ['quest_icon_buyordergrey', 'kubejs:item/quest_icons/buyordergrey', 'Buy Order: Gray (Quest Icon)'],
        ['quest_icon_buyorderred', 'kubejs:item/quest_icons/buyorderred', 'Buy Order: Red (Quest Icon)'],
        ['quest_icon_buyorderwhite', 'kubejs:item/quest_icons/buyorderwhite', 'Buy Order: White (Quest Icon)'],
        ['quest_icon_buyorderyellow', 'kubejs:item/quest_icons/buyorderyellow', 'Buy Order: Yellow (Quest Icon)'],
        ['quest_icon_candle', 'kubejs:item/quest_icons/candle', 'Candle (Quest Icon)'],
        ['quest_icon_coffee', 'kubejs:item/quest_icons/coffee', 'Coffee (Quest Icon)'],
        ['quest_icon_cup', 'kubejs:item/quest_icons/cup', 'Cup (Quest Icon)'],
        ['quest_icon_drum', 'kubejs:item/quest_icons/drum', 'Drum (Quest Icon)'],
        ['quest_icon_envelope', 'kubejs:item/quest_icons/envelope', 'Envelope (Quest Icon)'],
        ['quest_icon_feather', 'kubejs:item/quest_icons/feather', 'Feather (Quest Icon)'],
        ['quest_icon_flute', 'kubejs:item/quest_icons/flute', 'Flute (Quest Icon)'],
        ['quest_icon_hammer', 'kubejs:item/quest_icons/hammer', 'Hammer (Quest Icon)'],
        ['quest_icon_harp', 'kubejs:item/quest_icons/harp', 'Harp (Quest Icon)'],
        ['quest_icon_herb', 'kubejs:item/quest_icons/herb', 'Herb (Quest Icon)'],
        ['quest_icon_herbtwo', 'kubejs:item/quest_icons/herbtwo', 'Herb 2 (Quest Icon)'],
        ['quest_icon_horn', 'kubejs:item/quest_icons/horn', 'Horn (Quest Icon)'],
        ['quest_icon_hourglass', 'kubejs:item/quest_icons/hourglass', 'Hourglass (Quest Icon)'],
        ['quest_icon_job_bard', 'kubejs:item/quest_icons/job_bard', 'Job Bard (Quest Icon)'],
        ['quest_icon_job_brewing', 'kubejs:item/quest_icons/job_brewing', 'Job Brewing (Quest Icon)'],
        ['quest_icon_job_coffee', 'kubejs:item/quest_icons/job_coffee', 'Job Coffee (Quest Icon)'],
        ['quest_icon_job_cook', 'kubejs:item/quest_icons/job_cook', 'Job Cook (Quest Icon)'],
        ['quest_icon_job_explorer', 'kubejs:item/quest_icons/job_explorer', 'Job Explorer (Quest Icon)'],
        ['quest_icon_job_farmer', 'kubejs:item/quest_icons/job_farmer', 'Job Farmer (Quest Icon)'],
        ['quest_icon_job_fisherman', 'kubejs:item/quest_icons/job_fisherman', 'Job Fisherman (Quest Icon)'],
        ['quest_icon_job_hunter', 'kubejs:item/quest_icons/job_hunter', 'Job Hunter (Quest Icon)'],
        ['quest_icon_job_lumberjack', 'kubejs:item/quest_icons/job_lumberjack', 'Job Lumberjack (Quest Icon)'],
        ['quest_icon_job_miner', 'kubejs:item/quest_icons/job_miner', 'Job Miner (Quest Icon)'],
        ['quest_icon_journal', 'kubejs:item/quest_icons/journal', 'Journal (Quest Icon)'],
        ['quest_icon_key', 'kubejs:item/quest_icons/key', 'Key (Quest Icon)'],
        ['quest_icon_lantern', 'kubejs:item/quest_icons/lantern', 'Lantern (Quest Icon)'],
        ['quest_icon_lute', 'kubejs:item/quest_icons/lute', 'Lute (Quest Icon)'],
        ['quest_icon_map', 'kubejs:item/quest_icons/map', 'Map (Quest Icon)'],
        ['quest_icon_mirror', 'kubejs:item/quest_icons/mirror', 'Mirror (Quest Icon)'],
        ['quest_icon_mortar', 'kubejs:item/quest_icons/mortar', 'Mortar (Quest Icon)'],
        ['quest_icon_musicbox', 'kubejs:item/quest_icons/musicbox', 'Music Box (Quest Icon)'],
        ['quest_icon_ocerina', 'kubejs:item/quest_icons/ocerina', 'Ocarina (Quest Icon)'],
        ['quest_icon_paper', 'kubejs:item/quest_icons/paper', 'Paper (Quest Icon)'],
        ['quest_icon_pickaxe', 'kubejs:item/quest_icons/pickaxe', 'Pickaxe (Quest Icon)'],
        ['quest_icon_plantfour', 'kubejs:item/quest_icons/plantfour', 'Plant 4 (Quest Icon)'],
        ['quest_icon_plantone', 'kubejs:item/quest_icons/plantone', 'Plant 1 (Quest Icon)'],
        ['quest_icon_plantthree', 'kubejs:item/quest_icons/plantthree', 'Plant 3 (Quest Icon)'],
        ['quest_icon_planttwo', 'kubejs:item/quest_icons/planttwo', 'Plant 2 (Quest Icon)'],
        ['quest_icon_poison', 'kubejs:item/quest_icons/poison', 'Poison (Quest Icon)'],
        ['quest_icon_pot', 'kubejs:item/quest_icons/pot', 'Pot (Quest Icon)'],
        ['quest_icon_potionblue', 'kubejs:item/quest_icons/potionblue', 'Potionblue (Quest Icon)'],
        ['quest_icon_potionbluethree', 'kubejs:item/quest_icons/potionbluethree', 'Potionbluethree (Quest Icon)'],
        ['quest_icon_potionbluetwo', 'kubejs:item/quest_icons/potionbluetwo', 'Potionbluetwo (Quest Icon)'],
        ['quest_icon_potionred', 'kubejs:item/quest_icons/potionred', 'Potionred (Quest Icon)'],
        ['quest_icon_potionredthree', 'kubejs:item/quest_icons/potionredthree', 'Potionredthree (Quest Icon)'],
        ['quest_icon_potionredtwo', 'kubejs:item/quest_icons/potionredtwo', 'Potionredtwo (Quest Icon)'],
        ['quest_icon_quest_board', 'kubejs:item/quest_icons/quest_board', 'Quest Board (Quest Icon)'],
        ['quest_icon_quest_complete', 'kubejs:item/quest_icons/quest_complete', 'Quest Complete (Quest Icon)'],
        ['quest_icon_quest_extras', 'kubejs:item/quest_icons/quest_extras', 'Quest Extras (Quest Icon)'],
        ['quest_icon_quest_general', 'kubejs:item/quest_icons/quest_general', 'Quest General (Quest Icon)'],
        ['quest_icon_quest_info', 'kubejs:item/quest_icons/quest_info', 'Quest Info (Quest Icon)'],
        ['quest_icon_quest_market', 'kubejs:item/quest_icons/quest_market', 'Quest Market (Quest Icon)'],
        ['quest_icon_quest_markettwo', 'kubejs:item/quest_icons/quest_markettwo', 'Quest Markettwo (Quest Icon)'],
        ['quest_icon_quest_mods', 'kubejs:item/quest_icons/quest_mods', 'Quest Mods (Quest Icon)'],
        ['quest_icon_quest_next', 'kubejs:item/quest_icons/quest_next', 'Quest Next (Quest Icon)'],
        ['quest_icon_root', 'kubejs:item/quest_icons/root', 'Root (Quest Icon)'],
        ['quest_icon_rope', 'kubejs:item/quest_icons/rope', 'Rope (Quest Icon)'],
        ['quest_icon_sack', 'kubejs:item/quest_icons/sack', 'Sack (Quest Icon)'],
        ['quest_icon_satchel', 'kubejs:item/quest_icons/satchel', 'Satchel (Quest Icon)'],
        ['quest_icon_scroll', 'kubejs:item/quest_icons/scroll', 'Scroll (Quest Icon)'],
        ['quest_icon_shovel', 'kubejs:item/quest_icons/shovel', 'Shovel (Quest Icon)'],
        ['quest_icon_skill_point', 'kubejs:item/quest_icons/skill_point', 'Skill Point (Quest Icon)'],
        ['quest_icon_skill_reset', 'kubejs:item/quest_icons/skill_reset', 'Skill Reset (Quest Icon)'],
        ['quest_icon_torch', 'kubejs:item/quest_icons/torch', 'Torch (Quest Icon)'],
        // Additional quest boards and RPG chapter icons. Texture filenames are unchanged.
        [
            'quest_icon_quest_board_arcane',
            'kubejs:item/quest_icons/quest_board_arcane',
            'Arcane Quest Board (Quest Icon)'
        ],
        [
            'quest_icon_quest_board_calculation',
            'kubejs:item/quest_icons/quest_board_calculation',
            'Calculation Quest Board (Quest Icon)'
        ],
        [
            'quest_icon_quest_board_eclipse',
            'kubejs:item/quest_icons/quest_board_eclipse',
            'Eclipse Quest Board (Quest Icon)'
        ],
        [
            'quest_icon_quest_board_industrial',
            'kubejs:item/quest_icons/quest_board_industrial',
            'Industrial Quest Board (Quest Icon)'
        ],
        [
            'quest_icon_quest_board_kinetic',
            'kubejs:item/quest_icons/quest_board_kinetic',
            'Kinetic Quest Board (Quest Icon)'
        ],
        [
            'quest_icon_quest_board_locomotive',
            'kubejs:item/quest_icons/quest_board_locomotive',
            'Reinforced Quest Board (Quest Icon)'
        ],
        [
            'quest_icon_quest_board_precision',
            'kubejs:item/quest_icons/quest_board_precision',
            'Precision Quest Board (Quest Icon)'
        ],
        [
            'quest_icon_quest_board_sealed',
            'kubejs:item/quest_icons/quest_board_sealed',
            'Sealed Quest Board (Quest Icon)'
        ],
        [
            'quest_icon_quest_board_unstable_creative_core',
            'kubejs:item/quest_icons/quest_board_unstable_creative_core',
            'Creation Core Quest Board (Quest Icon)'
        ],
        ['quest_icon_quest_board_map', 'kubejs:item/quest_icons/quest_board_map', 'Map Quest Board (Quest Icon)'],
        ['quest_icon_quest_board_lute', 'kubejs:item/quest_icons/quest_board_lute', 'Lute Quest Board (Quest Icon)'],
        [
            'quest_icon_quest_board_lantern',
            'kubejs:item/quest_icons/quest_board_lantern',
            'Lantern Quest Board (Quest Icon)'
        ],
        [
            'quest_icon_quest_board_red_potion',
            'kubejs:item/quest_icons/quest_board_red_potion',
            'Red Potion Quest Board (Quest Icon)'
        ],
        [
            'quest_icon_quest_board_poison',
            'kubejs:item/quest_icons/quest_board_poison',
            'Poison Quest Board (Quest Icon)'
        ],
        ['quest_icon_quest_board_key', 'kubejs:item/quest_icons/quest_board_key', 'Key Quest Board (Quest Icon)'],
        ['quest_icon_quest_board_bell', 'kubejs:item/quest_icons/quest_board_bell', 'Bell Quest Board (Quest Icon)'],
        ['quest_icon_questrpgone', 'kubejs:item/quest_icons/questrpgone', 'RPG Quest 1 (Quest Icon)'],
        ['quest_icon_questrpgtwo', 'kubejs:item/quest_icons/questrpgtwo', 'RPG Quest 2 (Quest Icon)'],
        ['quest_icon_questrpgthree', 'kubejs:item/quest_icons/questrpgthree', 'RPG Quest 3 (Quest Icon)'],
        ['quest_icon_questrpgfour', 'kubejs:item/quest_icons/questrpgfour', 'RPG Quest 4 (Quest Icon)'],
        ['quest_icon_questrpgfive', 'kubejs:item/quest_icons/questrpgfive', 'RPG Quest 5 (Quest Icon)'],
        ['quest_icon_questrpgsix', 'kubejs:item/quest_icons/questrpgsix', 'RPG Quest 6 (Quest Icon)'],
        ['quest_icon_questrpgseven', 'kubejs:item/quest_icons/questrpgseven', 'RPG Quest 7 (Quest Icon)'],
        ['quest_icon_questrpgeight', 'kubejs:item/quest_icons/questrpgeight', 'RPG Quest 8 (Quest Icon)'],
        ['quest_icon_questrpgnine', 'kubejs:item/quest_icons/questrpgnine', 'RPG Quest 9 (Quest Icon)'],
        ['quest_icon_questrpgten', 'kubejs:item/quest_icons/questrpgten', 'RPG Quest 10 (Quest Icon)'],
        // Resources
        ['andesite_alloy_sheet', 'kubejs:item/resources/andesite_alloy_sheet', 'Andesite Alloy Sheet'],
        ['blaze_gold', 'kubejs:item/resources/blaze_gold', 'Blaze Gold'],
        ['blaze_gold_sheet', 'kubejs:item/resources/blaze_gold_sheet', 'Blaze Gold Sheet'],
        ['bronze_ingot', 'kubejs:item/resources/bronze_ingot', 'Bronze Ingot'],
        ['bronze_nugget', 'kubejs:item/resources/bronze_nugget', 'Bronze Nugget'],
        ['bronze_sheet', 'kubejs:item/resources/bronze_sheet', 'Bronze Sheet'],
        ['coal_piece', 'kubejs:item/resources/coal_piece', 'Coal Piece'],
        ['compound_base', 'kubejs:item/resources/compound_base', 'Compound Base'],
        ['crystallized_sap', 'kubejs:item/resources/crystallized_sap', 'Crystallized Sap'],
        ['ember_alloy', 'kubejs:item/resources/ember_alloy', 'Ember Alloy'],
        [
            'incomplete_stargaze_alloy',
            'kubejs:item/resources/incomplete_stargaze_singularity',
            'Incomplete Stargaze Alloy'
        ],
        ['industrial_iron_ingot', 'kubejs:item/resources/industrial_iron_ingot', 'Industrial Iron Ingot'],
        ['industrial_iron_nugget', 'kubejs:item/resources/industrial_iron_nugget', 'Industrial Iron Nugget'],
        ['industrial_iron_sheet', 'kubejs:item/resources/industrial_iron_sheet', 'Industrial Iron Sheet'],
        ['lapis_alloy', 'kubejs:item/resources/lapis_alloy', 'Lapis Alloy'],
        ['lapis_sheet', 'kubejs:item/resources/lapis_sheet', 'Lapis Sheet'],
        ['mana_infused_sheet', 'kubejs:item/resources/mana_infused_sheet', 'Mana Infused Sheet'],
        ['mithril_ingot', 'kubejs:item/resources/mithril_ingot', 'Mithril Ingot'],
        ['mithril_nugget', 'kubejs:item/resources/mithril_nugget', 'Mithril Nugget'],
        ['mithril_sheet', 'kubejs:item/resources/mithril_sheet', 'Mithril Sheet'],
        ['overcharge_alloy', 'kubejs:item/resources/overcharge_alloy', 'Overcharge Alloy'],
        ['overcharge_alloy_sheet', 'kubejs:item/resources/overcharge_alloy_sheet', 'Overcharge Alloy Sheet'],
        ['polished_amethyst', 'kubejs:item/resources/polished_amethyst', 'Polished Amethyst'],
        ['polished_spectral_ruby', 'kubejs:item/resources/polished_spectral_ruby', 'Polished Spectral Ruby'],
        ['radiant_sheet', 'kubejs:item/resources/radiant_sheet', 'Radiant Sheet'],
        ['raw_rubber', 'kubejs:item/resources/raw_rubber', 'Raw Rubber'],
        ['raw_tin', 'kubejs:item/resources/raw_tin', 'Raw Tin'],
        ['refined_quartz', 'kubejs:item/resources/refined_quartz', 'Refined Quartz'],
        ['refinedmanaingot', 'kubejs:item/resources/refinedmanaingot', 'Refined Mana Ingot'],
        ['rubber', 'kubejs:item/resources/rubber', 'Cured Rubber'],
        ['rubber_belt', 'kubejs:item/resources/rubber_belt', 'Rubber Belt'],
        ['shadow_steel_sheet', 'kubejs:item/resources/shadow_steel_sheet', 'Shadow Steel Sheet'],
        ['spectral_ruby', 'kubejs:item/resources/spectral_ruby', 'Spectral Ruby'],
        ['stargaze_alloy', 'kubejs:item/resources/stargaze_singularity', 'Stargaze Alloy'],
        ['stargaze_alloy_sheet', 'kubejs:item/resources/stargaze_singularity_sheet', 'Stargaze Alloy Sheet'],
        ['steel_ingot', 'kubejs:item/resources/steel_ingot', 'Steel Ingot'],
        ['steel_nugget', 'kubejs:item/resources/steel_nugget', 'Steel Nugget'],
        ['steel_sheet', 'kubejs:item/resources/steel_sheet', 'Steel Sheet'],
        ['sturdy_invar_sheet', 'kubejs:item/resources/sturdy_invar_sheet', 'Sturdy Invar Sheet'],
        ['tin_ingot', 'kubejs:item/resources/tin_ingot', 'Tin Ingot'],
        ['tin_nugget', 'kubejs:item/resources/tin_nugget', 'Tin Nugget'],
        ['tin_sheet', 'kubejs:item/resources/tin_sheet', 'Tin Sheet'],
        ['zinc_sheet', 'kubejs:item/resources/zinc_sheet', 'Zinc Sheet']
    ];
    items.forEach(entry => {
        let item = event.create(entry[0]).texture(entry[1]).displayName(entry[2]);
        // Same enchantment-style shimmer as Create's native Refined Radiance.
        if (entry[0] === 'radiant_sheet' || entry[0] === 'radiant_coil') item.glow(true);
    });
});

// Endgame intermediates
StartupEvents.registry('item', event => {
    event.create('incomplete_gold_general_trophy').maxStackSize(1)
        .displayName('Unfinished Gold General Trophy')
        .parentModel('tnkcore:item/gold_general_trophy');
    event.create('master_builder_template').displayName('Master Builder Upgrade Template')
        .texture('minecraft:item/netherite_upgrade_smithing_template');
});

// Later-tier materials
StartupEvents.registry('item', event => {
    let items = [
        ['mana_tube', 'kubejs:item/crafting_items/blue_tube', 'Mana Tube'],
        ['refined_shadow_alloy', 'kubejs:item/resources/refined_shadow_alloy', 'Refined Shadow Alloy'],
        [
            'incomplete_advanced_electronic_component',
            'immersiveengineering:item/material_component_electronic_adv',
            'Incomplete Advanced Electronic Component'
        ],
        [
            'incomplete_industrial_mechanism',
            'kubejs:item/mechanisms/industrial_mechanism',
            'Incomplete Industrial Mechanism'
        ],
        ['incomplete_arcane_mechanism', 'kubejs:item/mechanisms/arcane_mechanism', 'Incomplete Arcane Mechanism'],
        ['incomplete_eclipse_mechanism', 'kubejs:item/mechanisms/eclipse_mechanism', 'Incomplete Eclipse Mechanism']
    ];
    items.forEach(entry => event.create(entry[0]).texture(entry[1]).displayName(entry[2]));
});

// Boss respawn token
StartupEvents.registry('item', event => {
  event.create('boss_respawn_token')
    .displayName('Boss Respawn Token')
    .texture('kubejs:item/boss_respawn_token')
    .maxStackSize(64)
})

// Quest icons
StartupEvents.registry('item', event => {
  // [original PNG filename without extension, readable icon name]
  const icons = [
    ['locked', 'Locked'],
    ['unlocked', 'Unlocked'],
    ['minus', 'Minus'],
    ['previous', 'Previous'],
    ['down', 'Down'],
    ['unavailable', 'Unavailable'],
    ['home', 'Home'],
    ['interrogation_mark', 'Question Mark'],
    ['bell', 'Bell'],
    ['cross', 'Cross'],
    ['equal', 'Equal'],
    ['check', 'Check'],
    ['slash', 'Slash'],
    ['next', 'Next'],
    ['3dots', 'Three Dots'],
    ['dialog', 'Dialog'],
    ['profile', 'Profile'],
    ['back', 'Back'],
    ['plus', 'Plus'],
    ['zoom', 'Zoom'],
    ['back2', 'Back 2'],
    ['reset', 'Reset'],
    ['settings', 'Settings'],
    ['up', 'Up'],
    ['exclamation_mark', 'Exclamation Mark'],
    ['i', 'Information'],
    ['heart', 'Heart']
  ];

  [1, 2].forEach(number => {
    const variant = 'variant' + number;

    icons.forEach(icon => {
      event.create('quest_icon_' + variant + '_' + icon[0])
        .displayName('Quest Icon - ' + icon[1] + ' (Variant ' + number + ')')
        .texture('kubejs:item/quest_icons/' + variant + '/' + icon[0]);
    });
  });
});

// AE2 cells, processor intermediates and their shared recipe metadata
StartupEvents.registry('item', event => {
    global.TNK_AE2_COMPAT = {
        // Tiered production recipes are provided by server_scripts/compat_automation.js.
        // Cobblestone reuses the existing ExtendedAE cell instead of duplicating it.
        stoneCells: [
            {
                name: 'cobblestone',
                stone: 'minecraft:cobblestone',
                cell: 'extendedae:infinity_cobblestone_cell',
                existing: true
            },
            { name: 'stone', stone: 'minecraft:stone', cell: 'kubejs:infinity_stone_cell' },
            { name: 'andesite', stone: 'minecraft:andesite', cell: 'kubejs:infinity_andesite_cell' },
            { name: 'granite', stone: 'minecraft:granite', cell: 'kubejs:infinity_granite_cell' },
            { name: 'diorite', stone: 'minecraft:diorite', cell: 'kubejs:infinity_diorite_cell' },
            { name: 'deepslate', stone: 'minecraft:deepslate', cell: 'kubejs:infinity_deepslate_cell' },
            { name: 'tuff', stone: 'minecraft:tuff', cell: 'kubejs:infinity_tuff_cell' },
            { name: 'calcite', stone: 'minecraft:calcite', cell: 'kubejs:infinity_calcite_cell' },
            { name: 'basalt', stone: 'minecraft:basalt', cell: 'kubejs:infinity_basalt_cell' },
            { name: 'blackstone', stone: 'minecraft:blackstone', cell: 'kubejs:infinity_blackstone_cell' },
            { name: 'veridium', stone: 'create:veridium', cell: 'kubejs:infinity_veridium_cell' },
            { name: 'ochrum', stone: 'create:ochrum', cell: 'kubejs:infinity_ochrum_cell' },
            { name: 'asurine', stone: 'create:asurine', cell: 'kubejs:infinity_asurine_cell' },
            { name: 'scoria', stone: 'create:scoria', cell: 'kubejs:infinity_scoria_cell' },
            { name: 'scorchia', stone: 'create:scorchia', cell: 'kubejs:infinity_scorchia_cell' },
            { name: 'crimsite', stone: 'create:crimsite', cell: 'kubejs:infinity_crimsite_cell' },
            { name: 'limestone', stone: 'create:limestone', cell: 'kubejs:infinity_limestone_cell' },
            {"name": "sand", "stone": "minecraft:sand", "cell": "kubejs:infinity_sand_cell"},
            {"name": "red_sand", "stone": "minecraft:red_sand", "cell": "kubejs:infinity_red_sand_cell"},
            {"name": "gravel", "stone": "minecraft:gravel", "cell": "kubejs:infinity_gravel_cell"},
            {"name": "soul_sand", "stone": "minecraft:soul_sand", "cell": "kubejs:infinity_soul_sand_cell"},
            {"name": "soul_soil", "stone": "minecraft:soul_soil", "cell": "kubejs:infinity_soul_soil_cell"},
            {"name": "clay", "stone": "minecraft:clay", "cell": "kubejs:infinity_clay_cell"},
            {"name": "snow", "stone": "minecraft:snow_block", "cell": "kubejs:infinity_snow_cell"},
            {"name": "ice", "stone": "minecraft:ice", "cell": "kubejs:infinity_ice_cell"}
        ],

        // Consumes one raw material. The die in the Deployer's hand is retained.
        prints: [
            {
                name: 'printed_silicon',
                input: { tag: 'c:silicon' },
                press: 'ae2:silicon_press',
                output: 'ae2:printed_silicon'
            },
            {
                name: 'printed_logic_processor',
                input: { tag: 'c:ingots/gold' },
                press: 'ae2:logic_processor_press',
                output: 'ae2:printed_logic_processor'
            },
            {
                name: 'printed_calculation_processor',
                input: { item: 'ae2:certus_quartz_crystal' },
                press: 'ae2:calculation_processor_press',
                output: 'ae2:printed_calculation_processor'
            },
            {
                name: 'printed_engineering_processor',
                input: { tag: 'c:gems/diamond' },
                press: 'ae2:engineering_processor_press',
                output: 'ae2:printed_engineering_processor'
            },
            {
                name: 'concurrent_processor_print',
                input: { tag: 'c:gems/entro' },
                press: 'extendedae:concurrent_processor_press',
                output: 'extendedae:concurrent_processor_print'
            }
        ],

        // Start with the printed circuit; add one Redstone and one Printed Silicon.
        processors: [
            { name: 'logic_processor', input: 'ae2:printed_logic_processor', output: 'ae2:logic_processor' },
            {
                name: 'calculation_processor',
                input: 'ae2:printed_calculation_processor',
                output: 'ae2:calculation_processor'
            },
            {
                name: 'engineering_processor',
                input: 'ae2:printed_engineering_processor',
                output: 'ae2:engineering_processor'
            },
            {
                name: 'concurrent_processor',
                input: 'extendedae:concurrent_processor_print',
                output: 'extendedae:concurrent_processor'
            }
        ],

        // Preserve AE2's existing iron-block + original-press copying cost.
        pressCopies: [
            { name: 'silicon_press', output: 'ae2:silicon_press' },
            { name: 'logic_processor_press', output: 'ae2:logic_processor_press' },
            { name: 'calculation_processor_press', output: 'ae2:calculation_processor_press' },
            { name: 'engineering_processor_press', output: 'ae2:engineering_processor_press' }
        ],

        disabledMachines: global.TNK_CONTENT.ae2DisabledMachines,
        hidePaintballs: false
    };

    const config = global.TNK_AE2_COMPAT;
    // Reuse an intermediate if an earlier startup script already declared it.
    // RegistryKubeEvent.created also sees builders not yet in the item registry.
    const existingBuilders = new Set();
    event.created.forEach(builder => existingBuilders.add(String(builder.id)));

    config.stoneCells.forEach(entry => {
        if (entry.existing) return;
        event
            .create(entry.cell, 'extendedae:custom_infinity_cell')
            .itemType(entry.stone)
            .parentModel('extendedae:item/infinity_cobblestone_cell')
            .texture('layer0', 'extendedae:item/infinity_cell_cobble')
            .texture('layer1', 'ae2:item/storage_cell_led')
            .cellModel('extendedae:block/drive/infinity_cobblestone_cell');
        // ExtendedAE supplies the localized "ME Infinity <resource> Cell" name,
        // native infinite inventory, idle power cost and drive behavior.
    });

    // Each assembly has its own real transitional item. Create owns the step
    // counter/progress component, so unfinished parts cannot skip their steps.
    config.prints.concat(config.processors, config.pressCopies).forEach(entry => {
        const itemId = 'kubejs:incomplete_' + entry.name;
        if (existingBuilders.has(itemId)) return;
        event
            .create(itemId)
            .displayName(
                'Incomplete ' +
                    entry.name
                        .split('_')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')
            )
            .texture(entry.output.replace(':', ':item/'));
    });
});
