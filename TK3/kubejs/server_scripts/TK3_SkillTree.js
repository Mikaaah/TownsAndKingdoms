// Towns & Kingdoms 3 - Passive Skill Tree v1.0 BASELINE
// Minecraft 1.21.1 NeoForge / Passive Skill Tree 1.21.1 port / KubeJS
// Based on adesanyua/Passive-Skill-Tree examples/kubejs.
//
// v1.0 goals:
// - One native global Passive Skill Tree point pool; every node costs 1 point.
// - Exactly one archetype and exactly one subclass.
// - 10 archetypes, 30 subclasses, universal professions/passives, and Iron's school mastery.
// - Apothic Attributes are used as a *small* optional stat toolbox; bonuses are intentionally conservative.
// - Archetype/subclass nodes add player tags on learn and remove them on respec for later KubeJS hooks.
// - Strong effects are represented by investment chains and limited keystones/masteries, not multi-point nodes.
// - Epic Fight / WoM specific animation, stamina, parry, rage and combo hooks stay outside this JSON layer.
//
// IMPORTANT: JsonIO writes datapack JSON during startup. After first generation, restart the game/server.

(() => {
    const Registries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
    const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

    const skills = {}
    const generated = []

    function hasAttribute(name) {
        return Registries.ATTRIBUTE.containsKey(ResourceLocation.parse(name))
    }

    function attribute(name, amount, operation, optional) {
        if (!hasAttribute(name)) {
            if (optional) return null
            throw new Error('[TK3 SkillTree] Missing attribute: ' + name)
        }
        return { type: 'skilltree:attribute', attribute: name, amount: amount, operation: operation }
    }

    function percent(name, amount) { return attribute(name, amount, 1, false) }
    function flat(name, amount) { return attribute(name, amount, 0, false) }
    function optionalPercent(name, amount) { return attribute(name, amount, 1, true) }
    function optionalFlat(name, amount) { return attribute(name, amount, 0, true) }

    function compactBonuses(list) {
        return list.filter(b => b !== null && b !== undefined)
    }

    function magic(name, amount, fallback) {
        const bonus = optionalPercent('irons_spellbooks:' + name, amount)
        return bonus || fallback
    }

    function schoolPower(school, amount) {
        return optionalPercent('irons_spellbooks:' + school + '_spell_power', amount)
            || optionalPercent('irons_spellbooks:spell_power', amount)
            || percent('minecraft:generic.attack_damage', amount * 0.25)
    }

    // Prefer Apothic Attributes when available so PST, Apotheosis affixes and gems share one stat language.
    // Values stay deliberately small because Apotheosis itself will be flattened/nerfed in T&K3.
    function apothicFlat(name, amount, fallback) { return optionalFlat('apothic_attributes:' + name, amount) || fallback }
    function apothicPercent(name, amount, fallback) { return optionalPercent('apothic_attributes:' + name, amount) || fallback }
    function critChance(chance) { return apothicFlat('crit_chance', chance, { type: 'skilltree:crit_chance', chance: chance }) }
    function critDamage(amount) { return apothicFlat('crit_damage', amount, { type: 'skilltree:crit_damage', amount: amount }) }
    function dodge(chance) { return apothicFlat('dodge_chance', chance, percent('minecraft:generic.movement_speed', chance * 0.5)) }
    function armorShred(amount) { return apothicFlat('armor_shred', amount, percent('minecraft:generic.attack_damage', amount * 0.35)) }
    function armorPierce(amount) { return apothicFlat('armor_pierce', amount, percent('minecraft:generic.attack_damage', amount * 0.01)) }
    function lifeSteal(amount) { return apothicFlat('life_steal', amount, percent('minecraft:generic.max_health', amount * 0.5)) }
    function healingReceived(amount) { return apothicPercent('healing_received', amount, percent('minecraft:generic.max_health', amount * 0.4)) }
    function projectileDamage(amount) { return apothicPercent('projectile_damage', amount, critDamage(amount * 0.5)) }
    function drawSpeed(amount) { return apothicPercent('draw_speed', amount, projectileSpeed(amount * 0.8)) }
    function apothicXp(amount) { return apothicPercent('experience_gained', amount, xpMobs(amount)) }
    function apothicMining(amount) { return apothicPercent('mining_speed', amount, blockBreak(amount)) }
    function stealth(amount) { return { type: 'skilltree:stealth', amount: amount } }
    function projectileSpeed(multiplier) { return { type: 'skilltree:projectile_speed', multiplier: multiplier } }
    function arrowRetrieval(chance) { return { type: 'skilltree:arrow_retrieval', chance: chance } }
    function blockBreak(multiplier, playerCondition) {
        const b = { type: 'skilltree:block_break_speed', multiplier: multiplier }
        if (playerCondition) b.player_condition = playerCondition
        return b
    }
    function freeEnchant(chance) { return { type: 'skilltree:free_enchantment', chance: chance } }
    function xpMobs(multiplier) { return { type: 'skilltree:gained_experience', multiplier: multiplier, experience_source: 'mobs' } }
    function lootDup(chance, lootType) {
        return { type: 'skilltree:loot_duplication', chance: chance, multiplier: 1.0, loot_type: lootType }
    }
    function itemTag(tag) { return { type: 'skilltree:tag', tag_id: tag } }
    function hasItemInHand(tag) {
        return { type: 'skilltree:has_item_in_hand', item_condition: itemTag(tag) }
    }
    function durability(chance, tag) {
        return { type: 'skilltree:item_durability_loss_avoidance', chance: chance, item_condition: itemTag(tag) }
    }
    function repairEfficiency(multiplier, tag) {
        return { type: 'skilltree:repair_efficiency', multiplier: multiplier, item_condition: itemTag(tag) }
    }


    function schoolResist(school, amount) {
        return optionalPercent('irons_spellbooks:' + school + '_magic_resist', amount)
    }

    function stateTag(tag) {
        return [
            { type: 'skilltree:command', command: 'tag @s add ' + tag, description: '', event_listener: { type: 'skilltree:skill_learned' } },
            { type: 'skilltree:command', command: 'tag @s remove ' + tag, description: '', event_listener: { type: 'skilltree:skill_removed' } }
        ]
    }

    function cloneBonus(bonus) { return JSON.parse(JSON.stringify(bonus)) }

    function scaleBonus(bonus, factor) {
        const b = cloneBonus(bonus)
        if (b.type === 'skilltree:attribute' && typeof b.amount === 'number') b.amount *= factor
        else if (b.type === 'skilltree:crit_chance' && typeof b.chance === 'number') b.chance *= factor
        else if (b.type === 'skilltree:crit_damage' && typeof b.amount === 'number') b.amount *= factor
        else if (b.type === 'skilltree:stealth' && typeof b.amount === 'number') b.amount *= factor
        else if (b.type === 'skilltree:projectile_speed' && typeof b.multiplier === 'number') b.multiplier *= factor
        else if (b.type === 'skilltree:arrow_retrieval' && typeof b.chance === 'number') b.chance *= factor
        else if (b.type === 'skilltree:block_break_speed' && typeof b.multiplier === 'number') b.multiplier *= factor
        else if (b.type === 'skilltree:free_enchantment' && typeof b.chance === 'number') b.chance *= factor
        else if (b.type === 'skilltree:gained_experience' && typeof b.multiplier === 'number') b.multiplier *= factor
        else if (b.type === 'skilltree:loot_duplication' && typeof b.chance === 'number') b.chance *= factor
        else if (b.type === 'skilltree:item_durability_loss_avoidance' && typeof b.chance === 'number') b.chance *= factor
        else if (b.type === 'skilltree:repair_efficiency' && typeof b.multiplier === 'number') b.multiplier *= factor
        return b
    }

    function scaledBonuses(list, factor) { return compactBonuses((list || []).map(b => scaleBonus(b, factor))) }

    function roman(n) { return ['I','II','III','IV','V','VI','VII','VIII'][n - 1] || String(n) }
    function baseRankTitle(title) { return title.replace(/\s+[IVX]+$/, '') }

    const FRAME = {
        lesser: 'skilltree:textures/icons/background/lesser.png',
        notable: 'skilltree:textures/icons/background/notable.png',
        class: 'skilltree:textures/icons/background/class.png',
        keystone: 'skilltree:textures/icons/background/keystone.png',
        gateway: 'skilltree:textures/icons/background/gateway.png',
        recipe: 'skilltree:textures/icons/background/recipe.png'
    }

    const SIZE = { lesser: 20, notable: 24, class: 32, keystone: 28, gateway: 28, recipe: 24 }

    function icon(name) {
        if (name.indexOf(':') >= 0) return name
        return 'minecraft:textures/item/' + name + '.png'
    }

    function pstIcon(path) { return 'skilltree:textures/icons/' + path + '.png' }

    function addNode(id, x, y, title, iconName, bonuses, options) {
        options = options || {}
        const type = options.type || 'lesser'
        const tags = options.tags || []
        const node = {
            id: 'skilltree:' + id,
            title: title,
            titleColor: options.color || 'FFFFFF',
            positionX: Math.round(x),
            positionY: Math.round(y),
            buttonSize: SIZE[type] || 20,
            backgroundTexture: FRAME[type] || FRAME.lesser,
            iconTexture: icon(iconName),
            borderTexture: 'skilltree:textures/tooltip/lesser.png',
            isStartingPoint: !!options.start,
            isAlwaysStartingPoint: false,
            tags: tags,
            bonuses: compactBonuses(bonuses || []),
            requirements: [],
            directConnections: [],
            longConnections: [],
            oneWayConnections: []
        }

        node.bonuses.forEach((bonus, i) => {
            if (bonus.type === 'skilltree:attribute') {
                bonus.id = 'skilltree:tk3/' + id + '/' + i
            }
        })

        skills[id] = node
        generated.push(id)
        return id
    }

    function connect(a, b) {
        if (!skills[a] || !skills[b]) throw new Error('[TK3 SkillTree] Cannot connect missing node: ' + a + ' <-> ' + b)
        skills[a].directConnections.push('skilltree:' + b)
        skills[b].directConnections.push('skilltree:' + a)
    }

    function polar(angle, radius, offset) {
        const radians = angle * Math.PI / 180
        offset = offset || 0
        return {
            x: Math.cos(radians) * radius - Math.sin(radians) * offset,
            y: Math.sin(radians) * radius + Math.cos(radians) * offset
        }
    }

    function classNodeId(classId, part) { return 'tk3_' + classId + '_' + part }

    // v1.0 expands every class concept into a short investment chain. This keeps the
    // native 1-point-per-node economy while making stronger effects cost multiple nodes.
    const CLASS_CORE_RANKS = 3
    const SUBCLASS_PATH_RANKS = 3

    function buildClass(def, index) {
        const angle = -90 + index * 36
        const c = def.color

        function n(part, radius, offset, title, iconName, bonuses, options) {
            const p = polar(angle, radius, offset)
            options = options || {}
            options.color = options.color || c
            return addNode(classNodeId(def.id, part), p.x, p.y, title, iconName, bonuses, options)
        }

        const rootBonuses = compactBonuses((def.root || []).concat(stateTag('tk3_class_' + def.id)))
        const root = n('root', 155, 0, def.name, def.icon, rootBonuses, { type: 'class', start: true, tags: ['archetype'] })

        const coreOffsets = [-126, -42, 42, 126]
        const coreEnds = []
        def.core.forEach((entry, lane) => {
            let prev = root
            for (let rank = 1; rank <= CLASS_CORE_RANKS; rank++) {
                const type = rank === CLASS_CORE_RANKS ? 'notable' : 'lesser'
                const id = n('core_' + (lane + 1) + '_' + rank, 230 + (rank - 1) * 78, coreOffsets[lane],
                    baseRankTitle(entry[0]) + ' ' + roman(rank), entry[1], scaledBonuses(entry[2], 0.42), { type: type })
                connect(prev, id)
                prev = id
            }
            coreEnds.push(prev)
        })

        const gate = n('subclass_gate', 500, 0, def.name + ' Mastery', def.gateIcon || def.icon, def.gate || [], { type: 'gateway' })
        coreEnds.forEach(id => connect(id, gate))

        const subOffsets = [-230, 0, 230]
        def.subclasses.forEach((sub, sIndex) => {
            const off = subOffsets[sIndex]
            const subRootBonuses = compactBonuses((sub.root || []).concat(stateTag('tk3_subclass_' + sub.id)))
            const subRoot = n('sub_' + sub.id, 610, off, sub.name, sub.icon, subRootBonuses, {
                type: 'class', tags: ['subclass']
            })
            connect(gate, subRoot)

            const conceptOffsets = [-62, 0, 62]
            const ends = []
            sub.nodes.forEach((entry, concept) => {
                let prev = subRoot
                for (let rank = 1; rank <= SUBCLASS_PATH_RANKS; rank++) {
                    const type = rank === SUBCLASS_PATH_RANKS ? 'notable' : 'lesser'
                    const id = n('sub_' + sub.id + '_path_' + (concept + 1) + '_' + rank,
                        700 + (rank - 1) * 76, off + conceptOffsets[concept],
                        baseRankTitle(entry[0]) + ' ' + roman(rank), entry[1], scaledBonuses(entry[2], 0.38), { type: type })
                    connect(prev, id)
                    prev = id
                }
                ends.push(prev)
            })

            const keyBonuses = scaledBonuses(sub.nodes[sub.nodes.length - 1][2], 0.55)
                .concat(stateTag('tk3_keystone_' + sub.id))
            const key = n('sub_' + sub.id + '_keystone', 965, off, sub.name + ' Keystone', sub.icon, keyBonuses, {
                type: 'keystone', tags: ['subclass_keystone']
            })
            ends.forEach(id => connect(id, key))
        })
    }

    // ---------------------------------------------------------------------
    // ARCHETYPES / CLASSES + SUBCLASSES
    // ---------------------------------------------------------------------

    const classes = [
        {
            id: 'warrior', name: 'Warrior', icon: 'iron_sword', color: 'E05A47',
            root: [percent('minecraft:generic.attack_damage', 0.06), percent('minecraft:generic.max_health', 0.05), flat('minecraft:generic.armor', 1)],
            core: [
                ['Weapon Training I', 'stone_sword', [percent('minecraft:generic.attack_damage', 0.03)]],
                ['Endurance I', 'apple', [percent('minecraft:generic.max_health', 0.04)]],
                ['Battle Rhythm', 'iron_axe', [percent('minecraft:generic.attack_speed', 0.05)]],
                ['Iron Guard', 'iron_chestplate', [flat('minecraft:generic.armor', 1)]]
            ],
            gate: [percent('minecraft:generic.attack_damage', 0.02)],
            subclasses: [
                { id: 'berserker', name: 'Berserker', icon: 'netherite_axe', root: [percent('minecraft:generic.attack_damage', 0.06), percent('minecraft:generic.max_health', -0.03)], nodes: [
                    ['Fury', 'blaze_powder', [percent('minecraft:generic.attack_speed', 0.05)]],
                    ['Brutality', 'iron_axe', [critDamage(0.10)]],
                    ['Unchained', 'netherite_axe', [percent('minecraft:generic.attack_damage', 0.08), flat('minecraft:generic.armor', -1)]]
                ]},
                { id: 'weapon_master', name: 'Weapon Master', icon: 'diamond_sword', root: [percent('minecraft:generic.attack_damage', 0.04), percent('minecraft:generic.attack_speed', 0.04)], nodes: [
                    ['Precision', 'iron_sword', [critChance(0.03)]],
                    ['Technique', 'golden_sword', [critDamage(0.08)]],
                    ['Master of Arms', 'diamond_sword', [percent('minecraft:generic.attack_damage', 0.05), percent('minecraft:generic.attack_speed', 0.05)]]
                ]},
                { id: 'vanguard', name: 'Vanguard', icon: 'diamond_chestplate', root: [percent('minecraft:generic.max_health', 0.06), flat('minecraft:generic.armor', 2)], nodes: [
                    ['Hold the Line', 'iron_chestplate', [flat('minecraft:generic.armor_toughness', 1)]],
                    ['Frontliner', 'golden_apple', [percent('minecraft:generic.max_health', 0.05)]],
                    ['Unbroken', 'netherite_chestplate', [flat('minecraft:generic.armor', 2), percent('minecraft:generic.movement_speed', -0.02)]]
                ]}
            ]
        },
        {
            id: 'guardian', name: 'Guardian', icon: 'iron_chestplate', color: '6B86C4',
            root: [percent('minecraft:generic.max_health', 0.10), flat('minecraft:generic.armor', 2), percent('minecraft:generic.movement_speed', -0.04)],
            core: [
                ['Fortitude I', 'cooked_beef', [percent('minecraft:generic.max_health', 0.04)]],
                ['Armor Training I', 'iron_ingot', [flat('minecraft:generic.armor', 1)]],
                ['Steadfast', 'iron_ingot', [flat('minecraft:generic.knockback_resistance', 0.08)]],
                ['Toughness', 'diamond_chestplate', [flat('minecraft:generic.armor_toughness', 1)]]
            ],
            gate: [percent('minecraft:generic.max_health', 0.03)],
            subclasses: [
                { id: 'juggernaut', name: 'Juggernaut', icon: 'netherite_chestplate', root: [percent('minecraft:generic.max_health', 0.08), flat('minecraft:generic.armor', 2), percent('minecraft:generic.movement_speed', -0.03)], nodes: [
                    ['Massive Frame', 'netherite_ingot', [flat('minecraft:generic.knockback_resistance', 0.10)]],
                    ['Iron Wall', 'netherite_scrap', [flat('minecraft:generic.armor_toughness', 2)]],
                    ['Immovable', 'netherite_chestplate', [percent('minecraft:generic.max_health', 0.08), flat('minecraft:generic.armor', 2)]]
                ]},
                { id: 'warden', name: 'Warden', icon: 'turtle_helmet', root: [flat('minecraft:generic.armor', 2), flat('minecraft:generic.armor_toughness', 1)], nodes: [
                    ['Protector', 'golden_apple', [percent('minecraft:generic.max_health', 0.04)]],
                    ['Hardened', 'iron_chestplate', [flat('minecraft:generic.armor', 2)]],
                    ['Aegis', 'turtle_helmet', [flat('minecraft:generic.armor_toughness', 2), flat('minecraft:generic.knockback_resistance', 0.08)]]
                ]},
                { id: 'sentinel', name: 'Sentinel', icon: 'clock_00', root: [percent('minecraft:generic.attack_speed', 0.04), flat('minecraft:generic.armor', 1)], nodes: [
                    ['Read the Enemy', 'spyglass', [critChance(0.02)]],
                    ['Counterstance', 'iron_sword', [percent('minecraft:generic.attack_damage', 0.03)]],
                    ['Perfect Guard', 'diamond_chestplate', [flat('minecraft:generic.armor_toughness', 2), percent('minecraft:generic.attack_speed', 0.04)]]
                ]}
            ]
        },
        {
            id: 'ranger', name: 'Ranger', icon: 'bow_standby', color: '5DAE68',
            root: [percent('minecraft:generic.movement_speed', 0.06), projectileSpeed(0.10), arrowRetrieval(0.10), percent('minecraft:generic.max_health', -0.03)],
            core: [
                ['Quick Draw', 'bow_standby', [projectileSpeed(0.08)]],
                ['Trail Legs', 'leather_boots', [percent('minecraft:generic.movement_speed', 0.03)]],
                ['Steady Aim', 'arrow', [critChance(0.02)]],
                ['Recover Ammunition', 'flint', [arrowRetrieval(0.10)]]
            ],
            gate: [projectileSpeed(0.05)],
            subclasses: [
                { id: 'marksman', name: 'Marksman', icon: 'crossbow_standby', root: [projectileSpeed(0.10), critChance(0.02)], nodes: [
                    ['Long Shot', 'spectral_arrow', [projectileSpeed(0.10)]],
                    ['Deadeye', 'spyglass', [critDamage(0.10)]],
                    ['Perfect Shot', 'crossbow_standby', [critChance(0.04), critDamage(0.08)]]
                ]},
                { id: 'hunter', name: 'Hunter', icon: 'compass_00', root: [xpMobs(0.08), lootDup(0.03, 'mobs')], nodes: [
                    ['Tracker', 'compass_00', [percent('minecraft:generic.movement_speed', 0.03)]],
                    ['Field Dressing', 'rabbit_hide', [lootDup(0.03, 'mobs')]],
                    ['Apex Hunter', 'ender_eye', [xpMobs(0.10), lootDup(0.04, 'mobs')]]
                ]},
                { id: 'beastmaster', name: 'Beastmaster', icon: 'bone', root: [percent('minecraft:generic.max_health', 0.05), percent('minecraft:generic.movement_speed', 0.03)], nodes: [
                    ['Wild Instinct', 'rabbit_foot', [critChance(0.02)]],
                    ['Pack Endurance', 'cooked_beef', [percent('minecraft:generic.max_health', 0.05)]],
                    ['Alpha Bond', 'bone', [percent('minecraft:generic.movement_speed', 0.04), percent('minecraft:generic.max_health', 0.04)]]
                ]}
            ]
        },
        {
            id: 'rogue', name: 'Rogue', icon: 'shears', color: '9A6BC5',
            root: [percent('minecraft:generic.movement_speed', 0.06), critChance(0.03), stealth(0.06), percent('minecraft:generic.max_health', -0.04)],
            core: [
                ['Light Feet', 'feather', [percent('minecraft:generic.movement_speed', 0.03)]],
                ['Dirty Fighting', 'spider_eye', [critDamage(0.06)]],
                ['Ambush', 'shears', [stealth(0.05)]],
                ['Quick Hands', 'golden_sword', [percent('minecraft:generic.attack_speed', 0.05)]]
            ],
            gate: [critChance(0.02)],
            subclasses: [
                { id: 'assassin', name: 'Assassin', icon: 'fermented_spider_eye', root: [critChance(0.03), critDamage(0.08)], nodes: [
                    ['Silent Step', 'feather', [stealth(0.08)]],
                    ['Killer Instinct', 'iron_sword', [critDamage(0.10)]],
                    ['Deathblow', 'fermented_spider_eye', [critChance(0.04), percent('minecraft:generic.attack_damage', 0.04)]]
                ]},
                { id: 'duelist', name: 'Duelist', icon: 'golden_sword', root: [percent('minecraft:generic.attack_speed', 0.06), percent('minecraft:generic.attack_damage', 0.03)], nodes: [
                    ['Footwork', 'leather_boots', [percent('minecraft:generic.movement_speed', 0.03)]],
                    ['Riposte', 'iron_sword', [critChance(0.03)]],
                    ['Blade Dancer', 'golden_sword', [percent('minecraft:generic.attack_speed', 0.08), critDamage(0.06)]]
                ]},
                { id: 'shadowblade', name: 'Shadowblade', icon: 'ender_pearl', root: compactBonuses([percent('minecraft:generic.movement_speed', 0.03), schoolPower('ender', 0.06)]), nodes: [
                    ['Veil', 'black_dye', [stealth(0.08)]],
                    ['Void Edge', 'ender_pearl', [schoolPower('ender', 0.08)]],
                    ['Nightstep', 'chorus_fruit', compactBonuses([percent('minecraft:generic.movement_speed', 0.05), schoolPower('ender', 0.08)])]
                ]}
            ]
        },
        {
            id: 'mage', name: 'Mage', icon: 'enchanted_book', color: '55CFEA',
            root: compactBonuses([
                magic('max_mana', 0.12, freeEnchant(0.05)),
                magic('mana_regen', 0.08, xpMobs(0.05)),
                magic('spell_power', 0.07, freeEnchant(0.05)),
                percent('minecraft:generic.attack_damage', -0.06)
            ]),
            core: [
                ['Arcane Studies', 'book', [magic('spell_power', 0.04, xpMobs(0.04))]],
                ['Mana Reserve', 'lapis_lazuli', [magic('max_mana', 0.08, freeEnchant(0.04))]],
                ['Meditation', 'amethyst_shard', [magic('mana_regen', 0.08, xpMobs(0.04))]],
                ['Focused Casting', 'blaze_powder', compactBonuses([optionalPercent('irons_spellbooks:cast_time_reduction', 0.04) || magic('spell_power', 0.03, freeEnchant(0.03))])]
            ],
            gate: [magic('spell_power', 0.03, xpMobs(0.03))],
            subclasses: [
                { id: 'elementalist', name: 'Elementalist', icon: 'blaze_powder', root: [schoolPower('fire', 0.06), schoolPower('ice', 0.06), schoolPower('lightning', 0.06)], nodes: [
                    ['Elemental Focus', 'fire_charge', [schoolPower('fire', 0.06)]],
                    ['Elemental Reserve', 'amethyst_shard', [magic('max_mana', 0.08, freeEnchant(0.05))]],
                    ['Elemental Mastery', 'blaze_powder', [schoolPower('fire', 0.08), schoolPower('ice', 0.08), schoolPower('lightning', 0.08)]]
                ]},
                { id: 'arcanist', name: 'Arcanist', icon: 'amethyst_shard', root: [magic('spell_power', 0.06, xpMobs(0.05)), magic('max_mana', 0.06, freeEnchant(0.04))], nodes: [
                    ['Deep Reserves', 'lapis_lazuli', [magic('max_mana', 0.10, freeEnchant(0.05))]],
                    ['Arcane Flow', 'ender_pearl', [magic('mana_regen', 0.10, xpMobs(0.05))]],
                    ['Archmage', 'end_crystal', [magic('spell_power', 0.10, xpMobs(0.08)), magic('max_mana', 0.08, freeEnchant(0.05))]]
                ]},
                { id: 'chronomancer', name: 'Chronomancer', icon: 'clock_00', root: compactBonuses([optionalPercent('irons_spellbooks:cooldown_reduction', 0.05) || magic('mana_regen', 0.05, xpMobs(0.04))]), nodes: [
                    ['Accelerated Casting', 'sugar', compactBonuses([optionalPercent('irons_spellbooks:cast_time_reduction', 0.05) || magic('spell_power', 0.04, freeEnchant(0.03))])],
                    ['Temporal Flow', 'clock_00', [percent('minecraft:generic.movement_speed', 0.03)]],
                    ['Timekeeper', 'clock_00', compactBonuses([optionalPercent('irons_spellbooks:cooldown_reduction', 0.08) || magic('mana_regen', 0.08, xpMobs(0.05)), percent('minecraft:generic.movement_speed', 0.03)])]
                ]}
            ]
        },
        {
            id: 'battlemage', name: 'Battlemage', icon: 'blaze_rod', color: 'C06EE8',
            root: compactBonuses([percent('minecraft:generic.attack_damage', 0.04), flat('minecraft:generic.armor', 1), magic('spell_power', 0.04, freeEnchant(0.03)), magic('max_mana', 0.05, xpMobs(0.03))]),
            core: [
                ['Martial Casting', 'iron_sword', [percent('minecraft:generic.attack_damage', 0.03)]],
                ['Arcane Guard', 'iron_chestplate', [flat('minecraft:generic.armor', 1)]],
                ['Spell Combat', 'blaze_rod', [magic('spell_power', 0.04, freeEnchant(0.03))]],
                ['Hybrid Reserves', 'lapis_lazuli', [magic('max_mana', 0.06, xpMobs(0.03))]]
            ],
            gate: [percent('minecraft:generic.attack_speed', 0.03)],
            subclasses: [
                { id: 'spellblade', name: 'Spellblade', icon: 'diamond_sword', root: [percent('minecraft:generic.attack_damage', 0.04), magic('spell_power', 0.04, freeEnchant(0.03))], nodes: [
                    ['Arcane Edge', 'iron_sword', [magic('spell_power', 0.05, xpMobs(0.03))]],
                    ['Battle Tempo', 'sugar', [percent('minecraft:generic.attack_speed', 0.05)]],
                    ['Spellsteel', 'diamond_sword', [percent('minecraft:generic.attack_damage', 0.05), magic('spell_power', 0.05, freeEnchant(0.03))]]
                ]},
                { id: 'arcane_knight', name: 'Arcane Knight', icon: 'diamond_chestplate', root: [flat('minecraft:generic.armor', 2), magic('max_mana', 0.05, xpMobs(0.03))], nodes: [
                    ['Runic Armor', 'iron_chestplate', [flat('minecraft:generic.armor_toughness', 1)]],
                    ['Ward Reserve', 'lapis_lazuli', [magic('mana_regen', 0.06, freeEnchant(0.03))]],
                    ['Arcane Bastion', 'diamond_chestplate', [flat('minecraft:generic.armor', 2), magic('spell_power', 0.04, xpMobs(0.03))]]
                ]},
                { id: 'blood_knight', name: 'Blood Knight', icon: 'redstone', root: [schoolPower('blood', 0.06), percent('minecraft:generic.max_health', 0.04)], nodes: [
                    ['Crimson Edge', 'redstone', [schoolPower('blood', 0.06)]],
                    ['Bloodforged', 'iron_ingot', [percent('minecraft:generic.attack_damage', 0.04)]],
                    ['Crimson Champion', 'netherite_sword', [schoolPower('blood', 0.08), percent('minecraft:generic.attack_damage', 0.05), percent('minecraft:generic.max_health', -0.03)]]
                ]}
            ]
        },
        {
            id: 'cleric', name: 'Cleric', icon: 'totem_of_undying', color: 'F1D776',
            root: compactBonuses([schoolPower('holy', 0.06), magic('mana_regen', 0.06, xpMobs(0.04)), percent('minecraft:generic.max_health', 0.04)]),
            core: [
                ['Faith', 'gold_nugget', [schoolPower('holy', 0.04)]],
                ['Devotion', 'ghast_tear', [percent('minecraft:generic.max_health', 0.04)]],
                ['Prayer', 'book', [magic('mana_regen', 0.06, xpMobs(0.03))]],
                ['Sacred Guard', 'golden_apple', [flat('minecraft:generic.armor', 1)]]
            ],
            gate: [schoolPower('holy', 0.03)],
            subclasses: [
                { id: 'priest', name: 'Priest', icon: 'ghast_tear', root: [schoolPower('holy', 0.06), magic('mana_regen', 0.06, xpMobs(0.04))], nodes: [
                    ['Grace', 'golden_apple', [percent('minecraft:generic.max_health', 0.04)]],
                    ['Divine Channel', 'ghast_tear', [schoolPower('holy', 0.07)]],
                    ['High Priest', 'totem_of_undying', [schoolPower('holy', 0.08), magic('max_mana', 0.06, freeEnchant(0.04))]]
                ]},
                { id: 'crusader', name: 'Crusader', icon: 'golden_sword', root: [percent('minecraft:generic.attack_damage', 0.04), flat('minecraft:generic.armor', 1), schoolPower('holy', 0.03)], nodes: [
                    ['Zeal', 'golden_sword', [percent('minecraft:generic.attack_speed', 0.04)]],
                    ['Consecrated Armor', 'golden_chestplate', [flat('minecraft:generic.armor', 2)]],
                    ['Holy Warrior', 'totem_of_undying', [percent('minecraft:generic.attack_damage', 0.05), schoolPower('holy', 0.05)]]
                ]},
                { id: 'oracle', name: 'Oracle', icon: 'ender_eye', root: [magic('max_mana', 0.06, xpMobs(0.04)), freeEnchant(0.05)], nodes: [
                    ['Insight', 'book', [xpMobs(0.06)]],
                    ['Foresight', 'ender_eye', [critChance(0.02)]],
                    ['Prophecy', 'ender_eye', [freeEnchant(0.08), magic('mana_regen', 0.06, xpMobs(0.04))]]
                ]}
            ]
        },
        {
            id: 'occultist', name: 'Occultist', icon: 'ender_eye', color: '9B4B70',
            root: compactBonuses([magic('max_mana', 0.08, xpMobs(0.04)), schoolPower('eldritch', 0.05), percent('minecraft:generic.max_health', -0.04)]),
            core: [
                ['Forbidden Study', 'book', [magic('spell_power', 0.04, freeEnchant(0.03))]],
                ['Dark Reserve', 'ender_pearl', [magic('max_mana', 0.06, xpMobs(0.03))]],
                ['Blood Price', 'redstone', [schoolPower('blood', 0.04)]],
                ['Unseen Paths', 'chorus_fruit', [schoolPower('ender', 0.04)]]
            ],
            gate: [magic('spell_power', 0.03, xpMobs(0.03))],
            subclasses: [
                { id: 'blood_mage', name: 'Blood Mage', icon: 'redstone', root: [schoolPower('blood', 0.08), percent('minecraft:generic.max_health', -0.04)], nodes: [
                    ['Sanguine Study', 'redstone', [schoolPower('blood', 0.06)]],
                    ['Vital Sacrifice', 'fermented_spider_eye', [magic('spell_power', 0.05, xpMobs(0.04))]],
                    ['Crimson Mastery', 'redstone', [schoolPower('blood', 0.10), percent('minecraft:generic.max_health', -0.03)]]
                ]},
                { id: 'necromancer', name: 'Necromancer', icon: 'bone', root: compactBonuses([optionalPercent('irons_spellbooks:summon_damage', 0.08) || magic('spell_power', 0.05, xpMobs(0.04))]), nodes: [
                    ['Grave Study', 'bone', [magic('max_mana', 0.05, freeEnchant(0.03))]],
                    ['Dark Servants', 'bone', compactBonuses([optionalPercent('irons_spellbooks:summon_damage', 0.08) || magic('spell_power', 0.05, xpMobs(0.04))])],
                    ['Lord of the Dead', 'coal', compactBonuses([optionalPercent('irons_spellbooks:summon_damage', 0.12) || magic('spell_power', 0.08, xpMobs(0.05))])]
                ]},
                { id: 'voidcaller', name: 'Voidcaller', icon: 'chorus_fruit', root: [schoolPower('eldritch', 0.06), schoolPower('ender', 0.05)], nodes: [
                    ['Beyond the Veil', 'ender_pearl', [schoolPower('ender', 0.06)]],
                    ['Eldritch Knowledge', 'echo_shard', [schoolPower('eldritch', 0.07)]],
                    ['Call of the Void', 'chorus_fruit', [schoolPower('eldritch', 0.08), schoolPower('ender', 0.08)]]
                ]}
            ]
        },
        {
            id: 'artificer', name: 'Artificer', icon: 'redstone', color: 'E79A3B',
            root: [blockBreak(0.05), durability(0.06, 'minecraft:enchantable/mining'), freeEnchant(0.04), flat('minecraft:player.block_interaction_range', 0.5)],
            core: [
                ['Toolcraft', 'iron_ingot', [durability(0.06, 'minecraft:enchantable/mining')]],
                ['Workshop Reach', 'compass_00', [flat('minecraft:player.block_interaction_range', 0.5)]],
                ['Efficient Repairs', 'iron_ingot', [repairEfficiency(0.10, 'minecraft:enchantable/mining')]],
                ['Arcane Craft', 'lapis_lazuli', [freeEnchant(0.05)]]
            ],
            gate: [durability(0.05, 'minecraft:enchantable/mining')],
            subclasses: [
                { id: 'blacksmith', name: 'Blacksmith', icon: 'iron_ingot', root: [repairEfficiency(0.12, 'minecraft:enchantable/mining'), durability(0.08, 'minecraft:enchantable/mining')], nodes: [
                    ['Tempering', 'iron_ingot', [repairEfficiency(0.10, 'minecraft:enchantable/mining')]],
                    ['Hard Wearing', 'diamond', [durability(0.10, 'minecraft:enchantable/mining')]],
                    ['Master Smith', 'netherite_ingot', [repairEfficiency(0.15, 'minecraft:enchantable/mining'), durability(0.10, 'minecraft:enchantable/mining')]]
                ]},
                { id: 'runesmith', name: 'Runesmith', icon: 'lapis_lazuli', root: [freeEnchant(0.08), xpMobs(0.04)], nodes: [
                    ['Runic Study', 'book', [freeEnchant(0.05)]],
                    ['Arcane Salvage', 'amethyst_shard', [xpMobs(0.06)]],
                    ['Master Runesmith', 'enchanted_book', [freeEnchant(0.10), xpMobs(0.06)]]
                ]},
                { id: 'alchemist', name: 'Alchemist', icon: 'glass_bottle', root: [percent('minecraft:generic.movement_speed', 0.02), freeEnchant(0.03)], nodes: [
                    ['Careful Measures', 'glass_bottle', [xpMobs(0.04)]],
                    ['Potent Mixtures', 'glowstone_dust', [percent('minecraft:generic.max_health', 0.03)]],
                    ['Master Alchemist', 'dragon_breath', [percent('minecraft:generic.movement_speed', 0.03), percent('minecraft:generic.max_health', 0.03)]]
                ]}
            ]
        },
        {
            id: 'monk', name: 'Monk', icon: 'feather', color: '6DC6A5',
            root: [percent('minecraft:generic.attack_speed', 0.08), percent('minecraft:generic.movement_speed', 0.05), flat('minecraft:generic.armor', -1)],
            core: [
                ['Discipline', 'paper', [percent('minecraft:generic.attack_speed', 0.04)]],
                ['Fleet Step', 'feather', [percent('minecraft:generic.movement_speed', 0.03)]],
                ['Focused Strike', 'brick', [critChance(0.02)]],
                ['Inner Strength', 'golden_apple', [percent('minecraft:generic.max_health', 0.03)]]
            ],
            gate: [percent('minecraft:generic.attack_speed', 0.03)],
            subclasses: [
                { id: 'pugilist', name: 'Pugilist', icon: 'brick', root: [percent('minecraft:generic.attack_speed', 0.06), critDamage(0.05)], nodes: [
                    ['Rapid Strikes', 'sugar', [percent('minecraft:generic.attack_speed', 0.06)]],
                    ['Heavy Hands', 'brick', [percent('minecraft:generic.attack_damage', 0.04)]],
                    ['Hundred Fists', 'rabbit_foot', [percent('minecraft:generic.attack_speed', 0.08), critChance(0.03)]]
                ]},
                { id: 'wayfarer', name: 'Wayfarer', icon: 'feather', root: [percent('minecraft:generic.movement_speed', 0.06), percent('minecraft:generic.max_health', 0.03)], nodes: [
                    ['Long Road', 'leather_boots', [percent('minecraft:generic.movement_speed', 0.04)]],
                    ['Wanderer', 'compass_00', [percent('minecraft:generic.max_health', 0.04)]],
                    ['Untouchable', 'feather', [percent('minecraft:generic.movement_speed', 0.06), critChance(0.02)]]
                ]},
                { id: 'spirit_monk', name: 'Spirit Monk', icon: 'echo_shard', root: compactBonuses([magic('max_mana', 0.05, xpMobs(0.03)), magic('spell_power', 0.03, freeEnchant(0.03)), percent('minecraft:generic.attack_speed', 0.03)]), nodes: [
                    ['Inner Flow', 'amethyst_shard', [magic('mana_regen', 0.05, xpMobs(0.03))]],
                    ['Spirit Strike', 'echo_shard', [magic('spell_power', 0.05, freeEnchant(0.03))]],
                    ['Perfect Balance', 'echo_shard', compactBonuses([percent('minecraft:generic.attack_speed', 0.05), magic('spell_power', 0.05, xpMobs(0.03))])]
                ]}
            ]
        }
    ]


    // Native Passive Skill Tree artwork for class/subclass identity.
    const CLASS_ICONS = {
        warrior: pstIcon('skill_tree/soldier'), guardian: pstIcon('chestplate_bronze_fur'),
        ranger: pstIcon('skill_tree/hunter'), rogue: pstIcon('eye_green'), mage: pstIcon('potion_indigo_small'),
        battlemage: pstIcon('sword_gold'), cleric: pstIcon('cross_green'), occultist: pstIcon('potion_black_big'),
        artificer: pstIcon('glove_steel'), monk: pstIcon('glove_gold')
    }
    const SUBCLASS_ICONS = {
        berserker: pstIcon('heart_red'), weapon_master: pstIcon('sword_iron'), vanguard: pstIcon('chestplate_bronze_fur'),
        juggernaut: pstIcon('chestplate_fur'), warden: pstIcon('chestplate_bronze_fur'), sentinel: pstIcon('eye_green'),
        marksman: pstIcon('bow_diamond'), hunter: pstIcon('bow_emerald'), beastmaster: pstIcon('bone'),
        assassin: pstIcon('skull'), duelist: pstIcon('sword_gold'), shadowblade: pstIcon('void'),
        elementalist: pstIcon('potion_double'), arcanist: pstIcon('potion_indigo_small'), chronomancer: pstIcon('potion_cyan_big'),
        spellblade: pstIcon('sword_gold'), arcane_knight: pstIcon('chestplate_bronze_fur'), blood_knight: pstIcon('heart_red'),
        priest: pstIcon('cross_green'), crusader: pstIcon('cross_red'), oracle: pstIcon('eye_green'),
        blood_mage: pstIcon('potion_red_big'), necromancer: pstIcon('skull'), voidcaller: pstIcon('void'),
        blacksmith: pstIcon('glove_steel'), runesmith: pstIcon('glove_diamond'), alchemist: pstIcon('skill_tree/alchemist'),
        pugilist: pstIcon('glove_iron'), wayfarer: pstIcon('boots_leather'), spirit_monk: pstIcon('heart_cyan')
    }

    classes.forEach(def => {
        def.icon = CLASS_ICONS[def.id] || def.icon
        def.subclasses.forEach(sub => { sub.icon = SUBCLASS_ICONS[sub.id] || sub.icon })

        // Conservative Apothic hooks: these are deliberately much smaller than typical Apotheosis affixes.
        if (def.id === 'warrior') def.root.push(armorShred(0.015))
        if (def.id === 'guardian') def.root.push(healingReceived(0.04))
        if (def.id === 'ranger') def.root.push(projectileDamage(0.05), drawSpeed(0.04))
        if (def.id === 'rogue') def.root.push(dodge(0.02))
        if (def.id === 'occultist') def.root.push(lifeSteal(0.005))
        if (def.id === 'artificer') def.root.push(apothicXp(0.04))
        if (def.id === 'monk') def.root.push(dodge(0.02))

        def.subclasses.forEach(sub => {
            if (sub.id === 'berserker') sub.root.push(lifeSteal(0.004))
            if (sub.id === 'weapon_master') sub.root.push(armorPierce(0.5))
            if (sub.id === 'marksman') sub.root.push(projectileDamage(0.05), drawSpeed(0.04))
            if (sub.id === 'assassin') sub.root.push(dodge(0.015))
            if (sub.id === 'duelist') sub.root.push(dodge(0.01))
            if (sub.id === 'blood_knight' || sub.id === 'blood_mage') sub.root.push(lifeSteal(0.005))
            if (sub.id === 'runesmith') sub.root.push(lootDup(0.015, 'gems'), apothicXp(0.03))
            if (sub.id === 'pugilist' || sub.id === 'wayfarer') sub.root.push(dodge(0.015))
        })
    })

    classes.forEach((def, index) => buildClass(def, index))


    // ---------------------------------------------------------------------
    // UNIVERSAL PROFESSION SIDE BRANCHES
    // Same global skill points as classes. No separate profession currency.
    // ---------------------------------------------------------------------

    function buildProfession(def, index) {
        const columns = 4
        const row = Math.floor(index / columns)
        const col = index % columns
        const rootX = -480 + col * 320
        const rootY = 1120 + row * 470
        const color = def.color

        function pn(part, x, y, title, iconName, bonuses, type, start, tags) {
            return addNode('tk3_prof_' + def.id + '_' + part, x, y, title, iconName, bonuses, {
                type: type || 'lesser', color: color, start: !!start, tags: tags || []
            })
        }

        const root = pn('root', rootX, rootY, def.name, def.icon, def.nodes[0][2], 'class', true)
        const a = pn('1', rootX - 42, rootY + 72, def.nodes[1][0], def.nodes[1][1], def.nodes[1][2], 'lesser')
        const b = pn('2', rootX + 42, rootY + 72, def.nodes[2][0], def.nodes[2][1], def.nodes[2][2], 'lesser')
        const c = pn('3', rootX - 68, rootY + 144, def.nodes[3][0], def.nodes[3][1], def.nodes[3][2], 'lesser')
        const d = pn('4', rootX + 68, rootY + 144, def.nodes[4][0], def.nodes[4][1], def.nodes[4][2], 'lesser')
        const e = pn('5', rootX - 68, rootY + 216, def.nodes[5][0], def.nodes[5][1], def.nodes[5][2], 'notable')
        const f = pn('6', rootX + 68, rootY + 216, def.nodes[6][0], def.nodes[6][1], def.nodes[6][2], 'notable')
        const g = pn('7', rootX - 38, rootY + 288, def.nodes[7][0], def.nodes[7][1], def.nodes[7][2], 'lesser')
        const h = pn('8', rootX + 38, rootY + 288, def.nodes[8][0], def.nodes[8][1], def.nodes[8][2], 'lesser')
        const master = pn('master', rootX, rootY + 365, def.nodes[9][0], def.masterIcon || def.nodes[9][1],
            def.nodes[9][2].concat(stateTag('tk3_profession_master_' + def.id)), 'keystone', false, ['profession_mastery'])

        connect(root, a); connect(root, b)
        connect(a, c); connect(b, d)
        connect(c, e); connect(d, f)
        connect(e, g); connect(f, h)
        connect(g, master); connect(h, master)
    }

    const professions = [
        {
            id: 'mining', name: 'Mining', icon: pstIcon('glove_steel'), masterIcon: pstIcon('glove_diamond'), color: '78A6C8',
            nodes: [
                ['Mining', pstIcon('glove_steel'), compactBonuses([blockBreak(0.04), apothicMining(0.02)])],
                ['Mining Speed I', 'stone_pickaxe', [blockBreak(0.04)]],
                ['Tool Care I', 'iron_ingot', [durability(0.04, 'minecraft:enchantable/mining')]],
                ['Mining Speed II', 'iron_pickaxe', compactBonuses([blockBreak(0.05), apothicMining(0.02)])],
                ['Repair Knowledge', 'iron_ingot', [repairEfficiency(0.08, 'minecraft:enchantable/mining')]],
                ['Prospecting I', 'raw_iron', [lootDup(0.02, 'ore')]],
                ['Deep Reach', 'compass_00', [flat('minecraft:player.block_interaction_range', 0.35)]],
                ['Prospecting II', 'raw_gold', [lootDup(0.025, 'ore')]],
                ['Tool Care II', 'diamond_pickaxe', [durability(0.05, 'minecraft:enchantable/mining')]],
                ['Master Miner', pstIcon('glove_diamond'), compactBonuses([blockBreak(0.06), apothicMining(0.03), lootDup(0.025, 'ore')])]
            ]
        },
        {
            id: 'logging', name: 'Logging', icon: pstIcon('glove_bronze'), masterIcon: pstIcon('glove_steel'), color: '8DB15D',
            nodes: [
                ['Logging', pstIcon('glove_bronze'), [blockBreak(0.04, hasItemInHand('minecraft:axes'))]],
                ['Chopping I', 'stone_axe', [blockBreak(0.05, hasItemInHand('minecraft:axes'))]],
                ['Axe Care I', 'iron_ingot', [durability(0.04, 'minecraft:axes')]],
                ['Chopping II', 'iron_axe', [blockBreak(0.05, hasItemInHand('minecraft:axes'))]],
                ['Axe Repair', 'iron_ingot', [repairEfficiency(0.08, 'minecraft:axes')]],
                ['Lumberjack', 'diamond_axe', [blockBreak(0.06, hasItemInHand('minecraft:axes'))]],
                ['Forester', 'stick', [percent('minecraft:generic.movement_speed', 0.01)]],
                ['Axe Care II', 'diamond', [durability(0.05, 'minecraft:axes')]],
                ['Forest Legs', pstIcon('boots_leather'), [percent('minecraft:generic.movement_speed', 0.015)]],
                ['Master Lumberjack', pstIcon('glove_steel'), [blockBreak(0.07, hasItemInHand('minecraft:axes')), durability(0.05, 'minecraft:axes')]]
            ]
        },
        {
            id: 'farming', name: 'Farming', icon: pstIcon('apple_green'), masterIcon: pstIcon('meal'), color: 'D6B94E',
            nodes: [
                ['Farming', pstIcon('apple_green'), [flat('minecraft:player.block_interaction_range', 0.20)]],
                ['Field Work I', 'wooden_hoe', [blockBreak(0.04, hasItemInHand('minecraft:hoes'))]],
                ['Hoe Care I', 'iron_ingot', [durability(0.04, 'minecraft:hoes')]],
                ['Field Work II', 'iron_hoe', [blockBreak(0.05, hasItemInHand('minecraft:hoes'))]],
                ['Farm Reach', 'carrot', [flat('minecraft:player.block_interaction_range', 0.25)]],
                ['Efficient Tools', 'diamond_hoe', [repairEfficiency(0.08, 'minecraft:hoes')]],
                ['Healthy Living', pstIcon('apple_green'), [percent('minecraft:generic.max_health', 0.02)]],
                ['Hoe Care II', 'diamond', [durability(0.05, 'minecraft:hoes')]],
                ['Field Pace', pstIcon('boots_leather'), [percent('minecraft:generic.movement_speed', 0.015)]],
                ['Master Farmer', pstIcon('meal'), [flat('minecraft:player.block_interaction_range', 0.35), percent('minecraft:generic.max_health', 0.02)]]
            ]
        },
        {
            id: 'fishing', name: 'Fishing', icon: pstIcon('fishing_rod_steel'), masterIcon: pstIcon('fishing_rod_diamond'), color: '4FB9C4',
            nodes: [
                ['Fishing', pstIcon('fishing_rod_steel'), [lootDup(0.015, 'fishing')]],
                ['Angler I', 'cod', [lootDup(0.015, 'fishing')]],
                ['Rod Care I', 'string', [durability(0.04, 'minecraft:enchantable/fishing')]],
                ['Angler II', 'salmon', [lootDup(0.02, 'fishing')]],
                ['Lucky Waters', 'nautilus_shell', [flat('minecraft:generic.luck', 0.35)]],
                ['Treasure Fisher', pstIcon('treasure_chest_gold'), [lootDup(0.02, 'fishing')]],
                ['Patient Hands', 'clock_00', [durability(0.05, 'minecraft:enchantable/fishing')]],
                ['Rod Care II', 'prismarine_crystals', [repairEfficiency(0.08, 'minecraft:enchantable/fishing')]],
                ['Sea Legs', pstIcon('boots_leather'), [percent('minecraft:generic.movement_speed', 0.015)]],
                ['Master Angler', pstIcon('fishing_rod_diamond'), [lootDup(0.025, 'fishing'), flat('minecraft:generic.luck', 0.35)]]
            ]
        },
        {
            id: 'hunting', name: 'Hunting', icon: pstIcon('skill_tree/hunter'), masterIcon: pstIcon('skull'), color: 'A66A4A',
            nodes: [
                ['Hunting', pstIcon('skill_tree/hunter'), [xpMobs(0.03)]],
                ['Tracking I', 'compass_00', [percent('minecraft:generic.movement_speed', 0.01)]],
                ['Field Knowledge I', pstIcon('bone'), [lootDup(0.0125, 'mobs')]],
                ['Tracking II', pstIcon('eye_green'), [critChance(0.005)]],
                ['Field Knowledge II', 'rabbit_hide', [lootDup(0.0125, 'mobs')]],
                ['Monster Lore', pstIcon('skull'), [xpMobs(0.04)]],
                ['Trophy Sense', pstIcon('treasure_chest'), [flat('minecraft:generic.luck', 0.25)]],
                ['Veteran Hunter', pstIcon('bow_emerald'), [critDamage(0.03)]],
                ['Elite Pursuit', pstIcon('eye_green'), [percent('minecraft:generic.movement_speed', 0.015)]],
                ['Master Hunter', pstIcon('skull'), [xpMobs(0.05), lootDup(0.015, 'mobs')]]
            ]
        },
        {
            id: 'exploration', name: 'Exploration', icon: pstIcon('torch'), masterIcon: pstIcon('treasure_chest_gold'), color: 'D58A52',
            nodes: [
                ['Exploration', pstIcon('torch'), [percent('minecraft:generic.movement_speed', 0.01)]],
                ['Pathfinder I', 'compass_00', [percent('minecraft:generic.movement_speed', 0.015)]],
                ['Scavenger I', pstIcon('treasure_chest'), [lootDup(0.01, 'chests')]],
                ['Pathfinder II', pstIcon('boots_leather'), [percent('minecraft:generic.movement_speed', 0.015)]],
                ['Archaeologist', 'brush', [lootDup(0.015, 'archaeology')]],
                ['Long Reach', 'spyglass', [flat('minecraft:player.block_interaction_range', 0.25)]],
                ['Scavenger II', pstIcon('treasure_chest_gold'), [lootDup(0.0125, 'chests')]],
                ['Hardy Traveler', pstIcon('heart_green'), [percent('minecraft:generic.max_health', 0.02)]],
                ['Lucky Find', pstIcon('eye_green'), [flat('minecraft:generic.luck', 0.25)]],
                ['Master Explorer', pstIcon('treasure_chest_gold'), [percent('minecraft:generic.movement_speed', 0.02), lootDup(0.0125, 'chests')]]
            ]
        },
        {
            id: 'crafting', name: 'Crafting', icon: pstIcon('glove_gold'), masterIcon: pstIcon('glove_diamond'), color: 'C99A58',
            nodes: [
                ['Crafting', pstIcon('glove_gold'), [freeEnchant(0.02)]],
                ['Repair Study I', 'iron_ingot', [repairEfficiency(0.05, 'minecraft:enchantable/mining')]],
                ['Arcane Study I', 'lapis_lazuli', [freeEnchant(0.025)]],
                ['Repair Study II', pstIcon('glove_steel'), [repairEfficiency(0.06, 'minecraft:enchantable/mining')]],
                ['Gem Appraisal', 'amethyst_shard', [lootDup(0.01, 'gems')]],
                ['Knowledge Retention', 'book', [apothicXp(0.025)]],
                ['Arcane Study II', 'enchanted_book', [freeEnchant(0.03)]],
                ['Gem Handling', pstIcon('glove_diamond'), [lootDup(0.0125, 'gems')]],
                ['Workshop Efficiency', 'clock_00', [flat('minecraft:player.block_interaction_range', 0.20)]],
                ['Master Crafter', pstIcon('glove_diamond'), [freeEnchant(0.035), apothicXp(0.03)]]
            ]
        }
    ]

    professions.forEach((def, index) => buildProfession(def, index))

    // ---------------------------------------------------------------------
    // UNIVERSAL PASSIVE DISCIPLINES
    // Small generic branches that let any archetype tune its playstyle.
    // Their final keystones are limited to two globally.
    // ---------------------------------------------------------------------

    function buildDiscipline(def, index) {
        const x = 960 + (index % 3) * 230
        const y = -260 + Math.floor(index / 3) * 520
        let prev = addNode('tk3_passive_' + def.id + '_root', x, y, def.name, def.icon, def.root, {
            type: 'class', color: def.color, start: true
        })
        def.nodes.forEach((entry, i) => {
            const last = i === def.nodes.length - 1
            const id = addNode('tk3_passive_' + def.id + '_' + (i + 1), x, y + 72 + i * 58,
                entry[0], entry[1], entry[2], { type: last ? 'keystone' : (i === 3 ? 'notable' : 'lesser'),
                    color: def.color, tags: last ? ['combat_keystone'] : [] })
            connect(prev, id)
            prev = id
        })
    }

    const disciplines = [
        { id:'power', name:'Power', icon:pstIcon('sword_iron'), color:'CF5B4B', root:[percent('minecraft:generic.attack_damage',0.015)], nodes:[
            ['Power I',pstIcon('sword_bronze'),[percent('minecraft:generic.attack_damage',0.0125)]],
            ['Power II',pstIcon('sword_iron'),[percent('minecraft:generic.attack_damage',0.0125)]],
            ['Sunder I',pstIcon('glove_steel'),[armorShred(0.0075)]],
            ['Heavy Pressure',pstIcon('sword_gold'),[armorPierce(0.25)]],
            ['Power III',pstIcon('sword_iron'),[percent('minecraft:generic.attack_damage',0.015)]],
            ['Sunder II',pstIcon('glove_diamond'),[armorShred(0.0075)]],
            ['Overpower',pstIcon('sword_gold'),[percent('minecraft:generic.attack_damage',0.02),armorShred(0.01)]] ] },
        { id:'precision', name:'Precision', icon:pstIcon('eye_green'), color:'B68BCB', root:[critChance(0.005)], nodes:[
            ['Precision I',pstIcon('eye_green'),[critChance(0.005)]],
            ['Critical Force I',pstIcon('sword_gold'),[critDamage(0.025)]],
            ['Precision II',pstIcon('eye_green'),[critChance(0.005)]],
            ['Critical Force II',pstIcon('sword_gold'),[critDamage(0.025)]],
            ['Precision III',pstIcon('eye_green'),[critChance(0.005)]],
            ['Critical Force III',pstIcon('sword_gold'),[critDamage(0.025)]],
            ['Deadly Focus',pstIcon('skull'),[critChance(0.01),critDamage(0.04)]] ] },
        { id:'defense', name:'Defense', icon:pstIcon('chestplate_bronze_fur'), color:'7894C9', root:[flat('minecraft:generic.armor',0.5)], nodes:[
            ['Armor I',pstIcon('chestplate_leather'),[flat('minecraft:generic.armor',0.5)]],
            ['Vitality I',pstIcon('heart_green'),[percent('minecraft:generic.max_health',0.015)]],
            ['Armor II',pstIcon('chestplate_bronze_fur'),[flat('minecraft:generic.armor',0.5)]],
            ['Toughness',pstIcon('chestplate_fur'),[flat('minecraft:generic.armor_toughness',0.5)]],
            ['Vitality II',pstIcon('heart_green'),[percent('minecraft:generic.max_health',0.015)]],
            ['Steadfast',pstIcon('boots_bronze'),[flat('minecraft:generic.knockback_resistance',0.025)]],
            ['Fortress',pstIcon('chestplate_fur'),[flat('minecraft:generic.armor',1),percent('minecraft:generic.max_health',0.02)]] ] },
        { id:'mobility', name:'Mobility', icon:pstIcon('boots_leather'), color:'69BDA7', root:[percent('minecraft:generic.movement_speed',0.01)], nodes:[
            ['Fleet I',pstIcon('boots_leather'),[percent('minecraft:generic.movement_speed',0.01)]],
            ['Evasion I',pstIcon('eye_green'),[dodge(0.005)]],
            ['Fleet II',pstIcon('boots_gold'),[percent('minecraft:generic.movement_speed',0.01)]],
            ['Evasion II',pstIcon('eye_green'),[dodge(0.005)]],
            ['Fleet III',pstIcon('boots_gold'),[percent('minecraft:generic.movement_speed',0.0125)]],
            ['Evasion III',pstIcon('eye_green'),[dodge(0.005)]],
            ['Untouchable',pstIcon('boots_gold'),[percent('minecraft:generic.movement_speed',0.015),dodge(0.01)]] ] },
        { id:'sustain', name:'Sustain', icon:pstIcon('heart_red'), color:'D66C78', root:[healingReceived(0.02)], nodes:[
            ['Recovery I',pstIcon('cross_green'),[healingReceived(0.02)]],
            ['Vital Reserve I',pstIcon('heart_red'),[percent('minecraft:generic.max_health',0.01)]],
            ['Recovery II',pstIcon('cross_green'),[healingReceived(0.02)]],
            ['Leech I',pstIcon('heart_black'),[lifeSteal(0.0025)]],
            ['Vital Reserve II',pstIcon('heart_red'),[percent('minecraft:generic.max_health',0.01)]],
            ['Leech II',pstIcon('heart_black'),[lifeSteal(0.0025)]],
            ['Battle Recovery',pstIcon('cross_red'),[healingReceived(0.03),lifeSteal(0.005)]] ] }
    ]
    disciplines.forEach((def,index)=>buildDiscipline(def,index))

    // ---------------------------------------------------------------------
    // GENERAL ADVENTURING BRANCHES
    // ---------------------------------------------------------------------
    function buildGeneral(def,index) {
        const x = -1480 + index * 260
        const y = 760
        let prev = addNode('tk3_general_' + def.id + '_root',x,y,def.name,def.icon,def.root,{type:'class',color:def.color,start:true})
        def.nodes.forEach((entry,i)=>{
            const id=addNode('tk3_general_' + def.id + '_' + (i+1),x,y+68+i*55,entry[0],entry[1],entry[2],{type:i===def.nodes.length-1?'notable':'lesser',color:def.color})
            connect(prev,id); prev=id
        })
    }
    const generalBranches=[
        {id:'adventuring',name:'Adventuring',icon:pstIcon('torch'),color:'D18F5A',root:[percent('minecraft:generic.movement_speed',0.01)],nodes:[
            ['Traveler I',pstIcon('boots_leather'),[percent('minecraft:generic.movement_speed',0.01)]],
            ['Hardy I',pstIcon('heart_green'),[percent('minecraft:generic.max_health',0.01)]],
            ['Reach I','spyglass',[flat('minecraft:player.block_interaction_range',0.15)]],
            ['Traveler II',pstIcon('boots_gold'),[percent('minecraft:generic.movement_speed',0.01)]],
            ['Hardy II',pstIcon('heart_green'),[percent('minecraft:generic.max_health',0.01)]],
            ['Reach II','spyglass',[flat('minecraft:player.block_interaction_range',0.15)]],
            ['Fortunate Path',pstIcon('treasure_chest'),[flat('minecraft:generic.luck',0.20)]],
            ['Seasoned Adventurer',pstIcon('torch'),[percent('minecraft:generic.max_health',0.015),percent('minecraft:generic.movement_speed',0.01)]] ]},
        {id:'knowledge',name:'Knowledge',icon:'book',color:'B8A86A',root:[apothicXp(0.02)],nodes:[
            ['Study I','book',[apothicXp(0.02)]],
            ['Enchanting Theory I','lapis_lazuli',[freeEnchant(0.015)]],
            ['Study II','book',[apothicXp(0.02)]],
            ['Repair Theory','iron_ingot',[repairEfficiency(0.04,'minecraft:enchantable/mining')]],
            ['Enchanting Theory II','enchanted_book',[freeEnchant(0.02)]],
            ['Study III','book',[apothicXp(0.025)]],
            ['Practical Knowledge',pstIcon('glove_gold'),[durability(0.025,'minecraft:enchantable/mining')]],
            ['Master Scholar','enchanted_book',[apothicXp(0.03),freeEnchant(0.02)]] ]}
    ]
    generalBranches.forEach((def,index)=>buildGeneral(def,index))

    // ---------------------------------------------------------------------
    // IRON'S SPELLBOOKS SCHOOL MASTERY
    // Generated only when the corresponding school attributes exist.
    // Final school masteries are limited to two globally.
    // ---------------------------------------------------------------------
    function buildSchool(school,index) {
        const attr='irons_spellbooks:' + school + '_spell_power'
        if (!hasAttribute(attr)) return
        const angle=15+index*40
        const base=polar(angle,1320,0)
        const schoolIcon = school==='blood'?pstIcon('potion_red_big'):
            school==='holy'?pstIcon('cross_green'):
            school==='eldritch'?pstIcon('potion_black_big'):
            school==='ender'?pstIcon('void'):
            school==='nature'?pstIcon('apple_green'):
            school==='ice'?pstIcon('potion_cyan_big'):
            school==='fire'?pstIcon('potion_yellow_big'):
            school==='lightning'?pstIcon('potion_white_big'):pstIcon('potion_indigo_small')
        const color={fire:'E46A42',ice:'66C7E6',lightning:'E6D65A',holy:'F3DC86',ender:'8666C5',blood:'B84B57',evocation:'A98BDB',nature:'69A85D',eldritch:'65466E'}[school]||'BBAADD'
        let prev=addNode('tk3_magic_' + school + '_root',base.x,base.y,school.charAt(0).toUpperCase()+school.slice(1)+' Mastery',schoolIcon,[schoolPower(school,0.02)],{type:'class',color:color,start:true})
        for(let r=1;r<=4;r++){
            const p=polar(angle,1320+r*68,0)
            const id=addNode('tk3_magic_' + school + '_' + r,p.x,p.y,school.charAt(0).toUpperCase()+school.slice(1)+' Power '+roman(r),schoolIcon,[schoolPower(school,0.02)],{type:r===4?'notable':'lesser',color:color})
            connect(prev,id); prev=id
        }
        const rp=polar(angle,1665,0)
        const resist=schoolResist(school,0.03)
        const rid=addNode('tk3_magic_' + school + '_resist',rp.x,rp.y,school.charAt(0).toUpperCase()+school.slice(1)+' Affinity',schoolIcon,compactBonuses([resist]),{type:'lesser',color:color})
        connect(prev,rid); prev=rid
        const kp=polar(angle,1735,0)
        const kid=addNode('tk3_magic_' + school + '_master',kp.x,kp.y,school.charAt(0).toUpperCase()+school.slice(1)+' Master',schoolIcon,[schoolPower(school,0.04)],{type:'keystone',color:color,tags:['magic_school_mastery']})
        connect(prev,kid)
    }
    ;['fire','ice','lightning','holy','ender','blood','evocation','nature','eldritch'].forEach((school,index)=>buildSchool(school,index))

    // ---------------------------------------------------------------------
    // WRITE GENERATED DATA
    // ---------------------------------------------------------------------

    Object.keys(skills).forEach(id => {
        JsonIO.write('kubejs/data/skilltree/skills/' + id + '.json', skills[id])
    })

    // Hide/empty the built-in example trees so TK3 uses one coherent main tree.
    ;['alchemist', 'cook', 'hunter', 'tree'].forEach(id => {
        JsonIO.write('kubejs/data/skilltree/skill_trees/' + id + '.json', {
            id: 'skilltree:' + id,
            skillIds: []
        })
    })

    JsonIO.write('kubejs/data/skilltree/skill_trees/main_tree.json', {
        id: 'skilltree:main_tree',
        skillIds: Object.keys(skills).map(id => skills[id].id),
        skillLimitations: {
            archetype: 1,
            subclass: 1,
            profession_mastery: 2,
            combat_keystone: 2,
            magic_school_mastery: 2
        }
    })

    JsonIO.write('kubejs/data/tk3/skilltree_generation_summary.json', {
        version: '1.0-baseline',
        generatedNodes: Object.keys(skills).length,
        archetypes: classes.map(c => c.id),
        professions: professions.map(p => p.id),
        disciplines: disciplines.map(d => d.id),
        generalBranches: generalBranches.map(g => g.id),
        detected: { ironsSpellbooks: hasAttribute('irons_spellbooks:spell_power'), apothicAttributes: hasAttribute('apothic_attributes:crit_chance') },
        recommendedInitialMaxSkillPoints: 150,
        rules: {
            archetypeLimit: 1,
            subclassLimit: 1,
            nativePointCostPerNode: 1,
            professionMasteryLimit: 2,
            combatKeystoneLimit: 2,
            magicSchoolMasteryLimit: 2
        }
    })

    console.info('[TK3 SkillTree v1.0] Generated ' + Object.keys(skills).length + ' nodes.')
    console.info('[TK3 SkillTree] Archetypes: ' + classes.map(c => c.name).join(', '))
    console.info('[TK3 SkillTree] Professions: ' + professions.map(p => p.name).join(', '))
    console.info('[TK3 SkillTree] Iron\'s Spellbooks detected: ' + hasAttribute('irons_spellbooks:spell_power'))
    console.info('[TK3 SkillTree] Apothic Attributes detected: ' + hasAttribute('apothic_attributes:crit_chance'))
})()