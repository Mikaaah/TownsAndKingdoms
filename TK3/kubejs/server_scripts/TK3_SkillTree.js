// Towns & Kingdoms 3 - Passive Skill Tree v4.6.0 - MAIN TRUNKS AND RETURNING SIDE BRANCHES
// Minecraft 1.21.1 NeoForge / Passive Skill Tree 1.21.1 port / KubeJS
// One giant tree: shared centre, eight professions, six classes, eighteen subclasses and six wildcard branches.
// Every one of the 1,801 skills is assigned to a unique spot on the SAME 120 x 120 square lattice.
// Every group has one main path, with side paths attached along that trunk.
// Side paths turn inward, sideways and backwards; ranks need not move away from the origin.
// Grid spacing: 80 game units. Preview: 6,000 x 6,000 pixels, 50 pixels between grid spots.
// v4.6.0: 120 side-path entries attach to main-path skills; the graph is one connected tree.
// Skill IDs, bonuses, icons, costs and selection limits are preserved.
// Branch-entry requirements follow their new trunk anchors. Mastery and ascendancy commitments are unchanged.
//
// Preserved gameplay rules:
// - Exactly ONE non-empty runtime tree. Opening the skill tree goes straight to the giant tree.
// - One global native skill-point pool; every node costs exactly 1 point.
// - Designed around a 150-point cap: signature class+subclass progression is reachable, but full completion is not.
// - V4 intentionally replaces the old coordinates; the new approved geometry is protected by a runtime fingerprint.
// - Six main classes: Warrior, Ranger, Rogue, Mage, Cleric and Occultist.
// - Guardian is folded into Warrior as Juggernaut; Battlemage is folded into Mage.
// - Monk and Artificer are removed as classes; their useful ideas move into General/Professions.
// - The center is a real shared character tree with class-neutral offense, defense, mobility, sustain, fortune and knowledge.
// - Shared-core petals are deliberately widened so icon/button frames have comfortable visual clearance.
// - Eight professions use large old-datapack-style radial wedges, including the new Alchemy profession.
// - Profession mastery/focus counts are unrestricted; the 150-point cap is the only profession budget.
// - Six neutral wildcard constellations fill the inter-petal gaps for hybrid/oddball builds.
// - Each class uses a large radial wedge: five foundation lobes -> mastery -> eight-rank advanced lobes -> specialization gate.
// - Subclass roots carry their defining positive AND negative tradeoffs.
// - Every class/subclass node has learned-skill requirements in addition to visual connections.
// - Subclasses use three 16-rank paths. Ascendancy is earned at Rank VIII commitments; Ranks IX-XVI remain optional deep specialization.
// - Standalone Iron's school ladders are held for a later TP-satellite pass; school identities already live in Mage/Cleric/Occultist.
// IMPORTANT: Replace the previous T&K3 skill-tree package, then restart the game/server after generation.

(() => {
    const Registries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
    const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

    const TK3_SKILLTREE_VERSION = '4.6.0'
    const APPROVED_LAYOUT_FINGERPRINT = '4f6e469f'
    const TK3_GRID = { columns:120, rows:120, spacing:80, originColumn:60, originRow:60 }
    const skills = {}
    let originId = null

    function learnedSkill(skillId) {
        return { type: 'skilltree:learned_skill', skill_id: 'skilltree:' + skillId }
    }

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
    function apothicMining(amount) { return blockBreak(amount) }

    // Passive Skill Tree 1.21.1 conditions and high-impact mechanics.
    // These intentionally replace old/removed bonus IDs such as skilltree:stealth and
    // skilltree:item_durability_loss_avoidance.
    function crouchingCondition() { return { type: 'skilltree:crouching' } }
    function underwaterCondition() { return { type: 'skilltree:underwater' } }
    function fishingCondition() { return { type: 'skilltree:fishing' } }
    function foodLevelProvider() {
        return { type: 'skilltree:food_level', percentage: false, missing: false }
    }
    function foodAtLeast(level) {
        return {
            type: 'skilltree:numeric_value',
            value_provider: foodLevelProvider(),
            required_value: Math.max(0, level - 1),
            logic: 'MORE'
        }
    }
    function conditionalAttribute(name, amount, operation, condition, optional) {
        var b = attribute(name, amount, operation, !!optional)
        if (!b) return null
        if (condition) b.player_condition = condition
        return b
    }
    function wellFedPercent(name, amount, level) {
        return conditionalAttribute(name, amount, 1, foodAtLeast(level || 15), false)
    }
    function wellFedFlat(name, amount, level) {
        return conditionalAttribute(name, amount, 0, foodAtLeast(level || 15), false)
    }
    function underwaterPercent(name, amount) {
        return conditionalAttribute(name, amount, 1, underwaterCondition(), false)
    }
    function damageAvoidance(chance, condition) {
        var b = { type: 'skilltree:damage_avoidance', chance: chance }
        if (condition) b.player_condition = condition
        return b
    }
    // "Stealth" in the old tree was effectively evasive play. The 1.21.1 port has no
    // skilltree:stealth serializer, so crouching now grants real conditional avoidance.
    function stealth(amount) { return damageAvoidance(amount, crouchingCondition()) }
    function projectileDuplication(chance, condition) {
        var b = { type: 'skilltree:projectile_duplication', chance: chance }
        if (condition) b.player_condition = condition
        return b
    }
    function effectDuration(effectType, duration, target, condition) {
        var b = {
            type: 'skilltree:effect_duration',
            effect_type: effectType,
            duration: duration,
            target: target
        }
        if (condition) b.player_condition = condition
        return b
    }
    function selfSplashImmune() { return { type: 'skilltree:self_splash_immune' } }
    function canPoisonAnyone() { return { type: 'skilltree:can_poison_anyone' } }
    function lethalPoison() { return { type: 'skilltree:lethal_poison' } }

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
    function repairEfficiency(multiplier, tag) {
        return { type: 'skilltree:repair_efficiency', multiplier: multiplier, item_condition: itemTag(tag) }
    }
    // Kept as a compatibility helper for the existing definitions, but mapped to a real
    // 1.21.1 bonus. Better maintenance means more value from every repair, not a removed
    // durability-loss-avoidance serializer.
    function durability(chance, tag) {
        return repairEfficiency(chance, tag)
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
        else if (b.type === 'skilltree:projectile_speed' && typeof b.multiplier === 'number') b.multiplier *= factor
        else if (b.type === 'skilltree:arrow_retrieval' && typeof b.chance === 'number') b.chance *= factor
        else if (b.type === 'skilltree:block_break_speed' && typeof b.multiplier === 'number') b.multiplier *= factor
        else if (b.type === 'skilltree:free_enchantment' && typeof b.chance === 'number') b.chance *= factor
        else if (b.type === 'skilltree:gained_experience' && typeof b.multiplier === 'number') b.multiplier *= factor
        else if (b.type === 'skilltree:loot_duplication' && typeof b.chance === 'number') b.chance *= factor
        else if (b.type === 'skilltree:repair_efficiency' && typeof b.multiplier === 'number') b.multiplier *= factor
        else if (b.type === 'skilltree:damage_avoidance' && typeof b.chance === 'number') b.chance *= factor
        else if (b.type === 'skilltree:projectile_duplication' && typeof b.chance === 'number') b.chance *= factor
        else if (b.type === 'skilltree:effect_duration' && typeof b.duration === 'number') b.duration *= factor
        return b
    }

    function scaledBonuses(list, factor) { return compactBonuses((list || []).map(b => scaleBonus(b, factor))) }

    function roman(n) { return ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI'][n - 1] || String(n) }

    const FRAME = {
        lesser: 'skilltree:textures/icons/background/lesser.png',
        notable: 'skilltree:textures/icons/background/notable.png',
        class: 'skilltree:textures/icons/background/class.png',
        keystone: 'skilltree:textures/icons/background/keystone.png',
        gateway: 'skilltree:textures/icons/background/gateway.png',
        recipe: 'skilltree:textures/icons/background/recipe.png'
    }

    const SIZE = { lesser: 18, notable: 26, class: 54, keystone: 42, gateway: 38, recipe: 24 }

    function icon(name) {
        if (name.indexOf(':') >= 0) return name
        return 'minecraft:textures/item/' + name + '.png'
    }

    function tk3ClassIcon(id) { return 'kubejs:textures/tk3/skilltree/classes/' + id + '.png' }
    function tk3SubclassIcon(id) { return 'kubejs:textures/tk3/skilltree/subclasses/' + id + '.png' }

    function tk3SkillIcon(group, id) { return 'kubejs:textures/tk3/skilltree/skills/' + group + '/' + id + '.png' }

    function resolveTk3SkillIcon(id, title, requestedIcon) {
        // Keep each explicitly selected skill-tree icon; title-based fallbacks overwrite valid icons.
        if (requestedIcon && requestedIcon.indexOf('kubejs:textures/tk3/skilltree/') === 0) return requestedIcon
        const lowerId = String(id || '').toLowerCase()
        const text = (String(id || '') + ' ' + String(title || '')).toLowerCase()

        // Preserve the large class/subclass portraits for actual class roots, archetype roots and keystones.
        if (requestedIcon && requestedIcon.indexOf('kubejs:textures/tk3/skilltree/classes/') === 0) {
            if (lowerId.indexOf('subclass_gate') < 0) return requestedIcon
        }
        if (requestedIcon && requestedIcon.indexOf('kubejs:textures/tk3/skilltree/subclasses/') === 0) return requestedIcon

        // School mastery branches.
        const schools = ['fire','ice','lightning','holy','ender','blood','evocation','nature','eldritch']
        for (let i = 0; i < schools.length; i++) {
            var s = schools[i]
            if (lowerId.indexOf('tk3_magic_' + s) === 0) {
                if (text.indexOf('affinity') >= 0) return tk3SkillIcon('magic','ward')
                if (text.indexOf('master') >= 0 && text.indexOf('mastery') < 0) return tk3SkillIcon('magic','school_mastery')
                return tk3SkillIcon('magic', s)
            }
        }

        // Profession branches.
        if (lowerId.indexOf('tk3_prof_mining') === 0) {
            if (text.indexOf('prospect') >= 0) return tk3SkillIcon('professions','ore_yield')
            if (text.indexOf('reach') >= 0) return tk3SkillIcon('professions','mine_depths')
            if (text.indexOf('care') >= 0 || text.indexOf('repair') >= 0) return tk3SkillIcon('utility','workshop_tools')
            if (text.indexOf('master') >= 0) return tk3SkillIcon('professions','profession_mastery')
            return tk3SkillIcon('professions','mining')
        }
        if (lowerId.indexOf('tk3_prof_logging') === 0) {
            if (text.indexOf('care') >= 0 || text.indexOf('repair') >= 0) return tk3SkillIcon('utility','workshop_tools')
            if (text.indexOf('forester') >= 0 || text.indexOf('forest') >= 0) return tk3SkillIcon('professions','forestry')
            if (text.indexOf('master') >= 0) return tk3SkillIcon('professions','profession_mastery')
            if (text.indexOf('lumber') >= 0) return tk3SkillIcon('professions','log_yield')
            return tk3SkillIcon('professions','logging')
        }
        if (lowerId.indexOf('tk3_prof_farming') === 0) {
            if (text.indexOf('care') >= 0 || text.indexOf('tool') >= 0 || text.indexOf('repair') >= 0) return tk3SkillIcon('utility','workshop_tools')
            if (text.indexOf('healthy') >= 0) return tk3SkillIcon('defense','vitality')
            if (text.indexOf('master') >= 0) return tk3SkillIcon('professions','profession_mastery')
            if (text.indexOf('field') >= 0 || text.indexOf('farm') >= 0) return tk3SkillIcon('professions','crop_growth')
            return tk3SkillIcon('professions','harvest')
        }
        if (lowerId.indexOf('tk3_prof_fishing') === 0) {
            if (text.indexOf('treasure') >= 0 || text.indexOf('lucky') >= 0) return tk3SkillIcon('professions','treasure_fishing')
            if (text.indexOf('care') >= 0 || text.indexOf('patient') >= 0) return tk3SkillIcon('utility','workshop_tools')
            if (text.indexOf('master') >= 0) return tk3SkillIcon('professions','profession_mastery')
            return tk3SkillIcon('professions','fishing')
        }
        if (lowerId.indexOf('tk3_prof_hunting') === 0) {
            if (text.indexOf('track') >= 0 || text.indexOf('pursuit') >= 0) return tk3SkillIcon('utility','tracking')
            if (text.indexOf('trophy') >= 0) return tk3SkillIcon('utility','hunter_trophy')
            if (text.indexOf('monster') >= 0 || text.indexOf('field') >= 0) return tk3SkillIcon('utility','beast_slayer')
            if (text.indexOf('master') >= 0) return tk3SkillIcon('professions','profession_mastery')
            return tk3SkillIcon('utility','tracking')
        }
        if (lowerId.indexOf('tk3_prof_exploration') === 0) {
            if (text.indexOf('scav') >= 0 || text.indexOf('lucky') >= 0) return tk3SkillIcon('general','treasure')
            if (text.indexOf('archae') >= 0) return tk3SkillIcon('utility','ancient_shrine')
            if (text.indexOf('reach') >= 0) return tk3SkillIcon('general','insight')
            if (text.indexOf('master') >= 0) return tk3SkillIcon('general','expedition')
            return tk3SkillIcon('utility','explorer_map')
        }
        if (lowerId.indexOf('tk3_prof_crafting') === 0) {
            if (text.indexOf('repair') >= 0) return tk3SkillIcon('utility','recycling')
            if (text.indexOf('arcane') >= 0 || text.indexOf('enchant') >= 0) return tk3SkillIcon('special','runesmith')
            if (text.indexOf('gem') >= 0) return tk3SkillIcon('special','rune_hammer')
            if (text.indexOf('master') >= 0) return tk3SkillIcon('general','crafting_mastery')
            return tk3SkillIcon('utility','crafting_bench')
        }
        if (lowerId.indexOf('tk3_prof_alchemy') === 0) {
            if (text.indexOf('toxic') >= 0 || text.indexOf('venom') >= 0) return tk3SkillIcon('defense','poison_resist')
            if (text.indexOf('potency') >= 0 || text.indexOf('catalytic') >= 0) return tk3SkillIcon('magic','arcane_power')
            if (text.indexOf('restor') >= 0) return tk3SkillIcon('defense','healing')
            return tk3SkillIcon('special','alchemy')
        }

        // Universal passive disciplines.
        if (lowerId.indexOf('tk3_passive_power') === 0) {
            if (text.indexOf('sunder') >= 0) return tk3SkillIcon('combat','armor_break')
            if (text.indexOf('pressure') >= 0 || text.indexOf('overpower') >= 0) return tk3SkillIcon('combat','heavy_strike')
            return tk3SkillIcon('combat','attack_damage')
        }
        if (lowerId.indexOf('tk3_passive_precision') === 0) return tk3SkillIcon('combat','critical_star')
        if (lowerId.indexOf('tk3_passive_defense') === 0) {
            if (text.indexOf('health') >= 0 || text.indexOf('vital') >= 0) return tk3SkillIcon('defense','vitality')
            if (text.indexOf('steadfast') >= 0) return tk3SkillIcon('defense','fortitude')
            return tk3SkillIcon('defense','armor')
        }
        if (lowerId.indexOf('tk3_passive_mobility') === 0) {
            if (text.indexOf('evasion') >= 0 || text.indexOf('untouchable') >= 0) return tk3SkillIcon('defense','evasion')
            return tk3SkillIcon('general','dash')
        }
        if (lowerId.indexOf('tk3_passive_sustain') === 0) {
            if (text.indexOf('leech') >= 0) return tk3SkillIcon('defense','life_steal')
            if (text.indexOf('reserve') >= 0) return tk3SkillIcon('defense','vitality')
            return tk3SkillIcon('defense','healing')
        }

        // General branches.
        if (lowerId.indexOf('tk3_general_adventuring') === 0) {
            if (text.indexOf('fortunate') >= 0) return tk3SkillIcon('general','luck')
            if (text.indexOf('reach') >= 0) return tk3SkillIcon('general','insight')
            if (text.indexOf('hardy') >= 0) return tk3SkillIcon('defense','vitality')
            return tk3SkillIcon('general','expedition')
        }
        if (lowerId.indexOf('tk3_general_knowledge') === 0) {
            if (text.indexOf('repair') >= 0) return tk3SkillIcon('utility','recycling')
            if (text.indexOf('enchant') >= 0) return tk3SkillIcon('magic','arcane_tome')
            if (text.indexOf('practical') >= 0) return tk3SkillIcon('utility','workshop_tools')
            return tk3SkillIcon('general','scholar')
        }

        // Class-specific skill concepts. Roots and subclass portraits were preserved above.
        if (lowerId.indexOf('tk3_warrior_') === 0) {
            if (text.indexOf('endurance') >= 0 || text.indexOf('frontliner') >= 0) return tk3SkillIcon('defense','vitality')
            if (text.indexOf('guard') >= 0 || text.indexOf('unbroken') >= 0 || text.indexOf('hold the line') >= 0) return tk3SkillIcon('defense','armor')
            if (text.indexOf('fury') >= 0 || text.indexOf('unchained') >= 0) return tk3SkillIcon('combat','rage')
            if (text.indexOf('precision') >= 0 || text.indexOf('technique') >= 0) return tk3SkillIcon('combat','critical_star')
            if (text.indexOf('rhythm') >= 0) return tk3SkillIcon('combat','attack_speed')
            if (text.indexOf('mastery') >= 0 || text.indexOf('master of arms') >= 0) return tk3SkillIcon('combat','weapon_training')
            return tk3SkillIcon('combat','attack_damage')
        }
        if (lowerId.indexOf('tk3_guardian_') === 0) {
            if (text.indexOf('health') >= 0 || text.indexOf('fortitude') >= 0 || text.indexOf('frame') >= 0 || text.indexOf('protector') >= 0) return tk3SkillIcon('defense','vitality')
            if (text.indexOf('read the enemy') >= 0) return tk3SkillIcon('general','perception')
            if (text.indexOf('counter') >= 0) return tk3SkillIcon('combat','weapon_training')
            if (text.indexOf('mastery') >= 0) return tk3SkillIcon('defense','barrier')
            return tk3SkillIcon('defense','armor')
        }
        if (lowerId.indexOf('tk3_ranger_') === 0) {
            if (text.indexOf('trail') >= 0 || text.indexOf('tracker') >= 0) return tk3SkillIcon('general','fleet_feet')
            if (text.indexOf('aim') >= 0 || text.indexOf('deadeye') >= 0 || text.indexOf('perfect shot') >= 0) return tk3SkillIcon('combat','critical_star')
            if (text.indexOf('recover') >= 0) return tk3SkillIcon('combat','projectile_barrage')
            if (text.indexOf('hunter') >= 0 || text.indexOf('field dressing') >= 0) return tk3SkillIcon('utility','hunter_trophy')
            if (text.indexOf('beast') >= 0 || text.indexOf('wild') >= 0 || text.indexOf('pack') >= 0 || text.indexOf('alpha') >= 0) return tk3SkillIcon('utility','beast_slayer')
            return tk3SkillIcon('combat','archery')
        }
        if (lowerId.indexOf('tk3_rogue_') === 0) {
            if (text.indexOf('feet') >= 0 || text.indexOf('footwork') >= 0 || text.indexOf('nightstep') >= 0) return tk3SkillIcon('general','dash')
            if (text.indexOf('ambush') >= 0 || text.indexOf('silent') >= 0 || text.indexOf('veil') >= 0) return tk3SkillIcon('combat','ambush')
            if (text.indexOf('killer') >= 0 || text.indexOf('deathblow') >= 0 || text.indexOf('dirty') >= 0) return tk3SkillIcon('combat','execute')
            if (text.indexOf('riposte') >= 0 || text.indexOf('duelist') >= 0 || text.indexOf('blade dancer') >= 0) return tk3SkillIcon('combat','dual_wield')
            if (text.indexOf('void') >= 0 || text.indexOf('shadow') >= 0) return tk3SkillIcon('magic','void_magic')
            return tk3SkillIcon('combat','critical_star')
        }
        if (lowerId.indexOf('tk3_mage_') === 0) {
            if (text.indexOf('mana') >= 0 || text.indexOf('meditation') >= 0) return tk3SkillIcon('magic','mana_pool')
            if (text.indexOf('chrono') >= 0 || text.indexOf('time') >= 0) return tk3SkillIcon('magic','chronomancy')
            if (text.indexOf('element') >= 0) return tk3SkillIcon('magic','elemental_mastery')
            return tk3SkillIcon('magic','arcane_tome')
        }
        if (lowerId.indexOf('tk3_battlemage_') === 0) {
            if (text.indexOf('blood') >= 0) return tk3SkillIcon('magic','blood_blade')
            if (text.indexOf('guard') >= 0 || text.indexOf('knight') >= 0) return tk3SkillIcon('magic','arcane_barrier')
            return tk3SkillIcon('magic','arcane_slash')
        }
        if (lowerId.indexOf('tk3_cleric_') === 0) {
            if (text.indexOf('crusader') >= 0 || text.indexOf('smite') >= 0) return tk3SkillIcon('magic','crusader')
            if (text.indexOf('oracle') >= 0 || text.indexOf('vision') >= 0) return tk3SkillIcon('magic','oracle')
            if (text.indexOf('heal') >= 0 || text.indexOf('priest') >= 0 || text.indexOf('blessing') >= 0) return tk3SkillIcon('magic','holy_prayer')
            return tk3SkillIcon('magic','holy')
        }
        if (lowerId.indexOf('tk3_occultist_') === 0) {
            if (text.indexOf('blood') >= 0) return tk3SkillIcon('magic','blood_ritual')
            if (text.indexOf('necro') >= 0 || text.indexOf('death') >= 0 || text.indexOf('soul') >= 0) return tk3SkillIcon('magic','necromancy')
            if (text.indexOf('void') >= 0 || text.indexOf('eldritch') >= 0) return tk3SkillIcon('magic','eldritch')
            return tk3SkillIcon('magic','occult_scroll')
        }
        if (lowerId.indexOf('tk3_artificer_') === 0) {
            if (text.indexOf('blacksmith') >= 0 || text.indexOf('forge') >= 0 || text.indexOf('smith') >= 0) return tk3SkillIcon('special','blacksmith')
            if (text.indexOf('rune') >= 0 || text.indexOf('gem') >= 0) return tk3SkillIcon('special','runesmith')
            if (text.indexOf('alchem') >= 0 || text.indexOf('potion') >= 0) return tk3SkillIcon('special','alchemy')
            return tk3SkillIcon('special','artificer_tools')
        }
        if (lowerId.indexOf('tk3_monk_') === 0) {
            if (text.indexOf('pug') >= 0 || text.indexOf('strike') >= 0 || text.indexOf('fist') >= 0) return tk3SkillIcon('special','pugilist')
            if (text.indexOf('way') >= 0 || text.indexOf('step') >= 0 || text.indexOf('travel') >= 0) return tk3SkillIcon('special','wayfarer')
            if (text.indexOf('spirit') >= 0 || text.indexOf('inner') >= 0 || text.indexOf('meditat') >= 0) return tk3SkillIcon('special','spirit_focus')
            return tk3SkillIcon('special','discipline_mastery')
        }

        // All other generated T&K3 nodes still receive a custom fallback icon.
        if (lowerId.indexOf('tk3_') === 0) return tk3SkillIcon('general','mastery')
        return requestedIcon
    }

    // ---------------------------------------------------------------------
    // V3.2.2 TOOLTIP / STAT DISPLAY NORMALIZATION
    // ---------------------------------------------------------------------
    // PST's generic AttributeBonus tooltip rounds ADD_VALUE attributes like 0.004 crit
    // chance to "0". Apothic percentage-point attributes intentionally use fractional
    // values (0.004 = 0.4 percentage points), so T&K3 supplies explicit node descriptions
    // while leaving the actual gameplay modifiers untouched.
    function prettyNumber(value, decimals) {
        var p = Math.pow(10, decimals || 2)
        var rounded = Math.round(value * p) / p
        var str = String(rounded)
        if (str.indexOf('.') >= 0) {
            str = str.replace(/0+$/, '').replace(/\.$/, '')
        }
        return str
    }

    function displayNameForAttribute(id) {
        var map = {
            'minecraft:generic.attack_damage':'Attack Damage',
            'minecraft:generic.max_health':'Max Health',
            'minecraft:generic.attack_speed':'Attack Speed',
            'minecraft:generic.movement_speed':'Movement Speed',
            'minecraft:generic.armor':'Armor',
            'minecraft:generic.armor_toughness':'Armor Toughness',
            'minecraft:generic.knockback_resistance':'Knockback Resistance',
            'minecraft:generic.luck':'Luck',
            'minecraft:player.block_interaction_range':'Block Reach',
            'apothic_attributes:crit_chance':'Crit Chance',
            'apothic_attributes:crit_damage':'Crit Damage',
            'apothic_attributes:dodge_chance':'Dodge Chance',
            'apothic_attributes:armor_shred':'Armor Shred',
            'apothic_attributes:armor_pierce':'Armor Pierce',
            'apothic_attributes:life_steal':'Life Steal',
            'apothic_attributes:healing_received':'Healing Received',
            'apothic_attributes:projectile_damage':'Projectile Damage',
            'apothic_attributes:draw_speed':'Draw Speed',
            'apothic_attributes:experience_gained':'Experience Gained',
            'irons_spellbooks:max_mana':'Max Mana',
            'irons_spellbooks:mana_regen':'Mana Regeneration',
            'irons_spellbooks:spell_power':'Spell Power',
            'irons_spellbooks:spell_resist':'Spell Resistance',
            'irons_spellbooks:cast_time_reduction':'Cast Time Reduction',
            'irons_spellbooks:cooldown_reduction':'Cooldown Reduction',
            'irons_spellbooks:summon_damage':'Summon Damage',
            'irons_spellbooks:fire_spell_power':'Fire Spell Power',
            'irons_spellbooks:ice_spell_power':'Ice Spell Power',
            'irons_spellbooks:lightning_spell_power':'Lightning Spell Power',
            'irons_spellbooks:holy_spell_power':'Holy Spell Power',
            'irons_spellbooks:blood_spell_power':'Blood Spell Power',
            'irons_spellbooks:ender_spell_power':'Ender / Void Spell Power',
            'irons_spellbooks:eldritch_spell_power':'Eldritch Spell Power',
            'irons_spellbooks:evocation_spell_power':'Evocation Spell Power',
            'irons_spellbooks:nature_spell_power':'Nature Spell Power'
        }
        if (map[id]) return map[id]
        var path = id.indexOf(':') >= 0 ? id.split(':')[1] : id
        return path.split('_').map(function(word){ return word.charAt(0).toUpperCase() + word.slice(1) }).join(' ')
    }

    function signed(value, suffix) {
        var prefix = value >= 0 ? '+' : '-'
        return prefix + prettyNumber(Math.abs(value), 2) + (suffix || '')
    }

    function bonusDisplayLine(bonus) {
        if (!bonus || !bonus.type) return null
        if (bonus.type === 'skilltree:command') return null

        if (bonus.type === 'skilltree:attribute') {
            var attr = bonus.attribute
            var amount = Number(bonus.amount || 0)
            var label = displayNameForAttribute(attr)
            var percentPointAttrs = {
                'apothic_attributes:crit_chance':true,
                'apothic_attributes:crit_damage':true,
                'apothic_attributes:dodge_chance':true,
                'apothic_attributes:armor_shred':true,
                'apothic_attributes:life_steal':true,
                'apothic_attributes:current_hp_damage':true,
                'apothic_attributes:prot_shred':true
            }
            var attrSuffix = ''
            if (bonus.player_condition && bonus.player_condition.type === 'skilltree:crouching') attrSuffix = ' while Crouching'
            else if (bonus.player_condition && bonus.player_condition.type === 'skilltree:underwater') attrSuffix = ' while Underwater'
            else if (bonus.player_condition && bonus.player_condition.type === 'skilltree:fishing') attrSuffix = ' while Fishing'
            else if (bonus.player_condition && bonus.player_condition.type === 'skilltree:numeric_value'
                && bonus.player_condition.value_provider
                && bonus.player_condition.value_provider.type === 'skilltree:food_level') attrSuffix = ' while Well Fed'
            if (bonus.operation === 1 || bonus.operation === 2) {
                return signed(amount * 100, '%') + ' ' + label + attrSuffix
            }
            if (percentPointAttrs[attr]) {
                return signed(amount * 100, '%') + ' ' + label + attrSuffix
            }
            return signed(amount, '') + ' ' + label + attrSuffix
        }

        function conditionSuffix(condition) {
            if (!condition || !condition.type) return ''
            if (condition.type === 'skilltree:crouching') return ' while Crouching'
            if (condition.type === 'skilltree:underwater') return ' while Underwater'
            if (condition.type === 'skilltree:fishing') return ' while Fishing'
            if (condition.type === 'skilltree:numeric_value' && condition.value_provider
                && condition.value_provider.type === 'skilltree:food_level') return ' while Well Fed'
            return ''
        }

        if (bonus.type === 'skilltree:crit_chance') return signed(Number(bonus.chance || 0) * 100, '%') + ' Crit Chance' + conditionSuffix(bonus.player_condition)
        if (bonus.type === 'skilltree:crit_damage') return signed(Number(bonus.amount || 0) * 100, '%') + ' Crit Damage' + conditionSuffix(bonus.player_condition)
        if (bonus.type === 'skilltree:projectile_speed') return signed(Number(bonus.multiplier || 0) * 100, '%') + ' Projectile Speed' + conditionSuffix(bonus.player_condition)
        if (bonus.type === 'skilltree:arrow_retrieval') return signed(Number(bonus.chance || 0) * 100, '%') + ' Arrow Retrieval Chance'
        if (bonus.type === 'skilltree:block_break_speed') return signed(Number(bonus.multiplier || 0) * 100, '%') + ' Block Break Speed' + conditionSuffix(bonus.player_condition)
        if (bonus.type === 'skilltree:free_enchantment') return signed(Number(bonus.chance || 0) * 100, '%') + ' Free Enchant Chance'
        if (bonus.type === 'skilltree:gained_experience') return signed(Number(bonus.multiplier || 0) * 100, '%') + ' Experience from Mobs'
        if (bonus.type === 'skilltree:loot_duplication') {
            var lootName = bonus.loot_type ? String(bonus.loot_type).replace(/_/g,' ') : 'loot'
            lootName = lootName.charAt(0).toUpperCase() + lootName.slice(1)
            return signed(Number(bonus.chance || 0) * 100, '%') + ' ' + lootName + ' Loot Duplication'
        }
        if (bonus.type === 'skilltree:repair_efficiency') return signed(Number(bonus.multiplier || 0) * 100, '%') + ' Repair Efficiency'
        if (bonus.type === 'skilltree:damage_avoidance') return signed(Number(bonus.chance || 0) * 100, '%') + ' Damage Avoidance' + conditionSuffix(bonus.player_condition)
        if (bonus.type === 'skilltree:projectile_duplication') return signed(Number(bonus.chance || 0) * 100, '%') + ' Projectile Duplication' + conditionSuffix(bonus.player_condition)
        if (bonus.type === 'skilltree:effect_duration') {
            var effectLabel = String(bonus.effect_type || 'any').replace(/_/g,' ')
            effectLabel = effectLabel.charAt(0).toUpperCase() + effectLabel.slice(1)
            var targetLabel = bonus.target === 'enemy' ? ' on Enemies' : ' on You'
            return signed(Number(bonus.duration || 0) * 100, '%') + ' ' + effectLabel + ' Effect Duration' + targetLabel
        }
        if (bonus.type === 'skilltree:self_splash_immune') return 'Immune to Your Own Harmful Splash Potions'
        if (bonus.type === 'skilltree:can_poison_anyone') return 'Your Poison Can Affect Normally Poison-Immune Targets'
        if (bonus.type === 'skilltree:lethal_poison') return 'Your Poison Can Become Lethal'
        return null
    }

    function makeNodeDescription(bonuses) {
        var result = []
        ;(bonuses || []).forEach(function(bonus){
            var line = bonusDisplayLine(bonus)
            if (!line) return
            var negative = line.charAt(0) === '-'
            result.push({ text: line, color: negative ? '#E25A5A' : '#7B7BE5' })
        })
        return result.length ? result : undefined
    }

    function addNode(id, x, y, title, iconName, bonuses, options) {
        if (skills[id]) throw new Error('[TK3 SkillTree] Duplicate node ID: ' + id)
        options = options || {}
        const type = options.type || 'lesser'
        const tags = options.tags || []
        // Builders below establish the preserved skill data and graph. Their
        // temporary coordinates are replaced by applyTk3GridLayout() after all
        // nodes exist; the explicit grid map is the final layout authority.
        const node = {
            id: 'skilltree:' + id,
            title: title,
            titleColor: options.color || 'FFFFFF',
            positionX: Math.round(x),
            positionY: Math.round(y),
            buttonSize: options.buttonSize || SIZE[type] || 20,
            backgroundTexture: FRAME[type] || FRAME.lesser,
            iconTexture: icon(resolveTk3SkillIcon(id, title, iconName)),
            borderTexture: 'skilltree:textures/tooltip/lesser.png',
            isStartingPoint: !!options.start,
            isAlwaysStartingPoint: false,
            tags: tags,
            bonuses: compactBonuses(bonuses || []),
            requirements: options.requirements || [],
            directConnections: [],
            longConnections: [],
            oneWayConnections: []
        }

        node.bonuses.forEach((bonus, i) => {
            if (bonus.type === 'skilltree:attribute') {
                bonus.id = 'skilltree:tk3/' + id + '/' + i
            }
        })

        var normalizedDescription = makeNodeDescription(node.bonuses)
        if (normalizedDescription) node.description = normalizedDescription

        skills[id] = node
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


    function localPolar(cx, cy, angle, radius) {
        var radians = angle * Math.PI / 180
        return {
            x: cx + Math.cos(radians) * radius,
            y: cy + Math.sin(radians) * radius
        }
    }

    function classNodeId(classId, part) { return 'tk3_' + classId + '_' + part }

    // Every node remains a native 1-point purchase. Build commitment comes from
    // prerequisites and optional specialization, keeping the 150-point cap transparent.
    const CLASS_CORE_RANKS = 5
    const CLASS_ADVANCED_RANKS = 8
    const CLASS_SUBCLASS_UNLOCK_RANK = 4
    const SUBCLASS_PATH_RANKS = 16
    const SUBCLASS_ASCENDANCY_RANK = 8
    const PROFESSION_BRANCH_RANKS = 8
    const PROFESSION_MASTERY_RANK = 4

    function classFoundationRankFactor(rank) {
        if (rank === 3) return 0.34
        if (rank === CLASS_CORE_RANKS) return 0.52
        return 0.22
    }

    function classAdvancedRankFactor(rank) {
        if (rank === CLASS_SUBCLASS_UNLOCK_RANK) return 0.18
        if (rank === CLASS_ADVANCED_RANKS) return 0.28
        return 0.12
    }

    function professionRankFactor(rank) {
        if (rank === PROFESSION_MASTERY_RANK) return 0.72
        if (rank === PROFESSION_BRANCH_RANKS) return 0.95
        if (rank > PROFESSION_MASTERY_RANK) return 0.58
        return 0.48
    }

    function subclassRankFactor(rank) {
        if (rank === 4) return 0.14
        if (rank === 8) return 0.28
        if (rank === 12) return 0.18
        if (rank === SUBCLASS_PATH_RANKS) return 0.36
        return 0.07
    }

    // ---------------------------------------------------------------------
    // V3 CONNECTION HELPERS
    // ---------------------------------------------------------------------
    function connectLong(a, b) {
        if (!skills[a] || !skills[b]) throw new Error('[TK3 SkillTree] Cannot long-connect missing node: ' + a + ' <-> ' + b)
        skills[a].longConnections.push('skilltree:' + b)
        skills[b].longConnections.push('skilltree:' + a)
    }

    function nearestByAngle(entries, angle) {
        var best = null
        var bestDiff = 999
        entries.forEach(function(entry) {
            var diff = Math.abs((((entry.angle - angle) % 360) + 540) % 360 - 180)
            if (diff < bestDiff) { bestDiff = diff; best = entry }
        })
        return best
    }

    function layoutFingerprint() {
        var rows = Object.keys(skills).sort().map(function(id) {
            var node = skills[id]
            return node.id + '|' + node.positionX + '|' + node.positionY
        }).join('\n')
        var hash = 0x811c9dc5
        for (var i = 0; i < rows.length; i++) {
            hash ^= rows.charCodeAt(i)
            // FNV-1a prime multiplication using bit shifts keeps this compatible with
            // KubeJS JS engines that do not expose Math.imul.
            hash = (hash + (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24)) | 0
        }
        return ('00000000' + (hash >>> 0).toString(16)).slice(-8)
    }

    function validateGeneratedTree(skillLimitations) {
        var ids = Object.keys(skills)
        var startNodes = ids.filter(function(id){ return skills[id].isStartingPoint })
        if (startNodes.length !== 1) {
            throw new Error('[TK3 SkillTree] Expected exactly one starting point, found ' + startNodes.length)
        }

        var requirementGraph = {}
        var seenPositions = {}
        ids.forEach(function(id){
            var node = skills[id]
            var positionKey = node.positionX + ',' + node.positionY
            if (seenPositions[positionKey]) {
                throw new Error('[TK3 SkillTree] Exact node-position collision: ' + seenPositions[positionKey] + ' and ' + id + ' at ' + positionKey)
            }
            seenPositions[positionKey] = id

            var seenConnections = {}
            ;['directConnections','longConnections','oneWayConnections'].forEach(function(field){
                ;(node[field] || []).forEach(function(targetId){
                    var rawTarget = String(targetId).replace(/^skilltree:/,'')
                    if (!skills[rawTarget]) throw new Error('[TK3 SkillTree] ' + id + ' references missing connection ' + targetId)
                    if (rawTarget === id) throw new Error('[TK3 SkillTree] Self-connection on ' + id)
                    var key = field + ':' + targetId
                    if (seenConnections[key]) throw new Error('[TK3 SkillTree] Duplicate connection on ' + id + ': ' + targetId)
                    seenConnections[key] = true
                })
            })

            requirementGraph[id] = []
            ;(node.requirements || []).forEach(function(requirement){
                if (!requirement || requirement.type !== 'skilltree:learned_skill') return
                var rawRequirement = String(requirement.skill_id || '').replace(/^skilltree:/,'')
                if (!skills[rawRequirement]) throw new Error('[TK3 SkillTree] ' + id + ' requires missing skill ' + requirement.skill_id)
                if (rawRequirement === id) throw new Error('[TK3 SkillTree] Self-requirement on ' + id)
                requirementGraph[id].push(rawRequirement)
            })

            if (!node.isStartingPoint && requirementGraph[id].length === 0) {
                throw new Error('[TK3 SkillTree] Non-starting node has no learned-skill prerequisite: ' + id)
            }
        })

        var visitState = {}
        function visit(id) {
            if (visitState[id] === 1) throw new Error('[TK3 SkillTree] Requirement cycle detected at ' + id)
            if (visitState[id] === 2) return
            visitState[id] = 1
            requirementGraph[id].forEach(visit)
            visitState[id] = 2
        }
        ids.forEach(visit)

        Object.keys(skillLimitations || {}).forEach(function(tag){
            var count = ids.filter(function(id){ return (skills[id].tags || []).indexOf(tag) >= 0 }).length
            if (!count) throw new Error('[TK3 SkillTree] Limitation tag matches no nodes: ' + tag)
        })

        var fingerprint = layoutFingerprint()
        if (APPROVED_LAYOUT_FINGERPRINT !== 'PENDING' && fingerprint !== APPROVED_LAYOUT_FINGERPRINT) {
            throw new Error('[TK3 SkillTree] APPROVED LAYOUT CHANGED. Expected ' + APPROVED_LAYOUT_FINGERPRINT + ', got ' + fingerprint)
        }

        return {
            generatedNodes: ids.length,
            startingPoints: startNodes.length,
            limitationTags: Object.keys(skillLimitations || {}).length,
            layoutFingerprint: fingerprint
        }
    }

    // ---------------------------------------------------------------------
    // ORIGIN + SHARED CHARACTER CONSTELLATIONS
    // ---------------------------------------------------------------------
    originId = addNode('tk3_origin', 0, 0, "Adventurer's Origin", tk3SkillIcon('general','mastery'), [], {
        type: 'keystone', buttonSize: 52, color: 'F4C95D', start: true
    })

    const sharedDefs = [
        { id:'power', name:'Power', angle:-90, color:'CF5B4B', icon:tk3SkillIcon('combat','attack_damage'), bonuses:[
            [percent('minecraft:generic.attack_damage',0.0125)], [armorShred(0.006)], [percent('minecraft:generic.attack_damage',0.0125)],
            [armorPierce(0.20)], [percent('minecraft:generic.attack_damage',0.015)], [armorShred(0.0075)], [percent('minecraft:generic.attack_damage',0.02)] ] },
        { id:'precision', name:'Precision', angle:-45, color:'B68BCB', icon:tk3SkillIcon('combat','critical_star'), bonuses:[
            [critChance(0.005)], [critDamage(0.02)], [critChance(0.005)], [critDamage(0.025)], [critChance(0.0075)], [critDamage(0.03)], [critChance(0.01),critDamage(0.03)] ] },
        { id:'mobility', name:'Mobility', angle:0, color:'69BDA7', icon:tk3SkillIcon('general','dash'), bonuses:[
            [percent('minecraft:generic.movement_speed',0.01)], [dodge(0.005)], [percent('minecraft:generic.movement_speed',0.01)], [dodge(0.005)], [percent('minecraft:generic.movement_speed',0.0125)], [dodge(0.0075)], [percent('minecraft:generic.movement_speed',0.015),dodge(0.01)] ] },
        { id:'fortune', name:'Fortune', angle:45, color:'D59B4C', icon:tk3SkillIcon('general','luck'), bonuses:[
            [flat('minecraft:generic.luck',0.10)], [xpMobs(0.015)], [lootDup(0.005,'mobs')], [flat('minecraft:generic.luck',0.10)], [apothicXp(0.015)], [lootDup(0.005,'chests')], [flat('minecraft:generic.luck',0.15),apothicXp(0.02)] ] },
        { id:'vitality', name:'Vitality', angle:90, color:'D66C78', icon:tk3SkillIcon('defense','vitality'), bonuses:[
            [percent('minecraft:generic.max_health',0.0125)], [healingReceived(0.0125)], [percent('minecraft:generic.max_health',0.0125)], [healingReceived(0.015)], [percent('minecraft:generic.max_health',0.015)], [healingReceived(0.0175)], [percent('minecraft:generic.max_health',0.02),healingReceived(0.02)] ] },
        { id:'defense', name:'Defense', angle:135, color:'7894C9', icon:tk3SkillIcon('defense','armor'), bonuses:[
            [flat('minecraft:generic.armor',0.35)], [flat('minecraft:generic.armor_toughness',0.25)], [flat('minecraft:generic.armor',0.35)], [flat('minecraft:generic.knockback_resistance',0.015)], [flat('minecraft:generic.armor',0.40)], [flat('minecraft:generic.armor_toughness',0.30)], [flat('minecraft:generic.armor',0.60)] ] },
        { id:'sustain', name:'Sustain', angle:180, color:'C46F91', icon:tk3SkillIcon('defense','healing'), bonuses:[
            [healingReceived(0.015)], [lifeSteal(0.0025)], [healingReceived(0.015)], [percent('minecraft:generic.max_health',0.0125)], [lifeSteal(0.0025)], [healingReceived(0.02)], [healingReceived(0.025),lifeSteal(0.005)] ] },
        { id:'knowledge', name:'Knowledge', angle:225, color:'B8A86A', icon:tk3SkillIcon('general','scholar'), bonuses:[
            [apothicXp(0.015)], [freeEnchant(0.0075)], [repairEfficiency(0.025,'minecraft:enchantable/mining')], [apothicXp(0.015)], [durability(0.015,'minecraft:enchantable/mining')], [freeEnchant(0.01)], [apothicXp(0.02),freeEnchant(0.01)] ] }
    ]

    // Each shared constellation is a compact two-sided petal. The two arms must both be
    // invested in to reach its mastery, which makes the centre readable and meaningful.
    const sharedEntries = []
    function buildSharedCluster(def) {
        // V4.3 keeps the same petal topology but deliberately spaces the shared core out.
        // The previous centre had only ~6 coordinate-units of visual clearance between
        // some notable/mastery buttons; this version keeps a much safer buffer.
        var rootPos = polar(def.angle, 220, 0)
        var root = addNode('tk3_shared_' + def.id + '_root', rootPos.x, rootPos.y, def.name, def.icon, def.bonuses[0], {
            type:'notable', color:def.color, requirements:[learnedSkill(originId)]
        })
        connect(originId, root)

        var armEnds = []
        for (var arm = 0; arm < 2; arm++) {
            var prevShared = root
            var sign = arm === 0 ? -1 : 1
            // Widened shared-arm spacing for readable icon/button frames.
            for (var rank = 1; rank <= 3; rank++) {
                var sharedRadius = 300 + rank * 72
                var sharedOffset = sign * (50 + rank * 34)
                var sharedPos = polar(def.angle, sharedRadius, sharedOffset)
                var sharedNodeId = addNode('tk3_shared_' + def.id + '_a' + (arm+1) + '_' + rank,
                    sharedPos.x, sharedPos.y, def.name + ' ' + (arm === 0 ? 'Path' : 'Discipline') + ' ' + roman(rank),
                    def.icon, def.bonuses[Math.min(1 + arm * 3 + rank - 1, def.bonuses.length - 1)], {
                        type:rank === 3 ? 'notable' : 'lesser', color:def.color, requirements:[learnedSkill(prevShared)]
                    })
                connect(prevShared, sharedNodeId)
                prevShared = sharedNodeId
            }

            // Fill nodes curve each arm back toward the mastery while keeping a clear gap.
            var fillSpecs = [
                { rank:4, radius:560, offset:sign * 110 },
                { rank:5, radius:610, offset:sign * 55 }
            ]
            for (var fillIndex = 0; fillIndex < fillSpecs.length; fillIndex++) {
                var spec = fillSpecs[fillIndex]
                var fillPos = polar(def.angle, spec.radius, spec.offset)
                var fillId = addNode('tk3_shared_' + def.id + '_a' + (arm+1) + '_' + spec.rank,
                    fillPos.x, fillPos.y, def.name + ' ' + (arm === 0 ? 'Path' : 'Discipline') + ' ' + roman(spec.rank),
                    def.icon, def.bonuses[Math.min(spec.rank + arm, def.bonuses.length - 1)], {
                        type:spec.rank === 5 ? 'notable' : 'lesser', color:def.color,
                        requirements:[learnedSkill(prevShared)]
                    })
                connect(prevShared, fillId)
                prevShared = fillId
            }
            armEnds.push(prevShared)
        }

        // Mastery sits farther out to keep the center readable.
        var masteryPos = polar(def.angle, 675, 0)
        var mastery = addNode('tk3_shared_' + def.id + '_mastery', masteryPos.x, masteryPos.y,
            def.name + ' Mastery', def.icon, def.bonuses[def.bonuses.length - 1], {
                type:'keystone', buttonSize:34, color:def.color,
                requirements:[learnedSkill(armEnds[0]), learnedSkill(armEnds[1])]
            })
        connect(armEnds[0], mastery)
        connect(armEnds[1], mastery)
        sharedEntries.push({ id:def.id, angle:def.angle, root:root, end:mastery })
    }
    sharedDefs.forEach(function(def){ buildSharedCluster(def) })

    // The roots form one clean neutral ring. Only root-to-root links are used here;
    // the outer mastery nodes stay uncluttered for class/profession access.
    for (var sharedIndex = 0; sharedIndex < sharedEntries.length; sharedIndex++) {
        var sharedNext = (sharedIndex + 1) % sharedEntries.length
        connect(sharedEntries[sharedIndex].root, sharedEntries[sharedNext].root)
    }

    // ---------------------------------------------------------------------
    // PROFESSION WEDGES - INSPIRED BY THE 1.18.2 WAIFING TREE
    // ---------------------------------------------------------------------
    // The old datapack used large radial wedges: a root close to the centre, branches that
    // widen as they travel outward, then a mastery point and deeper specializations. V4 uses
    // that same visual language for eight professions. Profession wedges occupy the inner
    // atlas; combat classes start outside them, so the two systems never need crossing lines.
    const professions = [
        { id:'mining', name:'Mining', angle:-67.5, color:'78A6C8', icon:tk3SkillIcon('professions','mining'), masterIcon:tk3SkillIcon('professions','profession_mastery'), branches:[
            ['Excavation',tk3SkillIcon('professions','excavation'),[blockBreak(0.045),apothicMining(0.015)]],
            ['Prospecting',tk3SkillIcon('professions','ore_yield'),[lootDup(0.010,'ore')]],
            ['Deep Delving',tk3SkillIcon('professions','mine_depths'),[flat('minecraft:player.block_interaction_range',0.15),flat('minecraft:generic.knockback_resistance',0.005)]] ] },
        { id:'logging', name:'Logging', angle:-22.5, color:'8DB15D', icon:tk3SkillIcon('professions','logging'), masterIcon:tk3SkillIcon('professions','profession_mastery'), branches:[
            ['Felling',tk3SkillIcon('professions','logging'),[blockBreak(0.045,hasItemInHand('minecraft:axes'))]],
            ['Forestry',tk3SkillIcon('professions','forestry'),[percent('minecraft:generic.movement_speed',0.008),percent('minecraft:generic.max_health',0.004)]],
            ['Woodcraft',tk3SkillIcon('professions','log_yield'),[repairEfficiency(0.025,'minecraft:axes')]] ] },
        { id:'hunting', name:'Hunting', angle:22.5, color:'A66A4A', icon:tk3SkillIcon('utility','tracking'), masterIcon:tk3SkillIcon('utility','hunter_trophy'), branches:[
            ['Tracking',tk3SkillIcon('utility','tracking'),[percent('minecraft:generic.movement_speed',0.008),xpMobs(0.010)]],
            ['Butchery',tk3SkillIcon('utility','hunter_trophy'),[lootDup(0.009,'mobs'),xpMobs(0.010)]],
            ['Camp Cooking',tk3SkillIcon('utility','camping'),[wellFedPercent('minecraft:generic.attack_damage',0.018,15),wellFedPercent('minecraft:generic.max_health',0.014,15)]] ] },
        { id:'exploration', name:'Exploration', angle:67.5, color:'D58A52', icon:tk3SkillIcon('utility','explorer_map'), masterIcon:tk3SkillIcon('general','expedition'), branches:[
            ['Pathfinding',tk3SkillIcon('general','fleet_feet'),[percent('minecraft:generic.movement_speed',0.010),flat('minecraft:player.block_interaction_range',0.035)]],
            ['Scavenging',tk3SkillIcon('general','treasure'),[lootDup(0.009,'chests'),flat('minecraft:generic.luck',0.035)]],
            ['Survival',tk3SkillIcon('utility','camping'),[percent('minecraft:generic.max_health',0.007),damageAvoidance(0.004)]] ] },
        { id:'fishing', name:'Fishing', angle:112.5, color:'4FB9C4', icon:tk3SkillIcon('professions','fishing'), masterIcon:tk3SkillIcon('professions','treasure_fishing'), branches:[
            ['Angling',tk3SkillIcon('professions','angler'),[lootDup(0.009,'fishing'),conditionalAttribute('minecraft:generic.luck',0.04,0,fishingCondition(),false)]],
            ['Oceancraft',tk3SkillIcon('professions','treasure_fishing'),[underwaterPercent('minecraft:generic.movement_speed',0.012),damageAvoidance(0.004,underwaterCondition())]],
            ['Seafood',tk3SkillIcon('professions','fishing'),[wellFedPercent('minecraft:generic.max_health',0.014,15),wellFedPercent('minecraft:generic.movement_speed',0.007,15)]] ] },
        { id:'farming', name:'Farming', angle:157.5, color:'D6B94E', icon:tk3SkillIcon('professions','harvest'), masterIcon:tk3SkillIcon('professions','profession_mastery'), branches:[
            ['Harvesting',tk3SkillIcon('professions','crop_growth'),[flat('minecraft:player.block_interaction_range',0.10),blockBreak(0.020,hasItemInHand('minecraft:hoes'))]],
            ['Husbandry',tk3SkillIcon('professions','animal_care'),[lootDup(0.005,'mobs'),percent('minecraft:generic.max_health',0.006)]],
            ['Cuisine',tk3SkillIcon('professions','botany'),[wellFedPercent('minecraft:generic.max_health',0.016,15),wellFedFlat('minecraft:generic.armor',0.18,15)]] ] },
        { id:'crafting', name:'Crafting', angle:202.5, color:'C99A58', icon:tk3SkillIcon('utility','crafting_bench'), masterIcon:tk3SkillIcon('general','crafting_mastery'), branches:[
            ['Smithing',tk3SkillIcon('special','blacksmith'),[repairEfficiency(0.035,'minecraft:enchantable/mining')]],
            ['Enchanting',tk3SkillIcon('magic','arcane_tome'),[freeEnchant(0.010),apothicXp(0.008)]],
            ['Engineering',tk3SkillIcon('special','artificer_tools'),[repairEfficiency(0.025,'minecraft:enchantable/mining'),flat('minecraft:player.block_interaction_range',0.04)]] ] },
        { id:'alchemy', name:'Alchemy', angle:247.5, color:'9C70C8', icon:tk3SkillIcon('special','alchemy'), masterIcon:tk3SkillIcon('special','alchemy'), branches:[
            ['Brewing',tk3SkillIcon('special','alchemy'),[effectDuration('beneficial',0.025,'player')]],
            ['Potency',tk3SkillIcon('magic','arcane_power'),[effectDuration('beneficial',0.030,'player'),healingReceived(0.010)]],
            ['Toxicology',tk3SkillIcon('defense','poison_resist'),[effectDuration('harmful',0.030,'enemy')]] ] }
    ]

    const PROFESSION_MILESTONES = {
        mining:[
            { trained:[blockBreak(0.06)], expert:[blockBreak(0.10),flat('minecraft:player.block_interaction_range',0.25)] },
            { trained:[lootDup(0.020,'ore')], expert:[lootDup(0.035,'ore'),flat('minecraft:generic.luck',0.25)] },
            { trained:[flat('minecraft:generic.armor',0.75)], expert:[damageAvoidance(0.035),percent('minecraft:generic.max_health',0.025)] }
        ],
        logging:[
            { trained:[blockBreak(0.07,hasItemInHand('minecraft:axes'))], expert:[blockBreak(0.12,hasItemInHand('minecraft:axes'))] },
            { trained:[percent('minecraft:generic.movement_speed',0.020)], expert:[percent('minecraft:generic.max_health',0.025),flat('minecraft:generic.armor',0.75)] },
            { trained:[repairEfficiency(0.06,'minecraft:axes')], expert:[repairEfficiency(0.10,'minecraft:axes'),flat('minecraft:player.block_interaction_range',0.20)] }
        ],
        hunting:[
            { trained:[xpMobs(0.035),percent('minecraft:generic.movement_speed',0.015)], expert:[damageAvoidance(0.035,crouchingCondition()),xpMobs(0.050)] },
            { trained:[lootDup(0.020,'mobs')], expert:[lootDup(0.035,'mobs'),critChance(0.0125)] },
            { trained:[wellFedPercent('minecraft:generic.attack_damage',0.045,15)], expert:[wellFedPercent('minecraft:generic.attack_damage',0.075,17),wellFedPercent('minecraft:generic.max_health',0.050,17)] }
        ],
        exploration:[
            { trained:[percent('minecraft:generic.movement_speed',0.020)], expert:[percent('minecraft:generic.movement_speed',0.035),damageAvoidance(0.025)] },
            { trained:[lootDup(0.020,'chests')], expert:[lootDup(0.035,'chests'),flat('minecraft:generic.luck',0.30)] },
            { trained:[damageAvoidance(0.025),percent('minecraft:generic.max_health',0.020)], expert:[damageAvoidance(0.045),flat('minecraft:player.block_interaction_range',0.30)] }
        ],
        fishing:[
            { trained:[lootDup(0.022,'fishing')], expert:[lootDup(0.040,'fishing'),conditionalAttribute('minecraft:generic.luck',0.35,0,fishingCondition(),false)] },
            { trained:[underwaterPercent('minecraft:generic.movement_speed',0.045),damageAvoidance(0.020,underwaterCondition())], expert:[underwaterPercent('minecraft:generic.movement_speed',0.075),damageAvoidance(0.050,underwaterCondition())] },
            { trained:[wellFedPercent('minecraft:generic.max_health',0.035,15)], expert:[wellFedPercent('minecraft:generic.max_health',0.060,17),wellFedPercent('minecraft:generic.movement_speed',0.035,17)] }
        ],
        farming:[
            { trained:[flat('minecraft:player.block_interaction_range',0.20),blockBreak(0.045,hasItemInHand('minecraft:hoes'))], expert:[flat('minecraft:player.block_interaction_range',0.35),blockBreak(0.08,hasItemInHand('minecraft:hoes'))] },
            { trained:[lootDup(0.015,'mobs'),percent('minecraft:generic.max_health',0.020)], expert:[lootDup(0.025,'mobs'),healingReceived(0.035)] },
            { trained:[wellFedFlat('minecraft:generic.armor',0.75,15)], expert:[wellFedPercent('minecraft:generic.max_health',0.060,17),wellFedFlat('minecraft:generic.armor',1.50,17)] }
        ],
        crafting:[
            { trained:[repairEfficiency(0.075,'minecraft:enchantable/mining')], expert:[repairEfficiency(0.12,'minecraft:enchantable/mining'),flat('minecraft:generic.luck',0.15)] },
            { trained:[freeEnchant(0.018),apothicXp(0.020)], expert:[freeEnchant(0.030),apothicXp(0.040)] },
            { trained:[flat('minecraft:player.block_interaction_range',0.18),repairEfficiency(0.050,'minecraft:enchantable/mining')], expert:[flat('minecraft:player.block_interaction_range',0.35),repairEfficiency(0.080,'minecraft:enchantable/mining')] }
        ],
        alchemy:[
            { trained:[effectDuration('beneficial',0.10,'player')], expert:[effectDuration('beneficial',0.18,'player'),selfSplashImmune()] },
            { trained:[effectDuration('beneficial',0.12,'player'),healingReceived(0.025)], expert:[effectDuration('beneficial',0.20,'player'),healingReceived(0.050)] },
            { trained:[effectDuration('harmful',0.12,'enemy')], expert:[effectDuration('harmful',0.20,'enemy'),canPoisonAnyone()] }
        ]
    }

    const PROFESSION_MASTER_BONUSES = {
        mining:[blockBreak(0.08),lootDup(0.020,'ore')],
        logging:[blockBreak(0.08,hasItemInHand('minecraft:axes')),repairEfficiency(0.06,'minecraft:axes')],
        hunting:[lootDup(0.018,'mobs'),wellFedPercent('minecraft:generic.attack_damage',0.040,15)],
        exploration:[percent('minecraft:generic.movement_speed',0.025),lootDup(0.018,'chests')],
        fishing:[lootDup(0.020,'fishing'),damageAvoidance(0.030,underwaterCondition())],
        farming:[flat('minecraft:player.block_interaction_range',0.20),wellFedPercent('minecraft:generic.max_health',0.035,15)],
        crafting:[repairEfficiency(0.07,'minecraft:enchantable/mining'),freeEnchant(0.015)],
        alchemy:[effectDuration('beneficial',0.12,'player'),effectDuration('harmful',0.12,'enemy')]
    }

    const PROFESSION_FOCUSES = {
        mining:[
            ['Rapid Excavation',tk3SkillIcon('professions','excavation'),[blockBreak(0.15)]],
            ['Minewright',tk3SkillIcon('utility','workshop_tools'),[repairEfficiency(0.12,'minecraft:enchantable/mining'),flat('minecraft:player.block_interaction_range',0.25)]],
            ['Rich Veins',tk3SkillIcon('professions','ore_yield'),[lootDup(0.050,'ore')]],
            ['Prospector\'s Instinct',tk3SkillIcon('general','luck'),[flat('minecraft:generic.luck',0.40),apothicXp(0.035)]],
            ['Deep Reach',tk3SkillIcon('professions','mine_depths'),[flat('minecraft:player.block_interaction_range',0.55)]],
            ['Stoneborn',tk3SkillIcon('defense','vitality'),[percent('minecraft:generic.max_health',0.040),damageAvoidance(0.035)]]
        ],
        logging:[
            ['Timber Rush',tk3SkillIcon('professions','logging'),[blockBreak(0.14,hasItemInHand('minecraft:axes'))]],
            ['Axe Mastery',tk3SkillIcon('utility','workshop_tools'),[repairEfficiency(0.12,'minecraft:axes')]],
            ['Forest Runner',tk3SkillIcon('professions','forestry'),[percent('minecraft:generic.movement_speed',0.040)]],
            ['Barkskin',tk3SkillIcon('defense','vitality'),[percent('minecraft:generic.max_health',0.035),flat('minecraft:generic.armor',1.0)]],
            ['Clean Felling',tk3SkillIcon('professions','log_yield'),[blockBreak(0.08,hasItemInHand('minecraft:axes')),flat('minecraft:generic.luck',0.25)]],
            ['Woodwright',tk3SkillIcon('utility','recycling'),[repairEfficiency(0.15,'minecraft:axes'),flat('minecraft:player.block_interaction_range',0.20)]]
        ],
        hunting:[
            ['Stalker',tk3SkillIcon('utility','tracking'),[percent('minecraft:generic.movement_speed',0.025),damageAvoidance(0.055,crouchingCondition())]],
            ['Relentless Pursuit',tk3SkillIcon('utility','tracking'),[percent('minecraft:generic.movement_speed',0.025),xpMobs(0.050)]],
            ['Trophy Hunter',tk3SkillIcon('utility','hunter_trophy'),[lootDup(0.050,'mobs')]],
            ['Master Butcher',tk3SkillIcon('utility','beast_slayer'),[lootDup(0.035,'mobs'),critChance(0.015)]],
            ['Trail Cook',tk3SkillIcon('utility','camping'),[wellFedPercent('minecraft:generic.attack_damage',0.070,15),wellFedPercent('minecraft:generic.max_health',0.035,15)]],
            ['Big Game Feast',tk3SkillIcon('defense','vitality'),[wellFedPercent('minecraft:generic.attack_damage',0.10,18),wellFedPercent('minecraft:generic.max_health',0.070,18)]]
        ],
        exploration:[
            ['Trailblazer',tk3SkillIcon('general','fleet_feet'),[percent('minecraft:generic.movement_speed',0.045)]],
            ['Surefooted',tk3SkillIcon('defense','evasion'),[damageAvoidance(0.050)]],
            ['Scavenger',tk3SkillIcon('general','treasure'),[lootDup(0.050,'chests')]],
            ['Treasure Sense',tk3SkillIcon('general','luck'),[flat('minecraft:generic.luck',0.50),lootDup(0.020,'chests')]],
            ['Archaeologist',tk3SkillIcon('utility','ancient_shrine'),[freeEnchant(0.020),apothicXp(0.035)]],
            ['Expedition Survival',tk3SkillIcon('utility','camping'),[damageAvoidance(0.045),percent('minecraft:generic.max_health',0.035),flat('minecraft:player.block_interaction_range',0.25)]]
        ],
        fishing:[
            ['Bountiful Catch',tk3SkillIcon('professions','angler'),[lootDup(0.055,'fishing')]],
            ['Master Angler',tk3SkillIcon('professions','fishing'),[lootDup(0.035,'fishing'),conditionalAttribute('minecraft:generic.luck',0.45,0,fishingCondition(),false)]],
            ['Tidal Reflexes',tk3SkillIcon('defense','evasion'),[damageAvoidance(0.070,underwaterCondition()),underwaterPercent('minecraft:generic.movement_speed',0.060)]],
            ['Ocean Wanderer',tk3SkillIcon('general','fleet_feet'),[underwaterPercent('minecraft:generic.movement_speed',0.10),flat('minecraft:generic.luck',0.20)]],
            ['Seafood Expert',tk3SkillIcon('professions','fishing'),[wellFedPercent('minecraft:generic.max_health',0.060,15),wellFedPercent('minecraft:generic.movement_speed',0.035,15)]],
            ['Fisherman\'s Feast',tk3SkillIcon('defense','healing'),[wellFedPercent('minecraft:generic.max_health',0.085,18),wellFedFlat('minecraft:generic.armor',1.25,18)]]
        ],
        farming:[
            ['Bountiful Harvest',tk3SkillIcon('professions','crop_growth'),[flat('minecraft:player.block_interaction_range',0.45),blockBreak(0.08,hasItemInHand('minecraft:hoes'))]],
            ['Fieldwright',tk3SkillIcon('utility','workshop_tools'),[repairEfficiency(0.12,'minecraft:hoes')]],
            ['Master Husbandry',tk3SkillIcon('professions','animal_care'),[lootDup(0.035,'mobs'),healingReceived(0.030)]],
            ['Homestead',tk3SkillIcon('defense','healing'),[wellFedPercent('minecraft:generic.max_health',0.050,15),damageAvoidance(0.025)]],
            ['Kitchen Garden',tk3SkillIcon('professions','botany'),[wellFedFlat('minecraft:generic.armor',1.25,15),flat('minecraft:generic.luck',0.25)]],
            ['Farmhouse Feast',tk3SkillIcon('defense','vitality'),[wellFedPercent('minecraft:generic.max_health',0.085,18),wellFedFlat('minecraft:generic.armor',1.75,18)]]
        ],
        crafting:[
            ['Master Smith',tk3SkillIcon('special','blacksmith'),[repairEfficiency(0.16,'minecraft:enchantable/mining')]],
            ['Masterwork',tk3SkillIcon('general','crafting_mastery'),[repairEfficiency(0.10,'minecraft:enchantable/mining'),flat('minecraft:generic.luck',0.25)]],
            ['Arcane Insight',tk3SkillIcon('magic','arcane_tome'),[freeEnchant(0.030),apothicXp(0.040)]],
            ['Runesmith',tk3SkillIcon('special','runesmith'),[freeEnchant(0.022),flat('minecraft:generic.luck',0.30)]],
            ['Precision Workshop',tk3SkillIcon('utility','crafting_bench'),[flat('minecraft:player.block_interaction_range',0.45),repairEfficiency(0.08,'minecraft:enchantable/mining')]],
            ['Engineer',tk3SkillIcon('special','artificer_tools'),[repairEfficiency(0.12,'minecraft:enchantable/mining'),apothicXp(0.035)]]
        ],
        alchemy:[
            ['Efficient Brewer',tk3SkillIcon('special','alchemy'),[effectDuration('beneficial',0.22,'player')]],
            ['Splash Discipline',tk3SkillIcon('magic','arcane_tome'),[selfSplashImmune(),effectDuration('beneficial',0.12,'player')]],
            ['Restorative Mixtures',tk3SkillIcon('defense','healing'),[effectDuration('beneficial',0.28,'player'),healingReceived(0.050)]],
            ['Catalytic Potency',tk3SkillIcon('magic','arcane_power'),[effectDuration('beneficial',0.18,'player'),magic('spell_power',0.025,freeEnchant(0.012))]],
            ['Venomcraft',tk3SkillIcon('defense','poison_resist'),[effectDuration('harmful',0.25,'enemy'),canPoisonAnyone()]],
            ['Lethal Toxicology',tk3SkillIcon('magic','eldritch'),[effectDuration('harmful',0.20,'enemy'),lethalPoison()]]
        ]
    }

    function buildProfession(def) {
        // Old 1.18.2 geometry: central root -> widening radial branches -> mastery -> deep specializations.
        // The values are deliberately much larger so eight professions remain readable as real trees.
        var portalPos = polar(def.angle, 760, 0)
        var portal = addNode('tk3_prof_gate_' + def.id, portalPos.x, portalPos.y, def.name + ' Passage', def.icon, [], {
            type:'gateway', buttonSize:28, color:def.color, requirements:[learnedSkill(originId)]
        })
        var nearShared = nearestByAngle(sharedEntries, def.angle)
        if (nearShared) connect(nearShared.end, portal); else connect(originId, portal)

        var rootPos = polar(def.angle, 890, 0)
        var rootBonuses = scaledBonuses(
            def.branches[0][2].concat(def.branches[1][2]).concat(def.branches[2][2]),
            0.18
        ).concat(stateTag('tk3_profession_' + def.id))
        var root = addNode('tk3_prof_' + def.id + '_root', rootPos.x, rootPos.y, def.name, def.icon, rootBonuses, {
            type:'class', buttonSize:42, color:def.color, requirements:[learnedSkill(portal)]
        })
        connectLong(portal, root)

        var branchOffsets = [-250,0,250]
        var branchEnds = []
        var masteryNodes = []
        for (var branch = 0; branch < 3; branch++) {
            var prevProf = root
            var masteryNode = null
            for (var rank = 1; rank <= PROFESSION_BRANCH_RANKS; rank++) {
                var progress = rank / (PROFESSION_BRANCH_RANKS + 1)
                var spread = Math.sin(Math.PI * progress)
                var profRadius = 1010 + (rank - 1) * 82
                var profOffset = branchOffsets[branch] * spread
                var profPos = polar(def.angle, profRadius, profOffset)
                var factor = professionRankFactor(rank)
                var rankBonuses = scaledBonuses(def.branches[branch][2], factor)
                var milestoneSet = (PROFESSION_MILESTONES[def.id] || [])[branch]
                if (rank === PROFESSION_MASTERY_RANK && milestoneSet) {
                    rankBonuses = rankBonuses.concat(compactBonuses(milestoneSet.trained || []))
                }
                if (rank === PROFESSION_BRANCH_RANKS && milestoneSet) {
                    rankBonuses = rankBonuses.concat(compactBonuses(milestoneSet.expert || []))
                }
                if (rank === PROFESSION_MASTERY_RANK) {
                    rankBonuses = rankBonuses.concat(stateTag('tk3_prof_' + def.id + '_branch_' + (branch+1) + '_trained'))
                }
                if (rank === PROFESSION_BRANCH_RANKS) {
                    rankBonuses = rankBonuses.concat(stateTag('tk3_prof_' + def.id + '_branch_' + (branch+1) + '_expert'))
                }
                var profNodeId = addNode('tk3_prof_' + def.id + '_b' + (branch+1) + '_' + rank,
                    profPos.x, profPos.y, def.branches[branch][0] + ' ' + roman(rank), def.branches[branch][1],
                    rankBonuses, {
                        type:(rank === PROFESSION_MASTERY_RANK || rank === PROFESSION_BRANCH_RANKS) ? 'notable':'lesser',
                        color:def.color, requirements:[learnedSkill(prevProf)]
                    })
                connect(prevProf, profNodeId)
                prevProf = profNodeId
                if (rank === PROFESSION_MASTERY_RANK) masteryNode = profNodeId
            }
            branchEnds.push(prevProf)
            masteryNodes.push(masteryNode)
        }

        var masterPos = polar(def.angle, 1710, 0)
        var master = addNode('tk3_prof_' + def.id + '_master', masterPos.x, masterPos.y, 'Master ' + def.name,
            def.masterIcon, scaledBonuses(def.branches[0][2].concat(def.branches[1][2]).concat(def.branches[2][2]),0.75)
                .concat(compactBonuses(PROFESSION_MASTER_BONUSES[def.id] || []))
                .concat(stateTag('tk3_profession_master_' + def.id)), {
                    type:'keystone', buttonSize:42, color:def.color, tags:['profession_mastery'],
                    requirements:masteryNodes.map(function(nodeId){ return learnedSkill(nodeId) })
                })
        masteryNodes.forEach(function(nodeId){ connectLong(nodeId, master) })

        // Two deep focuses per branch. Reaching Mastery only requires Rank IV, but a focus requires
        // Rank VIII in its parent branch. This makes profession knowledge affordable and mastery depth expensive.
        var focusOffsets = [-330,-190,-70,70,190,330]
        var focusBranch = [0,0,1,1,2,2]
        var professionFocuses = PROFESSION_FOCUSES[def.id] || []
        for (var focusIndex = 0; focusIndex < 6; focusIndex++) {
            var fb = focusBranch[focusIndex]
            var focusDef = professionFocuses[focusIndex]
            var focusTitle = focusDef ? focusDef[0] : def.branches[fb][0] + ' Specialization ' + roman((focusIndex % 2) + 1)
            var focusIcon = focusDef ? focusDef[1] : def.branches[fb][1]
            var focusBonuses = focusDef ? compactBonuses(focusDef[2]) : scaledBonuses(def.branches[fb][2],0.75)
            focusBonuses = focusBonuses.concat(stateTag('tk3_prof_focus_' + def.id + '_' + (focusIndex+1)))
            var focusPos = polar(def.angle, 1850, focusOffsets[focusIndex])
            var focusId = addNode('tk3_prof_' + def.id + '_focus_' + (focusIndex+1),
                focusPos.x, focusPos.y, focusTitle, focusIcon, focusBonuses, {
                    type:'notable', buttonSize:30, color:def.color,
                    tags:['profession_focus_' + def.id],
                    requirements:[learnedSkill(branchEnds[fb])]
                })
            connect(branchEnds[fb], focusId)
        }
    }
    professions.forEach(function(def){ buildProfession(def) })

    // ---------------------------------------------------------------------
    // FREEFORM / WILDCARD CONSTELLATIONS
    // ---------------------------------------------------------------------
    // These six neutral satellites live in the empty gaps between the class petals.
    // They are NOT classes and NOT professions: no archetype/profession limitation tags are used.
    // Their purpose is to support odd hybrid, jack-of-all-trades, and tradeoff-heavy builds.
    //
    // Geometry rule: keep the approved petal layout intact. These constellations only occupy the
    // six inter-petal gaps at 0/60/120/180/240/300 degrees.
    const wildcardDefs = [
        {
            id:'daredevil', name:'Daredevil', angle:0, color:'D97A4A', icon:tk3SkillIcon('general','fleet_feet'),
            branches:[
                ['Momentum',tk3SkillIcon('general','sprint'),[percent('minecraft:generic.movement_speed',0.018),percent('minecraft:generic.attack_speed',0.015)]],
                ['Risk',tk3SkillIcon('combat','critical_star'),[critChance(0.0075),critDamage(0.025)]],
                ['Reach',tk3SkillIcon('general','perception'),[flat('minecraft:player.block_interaction_range',0.12),flat('minecraft:player.entity_interaction_range',0.08)]]
            ],
            capstone:[percent('minecraft:generic.movement_speed',0.035),critChance(0.015),critDamage(0.05),percent('minecraft:generic.max_health',-0.05)]
        },
        {
            id:'bulwark', name:'Bulwark', angle:60, color:'7894C9', icon:tk3SkillIcon('defense','fortitude'),
            branches:[
                ['Iron Skin',tk3SkillIcon('defense','armor'),[flat('minecraft:generic.armor',0.45),flat('minecraft:generic.armor_toughness',0.25)]],
                ['Staying Power',tk3SkillIcon('defense','vitality'),[percent('minecraft:generic.max_health',0.018),healingReceived(0.012)]],
                ['Unshaken',tk3SkillIcon('defense','resolve'),[flat('minecraft:generic.knockback_resistance',0.012),damageAvoidance(0.006)]]
            ],
            capstone:[flat('minecraft:generic.armor',1.5),flat('minecraft:generic.armor_toughness',0.75),percent('minecraft:generic.max_health',0.045),percent('minecraft:generic.movement_speed',-0.025)]
        },
        {
            id:'fortune_seeker', name:'Fortune Seeker', angle:120, color:'D7B04A', icon:tk3SkillIcon('general','treasure'),
            branches:[
                ['Lucky Break',tk3SkillIcon('general','luck'),[flat('minecraft:generic.luck',0.16),lootDup(0.004,'chests')]],
                ['Opportunist',tk3SkillIcon('utility','bounty'),[lootDup(0.004,'mobs'),critChance(0.004)]],
                ['Fast Learner',tk3SkillIcon('general','scholar'),[apothicXp(0.018),freeEnchant(0.006)]]
            ],
            capstone:[flat('minecraft:generic.luck',0.45),lootDup(0.010,'chests'),lootDup(0.008,'mobs'),apothicXp(0.035)]
        },
        {
            id:'bloodbound', name:'Bloodbound', angle:180, color:'A95366', icon:tk3SkillIcon('combat','blood_power'),
            branches:[
                ['Sanguine Edge',tk3SkillIcon('combat','heavy_strike'),[percent('minecraft:generic.attack_damage',0.018),lifeSteal(0.0025)]],
                ['Red Vitality',tk3SkillIcon('defense','life_steal'),[percent('minecraft:generic.max_health',0.016),healingReceived(0.012)]],
                ['Frenzy',tk3SkillIcon('combat','rage'),[percent('minecraft:generic.attack_speed',0.018),critChance(0.004)]]
            ],
            capstone:[percent('minecraft:generic.attack_damage',0.04),lifeSteal(0.008),percent('minecraft:generic.attack_speed',0.03),flat('minecraft:generic.armor',-1.0)]
        },
        {
            id:'arcane_dabbler', name:'Arcane Dabbler', angle:240, color:'8B75C7', icon:tk3SkillIcon('magic','arcane_tome'),
            branches:[
                ['Spellcraft',tk3SkillIcon('magic','arcane_power'),[magic('spell_power',0.018,freeEnchant(0.006))]],
                ['Reservoir',tk3SkillIcon('magic','mana_pool'),[magic('max_mana',0.030,apothicXp(0.012)),magic('mana_regen',0.020,freeEnchant(0.005))]],
                ['Infusion',tk3SkillIcon('special','alchemy'),[effectDuration('beneficial',0.035,'player'),freeEnchant(0.005)]]
            ],
            capstone:[magic('spell_power',0.045,freeEnchant(0.018)),magic('max_mana',0.070,apothicXp(0.030)),effectDuration('beneficial',0.10,'player'),percent('minecraft:generic.attack_damage',-0.035)]
        },
        {
            id:'jack_of_all_trades', name:'Jack of All Trades', angle:300, color:'86A88A', icon:tk3SkillIcon('special','wayfarer'),
            branches:[
                ['Handyman',tk3SkillIcon('utility','workshop_tools'),[repairEfficiency(0.030,'minecraft:enchantable/mining'),blockBreak(0.015)]],
                ['Wayfarer',tk3SkillIcon('general','expedition'),[percent('minecraft:generic.movement_speed',0.010),flat('minecraft:player.block_interaction_range',0.08)]],
                ['Scrounger',tk3SkillIcon('general','luck'),[flat('minecraft:generic.luck',0.10),apothicXp(0.012)]]
            ],
            capstone:[repairEfficiency(0.07,'minecraft:enchantable/mining'),percent('minecraft:generic.movement_speed',0.02),flat('minecraft:player.block_interaction_range',0.20),flat('minecraft:generic.luck',0.25),apothicXp(0.02)]
        }
    ]

    function buildWildcardConstellation(def) {
        var entryShared = nearestByAngle(sharedEntries, def.angle)
        var gatePos = polar(def.angle, 1880, 0)
        var gate = addNode('tk3_wild_' + def.id + '_gate', gatePos.x, gatePos.y, def.name + ' Passage', def.icon, [], {
            type:'gateway', buttonSize:30, color:def.color,
            requirements:entryShared ? [learnedSkill(entryShared.end)] : [learnedSkill(originId)]
        })
        if (entryShared) connectLong(entryShared.end, gate); else connectLong(originId, gate)

        var rootPos = polar(def.angle, 2070, 0)
        var rootMix = scaledBonuses(
            def.branches[0][2].concat(def.branches[1][2]).concat(def.branches[2][2]),
            0.18
        ).concat(stateTag('tk3_wild_' + def.id))
        var root = addNode('tk3_wild_' + def.id + '_root', rootPos.x, rootPos.y, def.name, def.icon, rootMix, {
            type:'notable', buttonSize:34, color:def.color, requirements:[learnedSkill(gate)]
        })
        connect(gate, root)

        var branchOffsets = [-260, 0, 260]
        var branchEnds = []
        for (var branch = 0; branch < 3; branch++) {
            var prev = root
            for (var rank = 1; rank <= 4; rank++) {
                var wave = Math.sin(Math.PI * rank / 5)
                var radius = 2240 + (rank - 1) * 205
                var offset = branchOffsets[branch] * wave
                var pos = polar(def.angle, radius, offset)
                var factor = rank === 4 ? 0.85 : (0.38 + rank * 0.10)
                var nodeId = addNode(
                    'tk3_wild_' + def.id + '_b' + (branch + 1) + '_' + rank,
                    pos.x, pos.y,
                    def.branches[branch][0] + ' ' + roman(rank),
                    def.branches[branch][1],
                    scaledBonuses(def.branches[branch][2], factor),
                    {
                        type:rank === 4 ? 'notable' : 'lesser',
                        color:def.color,
                        requirements:[learnedSkill(prev)]
                    }
                )
                connect(prev, nodeId)
                prev = nodeId
            }
            branchEnds.push(prev)
        }

        var capPos = polar(def.angle, 3130, 0)
        var capstone = addNode('tk3_wild_' + def.id + '_capstone', capPos.x, capPos.y,
            def.name + ' Keystone', def.icon, compactBonuses(def.capstone || []).concat(stateTag('tk3_wild_keystone_' + def.id)), {
                type:'keystone', buttonSize:40, color:def.color,
                requirements:branchEnds.map(function(nodeId){ return learnedSkill(nodeId) })
            })
        branchEnds.forEach(function(nodeId){ connect(nodeId, capstone) })
    }

    wildcardDefs.forEach(function(def){ buildWildcardConstellation(def) })

    // Professions deliberately do not connect to one another. The old tree's strong visual identity
    // came from self-contained radial sectors, and V4 keeps that rule even with eight professions.

    // ---------------------------------------------------------------------
    // SIX MAIN CLASSES
    // ---------------------------------------------------------------------
    const classes = [
        {
            id:'warrior', name:'Warrior', angle:-90, color:'E05A47', icon:tk3ClassIcon('warrior'),
            root:[percent('minecraft:generic.attack_damage',0.035),percent('minecraft:generic.max_health',0.025)],
            core:[
                ['Weapon Training',tk3SkillIcon('combat','weapon_training'),[percent('minecraft:generic.attack_damage',0.025)]],
                ['Battle Rhythm',tk3SkillIcon('combat','attack_speed'),[percent('minecraft:generic.attack_speed',0.03)]],
                ['Endurance',tk3SkillIcon('defense','vitality'),[percent('minecraft:generic.max_health',0.025)]],
                ['Iron Guard',tk3SkillIcon('defense','armor'),[flat('minecraft:generic.armor',0.75)]],
                ['Pressure',tk3SkillIcon('combat','armor_break'),[armorShred(0.01)]]
            ],
            gate:[percent('minecraft:generic.attack_damage',0.02)],
            subclasses:[
                { id:'berserker', name:'Berserker', icon:tk3SubclassIcon('berserker'),
                  root:[percent('minecraft:generic.attack_damage',0.08),percent('minecraft:generic.max_health',-0.06),healingReceived(-0.08)],
                  traits:[['Fury',tk3SkillIcon('combat','rage'),[percent('minecraft:generic.attack_damage',0.05)]],['Brutality',tk3SkillIcon('combat','heavy_strike'),[critDamage(0.08)]],['Blood Price',tk3SkillIcon('defense','life_steal'),[healingReceived(-0.025),percent('minecraft:generic.attack_damage',0.03)]]] },
                { id:'weapon_master', name:'Weapon Master', icon:tk3SubclassIcon('weapon_master'),
                  root:[percent('minecraft:generic.attack_damage',0.05),percent('minecraft:generic.attack_speed',0.06),flat('minecraft:generic.armor',-2)],
                  traits:[['Technique',tk3SkillIcon('combat','weapon_training'),[percent('minecraft:generic.attack_damage',0.03)]],['Tempo',tk3SkillIcon('combat','attack_speed'),[percent('minecraft:generic.attack_speed',0.04)]],['Precision',tk3SkillIcon('combat','critical_star'),[critChance(0.02),critDamage(0.04)]]] },
                { id:'juggernaut', name:'Juggernaut', icon:tk3SubclassIcon('juggernaut'),
                  root:[flat('minecraft:generic.armor',2),percent('minecraft:generic.max_health',0.08),healingReceived(0.08),percent('minecraft:generic.movement_speed',-0.05),percent('minecraft:generic.attack_damage',-0.05)],
                  traits:[['Fortress',tk3SkillIcon('defense','armor'),[flat('minecraft:generic.armor',1)]],['Vitality',tk3SkillIcon('defense','vitality'),[percent('minecraft:generic.max_health',0.04)]],['Recovery',tk3SkillIcon('defense','healing'),[healingReceived(0.05)]]] }
            ]
        },
        {
            id:'ranger', name:'Ranger', angle:-30, color:'5DAE68', icon:tk3ClassIcon('ranger'),
            root:[projectileDamage(0.025),percent('minecraft:generic.movement_speed',0.02),arrowRetrieval(0.05)],
            core:[
                ['Archery',tk3SkillIcon('combat','archery'),[projectileDamage(0.025)]],
                ['Quick Draw',tk3SkillIcon('combat','projectile_barrage'),[drawSpeed(0.025)]],
                ['Trailcraft',tk3SkillIcon('general','fleet_feet'),[percent('minecraft:generic.movement_speed',0.02)]],
                ['Steady Aim',tk3SkillIcon('combat','critical_star'),[critChance(0.0125)]],
                ['Fieldcraft',tk3SkillIcon('utility','tracking'),[xpMobs(0.0125)]]
            ], gate:[projectileDamage(0.02)],
            subclasses:[
                { id:'marksman', name:'Marksman', icon:tk3SubclassIcon('marksman'),
                  root:[projectileDamage(0.10),drawSpeed(0.10),percent('minecraft:generic.movement_speed',-0.04)],
                  traits:[['Long Shot',tk3SkillIcon('combat','archery'),[projectileDamage(0.05)]],['Quick Draw',tk3SkillIcon('combat','projectile_barrage'),[drawSpeed(0.05)]],['Deadeye',tk3SkillIcon('combat','critical_star'),[critChance(0.02),projectileSpeed(0.05)]]] },
                { id:'hunter', name:'Hunter', icon:tk3SubclassIcon('hunter'),
                  root:[percent('minecraft:generic.movement_speed',0.06),lootDup(0.02,'mobs'),drawSpeed(-0.06),critChance(0.025)],
                  traits:[['Pursuit',tk3SkillIcon('utility','tracking'),[percent('minecraft:generic.movement_speed',0.03)]],['Trophies',tk3SkillIcon('utility','hunter_trophy'),[lootDup(0.0125,'mobs')]],['Killer Instinct',tk3SkillIcon('combat','critical_star'),[critChance(0.02)]]] },
                { id:'beastmaster', name:'Beastmaster', icon:tk3SubclassIcon('beastmaster'),
                  root:[percent('minecraft:generic.max_health',0.07),percent('minecraft:generic.movement_speed',0.04),projectileDamage(-0.08),xpMobs(0.08)],
                  traits:[['Pack Endurance',tk3SkillIcon('defense','vitality'),[percent('minecraft:generic.max_health',0.035)]],['Wild Pace',tk3SkillIcon('general','fleet_feet'),[percent('minecraft:generic.movement_speed',0.025)]],['Beast Lore',tk3SkillIcon('utility','beast_slayer'),[xpMobs(0.04)]]] }
            ]
        },
        {
            id:'rogue', name:'Rogue', angle:30, color:'9A6BC5', icon:tk3ClassIcon('rogue'),
            root:[percent('minecraft:generic.movement_speed',0.03),critChance(0.02),critDamage(0.03)],
            core:[
                ['Light Feet',tk3SkillIcon('general','dash'),[percent('minecraft:generic.movement_speed',0.02)]],
                ['Dirty Fighting',tk3SkillIcon('combat','ambush'),[critDamage(0.035)]],
                ['Precision',tk3SkillIcon('combat','critical_star'),[critChance(0.0125)]],
                ['Evasion',tk3SkillIcon('defense','evasion'),[dodge(0.006)]],
                ['Quick Hands',tk3SkillIcon('combat','attack_speed'),[percent('minecraft:generic.attack_speed',0.025)]]
            ], gate:[critChance(0.015)],
            subclasses:[
                { id:'assassin', name:'Assassin', icon:tk3SubclassIcon('assassin'),
                  root:[percent('minecraft:generic.movement_speed',0.07),percent('minecraft:generic.max_health',-0.06),critChance(0.05)],
                  traits:[['Silent Step',tk3SkillIcon('combat','ambush'),[percent('minecraft:generic.movement_speed',0.03)]],['Killer Instinct',tk3SkillIcon('combat','execute'),[critChance(0.025)]],['Deathblow',tk3SkillIcon('combat','critical_star'),[critDamage(0.06)]]] },
                { id:'duelist', name:'Duelist', icon:tk3SubclassIcon('duelist'),
                  root:[critDamage(0.10),dodge(0.025),flat('minecraft:generic.armor',-2)],
                  traits:[['Finesse',tk3SkillIcon('combat','dual_wield'),[critDamage(0.05)]],['Footwork',tk3SkillIcon('defense','evasion'),[dodge(0.0125)]],['Riposte',tk3SkillIcon('combat','weapon_training'),[percent('minecraft:generic.attack_speed',0.025)]]] },
                { id:'shadowblade', name:'Shadowblade', icon:tk3SubclassIcon('shadowblade'),
                  root:[flat('minecraft:generic.armor',-2),projectileDamage(-0.10),critChance(0.045),critDamage(0.09)],
                  traits:[['Veil',tk3SkillIcon('combat','ambush'),[stealth(0.05)]],['Shadow Crit',tk3SkillIcon('combat','critical_star'),[critChance(0.025)]],['Void Edge',tk3SkillIcon('magic','void_magic'),[critDamage(0.05),schoolPower('ender',0.025)]]] }
            ]
        },
        {
            id:'mage', name:'Mage', angle:90, color:'55CFEA', icon:tk3ClassIcon('mage'),
            root:compactBonuses([magic('max_mana',0.06,freeEnchant(0.02)),magic('spell_power',0.035,xpMobs(0.02)),percent('minecraft:generic.attack_damage',-0.03)]),
            core:[
                ['Arcane Power',tk3SkillIcon('magic','arcane_power'),[magic('spell_power',0.025,xpMobs(0.015))]],
                ['Mana Reserve',tk3SkillIcon('magic','mana_pool'),[magic('max_mana',0.04,freeEnchant(0.015))]],
                ['Mana Flow',tk3SkillIcon('magic','mana_regen'),[magic('mana_regen',0.035,xpMobs(0.015))]],
                ['Focused Casting',tk3SkillIcon('magic','spell_projectile'),compactBonuses([optionalPercent('irons_spellbooks:cast_time_reduction',0.02) || magic('spell_power',0.015,freeEnchant(0.01))])],
                ['Arcane Ward',tk3SkillIcon('magic','arcane_barrier'),[percent('minecraft:generic.max_health',0.01)]]
            ], gate:[magic('spell_power',0.02,xpMobs(0.015))],
            subclasses:[
                { id:'elementalist', name:'Elementalist', icon:tk3SubclassIcon('elementalist'),
                  root:compactBonuses([optionalPercent('irons_spellbooks:cooldown_reduction',0.07),schoolPower('ice',0.07),schoolPower('fire',0.07),schoolPower('lightning',0.07)]),
                  traits:[['Fire Mastery',tk3SkillIcon('magic','fire'),[schoolPower('fire',0.045)]],['Ice Mastery',tk3SkillIcon('magic','ice'),[schoolPower('ice',0.045)]],['Lightning Mastery',tk3SkillIcon('magic','lightning'),[schoolPower('lightning',0.045)]]] },
                { id:'arcanist', name:'Arcanist', icon:tk3SubclassIcon('arcanist'),
                  root:[percent('minecraft:generic.attack_damage',-0.07),magic('max_mana',0.12,freeEnchant(0.04)),magic('spell_power',0.08,xpMobs(0.04))],
                  traits:[['Deep Reserves',tk3SkillIcon('magic','mana_pool'),[magic('max_mana',0.06,freeEnchant(0.02))]],['Arcane Force',tk3SkillIcon('magic','arcane_power'),[magic('spell_power',0.05,xpMobs(0.025))]],['Flow',tk3SkillIcon('magic','mana_regen'),[magic('mana_regen',0.04,xpMobs(0.02))]]] },
                { id:'battlemage', name:'Battlemage', icon:tk3SubclassIcon('battlemage'),
                  root:compactBonuses([optionalPercent('irons_spellbooks:cooldown_reduction',-0.05),magic('spell_power',0.06,xpMobs(0.03)),magic('mana_regen',-0.06,xpMobs(-0.02)),percent('minecraft:generic.attack_damage',0.07)]),
                  traits:[['Spellsteel',tk3SkillIcon('magic','arcane_slash'),[percent('minecraft:generic.attack_damage',0.04)]],['Battle Casting',tk3SkillIcon('combat','spellblade'),[magic('spell_power',0.04,xpMobs(0.02))]],['Arcane Guard',tk3SkillIcon('magic','arcane_barrier'),[flat('minecraft:generic.armor',0.6)]]] }
            ]
        },
        {
            id:'cleric', name:'Cleric', angle:150, color:'F1D776', icon:tk3ClassIcon('cleric'),
            root:compactBonuses([schoolPower('holy',0.04),magic('mana_regen',0.03,xpMobs(0.02)),healingReceived(0.03)]),
            core:[
                ['Faith',tk3SkillIcon('magic','holy'),[schoolPower('holy',0.025)]],
                ['Prayer',tk3SkillIcon('magic','holy_prayer'),[magic('mana_regen',0.025,xpMobs(0.015))]],
                ['Grace',tk3SkillIcon('defense','healing'),[healingReceived(0.025)]],
                ['Sacred Guard',tk3SkillIcon('defense','armor'),[flat('minecraft:generic.armor',0.5)]],
                ['Wisdom',tk3SkillIcon('general','scholar'),[freeEnchant(0.005)]]
            ], gate:[schoolPower('holy',0.02)],
            subclasses:[
                { id:'priest', name:'Priest', icon:tk3SubclassIcon('priest'),
                  root:[schoolPower('holy',0.09),schoolPower('blood',-0.08),magic('mana_regen',0.09,xpMobs(0.04)),percent('minecraft:generic.attack_damage',-0.07)],
                  traits:[['Divine Channel',tk3SkillIcon('magic','holy_power'),[schoolPower('holy',0.05)]],['Prayer',tk3SkillIcon('magic','holy_prayer'),[magic('mana_regen',0.05,xpMobs(0.025))]],['Grace',tk3SkillIcon('defense','healing'),[healingReceived(0.04)]]] },
                { id:'crusader', name:'Crusader', icon:tk3SubclassIcon('crusader'),
                  root:[schoolPower('holy',0.06),flat('minecraft:generic.armor',2),magic('max_mana',-0.08,xpMobs(-0.02)),magic('mana_regen',-0.08,xpMobs(-0.02))],
                  traits:[['Consecrated Armor',tk3SkillIcon('magic','crusader'),[flat('minecraft:generic.armor',1)]],['Holy Power',tk3SkillIcon('magic','holy_power'),[schoolPower('holy',0.04)]],['Zeal',tk3SkillIcon('combat','weapon_training'),[percent('minecraft:generic.attack_damage',0.025)]]] },
                { id:'oracle', name:'Oracle', icon:tk3SubclassIcon('oracle'),
                  root:[freeEnchant(0.08),magic('max_mana',0.10,freeEnchant(0.03)),magic('spell_power',-0.06,xpMobs(-0.02)),percent('minecraft:generic.attack_damage',-0.07)],
                  traits:[['Foresight',tk3SkillIcon('magic','oracle'),[freeEnchant(0.035)]],['Deep Insight',tk3SkillIcon('general','insight'),[magic('max_mana',0.05,freeEnchant(0.02))]],['Knowledge',tk3SkillIcon('general','scholar'),[apothicXp(0.03)]]] }
            ]
        },
        {
            id:'occultist', name:'Occultist', angle:210, color:'9B4B70', icon:tk3ClassIcon('occultist'),
            root:compactBonuses([magic('max_mana',0.04,xpMobs(0.02)),schoolPower('eldritch',0.03),schoolPower('ender',0.02),percent('minecraft:generic.max_health',-0.02)]),
            core:[
                ['Forbidden Study',tk3SkillIcon('magic','occult_scroll'),[magic('spell_power',0.025,freeEnchant(0.015))]],
                ['Dark Reserve',tk3SkillIcon('magic','mana_pool'),[magic('max_mana',0.035,xpMobs(0.015))]],
                ['Blood Rite',tk3SkillIcon('magic','blood'),[schoolPower('blood',0.025)]],
                ['Void Study',tk3SkillIcon('magic','void_magic'),[schoolPower('ender',0.025)]],
                ['Eldritch Study',tk3SkillIcon('magic','eldritch'),[schoolPower('eldritch',0.025)]]
            ], gate:[magic('spell_power',0.02,xpMobs(0.015))],
            subclasses:[
                { id:'blood_mage', name:'Blood Mage', icon:tk3SubclassIcon('blood_mage'),
                  root:[schoolPower('blood',0.10),schoolPower('holy',-0.08),percent('minecraft:generic.max_health',-0.08),percent('minecraft:generic.attack_damage',-0.06)],
                  traits:[['Sanguine Power',tk3SkillIcon('combat','blood_power'),[schoolPower('blood',0.05)]],['Sacrifice',tk3SkillIcon('magic','blood_ritual'),[percent('minecraft:generic.max_health',-0.02),magic('spell_power',0.035,xpMobs(0.02))]],['Crimson Mastery',tk3SkillIcon('magic','blood_blade'),[schoolPower('blood',0.05)]]] },
                { id:'necromancer', name:'Necromancer', icon:tk3SubclassIcon('necromancer'),
                  root:compactBonuses([optionalPercent('irons_spellbooks:summon_damage',0.12) || magic('spell_power',0.07,xpMobs(0.035)),magic('max_mana',0.08,freeEnchant(0.03)),schoolPower('ice',-0.05),schoolPower('fire',-0.05),schoolPower('lightning',-0.05)]),
                  traits:[['Summoning',tk3SkillIcon('magic','summoning'),compactBonuses([optionalPercent('irons_spellbooks:summon_damage',0.06) || magic('spell_power',0.035,xpMobs(0.02))])],['Grave Reserve',tk3SkillIcon('magic','necromancy'),[magic('max_mana',0.04,freeEnchant(0.015))]],['Lord of the Dead',tk3SkillIcon('magic','necromancy_ritual'),compactBonuses([optionalPercent('irons_spellbooks:summon_damage',0.07) || magic('spell_power',0.04,xpMobs(0.02))])]] },
                { id:'voidcaller', name:'Voidcaller', icon:tk3SubclassIcon('voidcaller'),
                  root:[schoolPower('eldritch',0.09),schoolPower('ender',0.08),magic('max_mana',0.08,freeEnchant(0.03)),flat('minecraft:generic.armor',-2),percent('minecraft:generic.max_health',-0.06),percent('minecraft:generic.attack_damage',-0.07)],
                  traits:[['Eldritch Power',tk3SkillIcon('magic','eldritch'),[schoolPower('eldritch',0.05)]],['Void Power',tk3SkillIcon('magic','void_magic'),[schoolPower('ender',0.05)]],['Abyssal Reserve',tk3SkillIcon('magic','mana_pool'),[magic('max_mana',0.04,freeEnchant(0.015))]]] }
            ]
        }
    ]

    const CLASS_ADVANCED_CAPSTONES = {
        warrior:[
            [armorPierce(0.40),critChance(0.010)],
            [percent('minecraft:generic.attack_speed',0.040),damageAvoidance(0.020)],
            [percent('minecraft:generic.max_health',0.040),healingReceived(0.040)],
            [flat('minecraft:generic.armor_toughness',1.0),flat('minecraft:generic.armor',1.0),damageAvoidance(0.030)],
            [armorShred(0.020),critDamage(0.050)]
        ],
        ranger:[
            [projectileDuplication(0.080),projectileSpeed(0.10)],
            [drawSpeed(0.060),arrowRetrieval(0.10)],
            [damageAvoidance(0.050),percent('minecraft:generic.movement_speed',0.020)],
            [critChance(0.020),critDamage(0.080)],
            [lootDup(0.025,'mobs'),xpMobs(0.050)]
        ],
        rogue:[
            [damageAvoidance(0.080,crouchingCondition()),percent('minecraft:generic.movement_speed',0.020)],
            [armorShred(0.020),armorPierce(0.30)],
            [critChance(0.025),critDamage(0.10)],
            [damageAvoidance(0.055)],
            [percent('minecraft:generic.attack_speed',0.060),percent('minecraft:generic.movement_speed',0.020)]
        ],
        mage:[
            compactBonuses([optionalPercent('irons_spellbooks:cooldown_reduction',0.040),magic('spell_power',0.030,freeEnchant(0.018))]),
            [magic('max_mana',0.080,freeEnchant(0.020))],
            [magic('mana_regen',0.070,xpMobs(0.035))],
            compactBonuses([optionalPercent('irons_spellbooks:cast_time_reduction',0.050),magic('spell_power',0.025,freeEnchant(0.015))]),
            [effectDuration('beneficial',0.10,'player'),flat('minecraft:generic.armor',1.0)]
        ],
        cleric:[
            [schoolPower('holy',0.055),effectDuration('beneficial',0.08,'player')],
            [magic('mana_regen',0.060,xpMobs(0.035))],
            [healingReceived(0.070),effectDuration('beneficial',0.10,'player')],
            [flat('minecraft:generic.armor_toughness',0.90),flat('minecraft:generic.armor',1.0),damageAvoidance(0.020)],
            [freeEnchant(0.020),apothicXp(0.035)]
        ],
        occultist:[
            [magic('spell_power',0.055,xpMobs(0.035)),effectDuration('harmful',0.08,'enemy')],
            [magic('max_mana',0.080,freeEnchant(0.020))],
            [schoolPower('blood',0.060),lifeSteal(0.008)],
            [schoolPower('ender',0.060),damageAvoidance(0.025)],
            [schoolPower('eldritch',0.060),effectDuration('harmful',0.10,'enemy')]
        ]
    }

    function buildClass(def) {
        var angle = def.angle
        var classColor = def.color
        function n(part, radius, offset, title, iconName, bonuses, options) {
            var classPos = polar(angle, radius, offset || 0)
            options = options || {}
            options.color = options.color || classColor
            return addNode(classNodeId(def.id, part), classPos.x, classPos.y, title, iconName, bonuses, options)
        }

        // The six class angles intentionally mirror the old 1.18.2 six-sector atlas. V4 scales
        // the same radial language up: entry -> class root -> broad core wedge -> mastery ->
        // advanced wedge -> specialization -> three subclass wedges.
        var entryShared = nearestByAngle(sharedEntries, angle)

        var approach = n('path', 1775, 0, 'Path of the ' + def.name, def.icon, [], {
            type:'gateway', buttonSize:34, color:classColor,
            requirements:entryShared ? [learnedSkill(entryShared.end)] : [learnedSkill(originId)]
        })
        if (entryShared) connectLong(entryShared.end, approach); else connectLong(originId, approach)

        var rootBonuses = compactBonuses((def.root || []).concat(stateTag('tk3_class_' + def.id)))
        var root = n('root', 1960, 0, def.name, def.icon, rootBonuses, {
            type:'class', buttonSize:64, tags:['archetype'], requirements:[learnedSkill(approach)]
        })
        connect(approach, root)

        // CLASS FOUNDATION: five five-rank lobes. This is intentionally wider and longer than
        // V3.3 so a class reads like one of the old datapack's full radial sectors.
        var innerOffsets = [-540,-270,0,270,540]
        var innerEnds = []
        for (var lane = 0; lane < 5; lane++) {
            var coreEntry = def.core[lane]
            var prevInner = root
            for (var rank = 1; rank <= CLASS_CORE_RANKS; rank++) {
                var innerWave = Math.sin(Math.PI * rank / (CLASS_CORE_RANKS + 1))
                var innerOffset = innerOffsets[lane] * innerWave
                var innerRadius = 2110 + (rank - 1) * 132
                var innerId = n('core_inner_' + (lane+1) + '_' + rank, innerRadius, innerOffset,
                    coreEntry[0] + ' ' + roman(rank), coreEntry[1], scaledBonuses(coreEntry[2],classFoundationRankFactor(rank)), {
                        type:(rank === 3 || rank === CLASS_CORE_RANKS) ? 'notable':'lesser',
                        requirements:[learnedSkill(prevInner)]
                    })
                connect(prevInner, innerId)
                prevInner = innerId
            }
            innerEnds.push(prevInner)
        }

        var classMastery = n('class_mastery', 2800, 0, def.name + ' Mastery', def.icon,
            scaledBonuses(def.gate || def.root || [],0.20), {
                type:'keystone', buttonSize:44,
                requirements:innerEnds.map(function(nodeId){ return learnedSkill(nodeId) })
            })
        innerEnds.forEach(function(nodeId){ connect(nodeId, classMastery) })

        // ADVANCED CLASS: five eight-rank lobes. Rank IV in every lobe opens subclasses.
        // Ranks V-VIII are deliberately optional and compete with profession/subclass depth.
        var advancedOffsets = [-660,-330,0,330,660]
        var advancedUnlocks = []
        var classCapstones = CLASS_ADVANCED_CAPSTONES[def.id] || []
        for (var adv = 0; adv < 5; adv++) {
            var advEntry = def.core[adv]
            var prevAdvanced = classMastery
            for (var advRank = 1; advRank <= CLASS_ADVANCED_RANKS; advRank++) {
                var advWave = Math.sin(Math.PI * advRank / (CLASS_ADVANCED_RANKS + 1))
                var advOffset = advancedOffsets[adv] * advWave
                var advRadius = 2970 + (advRank - 1) * 108
                var advancedBonuses = scaledBonuses(advEntry[2],classAdvancedRankFactor(advRank))
                if (advRank === CLASS_ADVANCED_RANKS) {
                    advancedBonuses = advancedBonuses
                        .concat(compactBonuses(classCapstones[adv] || []))
                        .concat(stateTag('tk3_class_focus_' + def.id + '_' + (adv+1)))
                }
                var advId = n('core_advanced_' + (adv+1) + '_' + advRank, advRadius, advOffset,
                    'Advanced ' + advEntry[0] + ' ' + roman(advRank), advEntry[1], advancedBonuses, {
                        type:(advRank === CLASS_SUBCLASS_UNLOCK_RANK || advRank === CLASS_ADVANCED_RANKS) ? 'notable':'lesser',
                        requirements:[learnedSkill(prevAdvanced)]
                    })
                connect(prevAdvanced, advId)
                prevAdvanced = advId
                if (advRank === CLASS_SUBCLASS_UNLOCK_RANK) advancedUnlocks.push(advId)
            }
        }

        var gate = n('subclass_gate', 3925, 0, def.name + ' Specialization', def.icon, def.gate || [], {
            type:'gateway', buttonSize:46,
            requirements:[learnedSkill(classMastery)].concat(advancedUnlocks.map(function(nodeId){ return learnedSkill(nodeId) }))
        })
        connect(classMastery, gate)

        // SUBCLASSES: three large wedges. Ranks I-VIII form the subclass foundation.
        // Ascendancy requires all three Rank VIII milestones + both synergies, but Ranks IX-XVI
        // continue as optional deep paths. This is the key 150-point choice: players can reach
        // their subclass identity without being forced to max every branch.
        var subOffsets = [-980,0,980]
        def.subclasses.forEach(function(sub,sIndex){
            var subOffset = subOffsets[sIndex]
            var subRootBonuses = compactBonuses((sub.root || []).concat(stateTag('tk3_subclass_' + sub.id)))
            var subRoot = n('sub_' + sub.id, 4165, subOffset, sub.name, sub.icon, subRootBonuses, {
                type:'class', buttonSize:56, tags:['subclass'], requirements:[learnedSkill(root),learnedSkill(gate)]
            })
            connect(gate, subRoot)

            var branchOffsets = [-250,0,250]
            var branchNodes = []
            var branchCommitNodes = []
            var branchApexes = []
            for (var pathIndex = 0; pathIndex < 3; pathIndex++) {
                var trait = sub.traits[pathIndex]
                var prevSub = subRoot
                var nodes = []
                for (var subRank = 1; subRank <= SUBCLASS_PATH_RANKS; subRank++) {
                    var localRank = subRank <= SUBCLASS_ASCENDANCY_RANK ? subRank : subRank - SUBCLASS_ASCENDANCY_RANK
                    var localMax = SUBCLASS_ASCENDANCY_RANK
                    var subProgress = localRank / (localMax + 1)
                    var divergence = subRank <= SUBCLASS_ASCENDANCY_RANK
                        ? 0.35 + 0.65 * (subRank / SUBCLASS_ASCENDANCY_RANK)
                        : 1.0
                    var bow = Math.sin(Math.PI * subProgress)
                    var curve = pathIndex === 0 ? -190 * bow : (pathIndex === 2 ? 190 * bow : 90 * Math.sin(Math.PI * 2 * subProgress))
                    var pathOffset = subOffset + branchOffsets[pathIndex] * divergence + curve
                    var pathRadius = subRank <= SUBCLASS_ASCENDANCY_RANK
                        ? 4350 + (subRank - 1) * 90
                        : 5425 + (subRank - SUBCLASS_ASCENDANCY_RANK - 1) * 95
                    var pathBonuses = scaledBonuses(trait[2],subclassRankFactor(subRank))
                    if (subRank === SUBCLASS_ASCENDANCY_RANK) {
                        pathBonuses = pathBonuses.concat(stateTag('tk3_subpath_core_' + sub.id + '_' + (pathIndex+1)))
                    }
                    if (subRank === SUBCLASS_PATH_RANKS) {
                        pathBonuses = pathBonuses.concat(stateTag('tk3_subpath_' + sub.id + '_' + (pathIndex+1)))
                    }
                    var pathId = n('sub_' + sub.id + '_path_' + (pathIndex+1) + '_' + subRank,
                        pathRadius, pathOffset, trait[0] + ' ' + roman(subRank), trait[1], pathBonuses, {
                            type:(subRank === 4 || subRank === 8 || subRank === 12) ? 'notable' : (subRank === SUBCLASS_PATH_RANKS ? 'keystone' : 'lesser'),
                            buttonSize:subRank === SUBCLASS_PATH_RANKS ? 40 : undefined,
                            requirements:[learnedSkill(prevSub)]
                        })
                    connect(prevSub, pathId)
                    prevSub = pathId
                    nodes.push(pathId)
                    if (subRank === SUBCLASS_ASCENDANCY_RANK) branchCommitNodes.push(pathId)
                }
                branchNodes.push(nodes)
                branchApexes.push(prevSub)
            }

            // Old-style bridge notables sit between adjacent branch foundations.
            var synergyNodes = []
            for (var synergy = 0; synergy < 2; synergy++) {
                var leftNode = branchNodes[synergy][SUBCLASS_ASCENDANCY_RANK - 1]
                var rightNode = branchNodes[synergy+1][SUBCLASS_ASCENDANCY_RANK - 1]
                var synergyOffset = subOffset + (branchOffsets[synergy] + branchOffsets[synergy+1]) / 2
                var synergyBonus = scaledBonuses(sub.traits[synergy][2],0.16).concat(scaledBonuses(sub.traits[synergy+1][2],0.16))
                var synergyId = n('sub_' + sub.id + '_synergy_' + (synergy+1), 5135, synergyOffset,
                    sub.name + ' Synergy ' + roman(synergy+1), sub.icon, synergyBonus, {
                        type:'notable', buttonSize:30,
                        requirements:[learnedSkill(leftNode), learnedSkill(rightNode)]
                    })
                connect(leftNode, synergyId)
                connect(rightNode, synergyId)
                synergyNodes.push(synergyId)
            }

            // Ascendancy is a meaningful subclass signature, not the price of fully maxing it.
            // Deep ranks IX-XVI remain beyond this point as optional branch-specific specialization.
            var ascendBonuses = scaledBonuses(sub.root || [],0.30)
                .concat(scaledBonuses(sub.traits[0][2],0.22))
                .concat(scaledBonuses(sub.traits[1][2],0.22))
                .concat(scaledBonuses(sub.traits[2][2],0.22))
                .concat(stateTag('tk3_keystone_' + sub.id))
            var ascendancy = n('sub_' + sub.id + '_ascendancy', 5305, subOffset, sub.name + ' Ascendancy', sub.icon, ascendBonuses, {
                type:'keystone', buttonSize:50, tags:['subclass_keystone'],
                requirements:branchCommitNodes.map(function(nodeId){ return learnedSkill(nodeId) })
                    .concat(synergyNodes.map(function(nodeId){ return learnedSkill(nodeId) }))
                    .concat([learnedSkill(subRoot)])
            })
            branchCommitNodes.forEach(function(nodeId){ connect(nodeId, ascendancy) })
            synergyNodes.forEach(function(nodeId){ connect(nodeId, ascendancy) })
        })
        return root
    }

    classes.forEach(function(def){ buildClass(def) })

    // Rebuild the former parallel fan-and-join links as main trunks and side
    // branches. Existing rank chains are retained. Only entry anchors and
    // redundant return links change; milestone commitment requirements stay.
    const TK3_BRANCH_GRAPH = {"remove":[["tk3_shared_power_root","tk3_shared_power_a2_1"],["tk3_shared_power_a2_5","tk3_shared_power_mastery"],["tk3_shared_power_root","tk3_shared_precision_root"],["tk3_shared_precision_root","tk3_shared_precision_a2_1"],["tk3_shared_precision_a2_5","tk3_shared_precision_mastery"],["tk3_shared_precision_root","tk3_shared_mobility_root"],["tk3_shared_mobility_root","tk3_shared_mobility_a2_1"],["tk3_shared_mobility_a2_5","tk3_shared_mobility_mastery"],["tk3_shared_mobility_root","tk3_shared_fortune_root"],["tk3_shared_fortune_root","tk3_shared_fortune_a2_1"],["tk3_shared_fortune_a2_5","tk3_shared_fortune_mastery"],["tk3_shared_fortune_root","tk3_shared_vitality_root"],["tk3_shared_vitality_root","tk3_shared_vitality_a2_1"],["tk3_shared_vitality_a2_5","tk3_shared_vitality_mastery"],["tk3_shared_vitality_root","tk3_shared_defense_root"],["tk3_shared_defense_root","tk3_shared_defense_a2_1"],["tk3_shared_defense_a2_5","tk3_shared_defense_mastery"],["tk3_shared_defense_root","tk3_shared_sustain_root"],["tk3_shared_sustain_root","tk3_shared_sustain_a2_1"],["tk3_shared_sustain_a2_5","tk3_shared_sustain_mastery"],["tk3_shared_sustain_root","tk3_shared_knowledge_root"],["tk3_shared_knowledge_root","tk3_shared_knowledge_a2_1"],["tk3_shared_knowledge_a2_5","tk3_shared_knowledge_mastery"],["tk3_shared_knowledge_root","tk3_shared_power_root"],["tk3_prof_mining_root","tk3_prof_mining_b1_1"],["tk3_prof_mining_root","tk3_prof_mining_b3_1"],["tk3_prof_mining_b1_4","tk3_prof_mining_master"],["tk3_prof_mining_b3_4","tk3_prof_mining_master"],["tk3_prof_logging_root","tk3_prof_logging_b1_1"],["tk3_prof_logging_root","tk3_prof_logging_b3_1"],["tk3_prof_logging_b1_4","tk3_prof_logging_master"],["tk3_prof_logging_b3_4","tk3_prof_logging_master"],["tk3_prof_hunting_root","tk3_prof_hunting_b1_1"],["tk3_prof_hunting_root","tk3_prof_hunting_b3_1"],["tk3_prof_hunting_b1_4","tk3_prof_hunting_master"],["tk3_prof_hunting_b3_4","tk3_prof_hunting_master"],["tk3_prof_exploration_root","tk3_prof_exploration_b1_1"],["tk3_prof_exploration_root","tk3_prof_exploration_b3_1"],["tk3_prof_exploration_b1_4","tk3_prof_exploration_master"],["tk3_prof_exploration_b3_4","tk3_prof_exploration_master"],["tk3_prof_fishing_root","tk3_prof_fishing_b1_1"],["tk3_prof_fishing_root","tk3_prof_fishing_b3_1"],["tk3_prof_fishing_b1_4","tk3_prof_fishing_master"],["tk3_prof_fishing_b3_4","tk3_prof_fishing_master"],["tk3_prof_farming_root","tk3_prof_farming_b1_1"],["tk3_prof_farming_root","tk3_prof_farming_b3_1"],["tk3_prof_farming_b1_4","tk3_prof_farming_master"],["tk3_prof_farming_b3_4","tk3_prof_farming_master"],["tk3_prof_crafting_root","tk3_prof_crafting_b1_1"],["tk3_prof_crafting_root","tk3_prof_crafting_b3_1"],["tk3_prof_crafting_b1_4","tk3_prof_crafting_master"],["tk3_prof_crafting_b3_4","tk3_prof_crafting_master"],["tk3_prof_alchemy_root","tk3_prof_alchemy_b1_1"],["tk3_prof_alchemy_root","tk3_prof_alchemy_b3_1"],["tk3_prof_alchemy_b1_4","tk3_prof_alchemy_master"],["tk3_prof_alchemy_b3_4","tk3_prof_alchemy_master"],["tk3_wild_daredevil_root","tk3_wild_daredevil_b1_1"],["tk3_wild_daredevil_root","tk3_wild_daredevil_b3_1"],["tk3_wild_daredevil_b1_4","tk3_wild_daredevil_capstone"],["tk3_wild_daredevil_b3_4","tk3_wild_daredevil_capstone"],["tk3_wild_bulwark_root","tk3_wild_bulwark_b1_1"],["tk3_wild_bulwark_root","tk3_wild_bulwark_b3_1"],["tk3_wild_bulwark_b1_4","tk3_wild_bulwark_capstone"],["tk3_wild_bulwark_b3_4","tk3_wild_bulwark_capstone"],["tk3_wild_fortune_seeker_root","tk3_wild_fortune_seeker_b1_1"],["tk3_wild_fortune_seeker_root","tk3_wild_fortune_seeker_b3_1"],["tk3_wild_fortune_seeker_b1_4","tk3_wild_fortune_seeker_capstone"],["tk3_wild_fortune_seeker_b3_4","tk3_wild_fortune_seeker_capstone"],["tk3_wild_bloodbound_root","tk3_wild_bloodbound_b1_1"],["tk3_wild_bloodbound_root","tk3_wild_bloodbound_b3_1"],["tk3_wild_bloodbound_b1_4","tk3_wild_bloodbound_capstone"],["tk3_wild_bloodbound_b3_4","tk3_wild_bloodbound_capstone"],["tk3_wild_arcane_dabbler_root","tk3_wild_arcane_dabbler_b1_1"],["tk3_wild_arcane_dabbler_root","tk3_wild_arcane_dabbler_b3_1"],["tk3_wild_arcane_dabbler_b1_4","tk3_wild_arcane_dabbler_capstone"],["tk3_wild_arcane_dabbler_b3_4","tk3_wild_arcane_dabbler_capstone"],["tk3_wild_jack_of_all_trades_root","tk3_wild_jack_of_all_trades_b1_1"],["tk3_wild_jack_of_all_trades_root","tk3_wild_jack_of_all_trades_b3_1"],["tk3_wild_jack_of_all_trades_b1_4","tk3_wild_jack_of_all_trades_capstone"],["tk3_wild_jack_of_all_trades_b3_4","tk3_wild_jack_of_all_trades_capstone"],["tk3_warrior_root","tk3_warrior_core_inner_1_1"],["tk3_warrior_core_inner_1_5","tk3_warrior_class_mastery"],["tk3_warrior_root","tk3_warrior_core_inner_2_1"],["tk3_warrior_core_inner_2_5","tk3_warrior_class_mastery"],["tk3_warrior_root","tk3_warrior_core_inner_4_1"],["tk3_warrior_core_inner_4_5","tk3_warrior_class_mastery"],["tk3_warrior_root","tk3_warrior_core_inner_5_1"],["tk3_warrior_core_inner_5_5","tk3_warrior_class_mastery"],["tk3_warrior_class_mastery","tk3_warrior_core_advanced_1_1"],["tk3_warrior_class_mastery","tk3_warrior_core_advanced_2_1"],["tk3_warrior_class_mastery","tk3_warrior_core_advanced_4_1"],["tk3_warrior_class_mastery","tk3_warrior_core_advanced_5_1"],["tk3_warrior_class_mastery","tk3_warrior_subclass_gate"],["tk3_warrior_sub_berserker","tk3_warrior_sub_berserker_path_1_1"],["tk3_warrior_sub_berserker","tk3_warrior_sub_berserker_path_3_1"],["tk3_warrior_sub_berserker_path_1_8","tk3_warrior_sub_berserker_ascendancy"],["tk3_warrior_sub_berserker_path_3_8","tk3_warrior_sub_berserker_ascendancy"],["tk3_warrior_sub_berserker_path_2_8","tk3_warrior_sub_berserker_synergy_1"],["tk3_warrior_sub_berserker_synergy_1","tk3_warrior_sub_berserker_ascendancy"],["tk3_warrior_sub_berserker_path_2_8","tk3_warrior_sub_berserker_synergy_2"],["tk3_warrior_sub_berserker_synergy_2","tk3_warrior_sub_berserker_ascendancy"],["tk3_warrior_sub_weapon_master","tk3_warrior_sub_weapon_master_path_1_1"],["tk3_warrior_sub_weapon_master","tk3_warrior_sub_weapon_master_path_3_1"],["tk3_warrior_sub_weapon_master_path_1_8","tk3_warrior_sub_weapon_master_ascendancy"],["tk3_warrior_sub_weapon_master_path_3_8","tk3_warrior_sub_weapon_master_ascendancy"],["tk3_warrior_sub_weapon_master_path_2_8","tk3_warrior_sub_weapon_master_synergy_1"],["tk3_warrior_sub_weapon_master_synergy_1","tk3_warrior_sub_weapon_master_ascendancy"],["tk3_warrior_sub_weapon_master_path_2_8","tk3_warrior_sub_weapon_master_synergy_2"],["tk3_warrior_sub_weapon_master_synergy_2","tk3_warrior_sub_weapon_master_ascendancy"],["tk3_warrior_sub_juggernaut","tk3_warrior_sub_juggernaut_path_1_1"],["tk3_warrior_sub_juggernaut","tk3_warrior_sub_juggernaut_path_3_1"],["tk3_warrior_sub_juggernaut_path_1_8","tk3_warrior_sub_juggernaut_ascendancy"],["tk3_warrior_sub_juggernaut_path_3_8","tk3_warrior_sub_juggernaut_ascendancy"],["tk3_warrior_sub_juggernaut_path_2_8","tk3_warrior_sub_juggernaut_synergy_1"],["tk3_warrior_sub_juggernaut_synergy_1","tk3_warrior_sub_juggernaut_ascendancy"],["tk3_warrior_sub_juggernaut_path_2_8","tk3_warrior_sub_juggernaut_synergy_2"],["tk3_warrior_sub_juggernaut_synergy_2","tk3_warrior_sub_juggernaut_ascendancy"],["tk3_ranger_root","tk3_ranger_core_inner_1_1"],["tk3_ranger_core_inner_1_5","tk3_ranger_class_mastery"],["tk3_ranger_root","tk3_ranger_core_inner_2_1"],["tk3_ranger_core_inner_2_5","tk3_ranger_class_mastery"],["tk3_ranger_root","tk3_ranger_core_inner_4_1"],["tk3_ranger_core_inner_4_5","tk3_ranger_class_mastery"],["tk3_ranger_root","tk3_ranger_core_inner_5_1"],["tk3_ranger_core_inner_5_5","tk3_ranger_class_mastery"],["tk3_ranger_class_mastery","tk3_ranger_core_advanced_1_1"],["tk3_ranger_class_mastery","tk3_ranger_core_advanced_2_1"],["tk3_ranger_class_mastery","tk3_ranger_core_advanced_4_1"],["tk3_ranger_class_mastery","tk3_ranger_core_advanced_5_1"],["tk3_ranger_class_mastery","tk3_ranger_subclass_gate"],["tk3_ranger_sub_marksman","tk3_ranger_sub_marksman_path_1_1"],["tk3_ranger_sub_marksman","tk3_ranger_sub_marksman_path_3_1"],["tk3_ranger_sub_marksman_path_1_8","tk3_ranger_sub_marksman_ascendancy"],["tk3_ranger_sub_marksman_path_3_8","tk3_ranger_sub_marksman_ascendancy"],["tk3_ranger_sub_marksman_path_2_8","tk3_ranger_sub_marksman_synergy_1"],["tk3_ranger_sub_marksman_synergy_1","tk3_ranger_sub_marksman_ascendancy"],["tk3_ranger_sub_marksman_path_2_8","tk3_ranger_sub_marksman_synergy_2"],["tk3_ranger_sub_marksman_synergy_2","tk3_ranger_sub_marksman_ascendancy"],["tk3_ranger_sub_hunter","tk3_ranger_sub_hunter_path_1_1"],["tk3_ranger_sub_hunter","tk3_ranger_sub_hunter_path_3_1"],["tk3_ranger_sub_hunter_path_1_8","tk3_ranger_sub_hunter_ascendancy"],["tk3_ranger_sub_hunter_path_3_8","tk3_ranger_sub_hunter_ascendancy"],["tk3_ranger_sub_hunter_path_2_8","tk3_ranger_sub_hunter_synergy_1"],["tk3_ranger_sub_hunter_synergy_1","tk3_ranger_sub_hunter_ascendancy"],["tk3_ranger_sub_hunter_path_2_8","tk3_ranger_sub_hunter_synergy_2"],["tk3_ranger_sub_hunter_synergy_2","tk3_ranger_sub_hunter_ascendancy"],["tk3_ranger_sub_beastmaster","tk3_ranger_sub_beastmaster_path_1_1"],["tk3_ranger_sub_beastmaster","tk3_ranger_sub_beastmaster_path_3_1"],["tk3_ranger_sub_beastmaster_path_1_8","tk3_ranger_sub_beastmaster_ascendancy"],["tk3_ranger_sub_beastmaster_path_3_8","tk3_ranger_sub_beastmaster_ascendancy"],["tk3_ranger_sub_beastmaster_path_2_8","tk3_ranger_sub_beastmaster_synergy_1"],["tk3_ranger_sub_beastmaster_synergy_1","tk3_ranger_sub_beastmaster_ascendancy"],["tk3_ranger_sub_beastmaster_path_2_8","tk3_ranger_sub_beastmaster_synergy_2"],["tk3_ranger_sub_beastmaster_synergy_2","tk3_ranger_sub_beastmaster_ascendancy"],["tk3_rogue_root","tk3_rogue_core_inner_1_1"],["tk3_rogue_core_inner_1_5","tk3_rogue_class_mastery"],["tk3_rogue_root","tk3_rogue_core_inner_2_1"],["tk3_rogue_core_inner_2_5","tk3_rogue_class_mastery"],["tk3_rogue_root","tk3_rogue_core_inner_4_1"],["tk3_rogue_core_inner_4_5","tk3_rogue_class_mastery"],["tk3_rogue_root","tk3_rogue_core_inner_5_1"],["tk3_rogue_core_inner_5_5","tk3_rogue_class_mastery"],["tk3_rogue_class_mastery","tk3_rogue_core_advanced_1_1"],["tk3_rogue_class_mastery","tk3_rogue_core_advanced_2_1"],["tk3_rogue_class_mastery","tk3_rogue_core_advanced_4_1"],["tk3_rogue_class_mastery","tk3_rogue_core_advanced_5_1"],["tk3_rogue_class_mastery","tk3_rogue_subclass_gate"],["tk3_rogue_sub_assassin","tk3_rogue_sub_assassin_path_1_1"],["tk3_rogue_sub_assassin","tk3_rogue_sub_assassin_path_3_1"],["tk3_rogue_sub_assassin_path_1_8","tk3_rogue_sub_assassin_ascendancy"],["tk3_rogue_sub_assassin_path_3_8","tk3_rogue_sub_assassin_ascendancy"],["tk3_rogue_sub_assassin_path_2_8","tk3_rogue_sub_assassin_synergy_1"],["tk3_rogue_sub_assassin_synergy_1","tk3_rogue_sub_assassin_ascendancy"],["tk3_rogue_sub_assassin_path_2_8","tk3_rogue_sub_assassin_synergy_2"],["tk3_rogue_sub_assassin_synergy_2","tk3_rogue_sub_assassin_ascendancy"],["tk3_rogue_sub_duelist","tk3_rogue_sub_duelist_path_1_1"],["tk3_rogue_sub_duelist","tk3_rogue_sub_duelist_path_3_1"],["tk3_rogue_sub_duelist_path_1_8","tk3_rogue_sub_duelist_ascendancy"],["tk3_rogue_sub_duelist_path_3_8","tk3_rogue_sub_duelist_ascendancy"],["tk3_rogue_sub_duelist_path_2_8","tk3_rogue_sub_duelist_synergy_1"],["tk3_rogue_sub_duelist_synergy_1","tk3_rogue_sub_duelist_ascendancy"],["tk3_rogue_sub_duelist_path_2_8","tk3_rogue_sub_duelist_synergy_2"],["tk3_rogue_sub_duelist_synergy_2","tk3_rogue_sub_duelist_ascendancy"],["tk3_rogue_sub_shadowblade","tk3_rogue_sub_shadowblade_path_1_1"],["tk3_rogue_sub_shadowblade","tk3_rogue_sub_shadowblade_path_3_1"],["tk3_rogue_sub_shadowblade_path_1_8","tk3_rogue_sub_shadowblade_ascendancy"],["tk3_rogue_sub_shadowblade_path_3_8","tk3_rogue_sub_shadowblade_ascendancy"],["tk3_rogue_sub_shadowblade_path_2_8","tk3_rogue_sub_shadowblade_synergy_1"],["tk3_rogue_sub_shadowblade_synergy_1","tk3_rogue_sub_shadowblade_ascendancy"],["tk3_rogue_sub_shadowblade_path_2_8","tk3_rogue_sub_shadowblade_synergy_2"],["tk3_rogue_sub_shadowblade_synergy_2","tk3_rogue_sub_shadowblade_ascendancy"],["tk3_mage_root","tk3_mage_core_inner_1_1"],["tk3_mage_core_inner_1_5","tk3_mage_class_mastery"],["tk3_mage_root","tk3_mage_core_inner_2_1"],["tk3_mage_core_inner_2_5","tk3_mage_class_mastery"],["tk3_mage_root","tk3_mage_core_inner_4_1"],["tk3_mage_core_inner_4_5","tk3_mage_class_mastery"],["tk3_mage_root","tk3_mage_core_inner_5_1"],["tk3_mage_core_inner_5_5","tk3_mage_class_mastery"],["tk3_mage_class_mastery","tk3_mage_core_advanced_1_1"],["tk3_mage_class_mastery","tk3_mage_core_advanced_2_1"],["tk3_mage_class_mastery","tk3_mage_core_advanced_4_1"],["tk3_mage_class_mastery","tk3_mage_core_advanced_5_1"],["tk3_mage_class_mastery","tk3_mage_subclass_gate"],["tk3_mage_sub_elementalist","tk3_mage_sub_elementalist_path_1_1"],["tk3_mage_sub_elementalist","tk3_mage_sub_elementalist_path_3_1"],["tk3_mage_sub_elementalist_path_1_8","tk3_mage_sub_elementalist_ascendancy"],["tk3_mage_sub_elementalist_path_3_8","tk3_mage_sub_elementalist_ascendancy"],["tk3_mage_sub_elementalist_path_2_8","tk3_mage_sub_elementalist_synergy_1"],["tk3_mage_sub_elementalist_synergy_1","tk3_mage_sub_elementalist_ascendancy"],["tk3_mage_sub_elementalist_path_2_8","tk3_mage_sub_elementalist_synergy_2"],["tk3_mage_sub_elementalist_synergy_2","tk3_mage_sub_elementalist_ascendancy"],["tk3_mage_sub_arcanist","tk3_mage_sub_arcanist_path_1_1"],["tk3_mage_sub_arcanist","tk3_mage_sub_arcanist_path_3_1"],["tk3_mage_sub_arcanist_path_1_8","tk3_mage_sub_arcanist_ascendancy"],["tk3_mage_sub_arcanist_path_3_8","tk3_mage_sub_arcanist_ascendancy"],["tk3_mage_sub_arcanist_path_2_8","tk3_mage_sub_arcanist_synergy_1"],["tk3_mage_sub_arcanist_synergy_1","tk3_mage_sub_arcanist_ascendancy"],["tk3_mage_sub_arcanist_path_2_8","tk3_mage_sub_arcanist_synergy_2"],["tk3_mage_sub_arcanist_synergy_2","tk3_mage_sub_arcanist_ascendancy"],["tk3_mage_sub_battlemage","tk3_mage_sub_battlemage_path_1_1"],["tk3_mage_sub_battlemage","tk3_mage_sub_battlemage_path_3_1"],["tk3_mage_sub_battlemage_path_1_8","tk3_mage_sub_battlemage_ascendancy"],["tk3_mage_sub_battlemage_path_3_8","tk3_mage_sub_battlemage_ascendancy"],["tk3_mage_sub_battlemage_path_2_8","tk3_mage_sub_battlemage_synergy_1"],["tk3_mage_sub_battlemage_synergy_1","tk3_mage_sub_battlemage_ascendancy"],["tk3_mage_sub_battlemage_path_2_8","tk3_mage_sub_battlemage_synergy_2"],["tk3_mage_sub_battlemage_synergy_2","tk3_mage_sub_battlemage_ascendancy"],["tk3_cleric_root","tk3_cleric_core_inner_1_1"],["tk3_cleric_core_inner_1_5","tk3_cleric_class_mastery"],["tk3_cleric_root","tk3_cleric_core_inner_2_1"],["tk3_cleric_core_inner_2_5","tk3_cleric_class_mastery"],["tk3_cleric_root","tk3_cleric_core_inner_4_1"],["tk3_cleric_core_inner_4_5","tk3_cleric_class_mastery"],["tk3_cleric_root","tk3_cleric_core_inner_5_1"],["tk3_cleric_core_inner_5_5","tk3_cleric_class_mastery"],["tk3_cleric_class_mastery","tk3_cleric_core_advanced_1_1"],["tk3_cleric_class_mastery","tk3_cleric_core_advanced_2_1"],["tk3_cleric_class_mastery","tk3_cleric_core_advanced_4_1"],["tk3_cleric_class_mastery","tk3_cleric_core_advanced_5_1"],["tk3_cleric_class_mastery","tk3_cleric_subclass_gate"],["tk3_cleric_sub_priest","tk3_cleric_sub_priest_path_1_1"],["tk3_cleric_sub_priest","tk3_cleric_sub_priest_path_3_1"],["tk3_cleric_sub_priest_path_1_8","tk3_cleric_sub_priest_ascendancy"],["tk3_cleric_sub_priest_path_3_8","tk3_cleric_sub_priest_ascendancy"],["tk3_cleric_sub_priest_path_2_8","tk3_cleric_sub_priest_synergy_1"],["tk3_cleric_sub_priest_synergy_1","tk3_cleric_sub_priest_ascendancy"],["tk3_cleric_sub_priest_path_2_8","tk3_cleric_sub_priest_synergy_2"],["tk3_cleric_sub_priest_synergy_2","tk3_cleric_sub_priest_ascendancy"],["tk3_cleric_sub_crusader","tk3_cleric_sub_crusader_path_1_1"],["tk3_cleric_sub_crusader","tk3_cleric_sub_crusader_path_3_1"],["tk3_cleric_sub_crusader_path_1_8","tk3_cleric_sub_crusader_ascendancy"],["tk3_cleric_sub_crusader_path_3_8","tk3_cleric_sub_crusader_ascendancy"],["tk3_cleric_sub_crusader_path_2_8","tk3_cleric_sub_crusader_synergy_1"],["tk3_cleric_sub_crusader_synergy_1","tk3_cleric_sub_crusader_ascendancy"],["tk3_cleric_sub_crusader_path_2_8","tk3_cleric_sub_crusader_synergy_2"],["tk3_cleric_sub_crusader_synergy_2","tk3_cleric_sub_crusader_ascendancy"],["tk3_cleric_sub_oracle","tk3_cleric_sub_oracle_path_1_1"],["tk3_cleric_sub_oracle","tk3_cleric_sub_oracle_path_3_1"],["tk3_cleric_sub_oracle_path_1_8","tk3_cleric_sub_oracle_ascendancy"],["tk3_cleric_sub_oracle_path_3_8","tk3_cleric_sub_oracle_ascendancy"],["tk3_cleric_sub_oracle_path_2_8","tk3_cleric_sub_oracle_synergy_1"],["tk3_cleric_sub_oracle_synergy_1","tk3_cleric_sub_oracle_ascendancy"],["tk3_cleric_sub_oracle_path_2_8","tk3_cleric_sub_oracle_synergy_2"],["tk3_cleric_sub_oracle_synergy_2","tk3_cleric_sub_oracle_ascendancy"],["tk3_occultist_root","tk3_occultist_core_inner_1_1"],["tk3_occultist_core_inner_1_5","tk3_occultist_class_mastery"],["tk3_occultist_root","tk3_occultist_core_inner_2_1"],["tk3_occultist_core_inner_2_5","tk3_occultist_class_mastery"],["tk3_occultist_root","tk3_occultist_core_inner_4_1"],["tk3_occultist_core_inner_4_5","tk3_occultist_class_mastery"],["tk3_occultist_root","tk3_occultist_core_inner_5_1"],["tk3_occultist_core_inner_5_5","tk3_occultist_class_mastery"],["tk3_occultist_class_mastery","tk3_occultist_core_advanced_1_1"],["tk3_occultist_class_mastery","tk3_occultist_core_advanced_2_1"],["tk3_occultist_class_mastery","tk3_occultist_core_advanced_4_1"],["tk3_occultist_class_mastery","tk3_occultist_core_advanced_5_1"],["tk3_occultist_class_mastery","tk3_occultist_subclass_gate"],["tk3_occultist_sub_blood_mage","tk3_occultist_sub_blood_mage_path_1_1"],["tk3_occultist_sub_blood_mage","tk3_occultist_sub_blood_mage_path_3_1"],["tk3_occultist_sub_blood_mage_path_1_8","tk3_occultist_sub_blood_mage_ascendancy"],["tk3_occultist_sub_blood_mage_path_3_8","tk3_occultist_sub_blood_mage_ascendancy"],["tk3_occultist_sub_blood_mage_path_2_8","tk3_occultist_sub_blood_mage_synergy_1"],["tk3_occultist_sub_blood_mage_synergy_1","tk3_occultist_sub_blood_mage_ascendancy"],["tk3_occultist_sub_blood_mage_path_2_8","tk3_occultist_sub_blood_mage_synergy_2"],["tk3_occultist_sub_blood_mage_synergy_2","tk3_occultist_sub_blood_mage_ascendancy"],["tk3_occultist_sub_necromancer","tk3_occultist_sub_necromancer_path_1_1"],["tk3_occultist_sub_necromancer","tk3_occultist_sub_necromancer_path_3_1"],["tk3_occultist_sub_necromancer_path_1_8","tk3_occultist_sub_necromancer_ascendancy"],["tk3_occultist_sub_necromancer_path_3_8","tk3_occultist_sub_necromancer_ascendancy"],["tk3_occultist_sub_necromancer_path_2_8","tk3_occultist_sub_necromancer_synergy_1"],["tk3_occultist_sub_necromancer_synergy_1","tk3_occultist_sub_necromancer_ascendancy"],["tk3_occultist_sub_necromancer_path_2_8","tk3_occultist_sub_necromancer_synergy_2"],["tk3_occultist_sub_necromancer_synergy_2","tk3_occultist_sub_necromancer_ascendancy"],["tk3_occultist_sub_voidcaller","tk3_occultist_sub_voidcaller_path_1_1"],["tk3_occultist_sub_voidcaller","tk3_occultist_sub_voidcaller_path_3_1"],["tk3_occultist_sub_voidcaller_path_1_8","tk3_occultist_sub_voidcaller_ascendancy"],["tk3_occultist_sub_voidcaller_path_3_8","tk3_occultist_sub_voidcaller_ascendancy"],["tk3_occultist_sub_voidcaller_path_2_8","tk3_occultist_sub_voidcaller_synergy_1"],["tk3_occultist_sub_voidcaller_synergy_1","tk3_occultist_sub_voidcaller_ascendancy"],["tk3_occultist_sub_voidcaller_path_2_8","tk3_occultist_sub_voidcaller_synergy_2"],["tk3_occultist_sub_voidcaller_synergy_2","tk3_occultist_sub_voidcaller_ascendancy"]],"add":[["tk3_shared_power_a1_2","tk3_shared_power_a2_1"],["tk3_shared_precision_a1_2","tk3_shared_precision_a2_1"],["tk3_shared_mobility_a1_2","tk3_shared_mobility_a2_1"],["tk3_shared_fortune_a1_2","tk3_shared_fortune_a2_1"],["tk3_shared_vitality_a1_2","tk3_shared_vitality_a2_1"],["tk3_shared_defense_a1_2","tk3_shared_defense_a2_1"],["tk3_shared_sustain_a1_2","tk3_shared_sustain_a2_1"],["tk3_shared_knowledge_a1_2","tk3_shared_knowledge_a2_1"],["tk3_prof_mining_b2_1","tk3_prof_mining_b1_1"],["tk3_prof_mining_b2_3","tk3_prof_mining_b3_1"],["tk3_prof_logging_b2_1","tk3_prof_logging_b1_1"],["tk3_prof_logging_b2_3","tk3_prof_logging_b3_1"],["tk3_prof_hunting_b2_1","tk3_prof_hunting_b1_1"],["tk3_prof_hunting_b2_3","tk3_prof_hunting_b3_1"],["tk3_prof_exploration_b2_1","tk3_prof_exploration_b1_1"],["tk3_prof_exploration_b2_3","tk3_prof_exploration_b3_1"],["tk3_prof_fishing_b2_1","tk3_prof_fishing_b1_1"],["tk3_prof_fishing_b2_3","tk3_prof_fishing_b3_1"],["tk3_prof_farming_b2_1","tk3_prof_farming_b1_1"],["tk3_prof_farming_b2_3","tk3_prof_farming_b3_1"],["tk3_prof_crafting_b2_1","tk3_prof_crafting_b1_1"],["tk3_prof_crafting_b2_3","tk3_prof_crafting_b3_1"],["tk3_prof_alchemy_b2_1","tk3_prof_alchemy_b1_1"],["tk3_prof_alchemy_b2_3","tk3_prof_alchemy_b3_1"],["tk3_wild_daredevil_b2_1","tk3_wild_daredevil_b1_1"],["tk3_wild_daredevil_b2_2","tk3_wild_daredevil_b3_1"],["tk3_wild_bulwark_b2_1","tk3_wild_bulwark_b1_1"],["tk3_wild_bulwark_b2_2","tk3_wild_bulwark_b3_1"],["tk3_wild_fortune_seeker_b2_1","tk3_wild_fortune_seeker_b1_1"],["tk3_wild_fortune_seeker_b2_2","tk3_wild_fortune_seeker_b3_1"],["tk3_wild_bloodbound_b2_1","tk3_wild_bloodbound_b1_1"],["tk3_wild_bloodbound_b2_2","tk3_wild_bloodbound_b3_1"],["tk3_wild_arcane_dabbler_b2_1","tk3_wild_arcane_dabbler_b1_1"],["tk3_wild_arcane_dabbler_b2_2","tk3_wild_arcane_dabbler_b3_1"],["tk3_wild_jack_of_all_trades_b2_1","tk3_wild_jack_of_all_trades_b1_1"],["tk3_wild_jack_of_all_trades_b2_2","tk3_wild_jack_of_all_trades_b3_1"],["tk3_warrior_core_inner_3_1","tk3_warrior_core_inner_1_1"],["tk3_warrior_core_inner_3_2","tk3_warrior_core_inner_2_1"],["tk3_warrior_core_inner_3_3","tk3_warrior_core_inner_4_1"],["tk3_warrior_core_inner_3_4","tk3_warrior_core_inner_5_1"],["tk3_warrior_core_advanced_3_1","tk3_warrior_core_advanced_1_1"],["tk3_warrior_core_advanced_3_2","tk3_warrior_core_advanced_2_1"],["tk3_warrior_core_advanced_3_3","tk3_warrior_core_advanced_4_1"],["tk3_warrior_core_advanced_3_4","tk3_warrior_core_advanced_5_1"],["tk3_warrior_core_advanced_3_4","tk3_warrior_subclass_gate"],["tk3_warrior_sub_berserker_path_2_2","tk3_warrior_sub_berserker_path_1_1"],["tk3_warrior_sub_berserker_path_2_4","tk3_warrior_sub_berserker_path_3_1"],["tk3_warrior_sub_weapon_master_path_2_2","tk3_warrior_sub_weapon_master_path_1_1"],["tk3_warrior_sub_weapon_master_path_2_4","tk3_warrior_sub_weapon_master_path_3_1"],["tk3_warrior_sub_juggernaut_path_2_2","tk3_warrior_sub_juggernaut_path_1_1"],["tk3_warrior_sub_juggernaut_path_2_4","tk3_warrior_sub_juggernaut_path_3_1"],["tk3_ranger_core_inner_3_1","tk3_ranger_core_inner_1_1"],["tk3_ranger_core_inner_3_2","tk3_ranger_core_inner_2_1"],["tk3_ranger_core_inner_3_3","tk3_ranger_core_inner_4_1"],["tk3_ranger_core_inner_3_4","tk3_ranger_core_inner_5_1"],["tk3_ranger_core_advanced_3_1","tk3_ranger_core_advanced_1_1"],["tk3_ranger_core_advanced_3_2","tk3_ranger_core_advanced_2_1"],["tk3_ranger_core_advanced_3_3","tk3_ranger_core_advanced_4_1"],["tk3_ranger_core_advanced_3_4","tk3_ranger_core_advanced_5_1"],["tk3_ranger_core_advanced_3_4","tk3_ranger_subclass_gate"],["tk3_ranger_sub_marksman_path_2_2","tk3_ranger_sub_marksman_path_1_1"],["tk3_ranger_sub_marksman_path_2_4","tk3_ranger_sub_marksman_path_3_1"],["tk3_ranger_sub_hunter_path_2_2","tk3_ranger_sub_hunter_path_1_1"],["tk3_ranger_sub_hunter_path_2_4","tk3_ranger_sub_hunter_path_3_1"],["tk3_ranger_sub_beastmaster_path_2_2","tk3_ranger_sub_beastmaster_path_1_1"],["tk3_ranger_sub_beastmaster_path_2_4","tk3_ranger_sub_beastmaster_path_3_1"],["tk3_rogue_core_inner_3_1","tk3_rogue_core_inner_1_1"],["tk3_rogue_core_inner_3_2","tk3_rogue_core_inner_2_1"],["tk3_rogue_core_inner_3_3","tk3_rogue_core_inner_4_1"],["tk3_rogue_core_inner_3_4","tk3_rogue_core_inner_5_1"],["tk3_rogue_core_advanced_3_1","tk3_rogue_core_advanced_1_1"],["tk3_rogue_core_advanced_3_2","tk3_rogue_core_advanced_2_1"],["tk3_rogue_core_advanced_3_3","tk3_rogue_core_advanced_4_1"],["tk3_rogue_core_advanced_3_4","tk3_rogue_core_advanced_5_1"],["tk3_rogue_core_advanced_3_4","tk3_rogue_subclass_gate"],["tk3_rogue_sub_assassin_path_2_2","tk3_rogue_sub_assassin_path_1_1"],["tk3_rogue_sub_assassin_path_2_4","tk3_rogue_sub_assassin_path_3_1"],["tk3_rogue_sub_duelist_path_2_2","tk3_rogue_sub_duelist_path_1_1"],["tk3_rogue_sub_duelist_path_2_4","tk3_rogue_sub_duelist_path_3_1"],["tk3_rogue_sub_shadowblade_path_2_2","tk3_rogue_sub_shadowblade_path_1_1"],["tk3_rogue_sub_shadowblade_path_2_4","tk3_rogue_sub_shadowblade_path_3_1"],["tk3_mage_core_inner_3_1","tk3_mage_core_inner_1_1"],["tk3_mage_core_inner_3_2","tk3_mage_core_inner_2_1"],["tk3_mage_core_inner_3_3","tk3_mage_core_inner_4_1"],["tk3_mage_core_inner_3_4","tk3_mage_core_inner_5_1"],["tk3_mage_core_advanced_3_1","tk3_mage_core_advanced_1_1"],["tk3_mage_core_advanced_3_2","tk3_mage_core_advanced_2_1"],["tk3_mage_core_advanced_3_3","tk3_mage_core_advanced_4_1"],["tk3_mage_core_advanced_3_4","tk3_mage_core_advanced_5_1"],["tk3_mage_core_advanced_3_4","tk3_mage_subclass_gate"],["tk3_mage_sub_elementalist_path_2_2","tk3_mage_sub_elementalist_path_1_1"],["tk3_mage_sub_elementalist_path_2_4","tk3_mage_sub_elementalist_path_3_1"],["tk3_mage_sub_arcanist_path_2_2","tk3_mage_sub_arcanist_path_1_1"],["tk3_mage_sub_arcanist_path_2_4","tk3_mage_sub_arcanist_path_3_1"],["tk3_mage_sub_battlemage_path_2_2","tk3_mage_sub_battlemage_path_1_1"],["tk3_mage_sub_battlemage_path_2_4","tk3_mage_sub_battlemage_path_3_1"],["tk3_cleric_core_inner_3_1","tk3_cleric_core_inner_1_1"],["tk3_cleric_core_inner_3_2","tk3_cleric_core_inner_2_1"],["tk3_cleric_core_inner_3_3","tk3_cleric_core_inner_4_1"],["tk3_cleric_core_inner_3_4","tk3_cleric_core_inner_5_1"],["tk3_cleric_core_advanced_3_1","tk3_cleric_core_advanced_1_1"],["tk3_cleric_core_advanced_3_2","tk3_cleric_core_advanced_2_1"],["tk3_cleric_core_advanced_3_3","tk3_cleric_core_advanced_4_1"],["tk3_cleric_core_advanced_3_4","tk3_cleric_core_advanced_5_1"],["tk3_cleric_core_advanced_3_4","tk3_cleric_subclass_gate"],["tk3_cleric_sub_priest_path_2_2","tk3_cleric_sub_priest_path_1_1"],["tk3_cleric_sub_priest_path_2_4","tk3_cleric_sub_priest_path_3_1"],["tk3_cleric_sub_crusader_path_2_2","tk3_cleric_sub_crusader_path_1_1"],["tk3_cleric_sub_crusader_path_2_4","tk3_cleric_sub_crusader_path_3_1"],["tk3_cleric_sub_oracle_path_2_2","tk3_cleric_sub_oracle_path_1_1"],["tk3_cleric_sub_oracle_path_2_4","tk3_cleric_sub_oracle_path_3_1"],["tk3_occultist_core_inner_3_1","tk3_occultist_core_inner_1_1"],["tk3_occultist_core_inner_3_2","tk3_occultist_core_inner_2_1"],["tk3_occultist_core_inner_3_3","tk3_occultist_core_inner_4_1"],["tk3_occultist_core_inner_3_4","tk3_occultist_core_inner_5_1"],["tk3_occultist_core_advanced_3_1","tk3_occultist_core_advanced_1_1"],["tk3_occultist_core_advanced_3_2","tk3_occultist_core_advanced_2_1"],["tk3_occultist_core_advanced_3_3","tk3_occultist_core_advanced_4_1"],["tk3_occultist_core_advanced_3_4","tk3_occultist_core_advanced_5_1"],["tk3_occultist_core_advanced_3_4","tk3_occultist_subclass_gate"],["tk3_occultist_sub_blood_mage_path_2_2","tk3_occultist_sub_blood_mage_path_1_1"],["tk3_occultist_sub_blood_mage_path_2_4","tk3_occultist_sub_blood_mage_path_3_1"],["tk3_occultist_sub_necromancer_path_2_2","tk3_occultist_sub_necromancer_path_1_1"],["tk3_occultist_sub_necromancer_path_2_4","tk3_occultist_sub_necromancer_path_3_1"],["tk3_occultist_sub_voidcaller_path_2_2","tk3_occultist_sub_voidcaller_path_1_1"],["tk3_occultist_sub_voidcaller_path_2_4","tk3_occultist_sub_voidcaller_path_3_1"]],"anchors":[["tk3_shared_power_a2_1","tk3_shared_power_a1_2"],["tk3_shared_precision_a2_1","tk3_shared_precision_a1_2"],["tk3_shared_mobility_a2_1","tk3_shared_mobility_a1_2"],["tk3_shared_fortune_a2_1","tk3_shared_fortune_a1_2"],["tk3_shared_vitality_a2_1","tk3_shared_vitality_a1_2"],["tk3_shared_defense_a2_1","tk3_shared_defense_a1_2"],["tk3_shared_sustain_a2_1","tk3_shared_sustain_a1_2"],["tk3_shared_knowledge_a2_1","tk3_shared_knowledge_a1_2"],["tk3_prof_mining_b1_1","tk3_prof_mining_b2_1"],["tk3_prof_mining_b3_1","tk3_prof_mining_b2_3"],["tk3_prof_logging_b1_1","tk3_prof_logging_b2_1"],["tk3_prof_logging_b3_1","tk3_prof_logging_b2_3"],["tk3_prof_hunting_b1_1","tk3_prof_hunting_b2_1"],["tk3_prof_hunting_b3_1","tk3_prof_hunting_b2_3"],["tk3_prof_exploration_b1_1","tk3_prof_exploration_b2_1"],["tk3_prof_exploration_b3_1","tk3_prof_exploration_b2_3"],["tk3_prof_fishing_b1_1","tk3_prof_fishing_b2_1"],["tk3_prof_fishing_b3_1","tk3_prof_fishing_b2_3"],["tk3_prof_farming_b1_1","tk3_prof_farming_b2_1"],["tk3_prof_farming_b3_1","tk3_prof_farming_b2_3"],["tk3_prof_crafting_b1_1","tk3_prof_crafting_b2_1"],["tk3_prof_crafting_b3_1","tk3_prof_crafting_b2_3"],["tk3_prof_alchemy_b1_1","tk3_prof_alchemy_b2_1"],["tk3_prof_alchemy_b3_1","tk3_prof_alchemy_b2_3"],["tk3_wild_daredevil_b1_1","tk3_wild_daredevil_b2_1"],["tk3_wild_daredevil_b3_1","tk3_wild_daredevil_b2_2"],["tk3_wild_bulwark_b1_1","tk3_wild_bulwark_b2_1"],["tk3_wild_bulwark_b3_1","tk3_wild_bulwark_b2_2"],["tk3_wild_fortune_seeker_b1_1","tk3_wild_fortune_seeker_b2_1"],["tk3_wild_fortune_seeker_b3_1","tk3_wild_fortune_seeker_b2_2"],["tk3_wild_bloodbound_b1_1","tk3_wild_bloodbound_b2_1"],["tk3_wild_bloodbound_b3_1","tk3_wild_bloodbound_b2_2"],["tk3_wild_arcane_dabbler_b1_1","tk3_wild_arcane_dabbler_b2_1"],["tk3_wild_arcane_dabbler_b3_1","tk3_wild_arcane_dabbler_b2_2"],["tk3_wild_jack_of_all_trades_b1_1","tk3_wild_jack_of_all_trades_b2_1"],["tk3_wild_jack_of_all_trades_b3_1","tk3_wild_jack_of_all_trades_b2_2"],["tk3_warrior_core_inner_1_1","tk3_warrior_core_inner_3_1"],["tk3_warrior_core_inner_2_1","tk3_warrior_core_inner_3_2"],["tk3_warrior_core_inner_4_1","tk3_warrior_core_inner_3_3"],["tk3_warrior_core_inner_5_1","tk3_warrior_core_inner_3_4"],["tk3_warrior_core_advanced_1_1","tk3_warrior_core_advanced_3_1"],["tk3_warrior_core_advanced_2_1","tk3_warrior_core_advanced_3_2"],["tk3_warrior_core_advanced_4_1","tk3_warrior_core_advanced_3_3"],["tk3_warrior_core_advanced_5_1","tk3_warrior_core_advanced_3_4"],["tk3_warrior_sub_berserker_path_1_1","tk3_warrior_sub_berserker_path_2_2"],["tk3_warrior_sub_berserker_path_3_1","tk3_warrior_sub_berserker_path_2_4"],["tk3_warrior_sub_weapon_master_path_1_1","tk3_warrior_sub_weapon_master_path_2_2"],["tk3_warrior_sub_weapon_master_path_3_1","tk3_warrior_sub_weapon_master_path_2_4"],["tk3_warrior_sub_juggernaut_path_1_1","tk3_warrior_sub_juggernaut_path_2_2"],["tk3_warrior_sub_juggernaut_path_3_1","tk3_warrior_sub_juggernaut_path_2_4"],["tk3_ranger_core_inner_1_1","tk3_ranger_core_inner_3_1"],["tk3_ranger_core_inner_2_1","tk3_ranger_core_inner_3_2"],["tk3_ranger_core_inner_4_1","tk3_ranger_core_inner_3_3"],["tk3_ranger_core_inner_5_1","tk3_ranger_core_inner_3_4"],["tk3_ranger_core_advanced_1_1","tk3_ranger_core_advanced_3_1"],["tk3_ranger_core_advanced_2_1","tk3_ranger_core_advanced_3_2"],["tk3_ranger_core_advanced_4_1","tk3_ranger_core_advanced_3_3"],["tk3_ranger_core_advanced_5_1","tk3_ranger_core_advanced_3_4"],["tk3_ranger_sub_marksman_path_1_1","tk3_ranger_sub_marksman_path_2_2"],["tk3_ranger_sub_marksman_path_3_1","tk3_ranger_sub_marksman_path_2_4"],["tk3_ranger_sub_hunter_path_1_1","tk3_ranger_sub_hunter_path_2_2"],["tk3_ranger_sub_hunter_path_3_1","tk3_ranger_sub_hunter_path_2_4"],["tk3_ranger_sub_beastmaster_path_1_1","tk3_ranger_sub_beastmaster_path_2_2"],["tk3_ranger_sub_beastmaster_path_3_1","tk3_ranger_sub_beastmaster_path_2_4"],["tk3_rogue_core_inner_1_1","tk3_rogue_core_inner_3_1"],["tk3_rogue_core_inner_2_1","tk3_rogue_core_inner_3_2"],["tk3_rogue_core_inner_4_1","tk3_rogue_core_inner_3_3"],["tk3_rogue_core_inner_5_1","tk3_rogue_core_inner_3_4"],["tk3_rogue_core_advanced_1_1","tk3_rogue_core_advanced_3_1"],["tk3_rogue_core_advanced_2_1","tk3_rogue_core_advanced_3_2"],["tk3_rogue_core_advanced_4_1","tk3_rogue_core_advanced_3_3"],["tk3_rogue_core_advanced_5_1","tk3_rogue_core_advanced_3_4"],["tk3_rogue_sub_assassin_path_1_1","tk3_rogue_sub_assassin_path_2_2"],["tk3_rogue_sub_assassin_path_3_1","tk3_rogue_sub_assassin_path_2_4"],["tk3_rogue_sub_duelist_path_1_1","tk3_rogue_sub_duelist_path_2_2"],["tk3_rogue_sub_duelist_path_3_1","tk3_rogue_sub_duelist_path_2_4"],["tk3_rogue_sub_shadowblade_path_1_1","tk3_rogue_sub_shadowblade_path_2_2"],["tk3_rogue_sub_shadowblade_path_3_1","tk3_rogue_sub_shadowblade_path_2_4"],["tk3_mage_core_inner_1_1","tk3_mage_core_inner_3_1"],["tk3_mage_core_inner_2_1","tk3_mage_core_inner_3_2"],["tk3_mage_core_inner_4_1","tk3_mage_core_inner_3_3"],["tk3_mage_core_inner_5_1","tk3_mage_core_inner_3_4"],["tk3_mage_core_advanced_1_1","tk3_mage_core_advanced_3_1"],["tk3_mage_core_advanced_2_1","tk3_mage_core_advanced_3_2"],["tk3_mage_core_advanced_4_1","tk3_mage_core_advanced_3_3"],["tk3_mage_core_advanced_5_1","tk3_mage_core_advanced_3_4"],["tk3_mage_sub_elementalist_path_1_1","tk3_mage_sub_elementalist_path_2_2"],["tk3_mage_sub_elementalist_path_3_1","tk3_mage_sub_elementalist_path_2_4"],["tk3_mage_sub_arcanist_path_1_1","tk3_mage_sub_arcanist_path_2_2"],["tk3_mage_sub_arcanist_path_3_1","tk3_mage_sub_arcanist_path_2_4"],["tk3_mage_sub_battlemage_path_1_1","tk3_mage_sub_battlemage_path_2_2"],["tk3_mage_sub_battlemage_path_3_1","tk3_mage_sub_battlemage_path_2_4"],["tk3_cleric_core_inner_1_1","tk3_cleric_core_inner_3_1"],["tk3_cleric_core_inner_2_1","tk3_cleric_core_inner_3_2"],["tk3_cleric_core_inner_4_1","tk3_cleric_core_inner_3_3"],["tk3_cleric_core_inner_5_1","tk3_cleric_core_inner_3_4"],["tk3_cleric_core_advanced_1_1","tk3_cleric_core_advanced_3_1"],["tk3_cleric_core_advanced_2_1","tk3_cleric_core_advanced_3_2"],["tk3_cleric_core_advanced_4_1","tk3_cleric_core_advanced_3_3"],["tk3_cleric_core_advanced_5_1","tk3_cleric_core_advanced_3_4"],["tk3_cleric_sub_priest_path_1_1","tk3_cleric_sub_priest_path_2_2"],["tk3_cleric_sub_priest_path_3_1","tk3_cleric_sub_priest_path_2_4"],["tk3_cleric_sub_crusader_path_1_1","tk3_cleric_sub_crusader_path_2_2"],["tk3_cleric_sub_crusader_path_3_1","tk3_cleric_sub_crusader_path_2_4"],["tk3_cleric_sub_oracle_path_1_1","tk3_cleric_sub_oracle_path_2_2"],["tk3_cleric_sub_oracle_path_3_1","tk3_cleric_sub_oracle_path_2_4"],["tk3_occultist_core_inner_1_1","tk3_occultist_core_inner_3_1"],["tk3_occultist_core_inner_2_1","tk3_occultist_core_inner_3_2"],["tk3_occultist_core_inner_4_1","tk3_occultist_core_inner_3_3"],["tk3_occultist_core_inner_5_1","tk3_occultist_core_inner_3_4"],["tk3_occultist_core_advanced_1_1","tk3_occultist_core_advanced_3_1"],["tk3_occultist_core_advanced_2_1","tk3_occultist_core_advanced_3_2"],["tk3_occultist_core_advanced_4_1","tk3_occultist_core_advanced_3_3"],["tk3_occultist_core_advanced_5_1","tk3_occultist_core_advanced_3_4"],["tk3_occultist_sub_blood_mage_path_1_1","tk3_occultist_sub_blood_mage_path_2_2"],["tk3_occultist_sub_blood_mage_path_3_1","tk3_occultist_sub_blood_mage_path_2_4"],["tk3_occultist_sub_necromancer_path_1_1","tk3_occultist_sub_necromancer_path_2_2"],["tk3_occultist_sub_necromancer_path_3_1","tk3_occultist_sub_necromancer_path_2_4"],["tk3_occultist_sub_voidcaller_path_1_1","tk3_occultist_sub_voidcaller_path_2_2"],["tk3_occultist_sub_voidcaller_path_3_1","tk3_occultist_sub_voidcaller_path_2_4"]]}

    function applyTk3BranchGraph() {
        TK3_BRANCH_GRAPH.remove.forEach(function(pair) {
            var removed = 0
            ;[[pair[0],pair[1]],[pair[1],pair[0]]].forEach(function(direction) {
                var node = skills[direction[0]]
                var target = 'skilltree:' + direction[1]
                if (!node || !skills[direction[1]]) {
                    throw new Error('[TK3 SkillTree] Missing branch-graph node')
                }
                ;['directConnections','longConnections','oneWayConnections'].forEach(function(field) {
                    var before = node[field].length
                    node[field] = node[field].filter(function(id){ return id !== target })
                    removed += before - node[field].length
                })
            })
            if (removed !== 2) throw new Error('[TK3 SkillTree] Unexpected branch-graph link: ' + pair.join(' -> '))
        })
        TK3_BRANCH_GRAPH.add.forEach(function(pair){ connect(pair[0],pair[1]) })
        TK3_BRANCH_GRAPH.anchors.forEach(function(pair) {
            var node = skills[pair[0]]
            if (!node || !skills[pair[1]] || node.requirements.length !== 1) {
                throw new Error('[TK3 SkillTree] Invalid side-path entry: ' + pair[0])
            }
            node.requirements = [learnedSkill(pair[1])]
        })
    }

    applyTk3BranchGraph()

    // ---------------------------------------------------------------------
    // FINAL LAYOUT: EXACT 120 x 120 GRID, ONE UNIQUE CELL PER SKILL
    // ---------------------------------------------------------------------
    // [column,row] are zero-based cell indices in 0..119.
    // Each occupied cell uses the same 80-unit spacing. Empty cells are
    // intentional breathing room around the branching constellations.
    // These final spots were checked against all 1,800 graph connections:
    // no crossings, no edge touches and no lines through other node frames.
    const TK3_GRID_SPOTS = {
        'tk3_cleric_class_mastery': [30,76],
        'tk3_cleric_core_advanced_1_1': [30,78],
        'tk3_cleric_core_advanced_1_2': [31,79],
        'tk3_cleric_core_advanced_1_3': [32,80],
        'tk3_cleric_core_advanced_1_4': [32,82],
        'tk3_cleric_core_advanced_1_5': [32,83],
        'tk3_cleric_core_advanced_1_6': [32,84],
        'tk3_cleric_core_advanced_1_7': [30,85],
        'tk3_cleric_core_advanced_1_8': [29,85],
        'tk3_cleric_core_advanced_2_1': [29,79],
        'tk3_cleric_core_advanced_2_2': [30,80],
        'tk3_cleric_core_advanced_2_3': [30,82],
        'tk3_cleric_core_advanced_2_4': [30,83],
        'tk3_cleric_core_advanced_2_5': [29,84],
        'tk3_cleric_core_advanced_2_6': [28,84],
        'tk3_cleric_core_advanced_2_7': [27,83],
        'tk3_cleric_core_advanced_2_8': [27,81],
        'tk3_cleric_core_advanced_3_1': [29,77],
        'tk3_cleric_core_advanced_3_2': [28,78],
        'tk3_cleric_core_advanced_3_3': [27,79],
        'tk3_cleric_core_advanced_3_4': [26,80],
        'tk3_cleric_core_advanced_3_5': [25,80],
        'tk3_cleric_core_advanced_3_6': [23,79],
        'tk3_cleric_core_advanced_3_7': [22,79],
        'tk3_cleric_core_advanced_3_8': [22,80],
        'tk3_cleric_core_advanced_4_1': [26,78],
        'tk3_cleric_core_advanced_4_2': [26,77],
        'tk3_cleric_core_advanced_4_3': [25,75],
        'tk3_cleric_core_advanced_4_4': [26,74],
        'tk3_cleric_core_advanced_4_5': [27,73],
        'tk3_cleric_core_advanced_4_6': [28,72],
        'tk3_cleric_core_advanced_4_7': [28,71],
        'tk3_cleric_core_advanced_4_8': [27,70],
        'tk3_cleric_core_advanced_5_1': [26,79],
        'tk3_cleric_core_advanced_5_2': [25,78],
        'tk3_cleric_core_advanced_5_3': [25,77],
        'tk3_cleric_core_advanced_5_4': [23,76],
        'tk3_cleric_core_advanced_5_5': [22,76],
        'tk3_cleric_core_advanced_5_6': [21,76],
        'tk3_cleric_core_advanced_5_7': [20,78],
        'tk3_cleric_core_advanced_5_8': [21,79],
        'tk3_cleric_core_inner_1_1': [37,75],
        'tk3_cleric_core_inner_1_2': [37,77],
        'tk3_cleric_core_inner_1_3': [38,78],
        'tk3_cleric_core_inner_1_4': [40,78],
        'tk3_cleric_core_inner_1_5': [41,78],
        'tk3_cleric_core_inner_2_1': [36,76],
        'tk3_cleric_core_inner_2_2': [36,77],
        'tk3_cleric_core_inner_2_3': [36,78],
        'tk3_cleric_core_inner_2_4': [35,79],
        'tk3_cleric_core_inner_2_5': [33,79],
        'tk3_cleric_core_inner_3_1': [36,74],
        'tk3_cleric_core_inner_3_2': [35,74],
        'tk3_cleric_core_inner_3_3': [34,74],
        'tk3_cleric_core_inner_3_4': [32,75],
        'tk3_cleric_core_inner_3_5': [31,75],
        'tk3_cleric_core_inner_4_1': [33,73],
        'tk3_cleric_core_inner_4_2': [33,72],
        'tk3_cleric_core_inner_4_3': [33,70],
        'tk3_cleric_core_inner_4_4': [34,69],
        'tk3_cleric_core_inner_4_5': [35,69],
        'tk3_cleric_core_inner_5_1': [31,73],
        'tk3_cleric_core_inner_5_2': [30,73],
        'tk3_cleric_core_inner_5_3': [29,73],
        'tk3_cleric_core_inner_5_4': [28,74],
        'tk3_cleric_core_inner_5_5': [27,75],
        'tk3_cleric_path': [42,78],
        'tk3_cleric_root': [38,73],
        'tk3_cleric_sub_crusader': [18,84],
        'tk3_cleric_sub_crusader_ascendancy': [12,90],
        'tk3_cleric_sub_crusader_path_1_1': [16,86],
        'tk3_cleric_sub_crusader_path_1_10': [22,85],
        'tk3_cleric_sub_crusader_path_1_11': [23,86],
        'tk3_cleric_sub_crusader_path_1_12': [23,87],
        'tk3_cleric_sub_crusader_path_1_13': [22,87],
        'tk3_cleric_sub_crusader_path_1_14': [22,88],
        'tk3_cleric_sub_crusader_path_1_15': [21,88],
        'tk3_cleric_sub_crusader_path_1_16': [20,88],
        'tk3_cleric_sub_crusader_path_1_2': [17,87],
        'tk3_cleric_sub_crusader_path_1_3': [17,88],
        'tk3_cleric_sub_crusader_path_1_4': [18,88],
        'tk3_cleric_sub_crusader_path_1_5': [19,87],
        'tk3_cleric_sub_crusader_path_1_6': [20,87],
        'tk3_cleric_sub_crusader_path_1_7': [20,86],
        'tk3_cleric_sub_crusader_path_1_8': [20,85],
        'tk3_cleric_sub_crusader_path_1_9': [21,85],
        'tk3_cleric_sub_crusader_path_2_1': [17,85],
        'tk3_cleric_sub_crusader_path_2_10': [10,88],
        'tk3_cleric_sub_crusader_path_2_11': [9,87],
        'tk3_cleric_sub_crusader_path_2_12': [10,86],
        'tk3_cleric_sub_crusader_path_2_13': [10,85],
        'tk3_cleric_sub_crusader_path_2_14': [11,85],
        'tk3_cleric_sub_crusader_path_2_15': [12,85],
        'tk3_cleric_sub_crusader_path_2_16': [13,85],
        'tk3_cleric_sub_crusader_path_2_2': [16,85],
        'tk3_cleric_sub_crusader_path_2_3': [15,85],
        'tk3_cleric_sub_crusader_path_2_4': [14,85],
        'tk3_cleric_sub_crusader_path_2_5': [13,86],
        'tk3_cleric_sub_crusader_path_2_6': [13,87],
        'tk3_cleric_sub_crusader_path_2_7': [12,88],
        'tk3_cleric_sub_crusader_path_2_8': [12,89],
        'tk3_cleric_sub_crusader_path_2_9': [11,88],
        'tk3_cleric_sub_crusader_path_3_1': [14,84],
        'tk3_cleric_sub_crusader_path_3_10': [19,80],
        'tk3_cleric_sub_crusader_path_3_11': [19,79],
        'tk3_cleric_sub_crusader_path_3_12': [18,79],
        'tk3_cleric_sub_crusader_path_3_13': [17,78],
        'tk3_cleric_sub_crusader_path_3_14': [16,79],
        'tk3_cleric_sub_crusader_path_3_15': [15,79],
        'tk3_cleric_sub_crusader_path_3_16': [15,80],
        'tk3_cleric_sub_crusader_path_3_2': [13,83],
        'tk3_cleric_sub_crusader_path_3_3': [13,82],
        'tk3_cleric_sub_crusader_path_3_4': [14,82],
        'tk3_cleric_sub_crusader_path_3_5': [15,81],
        'tk3_cleric_sub_crusader_path_3_6': [16,81],
        'tk3_cleric_sub_crusader_path_3_7': [17,81],
        'tk3_cleric_sub_crusader_path_3_8': [17,82],
        'tk3_cleric_sub_crusader_path_3_9': [18,81],
        'tk3_cleric_sub_crusader_synergy_1': [20,84],
        'tk3_cleric_sub_crusader_synergy_2': [18,82],
        'tk3_cleric_sub_oracle': [14,75],
        'tk3_cleric_sub_oracle_ascendancy': [6,67],
        'tk3_cleric_sub_oracle_path_1_1': [13,73],
        'tk3_cleric_sub_oracle_path_1_10': [21,75],
        'tk3_cleric_sub_oracle_path_1_11': [22,74],
        'tk3_cleric_sub_oracle_path_1_12': [22,73],
        'tk3_cleric_sub_oracle_path_1_13': [21,71],
        'tk3_cleric_sub_oracle_path_1_14': [20,70],
        'tk3_cleric_sub_oracle_path_1_15': [19,70],
        'tk3_cleric_sub_oracle_path_1_16': [18,70],
        'tk3_cleric_sub_oracle_path_1_2': [13,72],
        'tk3_cleric_sub_oracle_path_1_3': [15,71],
        'tk3_cleric_sub_oracle_path_1_4': [16,71],
        'tk3_cleric_sub_oracle_path_1_5': [17,71],
        'tk3_cleric_sub_oracle_path_1_6': [18,72],
        'tk3_cleric_sub_oracle_path_1_7': [19,73],
        'tk3_cleric_sub_oracle_path_1_8': [18,75],
        'tk3_cleric_sub_oracle_path_1_9': [19,75],
        'tk3_cleric_sub_oracle_path_2_1': [13,75],
        'tk3_cleric_sub_oracle_path_2_10': [4,70],
        'tk3_cleric_sub_oracle_path_2_11': [3,71],
        'tk3_cleric_sub_oracle_path_2_12': [3,73],
        'tk3_cleric_sub_oracle_path_2_13': [4,74],
        'tk3_cleric_sub_oracle_path_2_14': [6,74],
        'tk3_cleric_sub_oracle_path_2_15': [7,74],
        'tk3_cleric_sub_oracle_path_2_16': [8,74],
        'tk3_cleric_sub_oracle_path_2_2': [12,74],
        'tk3_cleric_sub_oracle_path_2_3': [11,74],
        'tk3_cleric_sub_oracle_path_2_4': [9,74],
        'tk3_cleric_sub_oracle_path_2_5': [8,73],
        'tk3_cleric_sub_oracle_path_2_6': [8,71],
        'tk3_cleric_sub_oracle_path_2_7': [7,70],
        'tk3_cleric_sub_oracle_path_2_8': [6,69],
        'tk3_cleric_sub_oracle_path_2_9': [5,69],
        'tk3_cleric_sub_oracle_path_3_1': [9,75],
        'tk3_cleric_sub_oracle_path_3_10': [15,77],
        'tk3_cleric_sub_oracle_path_3_11': [14,76],
        'tk3_cleric_sub_oracle_path_3_12': [12,76],
        'tk3_cleric_sub_oracle_path_3_13': [11,77],
        'tk3_cleric_sub_oracle_path_3_14': [11,78],
        'tk3_cleric_sub_oracle_path_3_15': [12,79],
        'tk3_cleric_sub_oracle_path_3_16': [13,79],
        'tk3_cleric_sub_oracle_path_3_2': [8,76],
        'tk3_cleric_sub_oracle_path_3_3': [8,78],
        'tk3_cleric_sub_oracle_path_3_4': [9,79],
        'tk3_cleric_sub_oracle_path_3_5': [10,80],
        'tk3_cleric_sub_oracle_path_3_6': [11,80],
        'tk3_cleric_sub_oracle_path_3_7': [13,80],
        'tk3_cleric_sub_oracle_path_3_8': [14,79],
        'tk3_cleric_sub_oracle_path_3_9': [14,78],
        'tk3_cleric_sub_oracle_synergy_1': [19,76],
        'tk3_cleric_sub_oracle_synergy_2': [15,78],
        'tk3_cleric_sub_priest': [24,92],
        'tk3_cleric_sub_priest_ascendancy': [27,103],
        'tk3_cleric_sub_priest_path_1_1': [25,94],
        'tk3_cleric_sub_priest_path_1_10': [27,86],
        'tk3_cleric_sub_priest_path_1_11': [29,86],
        'tk3_cleric_sub_priest_path_1_12': [30,87],
        'tk3_cleric_sub_priest_path_1_13': [31,88],
        'tk3_cleric_sub_priest_path_1_14': [31,89],
        'tk3_cleric_sub_priest_path_1_15': [31,91],
        'tk3_cleric_sub_priest_path_1_16': [30,92],
        'tk3_cleric_sub_priest_path_1_2': [27,94],
        'tk3_cleric_sub_priest_path_1_3': [28,94],
        'tk3_cleric_sub_priest_path_1_4': [29,93],
        'tk3_cleric_sub_priest_path_1_5': [29,92],
        'tk3_cleric_sub_priest_path_1_6': [29,90],
        'tk3_cleric_sub_priest_path_1_7': [28,89],
        'tk3_cleric_sub_priest_path_1_8': [26,89],
        'tk3_cleric_sub_priest_path_1_9': [26,87],
        'tk3_cleric_sub_priest_path_2_1': [24,93],
        'tk3_cleric_sub_priest_path_2_10': [23,104],
        'tk3_cleric_sub_priest_path_2_11': [22,104],
        'tk3_cleric_sub_priest_path_2_12': [21,103],
        'tk3_cleric_sub_priest_path_2_13': [20,101],
        'tk3_cleric_sub_priest_path_2_14': [21,100],
        'tk3_cleric_sub_priest_path_2_15': [21,99],
        'tk3_cleric_sub_priest_path_2_16': [22,98],
        'tk3_cleric_sub_priest_path_2_2': [24,94],
        'tk3_cleric_sub_priest_path_2_3': [23,96],
        'tk3_cleric_sub_priest_path_2_4': [23,97],
        'tk3_cleric_sub_priest_path_2_5': [23,98],
        'tk3_cleric_sub_priest_path_2_6': [24,100],
        'tk3_cleric_sub_priest_path_2_7': [25,101],
        'tk3_cleric_sub_priest_path_2_8': [25,102],
        'tk3_cleric_sub_priest_path_2_9': [24,103],
        'tk3_cleric_sub_priest_path_3_1': [21,97],
        'tk3_cleric_sub_priest_path_3_10': [19,88],
        'tk3_cleric_sub_priest_path_3_11': [18,89],
        'tk3_cleric_sub_priest_path_3_12': [16,88],
        'tk3_cleric_sub_priest_path_3_13': [16,89],
        'tk3_cleric_sub_priest_path_3_14': [15,90],
        'tk3_cleric_sub_priest_path_3_15': [16,92],
        'tk3_cleric_sub_priest_path_3_16': [16,93],
        'tk3_cleric_sub_priest_path_3_2': [20,97],
        'tk3_cleric_sub_priest_path_3_3': [19,96],
        'tk3_cleric_sub_priest_path_3_4': [18,95],
        'tk3_cleric_sub_priest_path_3_5': [18,93],
        'tk3_cleric_sub_priest_path_3_6': [18,92],
        'tk3_cleric_sub_priest_path_3_7': [19,91],
        'tk3_cleric_sub_priest_path_3_8': [20,90],
        'tk3_cleric_sub_priest_path_3_9': [20,89],
        'tk3_cleric_sub_priest_synergy_1': [25,88],
        'tk3_cleric_sub_priest_synergy_2': [22,90],
        'tk3_cleric_subclass_gate': [23,81],
        'tk3_mage_class_mastery': [59,94],
        'tk3_mage_core_advanced_1_1': [61,95],
        'tk3_mage_core_advanced_1_2': [62,95],
        'tk3_mage_core_advanced_1_3': [63,95],
        'tk3_mage_core_advanced_1_4': [65,95],
        'tk3_mage_core_advanced_1_5': [66,96],
        'tk3_mage_core_advanced_1_6': [67,97],
        'tk3_mage_core_advanced_1_7': [67,98],
        'tk3_mage_core_advanced_1_8': [66,99],
        'tk3_mage_core_advanced_2_1': [61,97],
        'tk3_mage_core_advanced_2_2': [62,96],
        'tk3_mage_core_advanced_2_3': [64,97],
        'tk3_mage_core_advanced_2_4': [65,98],
        'tk3_mage_core_advanced_2_5': [65,99],
        'tk3_mage_core_advanced_2_6': [64,100],
        'tk3_mage_core_advanced_2_7': [63,100],
        'tk3_mage_core_advanced_2_8': [62,99],
        'tk3_mage_core_advanced_3_1': [59,96],
        'tk3_mage_core_advanced_3_2': [60,97],
        'tk3_mage_core_advanced_3_3': [60,98],
        'tk3_mage_core_advanced_3_4': [61,100],
        'tk3_mage_core_advanced_3_5': [59,100],
        'tk3_mage_core_advanced_3_6': [58,101],
        'tk3_mage_core_advanced_3_7': [58,102],
        'tk3_mage_core_advanced_3_8': [59,102],
        'tk3_mage_core_advanced_4_1': [59,98],
        'tk3_mage_core_advanced_4_2': [57,98],
        'tk3_mage_core_advanced_4_3': [56,98],
        'tk3_mage_core_advanced_4_4': [55,97],
        'tk3_mage_core_advanced_4_5': [55,95],
        'tk3_mage_core_advanced_4_6': [55,94],
        'tk3_mage_core_advanced_4_7': [53,93],
        'tk3_mage_core_advanced_4_8': [52,93],
        'tk3_mage_core_advanced_5_1': [59,99],
        'tk3_mage_core_advanced_5_2': [58,99],
        'tk3_mage_core_advanced_5_3': [57,99],
        'tk3_mage_core_advanced_5_4': [55,100],
        'tk3_mage_core_advanced_5_5': [55,101],
        'tk3_mage_core_advanced_5_6': [55,102],
        'tk3_mage_core_advanced_5_7': [55,103],
        'tk3_mage_core_advanced_5_8': [56,103],
        'tk3_mage_core_inner_1_1': [61,88],
        'tk3_mage_core_inner_1_2': [63,88],
        'tk3_mage_core_inner_1_3': [64,87],
        'tk3_mage_core_inner_1_4': [65,86],
        'tk3_mage_core_inner_1_5': [66,85],
        'tk3_mage_core_inner_2_1': [61,89],
        'tk3_mage_core_inner_2_2': [63,89],
        'tk3_mage_core_inner_2_3': [64,90],
        'tk3_mage_core_inner_2_4': [64,92],
        'tk3_mage_core_inner_2_5': [63,93],
        'tk3_mage_core_inner_3_1': [60,87],
        'tk3_mage_core_inner_3_2': [60,89],
        'tk3_mage_core_inner_3_3': [59,90],
        'tk3_mage_core_inner_3_4': [59,91],
        'tk3_mage_core_inner_3_5': [59,93],
        'tk3_mage_core_inner_4_1': [58,90],
        'tk3_mage_core_inner_4_2': [56,90],
        'tk3_mage_core_inner_4_3': [55,89],
        'tk3_mage_core_inner_4_4': [55,87],
        'tk3_mage_core_inner_4_5': [55,86],
        'tk3_mage_core_inner_5_1': [57,92],
        'tk3_mage_core_inner_5_2': [56,93],
        'tk3_mage_core_inner_5_3': [56,94],
        'tk3_mage_core_inner_5_4': [56,95],
        'tk3_mage_core_inner_5_5': [57,96],
        'tk3_mage_path': [60,85],
        'tk3_mage_root': [60,86],
        'tk3_mage_sub_arcanist': [60,109],
        'tk3_mage_sub_arcanist_ascendancy': [61,117],
        'tk3_mage_sub_arcanist_path_1_1': [61,111],
        'tk3_mage_sub_arcanist_path_1_10': [62,105],
        'tk3_mage_sub_arcanist_path_1_11': [63,105],
        'tk3_mage_sub_arcanist_path_1_12': [64,106],
        'tk3_mage_sub_arcanist_path_1_13': [65,106],
        'tk3_mage_sub_arcanist_path_1_14': [65,107],
        'tk3_mage_sub_arcanist_path_1_15': [65,108],
        'tk3_mage_sub_arcanist_path_1_16': [64,109],
        'tk3_mage_sub_arcanist_path_1_2': [62,111],
        'tk3_mage_sub_arcanist_path_1_3': [63,111],
        'tk3_mage_sub_arcanist_path_1_4': [63,110],
        'tk3_mage_sub_arcanist_path_1_5': [63,109],
        'tk3_mage_sub_arcanist_path_1_6': [63,108],
        'tk3_mage_sub_arcanist_path_1_7': [63,107],
        'tk3_mage_sub_arcanist_path_1_8': [62,107],
        'tk3_mage_sub_arcanist_path_1_9': [62,106],
        'tk3_mage_sub_arcanist_path_2_1': [60,110],
        'tk3_mage_sub_arcanist_path_2_10': [59,117],
        'tk3_mage_sub_arcanist_path_2_11': [58,117],
        'tk3_mage_sub_arcanist_path_2_12': [57,116],
        'tk3_mage_sub_arcanist_path_2_13': [57,115],
        'tk3_mage_sub_arcanist_path_2_14': [57,114],
        'tk3_mage_sub_arcanist_path_2_15': [58,114],
        'tk3_mage_sub_arcanist_path_2_16': [58,113],
        'tk3_mage_sub_arcanist_path_2_2': [60,111],
        'tk3_mage_sub_arcanist_path_2_3': [59,112],
        'tk3_mage_sub_arcanist_path_2_4': [59,113],
        'tk3_mage_sub_arcanist_path_2_5': [59,114],
        'tk3_mage_sub_arcanist_path_2_6': [60,114],
        'tk3_mage_sub_arcanist_path_2_7': [60,115],
        'tk3_mage_sub_arcanist_path_2_8': [61,116],
        'tk3_mage_sub_arcanist_path_2_9': [60,117],
        'tk3_mage_sub_arcanist_path_3_1': [58,112],
        'tk3_mage_sub_arcanist_path_3_10': [57,106],
        'tk3_mage_sub_arcanist_path_3_11': [56,106],
        'tk3_mage_sub_arcanist_path_3_12': [55,106],
        'tk3_mage_sub_arcanist_path_3_13': [54,107],
        'tk3_mage_sub_arcanist_path_3_14': [54,108],
        'tk3_mage_sub_arcanist_path_3_15': [54,109],
        'tk3_mage_sub_arcanist_path_3_16': [55,109],
        'tk3_mage_sub_arcanist_path_3_2': [57,112],
        'tk3_mage_sub_arcanist_path_3_3': [56,112],
        'tk3_mage_sub_arcanist_path_3_4': [56,111],
        'tk3_mage_sub_arcanist_path_3_5': [56,110],
        'tk3_mage_sub_arcanist_path_3_6': [56,109],
        'tk3_mage_sub_arcanist_path_3_7': [56,108],
        'tk3_mage_sub_arcanist_path_3_8': [57,108],
        'tk3_mage_sub_arcanist_path_3_9': [57,107],
        'tk3_mage_sub_arcanist_synergy_1': [61,106],
        'tk3_mage_sub_arcanist_synergy_2': [58,107],
        'tk3_mage_sub_battlemage': [50,107],
        'tk3_mage_sub_battlemage_ascendancy': [40,110],
        'tk3_mage_sub_battlemage_path_1_1': [48,107],
        'tk3_mage_sub_battlemage_path_1_10': [53,102],
        'tk3_mage_sub_battlemage_path_1_11': [53,100],
        'tk3_mage_sub_battlemage_path_1_12': [52,99],
        'tk3_mage_sub_battlemage_path_1_13': [51,99],
        'tk3_mage_sub_battlemage_path_1_14': [49,100],
        'tk3_mage_sub_battlemage_path_1_15': [48,101],
        'tk3_mage_sub_battlemage_path_1_16': [47,102],
        'tk3_mage_sub_battlemage_path_1_2': [47,106],
        'tk3_mage_sub_battlemage_path_1_3': [47,105],
        'tk3_mage_sub_battlemage_path_1_4': [47,104],
        'tk3_mage_sub_battlemage_path_1_5': [48,103],
        'tk3_mage_sub_battlemage_path_1_6': [49,102],
        'tk3_mage_sub_battlemage_path_1_7': [51,103],
        'tk3_mage_sub_battlemage_path_1_8': [52,103],
        'tk3_mage_sub_battlemage_path_1_9': [53,103],
        'tk3_mage_sub_battlemage_path_2_1': [49,108],
        'tk3_mage_sub_battlemage_path_2_10': [41,114],
        'tk3_mage_sub_battlemage_path_2_11': [41,115],
        'tk3_mage_sub_battlemage_path_2_12': [43,115],
        'tk3_mage_sub_battlemage_path_2_13': [44,115],
        'tk3_mage_sub_battlemage_path_2_14': [45,114],
        'tk3_mage_sub_battlemage_path_2_15': [46,113],
        'tk3_mage_sub_battlemage_path_2_16': [46,112],
        'tk3_mage_sub_battlemage_path_2_2': [48,109],
        'tk3_mage_sub_battlemage_path_2_3': [48,110],
        'tk3_mage_sub_battlemage_path_2_4': [47,111],
        'tk3_mage_sub_battlemage_path_2_5': [45,111],
        'tk3_mage_sub_battlemage_path_2_6': [44,111],
        'tk3_mage_sub_battlemage_path_2_7': [42,111],
        'tk3_mage_sub_battlemage_path_2_8': [41,111],
        'tk3_mage_sub_battlemage_path_2_9': [40,112],
        'tk3_mage_sub_battlemage_path_3_1': [47,112],
        'tk3_mage_sub_battlemage_path_3_10': [52,107],
        'tk3_mage_sub_battlemage_path_3_11': [51,108],
        'tk3_mage_sub_battlemage_path_3_12': [50,109],
        'tk3_mage_sub_battlemage_path_3_13': [50,111],
        'tk3_mage_sub_battlemage_path_3_14': [51,112],
        'tk3_mage_sub_battlemage_path_3_15': [53,111],
        'tk3_mage_sub_battlemage_path_3_16': [53,110],
        'tk3_mage_sub_battlemage_path_3_2': [48,113],
        'tk3_mage_sub_battlemage_path_3_3': [50,114],
        'tk3_mage_sub_battlemage_path_3_4': [51,114],
        'tk3_mage_sub_battlemage_path_3_5': [52,113],
        'tk3_mage_sub_battlemage_path_3_6': [53,112],
        'tk3_mage_sub_battlemage_path_3_7': [54,111],
        'tk3_mage_sub_battlemage_path_3_8': [54,110],
        'tk3_mage_sub_battlemage_path_3_9': [53,109],
        'tk3_mage_sub_battlemage_synergy_1': [53,104],
        'tk3_mage_sub_battlemage_synergy_2': [53,108],
        'tk3_mage_sub_elementalist': [70,107],
        'tk3_mage_sub_elementalist_ascendancy': [80,110],
        'tk3_mage_sub_elementalist_path_1_1': [72,107],
        'tk3_mage_sub_elementalist_path_1_10': [67,102],
        'tk3_mage_sub_elementalist_path_1_11': [67,100],
        'tk3_mage_sub_elementalist_path_1_12': [68,99],
        'tk3_mage_sub_elementalist_path_1_13': [69,99],
        'tk3_mage_sub_elementalist_path_1_14': [71,100],
        'tk3_mage_sub_elementalist_path_1_15': [72,101],
        'tk3_mage_sub_elementalist_path_1_16': [73,102],
        'tk3_mage_sub_elementalist_path_1_2': [73,106],
        'tk3_mage_sub_elementalist_path_1_3': [73,105],
        'tk3_mage_sub_elementalist_path_1_4': [73,104],
        'tk3_mage_sub_elementalist_path_1_5': [72,103],
        'tk3_mage_sub_elementalist_path_1_6': [71,102],
        'tk3_mage_sub_elementalist_path_1_7': [69,103],
        'tk3_mage_sub_elementalist_path_1_8': [68,103],
        'tk3_mage_sub_elementalist_path_1_9': [67,103],
        'tk3_mage_sub_elementalist_path_2_1': [71,108],
        'tk3_mage_sub_elementalist_path_2_10': [79,114],
        'tk3_mage_sub_elementalist_path_2_11': [79,115],
        'tk3_mage_sub_elementalist_path_2_12': [77,115],
        'tk3_mage_sub_elementalist_path_2_13': [76,115],
        'tk3_mage_sub_elementalist_path_2_14': [75,114],
        'tk3_mage_sub_elementalist_path_2_15': [74,113],
        'tk3_mage_sub_elementalist_path_2_16': [74,112],
        'tk3_mage_sub_elementalist_path_2_2': [72,109],
        'tk3_mage_sub_elementalist_path_2_3': [72,110],
        'tk3_mage_sub_elementalist_path_2_4': [73,111],
        'tk3_mage_sub_elementalist_path_2_5': [75,111],
        'tk3_mage_sub_elementalist_path_2_6': [76,111],
        'tk3_mage_sub_elementalist_path_2_7': [78,111],
        'tk3_mage_sub_elementalist_path_2_8': [79,111],
        'tk3_mage_sub_elementalist_path_2_9': [80,112],
        'tk3_mage_sub_elementalist_path_3_1': [73,112],
        'tk3_mage_sub_elementalist_path_3_10': [64,110],
        'tk3_mage_sub_elementalist_path_3_11': [64,111],
        'tk3_mage_sub_elementalist_path_3_12': [62,112],
        'tk3_mage_sub_elementalist_path_3_13': [63,113],
        'tk3_mage_sub_elementalist_path_3_14': [64,114],
        'tk3_mage_sub_elementalist_path_3_15': [65,114],
        'tk3_mage_sub_elementalist_path_3_16': [67,114],
        'tk3_mage_sub_elementalist_path_3_2': [72,113],
        'tk3_mage_sub_elementalist_path_3_3': [70,114],
        'tk3_mage_sub_elementalist_path_3_4': [69,114],
        'tk3_mage_sub_elementalist_path_3_5': [68,113],
        'tk3_mage_sub_elementalist_path_3_6': [67,112],
        'tk3_mage_sub_elementalist_path_3_7': [66,111],
        'tk3_mage_sub_elementalist_path_3_8': [66,110],
        'tk3_mage_sub_elementalist_path_3_9': [65,109],
        'tk3_mage_sub_elementalist_synergy_1': [67,104],
        'tk3_mage_sub_elementalist_synergy_2': [67,108],
        'tk3_mage_subclass_gate': [60,102],
        'tk3_occultist_class_mastery': [31,42],
        'tk3_occultist_core_advanced_1_1': [29,43],
        'tk3_occultist_core_advanced_1_2': [29,44],
        'tk3_occultist_core_advanced_1_3': [28,45],
        'tk3_occultist_core_advanced_1_4': [27,47],
        'tk3_occultist_core_advanced_1_5': [26,47],
        'tk3_occultist_core_advanced_1_6': [25,47],
        'tk3_occultist_core_advanced_1_7': [24,47],
        'tk3_occultist_core_advanced_1_8': [23,46],
        'tk3_occultist_core_advanced_2_1': [28,43],
        'tk3_occultist_core_advanced_2_2': [27,44],
        'tk3_occultist_core_advanced_2_3': [26,45],
        'tk3_occultist_core_advanced_2_4': [25,45],
        'tk3_occultist_core_advanced_2_5': [24,45],
        'tk3_occultist_core_advanced_2_6': [23,44],
        'tk3_occultist_core_advanced_2_7': [24,42],
        'tk3_occultist_core_advanced_2_8': [25,42],
        'tk3_occultist_core_advanced_3_1': [30,41],
        'tk3_occultist_core_advanced_3_2': [28,41],
        'tk3_occultist_core_advanced_3_3': [27,41],
        'tk3_occultist_core_advanced_3_4': [25,41],
        'tk3_occultist_core_advanced_3_5': [25,39],
        'tk3_occultist_core_advanced_3_6': [25,38],
        'tk3_occultist_core_advanced_3_7': [24,37],
        'tk3_occultist_core_advanced_3_8': [24,38],
        'tk3_occultist_core_advanced_4_1': [27,40],
        'tk3_occultist_core_advanced_4_2': [28,39],
        'tk3_occultist_core_advanced_4_3': [29,38],
        'tk3_occultist_core_advanced_4_4': [31,38],
        'tk3_occultist_core_advanced_4_5': [32,38],
        'tk3_occultist_core_advanced_4_6': [33,38],
        'tk3_occultist_core_advanced_4_7': [35,38],
        'tk3_occultist_core_advanced_4_8': [35,36],
        'tk3_occultist_core_advanced_5_1': [26,40],
        'tk3_occultist_core_advanced_5_2': [27,39],
        'tk3_occultist_core_advanced_5_3': [28,38],
        'tk3_occultist_core_advanced_5_4': [28,36],
        'tk3_occultist_core_advanced_5_5': [27,35],
        'tk3_occultist_core_advanced_5_6': [26,34],
        'tk3_occultist_core_advanced_5_7': [25,34],
        'tk3_occultist_core_advanced_5_8': [24,35],
        'tk3_occultist_core_inner_1_1': [35,47],
        'tk3_occultist_core_inner_1_2': [34,48],
        'tk3_occultist_core_inner_1_3': [34,50],
        'tk3_occultist_core_inner_1_4': [34,51],
        'tk3_occultist_core_inner_1_5': [35,52],
        'tk3_occultist_core_inner_2_1': [34,47],
        'tk3_occultist_core_inner_2_2': [33,48],
        'tk3_occultist_core_inner_2_3': [32,48],
        'tk3_occultist_core_inner_2_4': [31,48],
        'tk3_occultist_core_inner_2_5': [30,47],
        'tk3_occultist_core_inner_3_1': [36,46],
        'tk3_occultist_core_inner_3_2': [35,45],
        'tk3_occultist_core_inner_3_3': [35,44],
        'tk3_occultist_core_inner_3_4': [33,43],
        'tk3_occultist_core_inner_3_5': [32,43],
        'tk3_occultist_core_inner_4_1': [35,43],
        'tk3_occultist_core_inner_4_2': [36,42],
        'tk3_occultist_core_inner_4_3': [38,42],
        'tk3_occultist_core_inner_4_4': [39,42],
        'tk3_occultist_core_inner_4_5': [40,43],
        'tk3_occultist_core_inner_5_1': [34,42],
        'tk3_occultist_core_inner_5_2': [34,40],
        'tk3_occultist_core_inner_5_3': [33,39],
        'tk3_occultist_core_inner_5_4': [32,39],
        'tk3_occultist_core_inner_5_5': [30,39],
        'tk3_occultist_path': [42,42],
        'tk3_occultist_root': [38,47],
        'tk3_occultist_sub_blood_mage': [14,45],
        'tk3_occultist_sub_blood_mage_ascendancy': [6,53],
        'tk3_occultist_sub_blood_mage_path_1_1': [13,47],
        'tk3_occultist_sub_blood_mage_path_1_10': [21,45],
        'tk3_occultist_sub_blood_mage_path_1_11': [22,46],
        'tk3_occultist_sub_blood_mage_path_1_12': [22,47],
        'tk3_occultist_sub_blood_mage_path_1_13': [21,49],
        'tk3_occultist_sub_blood_mage_path_1_14': [20,50],
        'tk3_occultist_sub_blood_mage_path_1_15': [19,50],
        'tk3_occultist_sub_blood_mage_path_1_16': [18,50],
        'tk3_occultist_sub_blood_mage_path_1_2': [13,48],
        'tk3_occultist_sub_blood_mage_path_1_3': [15,49],
        'tk3_occultist_sub_blood_mage_path_1_4': [16,49],
        'tk3_occultist_sub_blood_mage_path_1_5': [17,49],
        'tk3_occultist_sub_blood_mage_path_1_6': [18,48],
        'tk3_occultist_sub_blood_mage_path_1_7': [19,47],
        'tk3_occultist_sub_blood_mage_path_1_8': [18,45],
        'tk3_occultist_sub_blood_mage_path_1_9': [19,45],
        'tk3_occultist_sub_blood_mage_path_2_1': [13,45],
        'tk3_occultist_sub_blood_mage_path_2_10': [4,50],
        'tk3_occultist_sub_blood_mage_path_2_11': [3,49],
        'tk3_occultist_sub_blood_mage_path_2_12': [3,47],
        'tk3_occultist_sub_blood_mage_path_2_13': [4,46],
        'tk3_occultist_sub_blood_mage_path_2_14': [6,46],
        'tk3_occultist_sub_blood_mage_path_2_15': [7,46],
        'tk3_occultist_sub_blood_mage_path_2_16': [8,46],
        'tk3_occultist_sub_blood_mage_path_2_2': [12,46],
        'tk3_occultist_sub_blood_mage_path_2_3': [11,46],
        'tk3_occultist_sub_blood_mage_path_2_4': [9,46],
        'tk3_occultist_sub_blood_mage_path_2_5': [8,47],
        'tk3_occultist_sub_blood_mage_path_2_6': [8,49],
        'tk3_occultist_sub_blood_mage_path_2_7': [7,50],
        'tk3_occultist_sub_blood_mage_path_2_8': [6,51],
        'tk3_occultist_sub_blood_mage_path_2_9': [5,51],
        'tk3_occultist_sub_blood_mage_path_3_1': [9,45],
        'tk3_occultist_sub_blood_mage_path_3_10': [14,38],
        'tk3_occultist_sub_blood_mage_path_3_11': [14,37],
        'tk3_occultist_sub_blood_mage_path_3_12': [14,36],
        'tk3_occultist_sub_blood_mage_path_3_13': [13,36],
        'tk3_occultist_sub_blood_mage_path_3_14': [11,37],
        'tk3_occultist_sub_blood_mage_path_3_15': [10,37],
        'tk3_occultist_sub_blood_mage_path_3_16': [10,39],
        'tk3_occultist_sub_blood_mage_path_3_2': [8,44],
        'tk3_occultist_sub_blood_mage_path_3_3': [8,42],
        'tk3_occultist_sub_blood_mage_path_3_4': [9,41],
        'tk3_occultist_sub_blood_mage_path_3_5': [10,40],
        'tk3_occultist_sub_blood_mage_path_3_6': [11,40],
        'tk3_occultist_sub_blood_mage_path_3_7': [13,40],
        'tk3_occultist_sub_blood_mage_path_3_8': [14,41],
        'tk3_occultist_sub_blood_mage_path_3_9': [15,40],
        'tk3_occultist_sub_blood_mage_synergy_1': [19,44],
        'tk3_occultist_sub_blood_mage_synergy_2': [15,42],
        'tk3_occultist_sub_necromancer': [18,36],
        'tk3_occultist_sub_necromancer_ascendancy': [10,33],
        'tk3_occultist_sub_necromancer_path_1_1': [16,35],
        'tk3_occultist_sub_necromancer_path_1_10': [20,39],
        'tk3_occultist_sub_necromancer_path_1_11': [19,40],
        'tk3_occultist_sub_necromancer_path_1_12': [18,41],
        'tk3_occultist_sub_necromancer_path_1_13': [17,41],
        'tk3_occultist_sub_necromancer_path_1_14': [16,41],
        'tk3_occultist_sub_necromancer_path_1_15': [16,40],
        'tk3_occultist_sub_necromancer_path_1_16': [15,39],
        'tk3_occultist_sub_necromancer_path_1_2': [15,36],
        'tk3_occultist_sub_necromancer_path_1_3': [15,37],
        'tk3_occultist_sub_necromancer_path_1_4': [15,38],
        'tk3_occultist_sub_necromancer_path_1_5': [16,38],
        'tk3_occultist_sub_necromancer_path_1_6': [17,39],
        'tk3_occultist_sub_necromancer_path_1_7': [18,39],
        'tk3_occultist_sub_necromancer_path_1_8': [18,38],
        'tk3_occultist_sub_necromancer_path_1_9': [19,39],
        'tk3_occultist_sub_necromancer_path_2_1': [17,35],
        'tk3_occultist_sub_necromancer_path_2_10': [11,30],
        'tk3_occultist_sub_necromancer_path_2_11': [12,30],
        'tk3_occultist_sub_necromancer_path_2_12': [13,29],
        'tk3_occultist_sub_necromancer_path_2_13': [13,30],
        'tk3_occultist_sub_necromancer_path_2_14': [14,30],
        'tk3_occultist_sub_necromancer_path_2_15': [15,31],
        'tk3_occultist_sub_necromancer_path_2_16': [15,32],
        'tk3_occultist_sub_necromancer_path_2_2': [16,34],
        'tk3_occultist_sub_necromancer_path_2_3': [16,33],
        'tk3_occultist_sub_necromancer_path_2_4': [15,33],
        'tk3_occultist_sub_necromancer_path_2_5': [14,32],
        'tk3_occultist_sub_necromancer_path_2_6': [13,32],
        'tk3_occultist_sub_necromancer_path_2_7': [12,32],
        'tk3_occultist_sub_necromancer_path_2_8': [11,32],
        'tk3_occultist_sub_necromancer_path_2_9': [11,31],
        'tk3_occultist_sub_necromancer_path_3_1': [16,32],
        'tk3_occultist_sub_necromancer_path_3_10': [22,34],
        'tk3_occultist_sub_necromancer_path_3_11': [23,34],
        'tk3_occultist_sub_necromancer_path_3_12': [23,33],
        'tk3_occultist_sub_necromancer_path_3_13': [22,32],
        'tk3_occultist_sub_necromancer_path_3_14': [22,31],
        'tk3_occultist_sub_necromancer_path_3_15': [21,31],
        'tk3_occultist_sub_necromancer_path_3_16': [20,31],
        'tk3_occultist_sub_necromancer_path_3_2': [16,31],
        'tk3_occultist_sub_necromancer_path_3_3': [17,31],
        'tk3_occultist_sub_necromancer_path_3_4': [18,31],
        'tk3_occultist_sub_necromancer_path_3_5': [19,31],
        'tk3_occultist_sub_necromancer_path_3_6': [20,32],
        'tk3_occultist_sub_necromancer_path_3_7': [20,33],
        'tk3_occultist_sub_necromancer_path_3_8': [20,34],
        'tk3_occultist_sub_necromancer_path_3_9': [21,34],
        'tk3_occultist_sub_necromancer_synergy_1': [19,38],
        'tk3_occultist_sub_necromancer_synergy_2': [20,35],
        'tk3_occultist_sub_voidcaller': [24,28],
        'tk3_occultist_sub_voidcaller_ascendancy': [27,17],
        'tk3_occultist_sub_voidcaller_path_1_1': [25,26],
        'tk3_occultist_sub_voidcaller_path_1_10': [27,34],
        'tk3_occultist_sub_voidcaller_path_1_11': [29,34],
        'tk3_occultist_sub_voidcaller_path_1_12': [30,33],
        'tk3_occultist_sub_voidcaller_path_1_13': [31,32],
        'tk3_occultist_sub_voidcaller_path_1_14': [31,31],
        'tk3_occultist_sub_voidcaller_path_1_15': [31,29],
        'tk3_occultist_sub_voidcaller_path_1_16': [30,28],
        'tk3_occultist_sub_voidcaller_path_1_2': [27,26],
        'tk3_occultist_sub_voidcaller_path_1_3': [28,26],
        'tk3_occultist_sub_voidcaller_path_1_4': [29,27],
        'tk3_occultist_sub_voidcaller_path_1_5': [29,28],
        'tk3_occultist_sub_voidcaller_path_1_6': [29,30],
        'tk3_occultist_sub_voidcaller_path_1_7': [28,31],
        'tk3_occultist_sub_voidcaller_path_1_8': [26,31],
        'tk3_occultist_sub_voidcaller_path_1_9': [26,33],
        'tk3_occultist_sub_voidcaller_path_2_1': [24,27],
        'tk3_occultist_sub_voidcaller_path_2_10': [23,16],
        'tk3_occultist_sub_voidcaller_path_2_11': [22,16],
        'tk3_occultist_sub_voidcaller_path_2_12': [21,17],
        'tk3_occultist_sub_voidcaller_path_2_13': [20,19],
        'tk3_occultist_sub_voidcaller_path_2_14': [21,20],
        'tk3_occultist_sub_voidcaller_path_2_15': [21,21],
        'tk3_occultist_sub_voidcaller_path_2_16': [22,22],
        'tk3_occultist_sub_voidcaller_path_2_2': [24,26],
        'tk3_occultist_sub_voidcaller_path_2_3': [23,24],
        'tk3_occultist_sub_voidcaller_path_2_4': [23,23],
        'tk3_occultist_sub_voidcaller_path_2_5': [23,22],
        'tk3_occultist_sub_voidcaller_path_2_6': [24,20],
        'tk3_occultist_sub_voidcaller_path_2_7': [25,19],
        'tk3_occultist_sub_voidcaller_path_2_8': [25,18],
        'tk3_occultist_sub_voidcaller_path_2_9': [24,17],
        'tk3_occultist_sub_voidcaller_path_3_1': [21,23],
        'tk3_occultist_sub_voidcaller_path_3_10': [23,29],
        'tk3_occultist_sub_voidcaller_path_3_11': [23,28],
        'tk3_occultist_sub_voidcaller_path_3_12': [22,27],
        'tk3_occultist_sub_voidcaller_path_3_13': [21,26],
        'tk3_occultist_sub_voidcaller_path_3_14': [20,27],
        'tk3_occultist_sub_voidcaller_path_3_15': [19,28],
        'tk3_occultist_sub_voidcaller_path_3_16': [20,28],
        'tk3_occultist_sub_voidcaller_path_3_2': [20,23],
        'tk3_occultist_sub_voidcaller_path_3_3': [19,24],
        'tk3_occultist_sub_voidcaller_path_3_4': [18,25],
        'tk3_occultist_sub_voidcaller_path_3_5': [18,27],
        'tk3_occultist_sub_voidcaller_path_3_6': [18,28],
        'tk3_occultist_sub_voidcaller_path_3_7': [19,29],
        'tk3_occultist_sub_voidcaller_path_3_8': [20,30],
        'tk3_occultist_sub_voidcaller_path_3_9': [22,29],
        'tk3_occultist_sub_voidcaller_synergy_1': [25,32],
        'tk3_occultist_sub_voidcaller_synergy_2': [22,30],
        'tk3_occultist_subclass_gate': [23,39],
        'tk3_origin': [60,60],
        'tk3_prof_alchemy_b1_1': [52,44],
        'tk3_prof_alchemy_b1_2': [51,45],
        'tk3_prof_alchemy_b1_3': [50,46],
        'tk3_prof_alchemy_b1_4': [51,47],
        'tk3_prof_alchemy_b1_5': [52,48],
        'tk3_prof_alchemy_b1_6': [53,48],
        'tk3_prof_alchemy_b1_7': [53,47],
        'tk3_prof_alchemy_b1_8': [52,46],
        'tk3_prof_alchemy_b2_1': [53,43],
        'tk3_prof_alchemy_b2_2': [53,42],
        'tk3_prof_alchemy_b2_3': [53,40],
        'tk3_prof_alchemy_b2_4': [53,39],
        'tk3_prof_alchemy_b2_5': [54,38],
        'tk3_prof_alchemy_b2_6': [55,37],
        'tk3_prof_alchemy_b2_7': [56,38],
        'tk3_prof_alchemy_b2_8': [57,39],
        'tk3_prof_alchemy_b3_1': [55,40],
        'tk3_prof_alchemy_b3_2': [56,40],
        'tk3_prof_alchemy_b3_3': [57,41],
        'tk3_prof_alchemy_b3_4': [58,42],
        'tk3_prof_alchemy_b3_5': [58,43],
        'tk3_prof_alchemy_b3_6': [58,44],
        'tk3_prof_alchemy_b3_7': [57,45],
        'tk3_prof_alchemy_b3_8': [56,45],
        'tk3_prof_alchemy_focus_1': [52,45],
        'tk3_prof_alchemy_focus_2': [53,45],
        'tk3_prof_alchemy_focus_3': [55,39],
        'tk3_prof_alchemy_focus_4': [58,38],
        'tk3_prof_alchemy_focus_5': [55,47],
        'tk3_prof_alchemy_focus_6': [56,46],
        'tk3_prof_alchemy_master': [52,39],
        'tk3_prof_alchemy_root': [54,44],
        'tk3_prof_crafting_b1_1': [43,54],
        'tk3_prof_crafting_b1_2': [43,56],
        'tk3_prof_crafting_b1_3': [43,57],
        'tk3_prof_crafting_b1_4': [45,58],
        'tk3_prof_crafting_b1_5': [46,57],
        'tk3_prof_crafting_b1_6': [47,56],
        'tk3_prof_crafting_b1_7': [46,56],
        'tk3_prof_crafting_b1_8': [45,56],
        'tk3_prof_crafting_b2_1': [43,53],
        'tk3_prof_crafting_b2_2': [42,52],
        'tk3_prof_crafting_b2_3': [41,51],
        'tk3_prof_crafting_b2_4': [40,50],
        'tk3_prof_crafting_b2_5': [40,49],
        'tk3_prof_crafting_b2_6': [40,48],
        'tk3_prof_crafting_b2_7': [41,47],
        'tk3_prof_crafting_b2_8': [43,47],
        'tk3_prof_crafting_b3_1': [42,50],
        'tk3_prof_crafting_b3_2': [43,49],
        'tk3_prof_crafting_b3_3': [44,48],
        'tk3_prof_crafting_b3_4': [46,48],
        'tk3_prof_crafting_b3_5': [47,49],
        'tk3_prof_crafting_b3_6': [48,50],
        'tk3_prof_crafting_b3_7': [47,52],
        'tk3_prof_crafting_b3_8': [46,53],
        'tk3_prof_crafting_focus_1': [44,56],
        'tk3_prof_crafting_focus_2': [45,55],
        'tk3_prof_crafting_focus_3': [42,48],
        'tk3_prof_crafting_focus_4': [43,46],
        'tk3_prof_crafting_focus_5': [47,54],
        'tk3_prof_crafting_focus_6': [48,53],
        'tk3_prof_crafting_master': [39,51],
        'tk3_prof_crafting_root': [44,54],
        'tk3_prof_exploration_b1_1': [68,76],
        'tk3_prof_exploration_b1_2': [69,75],
        'tk3_prof_exploration_b1_3': [70,74],
        'tk3_prof_exploration_b1_4': [69,73],
        'tk3_prof_exploration_b1_5': [68,72],
        'tk3_prof_exploration_b1_6': [67,72],
        'tk3_prof_exploration_b1_7': [67,73],
        'tk3_prof_exploration_b1_8': [68,74],
        'tk3_prof_exploration_b2_1': [67,77],
        'tk3_prof_exploration_b2_2': [67,78],
        'tk3_prof_exploration_b2_3': [67,80],
        'tk3_prof_exploration_b2_4': [67,81],
        'tk3_prof_exploration_b2_5': [66,82],
        'tk3_prof_exploration_b2_6': [65,83],
        'tk3_prof_exploration_b2_7': [64,82],
        'tk3_prof_exploration_b2_8': [63,81],
        'tk3_prof_exploration_b3_1': [65,80],
        'tk3_prof_exploration_b3_2': [64,80],
        'tk3_prof_exploration_b3_3': [63,79],
        'tk3_prof_exploration_b3_4': [62,78],
        'tk3_prof_exploration_b3_5': [62,77],
        'tk3_prof_exploration_b3_6': [62,76],
        'tk3_prof_exploration_b3_7': [63,75],
        'tk3_prof_exploration_b3_8': [64,75],
        'tk3_prof_exploration_focus_1': [68,75],
        'tk3_prof_exploration_focus_2': [67,75],
        'tk3_prof_exploration_focus_3': [65,81],
        'tk3_prof_exploration_focus_4': [62,82],
        'tk3_prof_exploration_focus_5': [65,73],
        'tk3_prof_exploration_focus_6': [64,74],
        'tk3_prof_exploration_master': [68,81],
        'tk3_prof_exploration_root': [66,76],
        'tk3_prof_farming_b1_1': [44,68],
        'tk3_prof_farming_b1_2': [45,69],
        'tk3_prof_farming_b1_3': [46,70],
        'tk3_prof_farming_b1_4': [47,69],
        'tk3_prof_farming_b1_5': [48,68],
        'tk3_prof_farming_b1_6': [48,67],
        'tk3_prof_farming_b1_7': [47,67],
        'tk3_prof_farming_b1_8': [46,68],
        'tk3_prof_farming_b2_1': [43,67],
        'tk3_prof_farming_b2_2': [42,67],
        'tk3_prof_farming_b2_3': [40,67],
        'tk3_prof_farming_b2_4': [39,67],
        'tk3_prof_farming_b2_5': [38,66],
        'tk3_prof_farming_b2_6': [37,65],
        'tk3_prof_farming_b2_7': [38,64],
        'tk3_prof_farming_b2_8': [39,63],
        'tk3_prof_farming_b3_1': [40,65],
        'tk3_prof_farming_b3_2': [40,64],
        'tk3_prof_farming_b3_3': [41,63],
        'tk3_prof_farming_b3_4': [42,62],
        'tk3_prof_farming_b3_5': [43,62],
        'tk3_prof_farming_b3_6': [44,62],
        'tk3_prof_farming_b3_7': [45,63],
        'tk3_prof_farming_b3_8': [45,64],
        'tk3_prof_farming_focus_1': [45,68],
        'tk3_prof_farming_focus_2': [45,67],
        'tk3_prof_farming_focus_3': [39,65],
        'tk3_prof_farming_focus_4': [38,62],
        'tk3_prof_farming_focus_5': [47,65],
        'tk3_prof_farming_focus_6': [46,64],
        'tk3_prof_farming_master': [39,68],
        'tk3_prof_farming_root': [44,66],
        'tk3_prof_fishing_b1_1': [54,77],
        'tk3_prof_fishing_b1_2': [56,77],
        'tk3_prof_fishing_b1_3': [57,77],
        'tk3_prof_fishing_b1_4': [58,75],
        'tk3_prof_fishing_b1_5': [57,74],
        'tk3_prof_fishing_b1_6': [56,73],
        'tk3_prof_fishing_b1_7': [56,74],
        'tk3_prof_fishing_b1_8': [56,75],
        'tk3_prof_fishing_b2_1': [53,77],
        'tk3_prof_fishing_b2_2': [52,78],
        'tk3_prof_fishing_b2_3': [51,79],
        'tk3_prof_fishing_b2_4': [50,80],
        'tk3_prof_fishing_b2_5': [49,80],
        'tk3_prof_fishing_b2_6': [48,80],
        'tk3_prof_fishing_b2_7': [47,79],
        'tk3_prof_fishing_b2_8': [47,77],
        'tk3_prof_fishing_b3_1': [50,78],
        'tk3_prof_fishing_b3_2': [49,77],
        'tk3_prof_fishing_b3_3': [48,76],
        'tk3_prof_fishing_b3_4': [48,74],
        'tk3_prof_fishing_b3_5': [49,73],
        'tk3_prof_fishing_b3_6': [50,72],
        'tk3_prof_fishing_b3_7': [52,73],
        'tk3_prof_fishing_b3_8': [53,74],
        'tk3_prof_fishing_focus_1': [56,76],
        'tk3_prof_fishing_focus_2': [55,75],
        'tk3_prof_fishing_focus_3': [48,78],
        'tk3_prof_fishing_focus_4': [46,77],
        'tk3_prof_fishing_focus_5': [54,73],
        'tk3_prof_fishing_focus_6': [53,72],
        'tk3_prof_fishing_master': [51,81],
        'tk3_prof_fishing_root': [54,76],
        'tk3_prof_gate_alchemy': [55,49],
        'tk3_prof_gate_crafting': [48,55],
        'tk3_prof_gate_exploration': [65,71],
        'tk3_prof_gate_farming': [49,65],
        'tk3_prof_gate_fishing': [55,72],
        'tk3_prof_gate_hunting': [72,65],
        'tk3_prof_gate_logging': [71,55],
        'tk3_prof_gate_mining': [65,48],
        'tk3_prof_hunting_b1_1': [77,66],
        'tk3_prof_hunting_b1_2': [77,64],
        'tk3_prof_hunting_b1_3': [77,63],
        'tk3_prof_hunting_b1_4': [75,62],
        'tk3_prof_hunting_b1_5': [74,63],
        'tk3_prof_hunting_b1_6': [73,64],
        'tk3_prof_hunting_b1_7': [74,64],
        'tk3_prof_hunting_b1_8': [75,64],
        'tk3_prof_hunting_b2_1': [77,67],
        'tk3_prof_hunting_b2_2': [78,68],
        'tk3_prof_hunting_b2_3': [79,69],
        'tk3_prof_hunting_b2_4': [80,70],
        'tk3_prof_hunting_b2_5': [80,71],
        'tk3_prof_hunting_b2_6': [80,72],
        'tk3_prof_hunting_b2_7': [79,73],
        'tk3_prof_hunting_b2_8': [77,73],
        'tk3_prof_hunting_b3_1': [78,70],
        'tk3_prof_hunting_b3_2': [77,71],
        'tk3_prof_hunting_b3_3': [76,72],
        'tk3_prof_hunting_b3_4': [74,72],
        'tk3_prof_hunting_b3_5': [73,71],
        'tk3_prof_hunting_b3_6': [72,70],
        'tk3_prof_hunting_b3_7': [73,68],
        'tk3_prof_hunting_b3_8': [74,67],
        'tk3_prof_hunting_focus_1': [76,64],
        'tk3_prof_hunting_focus_2': [75,65],
        'tk3_prof_hunting_focus_3': [78,72],
        'tk3_prof_hunting_focus_4': [77,74],
        'tk3_prof_hunting_focus_5': [73,66],
        'tk3_prof_hunting_focus_6': [72,67],
        'tk3_prof_hunting_master': [81,69],
        'tk3_prof_hunting_root': [76,66],
        'tk3_prof_logging_b1_1': [76,52],
        'tk3_prof_logging_b1_2': [75,51],
        'tk3_prof_logging_b1_3': [74,50],
        'tk3_prof_logging_b1_4': [73,51],
        'tk3_prof_logging_b1_5': [72,52],
        'tk3_prof_logging_b1_6': [72,53],
        'tk3_prof_logging_b1_7': [73,53],
        'tk3_prof_logging_b1_8': [74,52],
        'tk3_prof_logging_b2_1': [77,53],
        'tk3_prof_logging_b2_2': [78,53],
        'tk3_prof_logging_b2_3': [80,53],
        'tk3_prof_logging_b2_4': [81,53],
        'tk3_prof_logging_b2_5': [82,54],
        'tk3_prof_logging_b2_6': [83,55],
        'tk3_prof_logging_b2_7': [82,56],
        'tk3_prof_logging_b2_8': [81,57],
        'tk3_prof_logging_b3_1': [80,55],
        'tk3_prof_logging_b3_2': [80,56],
        'tk3_prof_logging_b3_3': [79,57],
        'tk3_prof_logging_b3_4': [78,58],
        'tk3_prof_logging_b3_5': [77,58],
        'tk3_prof_logging_b3_6': [76,58],
        'tk3_prof_logging_b3_7': [75,57],
        'tk3_prof_logging_b3_8': [75,56],
        'tk3_prof_logging_focus_1': [75,52],
        'tk3_prof_logging_focus_2': [75,53],
        'tk3_prof_logging_focus_3': [81,55],
        'tk3_prof_logging_focus_4': [82,58],
        'tk3_prof_logging_focus_5': [73,55],
        'tk3_prof_logging_focus_6': [74,56],
        'tk3_prof_logging_master': [81,52],
        'tk3_prof_logging_root': [76,54],
        'tk3_prof_mining_b1_1': [66,43],
        'tk3_prof_mining_b1_2': [64,43],
        'tk3_prof_mining_b1_3': [63,43],
        'tk3_prof_mining_b1_4': [62,45],
        'tk3_prof_mining_b1_5': [63,46],
        'tk3_prof_mining_b1_6': [64,47],
        'tk3_prof_mining_b1_7': [64,46],
        'tk3_prof_mining_b1_8': [64,45],
        'tk3_prof_mining_b2_1': [67,43],
        'tk3_prof_mining_b2_2': [68,42],
        'tk3_prof_mining_b2_3': [69,41],
        'tk3_prof_mining_b2_4': [70,40],
        'tk3_prof_mining_b2_5': [71,40],
        'tk3_prof_mining_b2_6': [72,40],
        'tk3_prof_mining_b2_7': [73,41],
        'tk3_prof_mining_b2_8': [73,43],
        'tk3_prof_mining_b3_1': [70,42],
        'tk3_prof_mining_b3_2': [71,43],
        'tk3_prof_mining_b3_3': [72,44],
        'tk3_prof_mining_b3_4': [72,46],
        'tk3_prof_mining_b3_5': [71,47],
        'tk3_prof_mining_b3_6': [70,48],
        'tk3_prof_mining_b3_7': [68,47],
        'tk3_prof_mining_b3_8': [67,46],
        'tk3_prof_mining_focus_1': [64,44],
        'tk3_prof_mining_focus_2': [65,45],
        'tk3_prof_mining_focus_3': [72,42],
        'tk3_prof_mining_focus_4': [74,43],
        'tk3_prof_mining_focus_5': [66,47],
        'tk3_prof_mining_focus_6': [67,48],
        'tk3_prof_mining_master': [69,39],
        'tk3_prof_mining_root': [66,44],
        'tk3_ranger_class_mastery': [90,44],
        'tk3_ranger_core_advanced_1_1': [90,42],
        'tk3_ranger_core_advanced_1_2': [89,41],
        'tk3_ranger_core_advanced_1_3': [88,40],
        'tk3_ranger_core_advanced_1_4': [88,38],
        'tk3_ranger_core_advanced_1_5': [88,37],
        'tk3_ranger_core_advanced_1_6': [88,36],
        'tk3_ranger_core_advanced_1_7': [90,35],
        'tk3_ranger_core_advanced_1_8': [91,35],
        'tk3_ranger_core_advanced_2_1': [91,41],
        'tk3_ranger_core_advanced_2_2': [90,40],
        'tk3_ranger_core_advanced_2_3': [90,38],
        'tk3_ranger_core_advanced_2_4': [90,37],
        'tk3_ranger_core_advanced_2_5': [91,36],
        'tk3_ranger_core_advanced_2_6': [92,36],
        'tk3_ranger_core_advanced_2_7': [93,37],
        'tk3_ranger_core_advanced_2_8': [93,39],
        'tk3_ranger_core_advanced_3_1': [91,43],
        'tk3_ranger_core_advanced_3_2': [92,42],
        'tk3_ranger_core_advanced_3_3': [93,41],
        'tk3_ranger_core_advanced_3_4': [94,40],
        'tk3_ranger_core_advanced_3_5': [95,40],
        'tk3_ranger_core_advanced_3_6': [97,41],
        'tk3_ranger_core_advanced_3_7': [98,41],
        'tk3_ranger_core_advanced_3_8': [98,40],
        'tk3_ranger_core_advanced_4_1': [94,42],
        'tk3_ranger_core_advanced_4_2': [94,43],
        'tk3_ranger_core_advanced_4_3': [95,45],
        'tk3_ranger_core_advanced_4_4': [94,46],
        'tk3_ranger_core_advanced_4_5': [93,47],
        'tk3_ranger_core_advanced_4_6': [92,48],
        'tk3_ranger_core_advanced_4_7': [92,49],
        'tk3_ranger_core_advanced_4_8': [93,50],
        'tk3_ranger_core_advanced_5_1': [94,41],
        'tk3_ranger_core_advanced_5_2': [95,42],
        'tk3_ranger_core_advanced_5_3': [95,43],
        'tk3_ranger_core_advanced_5_4': [97,44],
        'tk3_ranger_core_advanced_5_5': [98,44],
        'tk3_ranger_core_advanced_5_6': [99,44],
        'tk3_ranger_core_advanced_5_7': [100,42],
        'tk3_ranger_core_advanced_5_8': [99,41],
        'tk3_ranger_core_inner_1_1': [83,45],
        'tk3_ranger_core_inner_1_2': [83,43],
        'tk3_ranger_core_inner_1_3': [82,42],
        'tk3_ranger_core_inner_1_4': [80,42],
        'tk3_ranger_core_inner_1_5': [79,42],
        'tk3_ranger_core_inner_2_1': [84,44],
        'tk3_ranger_core_inner_2_2': [84,43],
        'tk3_ranger_core_inner_2_3': [84,42],
        'tk3_ranger_core_inner_2_4': [85,41],
        'tk3_ranger_core_inner_2_5': [87,41],
        'tk3_ranger_core_inner_3_1': [84,46],
        'tk3_ranger_core_inner_3_2': [85,46],
        'tk3_ranger_core_inner_3_3': [86,46],
        'tk3_ranger_core_inner_3_4': [88,45],
        'tk3_ranger_core_inner_3_5': [89,45],
        'tk3_ranger_core_inner_4_1': [87,47],
        'tk3_ranger_core_inner_4_2': [87,48],
        'tk3_ranger_core_inner_4_3': [87,50],
        'tk3_ranger_core_inner_4_4': [86,51],
        'tk3_ranger_core_inner_4_5': [85,51],
        'tk3_ranger_core_inner_5_1': [89,47],
        'tk3_ranger_core_inner_5_2': [90,47],
        'tk3_ranger_core_inner_5_3': [91,47],
        'tk3_ranger_core_inner_5_4': [92,46],
        'tk3_ranger_core_inner_5_5': [93,45],
        'tk3_ranger_path': [78,42],
        'tk3_ranger_root': [82,47],
        'tk3_ranger_sub_beastmaster': [106,45],
        'tk3_ranger_sub_beastmaster_ascendancy': [114,53],
        'tk3_ranger_sub_beastmaster_path_1_1': [107,47],
        'tk3_ranger_sub_beastmaster_path_1_10': [99,45],
        'tk3_ranger_sub_beastmaster_path_1_11': [98,46],
        'tk3_ranger_sub_beastmaster_path_1_12': [98,47],
        'tk3_ranger_sub_beastmaster_path_1_13': [99,49],
        'tk3_ranger_sub_beastmaster_path_1_14': [100,50],
        'tk3_ranger_sub_beastmaster_path_1_15': [101,50],
        'tk3_ranger_sub_beastmaster_path_1_16': [102,50],
        'tk3_ranger_sub_beastmaster_path_1_2': [107,48],
        'tk3_ranger_sub_beastmaster_path_1_3': [105,49],
        'tk3_ranger_sub_beastmaster_path_1_4': [104,49],
        'tk3_ranger_sub_beastmaster_path_1_5': [103,49],
        'tk3_ranger_sub_beastmaster_path_1_6': [102,48],
        'tk3_ranger_sub_beastmaster_path_1_7': [101,47],
        'tk3_ranger_sub_beastmaster_path_1_8': [102,45],
        'tk3_ranger_sub_beastmaster_path_1_9': [101,45],
        'tk3_ranger_sub_beastmaster_path_2_1': [107,45],
        'tk3_ranger_sub_beastmaster_path_2_10': [116,50],
        'tk3_ranger_sub_beastmaster_path_2_11': [117,49],
        'tk3_ranger_sub_beastmaster_path_2_12': [117,47],
        'tk3_ranger_sub_beastmaster_path_2_13': [116,46],
        'tk3_ranger_sub_beastmaster_path_2_14': [114,46],
        'tk3_ranger_sub_beastmaster_path_2_15': [113,46],
        'tk3_ranger_sub_beastmaster_path_2_16': [112,46],
        'tk3_ranger_sub_beastmaster_path_2_2': [108,46],
        'tk3_ranger_sub_beastmaster_path_2_3': [109,46],
        'tk3_ranger_sub_beastmaster_path_2_4': [111,46],
        'tk3_ranger_sub_beastmaster_path_2_5': [112,47],
        'tk3_ranger_sub_beastmaster_path_2_6': [112,49],
        'tk3_ranger_sub_beastmaster_path_2_7': [113,50],
        'tk3_ranger_sub_beastmaster_path_2_8': [114,51],
        'tk3_ranger_sub_beastmaster_path_2_9': [115,51],
        'tk3_ranger_sub_beastmaster_path_3_1': [111,45],
        'tk3_ranger_sub_beastmaster_path_3_10': [105,43],
        'tk3_ranger_sub_beastmaster_path_3_11': [106,44],
        'tk3_ranger_sub_beastmaster_path_3_12': [108,44],
        'tk3_ranger_sub_beastmaster_path_3_13': [109,43],
        'tk3_ranger_sub_beastmaster_path_3_14': [109,42],
        'tk3_ranger_sub_beastmaster_path_3_15': [108,41],
        'tk3_ranger_sub_beastmaster_path_3_16': [107,41],
        'tk3_ranger_sub_beastmaster_path_3_2': [112,44],
        'tk3_ranger_sub_beastmaster_path_3_3': [112,42],
        'tk3_ranger_sub_beastmaster_path_3_4': [111,41],
        'tk3_ranger_sub_beastmaster_path_3_5': [110,40],
        'tk3_ranger_sub_beastmaster_path_3_6': [109,40],
        'tk3_ranger_sub_beastmaster_path_3_7': [107,40],
        'tk3_ranger_sub_beastmaster_path_3_8': [106,41],
        'tk3_ranger_sub_beastmaster_path_3_9': [106,42],
        'tk3_ranger_sub_beastmaster_synergy_1': [101,44],
        'tk3_ranger_sub_beastmaster_synergy_2': [105,42],
        'tk3_ranger_sub_hunter': [102,36],
        'tk3_ranger_sub_hunter_ascendancy': [108,30],
        'tk3_ranger_sub_hunter_path_1_1': [104,34],
        'tk3_ranger_sub_hunter_path_1_10': [98,35],
        'tk3_ranger_sub_hunter_path_1_11': [97,34],
        'tk3_ranger_sub_hunter_path_1_12': [97,33],
        'tk3_ranger_sub_hunter_path_1_13': [98,33],
        'tk3_ranger_sub_hunter_path_1_14': [98,32],
        'tk3_ranger_sub_hunter_path_1_15': [99,32],
        'tk3_ranger_sub_hunter_path_1_16': [100,32],
        'tk3_ranger_sub_hunter_path_1_2': [103,33],
        'tk3_ranger_sub_hunter_path_1_3': [103,32],
        'tk3_ranger_sub_hunter_path_1_4': [102,32],
        'tk3_ranger_sub_hunter_path_1_5': [101,33],
        'tk3_ranger_sub_hunter_path_1_6': [100,33],
        'tk3_ranger_sub_hunter_path_1_7': [100,34],
        'tk3_ranger_sub_hunter_path_1_8': [100,35],
        'tk3_ranger_sub_hunter_path_1_9': [99,35],
        'tk3_ranger_sub_hunter_path_2_1': [103,35],
        'tk3_ranger_sub_hunter_path_2_10': [110,32],
        'tk3_ranger_sub_hunter_path_2_11': [111,33],
        'tk3_ranger_sub_hunter_path_2_12': [110,34],
        'tk3_ranger_sub_hunter_path_2_13': [110,35],
        'tk3_ranger_sub_hunter_path_2_14': [109,35],
        'tk3_ranger_sub_hunter_path_2_15': [108,35],
        'tk3_ranger_sub_hunter_path_2_16': [107,35],
        'tk3_ranger_sub_hunter_path_2_2': [104,35],
        'tk3_ranger_sub_hunter_path_2_3': [105,35],
        'tk3_ranger_sub_hunter_path_2_4': [106,35],
        'tk3_ranger_sub_hunter_path_2_5': [107,34],
        'tk3_ranger_sub_hunter_path_2_6': [107,33],
        'tk3_ranger_sub_hunter_path_2_7': [108,32],
        'tk3_ranger_sub_hunter_path_2_8': [108,31],
        'tk3_ranger_sub_hunter_path_2_9': [109,32],
        'tk3_ranger_sub_hunter_path_3_1': [106,36],
        'tk3_ranger_sub_hunter_path_3_10': [101,40],
        'tk3_ranger_sub_hunter_path_3_11': [101,41],
        'tk3_ranger_sub_hunter_path_3_12': [102,41],
        'tk3_ranger_sub_hunter_path_3_13': [103,42],
        'tk3_ranger_sub_hunter_path_3_14': [104,41],
        'tk3_ranger_sub_hunter_path_3_15': [105,41],
        'tk3_ranger_sub_hunter_path_3_16': [105,40],
        'tk3_ranger_sub_hunter_path_3_2': [107,37],
        'tk3_ranger_sub_hunter_path_3_3': [107,38],
        'tk3_ranger_sub_hunter_path_3_4': [106,38],
        'tk3_ranger_sub_hunter_path_3_5': [105,39],
        'tk3_ranger_sub_hunter_path_3_6': [104,39],
        'tk3_ranger_sub_hunter_path_3_7': [103,39],
        'tk3_ranger_sub_hunter_path_3_8': [103,38],
        'tk3_ranger_sub_hunter_path_3_9': [102,39],
        'tk3_ranger_sub_hunter_synergy_1': [100,36],
        'tk3_ranger_sub_hunter_synergy_2': [102,38],
        'tk3_ranger_sub_marksman': [96,28],
        'tk3_ranger_sub_marksman_ascendancy': [93,17],
        'tk3_ranger_sub_marksman_path_1_1': [95,26],
        'tk3_ranger_sub_marksman_path_1_10': [93,34],
        'tk3_ranger_sub_marksman_path_1_11': [91,34],
        'tk3_ranger_sub_marksman_path_1_12': [90,33],
        'tk3_ranger_sub_marksman_path_1_13': [89,32],
        'tk3_ranger_sub_marksman_path_1_14': [89,31],
        'tk3_ranger_sub_marksman_path_1_15': [89,29],
        'tk3_ranger_sub_marksman_path_1_16': [90,28],
        'tk3_ranger_sub_marksman_path_1_2': [93,26],
        'tk3_ranger_sub_marksman_path_1_3': [92,26],
        'tk3_ranger_sub_marksman_path_1_4': [91,27],
        'tk3_ranger_sub_marksman_path_1_5': [91,28],
        'tk3_ranger_sub_marksman_path_1_6': [91,30],
        'tk3_ranger_sub_marksman_path_1_7': [92,31],
        'tk3_ranger_sub_marksman_path_1_8': [94,31],
        'tk3_ranger_sub_marksman_path_1_9': [94,33],
        'tk3_ranger_sub_marksman_path_2_1': [96,27],
        'tk3_ranger_sub_marksman_path_2_10': [97,16],
        'tk3_ranger_sub_marksman_path_2_11': [98,16],
        'tk3_ranger_sub_marksman_path_2_12': [99,17],
        'tk3_ranger_sub_marksman_path_2_13': [100,19],
        'tk3_ranger_sub_marksman_path_2_14': [99,20],
        'tk3_ranger_sub_marksman_path_2_15': [99,21],
        'tk3_ranger_sub_marksman_path_2_16': [98,22],
        'tk3_ranger_sub_marksman_path_2_2': [96,26],
        'tk3_ranger_sub_marksman_path_2_3': [97,24],
        'tk3_ranger_sub_marksman_path_2_4': [97,23],
        'tk3_ranger_sub_marksman_path_2_5': [97,22],
        'tk3_ranger_sub_marksman_path_2_6': [96,20],
        'tk3_ranger_sub_marksman_path_2_7': [95,19],
        'tk3_ranger_sub_marksman_path_2_8': [95,18],
        'tk3_ranger_sub_marksman_path_2_9': [96,17],
        'tk3_ranger_sub_marksman_path_3_1': [99,23],
        'tk3_ranger_sub_marksman_path_3_10': [101,32],
        'tk3_ranger_sub_marksman_path_3_11': [102,31],
        'tk3_ranger_sub_marksman_path_3_12': [104,32],
        'tk3_ranger_sub_marksman_path_3_13': [104,31],
        'tk3_ranger_sub_marksman_path_3_14': [105,30],
        'tk3_ranger_sub_marksman_path_3_15': [104,28],
        'tk3_ranger_sub_marksman_path_3_16': [104,27],
        'tk3_ranger_sub_marksman_path_3_2': [100,23],
        'tk3_ranger_sub_marksman_path_3_3': [101,24],
        'tk3_ranger_sub_marksman_path_3_4': [102,25],
        'tk3_ranger_sub_marksman_path_3_5': [102,27],
        'tk3_ranger_sub_marksman_path_3_6': [102,28],
        'tk3_ranger_sub_marksman_path_3_7': [101,29],
        'tk3_ranger_sub_marksman_path_3_8': [100,30],
        'tk3_ranger_sub_marksman_path_3_9': [100,31],
        'tk3_ranger_sub_marksman_synergy_1': [95,32],
        'tk3_ranger_sub_marksman_synergy_2': [98,30],
        'tk3_ranger_subclass_gate': [97,39],
        'tk3_rogue_class_mastery': [89,78],
        'tk3_rogue_core_advanced_1_1': [91,77],
        'tk3_rogue_core_advanced_1_2': [91,76],
        'tk3_rogue_core_advanced_1_3': [92,75],
        'tk3_rogue_core_advanced_1_4': [93,73],
        'tk3_rogue_core_advanced_1_5': [94,73],
        'tk3_rogue_core_advanced_1_6': [95,73],
        'tk3_rogue_core_advanced_1_7': [96,73],
        'tk3_rogue_core_advanced_1_8': [97,74],
        'tk3_rogue_core_advanced_2_1': [92,77],
        'tk3_rogue_core_advanced_2_2': [93,76],
        'tk3_rogue_core_advanced_2_3': [94,75],
        'tk3_rogue_core_advanced_2_4': [95,75],
        'tk3_rogue_core_advanced_2_5': [96,75],
        'tk3_rogue_core_advanced_2_6': [97,76],
        'tk3_rogue_core_advanced_2_7': [96,78],
        'tk3_rogue_core_advanced_2_8': [95,78],
        'tk3_rogue_core_advanced_3_1': [90,79],
        'tk3_rogue_core_advanced_3_2': [92,79],
        'tk3_rogue_core_advanced_3_3': [93,79],
        'tk3_rogue_core_advanced_3_4': [95,79],
        'tk3_rogue_core_advanced_3_5': [95,81],
        'tk3_rogue_core_advanced_3_6': [95,82],
        'tk3_rogue_core_advanced_3_7': [96,83],
        'tk3_rogue_core_advanced_3_8': [96,82],
        'tk3_rogue_core_advanced_4_1': [93,80],
        'tk3_rogue_core_advanced_4_2': [92,81],
        'tk3_rogue_core_advanced_4_3': [91,82],
        'tk3_rogue_core_advanced_4_4': [89,82],
        'tk3_rogue_core_advanced_4_5': [88,82],
        'tk3_rogue_core_advanced_4_6': [87,82],
        'tk3_rogue_core_advanced_4_7': [85,82],
        'tk3_rogue_core_advanced_4_8': [85,84],
        'tk3_rogue_core_advanced_5_1': [94,80],
        'tk3_rogue_core_advanced_5_2': [93,81],
        'tk3_rogue_core_advanced_5_3': [92,82],
        'tk3_rogue_core_advanced_5_4': [92,84],
        'tk3_rogue_core_advanced_5_5': [93,85],
        'tk3_rogue_core_advanced_5_6': [94,86],
        'tk3_rogue_core_advanced_5_7': [95,86],
        'tk3_rogue_core_advanced_5_8': [96,85],
        'tk3_rogue_core_inner_1_1': [85,73],
        'tk3_rogue_core_inner_1_2': [86,72],
        'tk3_rogue_core_inner_1_3': [86,70],
        'tk3_rogue_core_inner_1_4': [86,69],
        'tk3_rogue_core_inner_1_5': [85,68],
        'tk3_rogue_core_inner_2_1': [86,73],
        'tk3_rogue_core_inner_2_2': [87,72],
        'tk3_rogue_core_inner_2_3': [88,72],
        'tk3_rogue_core_inner_2_4': [89,72],
        'tk3_rogue_core_inner_2_5': [90,73],
        'tk3_rogue_core_inner_3_1': [84,74],
        'tk3_rogue_core_inner_3_2': [85,75],
        'tk3_rogue_core_inner_3_3': [85,76],
        'tk3_rogue_core_inner_3_4': [87,77],
        'tk3_rogue_core_inner_3_5': [88,77],
        'tk3_rogue_core_inner_4_1': [85,77],
        'tk3_rogue_core_inner_4_2': [84,78],
        'tk3_rogue_core_inner_4_3': [82,78],
        'tk3_rogue_core_inner_4_4': [81,78],
        'tk3_rogue_core_inner_4_5': [80,77],
        'tk3_rogue_core_inner_5_1': [86,78],
        'tk3_rogue_core_inner_5_2': [86,80],
        'tk3_rogue_core_inner_5_3': [87,81],
        'tk3_rogue_core_inner_5_4': [88,81],
        'tk3_rogue_core_inner_5_5': [90,81],
        'tk3_rogue_path': [78,78],
        'tk3_rogue_root': [82,73],
        'tk3_rogue_sub_assassin': [106,75],
        'tk3_rogue_sub_assassin_ascendancy': [114,67],
        'tk3_rogue_sub_assassin_path_1_1': [107,73],
        'tk3_rogue_sub_assassin_path_1_10': [99,75],
        'tk3_rogue_sub_assassin_path_1_11': [98,74],
        'tk3_rogue_sub_assassin_path_1_12': [98,73],
        'tk3_rogue_sub_assassin_path_1_13': [99,71],
        'tk3_rogue_sub_assassin_path_1_14': [100,70],
        'tk3_rogue_sub_assassin_path_1_15': [101,70],
        'tk3_rogue_sub_assassin_path_1_16': [102,70],
        'tk3_rogue_sub_assassin_path_1_2': [107,72],
        'tk3_rogue_sub_assassin_path_1_3': [105,71],
        'tk3_rogue_sub_assassin_path_1_4': [104,71],
        'tk3_rogue_sub_assassin_path_1_5': [103,71],
        'tk3_rogue_sub_assassin_path_1_6': [102,72],
        'tk3_rogue_sub_assassin_path_1_7': [101,73],
        'tk3_rogue_sub_assassin_path_1_8': [102,75],
        'tk3_rogue_sub_assassin_path_1_9': [101,75],
        'tk3_rogue_sub_assassin_path_2_1': [107,75],
        'tk3_rogue_sub_assassin_path_2_10': [116,70],
        'tk3_rogue_sub_assassin_path_2_11': [117,71],
        'tk3_rogue_sub_assassin_path_2_12': [117,73],
        'tk3_rogue_sub_assassin_path_2_13': [116,74],
        'tk3_rogue_sub_assassin_path_2_14': [114,74],
        'tk3_rogue_sub_assassin_path_2_15': [113,74],
        'tk3_rogue_sub_assassin_path_2_16': [112,74],
        'tk3_rogue_sub_assassin_path_2_2': [108,74],
        'tk3_rogue_sub_assassin_path_2_3': [109,74],
        'tk3_rogue_sub_assassin_path_2_4': [111,74],
        'tk3_rogue_sub_assassin_path_2_5': [112,73],
        'tk3_rogue_sub_assassin_path_2_6': [112,71],
        'tk3_rogue_sub_assassin_path_2_7': [113,70],
        'tk3_rogue_sub_assassin_path_2_8': [114,69],
        'tk3_rogue_sub_assassin_path_2_9': [115,69],
        'tk3_rogue_sub_assassin_path_3_1': [111,75],
        'tk3_rogue_sub_assassin_path_3_10': [106,82],
        'tk3_rogue_sub_assassin_path_3_11': [106,83],
        'tk3_rogue_sub_assassin_path_3_12': [106,84],
        'tk3_rogue_sub_assassin_path_3_13': [107,84],
        'tk3_rogue_sub_assassin_path_3_14': [109,83],
        'tk3_rogue_sub_assassin_path_3_15': [110,83],
        'tk3_rogue_sub_assassin_path_3_16': [110,81],
        'tk3_rogue_sub_assassin_path_3_2': [112,76],
        'tk3_rogue_sub_assassin_path_3_3': [112,78],
        'tk3_rogue_sub_assassin_path_3_4': [111,79],
        'tk3_rogue_sub_assassin_path_3_5': [110,80],
        'tk3_rogue_sub_assassin_path_3_6': [109,80],
        'tk3_rogue_sub_assassin_path_3_7': [107,80],
        'tk3_rogue_sub_assassin_path_3_8': [106,79],
        'tk3_rogue_sub_assassin_path_3_9': [105,80],
        'tk3_rogue_sub_assassin_synergy_1': [101,76],
        'tk3_rogue_sub_assassin_synergy_2': [105,78],
        'tk3_rogue_sub_duelist': [102,84],
        'tk3_rogue_sub_duelist_ascendancy': [110,87],
        'tk3_rogue_sub_duelist_path_1_1': [104,85],
        'tk3_rogue_sub_duelist_path_1_10': [100,81],
        'tk3_rogue_sub_duelist_path_1_11': [101,80],
        'tk3_rogue_sub_duelist_path_1_12': [102,79],
        'tk3_rogue_sub_duelist_path_1_13': [103,79],
        'tk3_rogue_sub_duelist_path_1_14': [104,79],
        'tk3_rogue_sub_duelist_path_1_15': [104,80],
        'tk3_rogue_sub_duelist_path_1_16': [105,81],
        'tk3_rogue_sub_duelist_path_1_2': [105,84],
        'tk3_rogue_sub_duelist_path_1_3': [105,83],
        'tk3_rogue_sub_duelist_path_1_4': [105,82],
        'tk3_rogue_sub_duelist_path_1_5': [104,82],
        'tk3_rogue_sub_duelist_path_1_6': [103,81],
        'tk3_rogue_sub_duelist_path_1_7': [102,81],
        'tk3_rogue_sub_duelist_path_1_8': [102,82],
        'tk3_rogue_sub_duelist_path_1_9': [101,81],
        'tk3_rogue_sub_duelist_path_2_1': [103,85],
        'tk3_rogue_sub_duelist_path_2_10': [109,90],
        'tk3_rogue_sub_duelist_path_2_11': [108,90],
        'tk3_rogue_sub_duelist_path_2_12': [107,91],
        'tk3_rogue_sub_duelist_path_2_13': [107,90],
        'tk3_rogue_sub_duelist_path_2_14': [106,90],
        'tk3_rogue_sub_duelist_path_2_15': [105,89],
        'tk3_rogue_sub_duelist_path_2_16': [105,88],
        'tk3_rogue_sub_duelist_path_2_2': [104,86],
        'tk3_rogue_sub_duelist_path_2_3': [104,87],
        'tk3_rogue_sub_duelist_path_2_4': [105,87],
        'tk3_rogue_sub_duelist_path_2_5': [106,88],
        'tk3_rogue_sub_duelist_path_2_6': [107,88],
        'tk3_rogue_sub_duelist_path_2_7': [108,88],
        'tk3_rogue_sub_duelist_path_2_8': [109,88],
        'tk3_rogue_sub_duelist_path_2_9': [109,89],
        'tk3_rogue_sub_duelist_path_3_1': [104,88],
        'tk3_rogue_sub_duelist_path_3_10': [98,86],
        'tk3_rogue_sub_duelist_path_3_11': [97,86],
        'tk3_rogue_sub_duelist_path_3_12': [97,87],
        'tk3_rogue_sub_duelist_path_3_13': [98,88],
        'tk3_rogue_sub_duelist_path_3_14': [98,89],
        'tk3_rogue_sub_duelist_path_3_15': [99,89],
        'tk3_rogue_sub_duelist_path_3_16': [100,89],
        'tk3_rogue_sub_duelist_path_3_2': [104,89],
        'tk3_rogue_sub_duelist_path_3_3': [103,89],
        'tk3_rogue_sub_duelist_path_3_4': [102,89],
        'tk3_rogue_sub_duelist_path_3_5': [101,89],
        'tk3_rogue_sub_duelist_path_3_6': [100,88],
        'tk3_rogue_sub_duelist_path_3_7': [100,87],
        'tk3_rogue_sub_duelist_path_3_8': [100,86],
        'tk3_rogue_sub_duelist_path_3_9': [99,86],
        'tk3_rogue_sub_duelist_synergy_1': [101,82],
        'tk3_rogue_sub_duelist_synergy_2': [100,85],
        'tk3_rogue_sub_shadowblade': [96,92],
        'tk3_rogue_sub_shadowblade_ascendancy': [93,103],
        'tk3_rogue_sub_shadowblade_path_1_1': [95,94],
        'tk3_rogue_sub_shadowblade_path_1_10': [93,86],
        'tk3_rogue_sub_shadowblade_path_1_11': [91,86],
        'tk3_rogue_sub_shadowblade_path_1_12': [90,87],
        'tk3_rogue_sub_shadowblade_path_1_13': [89,88],
        'tk3_rogue_sub_shadowblade_path_1_14': [89,89],
        'tk3_rogue_sub_shadowblade_path_1_15': [89,91],
        'tk3_rogue_sub_shadowblade_path_1_16': [90,92],
        'tk3_rogue_sub_shadowblade_path_1_2': [93,94],
        'tk3_rogue_sub_shadowblade_path_1_3': [92,94],
        'tk3_rogue_sub_shadowblade_path_1_4': [91,93],
        'tk3_rogue_sub_shadowblade_path_1_5': [91,92],
        'tk3_rogue_sub_shadowblade_path_1_6': [91,90],
        'tk3_rogue_sub_shadowblade_path_1_7': [92,89],
        'tk3_rogue_sub_shadowblade_path_1_8': [94,89],
        'tk3_rogue_sub_shadowblade_path_1_9': [94,87],
        'tk3_rogue_sub_shadowblade_path_2_1': [96,93],
        'tk3_rogue_sub_shadowblade_path_2_10': [97,104],
        'tk3_rogue_sub_shadowblade_path_2_11': [98,104],
        'tk3_rogue_sub_shadowblade_path_2_12': [99,103],
        'tk3_rogue_sub_shadowblade_path_2_13': [100,101],
        'tk3_rogue_sub_shadowblade_path_2_14': [99,100],
        'tk3_rogue_sub_shadowblade_path_2_15': [99,99],
        'tk3_rogue_sub_shadowblade_path_2_16': [98,98],
        'tk3_rogue_sub_shadowblade_path_2_2': [96,94],
        'tk3_rogue_sub_shadowblade_path_2_3': [97,96],
        'tk3_rogue_sub_shadowblade_path_2_4': [97,97],
        'tk3_rogue_sub_shadowblade_path_2_5': [97,98],
        'tk3_rogue_sub_shadowblade_path_2_6': [96,100],
        'tk3_rogue_sub_shadowblade_path_2_7': [95,101],
        'tk3_rogue_sub_shadowblade_path_2_8': [95,102],
        'tk3_rogue_sub_shadowblade_path_2_9': [96,103],
        'tk3_rogue_sub_shadowblade_path_3_1': [99,97],
        'tk3_rogue_sub_shadowblade_path_3_10': [97,91],
        'tk3_rogue_sub_shadowblade_path_3_11': [97,92],
        'tk3_rogue_sub_shadowblade_path_3_12': [98,93],
        'tk3_rogue_sub_shadowblade_path_3_13': [99,94],
        'tk3_rogue_sub_shadowblade_path_3_14': [100,93],
        'tk3_rogue_sub_shadowblade_path_3_15': [101,92],
        'tk3_rogue_sub_shadowblade_path_3_16': [100,92],
        'tk3_rogue_sub_shadowblade_path_3_2': [100,97],
        'tk3_rogue_sub_shadowblade_path_3_3': [101,96],
        'tk3_rogue_sub_shadowblade_path_3_4': [102,95],
        'tk3_rogue_sub_shadowblade_path_3_5': [102,93],
        'tk3_rogue_sub_shadowblade_path_3_6': [102,92],
        'tk3_rogue_sub_shadowblade_path_3_7': [101,91],
        'tk3_rogue_sub_shadowblade_path_3_8': [100,90],
        'tk3_rogue_sub_shadowblade_path_3_9': [98,91],
        'tk3_rogue_sub_shadowblade_synergy_1': [95,88],
        'tk3_rogue_sub_shadowblade_synergy_2': [98,90],
        'tk3_rogue_subclass_gate': [97,81],
        'tk3_shared_defense_a1_1': [56,64],
        'tk3_shared_defense_a1_2': [55,64],
        'tk3_shared_defense_a1_3': [53,65],
        'tk3_shared_defense_a1_4': [53,66],
        'tk3_shared_defense_a1_5': [53,67],
        'tk3_shared_defense_a2_1': [55,66],
        'tk3_shared_defense_a2_2': [57,66],
        'tk3_shared_defense_a2_3': [58,65],
        'tk3_shared_defense_a2_4': [58,64],
        'tk3_shared_defense_a2_5': [58,63],
        'tk3_shared_defense_mastery': [52,69],
        'tk3_shared_defense_root': [57,63],
        'tk3_shared_fortune_a1_1': [64,64],
        'tk3_shared_fortune_a1_2': [64,65],
        'tk3_shared_fortune_a1_3': [65,67],
        'tk3_shared_fortune_a1_4': [66,67],
        'tk3_shared_fortune_a1_5': [67,67],
        'tk3_shared_fortune_a2_1': [66,65],
        'tk3_shared_fortune_a2_2': [66,63],
        'tk3_shared_fortune_a2_3': [65,62],
        'tk3_shared_fortune_a2_4': [64,62],
        'tk3_shared_fortune_a2_5': [63,62],
        'tk3_shared_fortune_mastery': [69,68],
        'tk3_shared_fortune_root': [63,63],
        'tk3_shared_knowledge_a1_1': [56,56],
        'tk3_shared_knowledge_a1_2': [56,55],
        'tk3_shared_knowledge_a1_3': [55,53],
        'tk3_shared_knowledge_a1_4': [54,53],
        'tk3_shared_knowledge_a1_5': [53,53],
        'tk3_shared_knowledge_a2_1': [54,55],
        'tk3_shared_knowledge_a2_2': [54,57],
        'tk3_shared_knowledge_a2_3': [55,58],
        'tk3_shared_knowledge_a2_4': [56,58],
        'tk3_shared_knowledge_a2_5': [57,58],
        'tk3_shared_knowledge_mastery': [51,52],
        'tk3_shared_knowledge_root': [57,57],
        'tk3_shared_mobility_a1_1': [66,60],
        'tk3_shared_mobility_a1_2': [67,61],
        'tk3_shared_mobility_a1_3': [68,61],
        'tk3_shared_mobility_a1_4': [69,61],
        'tk3_shared_mobility_a1_5': [71,60],
        'tk3_shared_mobility_a2_1': [67,59],
        'tk3_shared_mobility_a2_2': [67,58],
        'tk3_shared_mobility_a2_3': [65,58],
        'tk3_shared_mobility_a2_4': [64,58],
        'tk3_shared_mobility_a2_5': [64,59],
        'tk3_shared_mobility_mastery': [72,59],
        'tk3_shared_mobility_root': [65,60],
        'tk3_shared_power_a1_1': [60,54],
        'tk3_shared_power_a1_2': [61,53],
        'tk3_shared_power_a1_3': [61,52],
        'tk3_shared_power_a1_4': [61,51],
        'tk3_shared_power_a1_5': [60,49],
        'tk3_shared_power_a2_1': [59,53],
        'tk3_shared_power_a2_2': [58,53],
        'tk3_shared_power_a2_3': [58,55],
        'tk3_shared_power_a2_4': [58,56],
        'tk3_shared_power_a2_5': [59,56],
        'tk3_shared_power_mastery': [59,48],
        'tk3_shared_power_root': [60,55],
        'tk3_shared_precision_a1_1': [64,56],
        'tk3_shared_precision_a1_2': [65,56],
        'tk3_shared_precision_a1_3': [67,55],
        'tk3_shared_precision_a1_4': [67,54],
        'tk3_shared_precision_a1_5': [67,53],
        'tk3_shared_precision_a2_1': [65,54],
        'tk3_shared_precision_a2_2': [63,54],
        'tk3_shared_precision_a2_3': [62,55],
        'tk3_shared_precision_a2_4': [62,56],
        'tk3_shared_precision_a2_5': [62,57],
        'tk3_shared_precision_mastery': [68,51],
        'tk3_shared_precision_root': [63,57],
        'tk3_shared_sustain_a1_1': [54,60],
        'tk3_shared_sustain_a1_2': [53,59],
        'tk3_shared_sustain_a1_3': [52,59],
        'tk3_shared_sustain_a1_4': [51,59],
        'tk3_shared_sustain_a1_5': [49,60],
        'tk3_shared_sustain_a2_1': [53,61],
        'tk3_shared_sustain_a2_2': [53,62],
        'tk3_shared_sustain_a2_3': [55,62],
        'tk3_shared_sustain_a2_4': [56,62],
        'tk3_shared_sustain_a2_5': [56,61],
        'tk3_shared_sustain_mastery': [48,61],
        'tk3_shared_sustain_root': [55,60],
        'tk3_shared_vitality_a1_1': [60,66],
        'tk3_shared_vitality_a1_2': [59,67],
        'tk3_shared_vitality_a1_3': [59,68],
        'tk3_shared_vitality_a1_4': [59,69],
        'tk3_shared_vitality_a1_5': [60,71],
        'tk3_shared_vitality_a2_1': [61,67],
        'tk3_shared_vitality_a2_2': [62,67],
        'tk3_shared_vitality_a2_3': [62,65],
        'tk3_shared_vitality_a2_4': [62,64],
        'tk3_shared_vitality_a2_5': [61,64],
        'tk3_shared_vitality_mastery': [61,72],
        'tk3_shared_vitality_root': [60,65],
        'tk3_warrior_class_mastery': [61,26],
        'tk3_warrior_core_advanced_1_1': [59,25],
        'tk3_warrior_core_advanced_1_2': [58,25],
        'tk3_warrior_core_advanced_1_3': [57,25],
        'tk3_warrior_core_advanced_1_4': [55,25],
        'tk3_warrior_core_advanced_1_5': [54,24],
        'tk3_warrior_core_advanced_1_6': [53,23],
        'tk3_warrior_core_advanced_1_7': [53,22],
        'tk3_warrior_core_advanced_1_8': [54,21],
        'tk3_warrior_core_advanced_2_1': [59,23],
        'tk3_warrior_core_advanced_2_2': [58,24],
        'tk3_warrior_core_advanced_2_3': [56,23],
        'tk3_warrior_core_advanced_2_4': [55,22],
        'tk3_warrior_core_advanced_2_5': [55,21],
        'tk3_warrior_core_advanced_2_6': [56,20],
        'tk3_warrior_core_advanced_2_7': [57,20],
        'tk3_warrior_core_advanced_2_8': [58,21],
        'tk3_warrior_core_advanced_3_1': [61,24],
        'tk3_warrior_core_advanced_3_2': [60,23],
        'tk3_warrior_core_advanced_3_3': [60,22],
        'tk3_warrior_core_advanced_3_4': [59,20],
        'tk3_warrior_core_advanced_3_5': [61,20],
        'tk3_warrior_core_advanced_3_6': [62,19],
        'tk3_warrior_core_advanced_3_7': [62,18],
        'tk3_warrior_core_advanced_3_8': [61,18],
        'tk3_warrior_core_advanced_4_1': [61,22],
        'tk3_warrior_core_advanced_4_2': [63,22],
        'tk3_warrior_core_advanced_4_3': [64,22],
        'tk3_warrior_core_advanced_4_4': [65,23],
        'tk3_warrior_core_advanced_4_5': [65,25],
        'tk3_warrior_core_advanced_4_6': [65,26],
        'tk3_warrior_core_advanced_4_7': [67,27],
        'tk3_warrior_core_advanced_4_8': [68,27],
        'tk3_warrior_core_advanced_5_1': [61,21],
        'tk3_warrior_core_advanced_5_2': [62,21],
        'tk3_warrior_core_advanced_5_3': [63,21],
        'tk3_warrior_core_advanced_5_4': [65,20],
        'tk3_warrior_core_advanced_5_5': [65,19],
        'tk3_warrior_core_advanced_5_6': [65,18],
        'tk3_warrior_core_advanced_5_7': [65,17],
        'tk3_warrior_core_advanced_5_8': [64,17],
        'tk3_warrior_core_inner_1_1': [59,32],
        'tk3_warrior_core_inner_1_2': [57,32],
        'tk3_warrior_core_inner_1_3': [56,33],
        'tk3_warrior_core_inner_1_4': [55,34],
        'tk3_warrior_core_inner_1_5': [54,35],
        'tk3_warrior_core_inner_2_1': [59,31],
        'tk3_warrior_core_inner_2_2': [57,31],
        'tk3_warrior_core_inner_2_3': [56,30],
        'tk3_warrior_core_inner_2_4': [56,28],
        'tk3_warrior_core_inner_2_5': [57,27],
        'tk3_warrior_core_inner_3_1': [60,33],
        'tk3_warrior_core_inner_3_2': [60,31],
        'tk3_warrior_core_inner_3_3': [61,30],
        'tk3_warrior_core_inner_3_4': [61,29],
        'tk3_warrior_core_inner_3_5': [61,27],
        'tk3_warrior_core_inner_4_1': [62,30],
        'tk3_warrior_core_inner_4_2': [64,30],
        'tk3_warrior_core_inner_4_3': [65,31],
        'tk3_warrior_core_inner_4_4': [65,33],
        'tk3_warrior_core_inner_4_5': [65,34],
        'tk3_warrior_core_inner_5_1': [63,28],
        'tk3_warrior_core_inner_5_2': [64,27],
        'tk3_warrior_core_inner_5_3': [64,26],
        'tk3_warrior_core_inner_5_4': [64,25],
        'tk3_warrior_core_inner_5_5': [63,24],
        'tk3_warrior_path': [60,35],
        'tk3_warrior_root': [60,34],
        'tk3_warrior_sub_berserker': [50,13],
        'tk3_warrior_sub_berserker_ascendancy': [40,10],
        'tk3_warrior_sub_berserker_path_1_1': [48,13],
        'tk3_warrior_sub_berserker_path_1_10': [53,18],
        'tk3_warrior_sub_berserker_path_1_11': [53,20],
        'tk3_warrior_sub_berserker_path_1_12': [52,21],
        'tk3_warrior_sub_berserker_path_1_13': [51,21],
        'tk3_warrior_sub_berserker_path_1_14': [49,20],
        'tk3_warrior_sub_berserker_path_1_15': [48,19],
        'tk3_warrior_sub_berserker_path_1_16': [47,18],
        'tk3_warrior_sub_berserker_path_1_2': [47,14],
        'tk3_warrior_sub_berserker_path_1_3': [47,15],
        'tk3_warrior_sub_berserker_path_1_4': [47,16],
        'tk3_warrior_sub_berserker_path_1_5': [48,17],
        'tk3_warrior_sub_berserker_path_1_6': [49,18],
        'tk3_warrior_sub_berserker_path_1_7': [51,17],
        'tk3_warrior_sub_berserker_path_1_8': [52,17],
        'tk3_warrior_sub_berserker_path_1_9': [53,17],
        'tk3_warrior_sub_berserker_path_2_1': [49,12],
        'tk3_warrior_sub_berserker_path_2_10': [41,6],
        'tk3_warrior_sub_berserker_path_2_11': [41,5],
        'tk3_warrior_sub_berserker_path_2_12': [43,5],
        'tk3_warrior_sub_berserker_path_2_13': [44,5],
        'tk3_warrior_sub_berserker_path_2_14': [45,6],
        'tk3_warrior_sub_berserker_path_2_15': [46,7],
        'tk3_warrior_sub_berserker_path_2_16': [46,8],
        'tk3_warrior_sub_berserker_path_2_2': [48,11],
        'tk3_warrior_sub_berserker_path_2_3': [48,10],
        'tk3_warrior_sub_berserker_path_2_4': [47,9],
        'tk3_warrior_sub_berserker_path_2_5': [45,9],
        'tk3_warrior_sub_berserker_path_2_6': [44,9],
        'tk3_warrior_sub_berserker_path_2_7': [42,9],
        'tk3_warrior_sub_berserker_path_2_8': [41,9],
        'tk3_warrior_sub_berserker_path_2_9': [40,8],
        'tk3_warrior_sub_berserker_path_3_1': [47,8],
        'tk3_warrior_sub_berserker_path_3_10': [56,10],
        'tk3_warrior_sub_berserker_path_3_11': [56,9],
        'tk3_warrior_sub_berserker_path_3_12': [58,8],
        'tk3_warrior_sub_berserker_path_3_13': [57,7],
        'tk3_warrior_sub_berserker_path_3_14': [56,6],
        'tk3_warrior_sub_berserker_path_3_15': [55,6],
        'tk3_warrior_sub_berserker_path_3_16': [53,6],
        'tk3_warrior_sub_berserker_path_3_2': [48,7],
        'tk3_warrior_sub_berserker_path_3_3': [50,6],
        'tk3_warrior_sub_berserker_path_3_4': [51,6],
        'tk3_warrior_sub_berserker_path_3_5': [52,7],
        'tk3_warrior_sub_berserker_path_3_6': [53,8],
        'tk3_warrior_sub_berserker_path_3_7': [54,9],
        'tk3_warrior_sub_berserker_path_3_8': [54,10],
        'tk3_warrior_sub_berserker_path_3_9': [55,11],
        'tk3_warrior_sub_berserker_synergy_1': [53,16],
        'tk3_warrior_sub_berserker_synergy_2': [53,12],
        'tk3_warrior_sub_juggernaut': [70,13],
        'tk3_warrior_sub_juggernaut_ascendancy': [80,10],
        'tk3_warrior_sub_juggernaut_path_1_1': [72,13],
        'tk3_warrior_sub_juggernaut_path_1_10': [67,18],
        'tk3_warrior_sub_juggernaut_path_1_11': [67,20],
        'tk3_warrior_sub_juggernaut_path_1_12': [68,21],
        'tk3_warrior_sub_juggernaut_path_1_13': [69,21],
        'tk3_warrior_sub_juggernaut_path_1_14': [71,20],
        'tk3_warrior_sub_juggernaut_path_1_15': [72,19],
        'tk3_warrior_sub_juggernaut_path_1_16': [73,18],
        'tk3_warrior_sub_juggernaut_path_1_2': [73,14],
        'tk3_warrior_sub_juggernaut_path_1_3': [73,15],
        'tk3_warrior_sub_juggernaut_path_1_4': [73,16],
        'tk3_warrior_sub_juggernaut_path_1_5': [72,17],
        'tk3_warrior_sub_juggernaut_path_1_6': [71,18],
        'tk3_warrior_sub_juggernaut_path_1_7': [69,17],
        'tk3_warrior_sub_juggernaut_path_1_8': [68,17],
        'tk3_warrior_sub_juggernaut_path_1_9': [67,17],
        'tk3_warrior_sub_juggernaut_path_2_1': [71,12],
        'tk3_warrior_sub_juggernaut_path_2_10': [79,6],
        'tk3_warrior_sub_juggernaut_path_2_11': [79,5],
        'tk3_warrior_sub_juggernaut_path_2_12': [77,5],
        'tk3_warrior_sub_juggernaut_path_2_13': [76,5],
        'tk3_warrior_sub_juggernaut_path_2_14': [75,6],
        'tk3_warrior_sub_juggernaut_path_2_15': [74,7],
        'tk3_warrior_sub_juggernaut_path_2_16': [74,8],
        'tk3_warrior_sub_juggernaut_path_2_2': [72,11],
        'tk3_warrior_sub_juggernaut_path_2_3': [72,10],
        'tk3_warrior_sub_juggernaut_path_2_4': [73,9],
        'tk3_warrior_sub_juggernaut_path_2_5': [75,9],
        'tk3_warrior_sub_juggernaut_path_2_6': [76,9],
        'tk3_warrior_sub_juggernaut_path_2_7': [78,9],
        'tk3_warrior_sub_juggernaut_path_2_8': [79,9],
        'tk3_warrior_sub_juggernaut_path_2_9': [80,8],
        'tk3_warrior_sub_juggernaut_path_3_1': [73,8],
        'tk3_warrior_sub_juggernaut_path_3_10': [68,13],
        'tk3_warrior_sub_juggernaut_path_3_11': [69,12],
        'tk3_warrior_sub_juggernaut_path_3_12': [70,11],
        'tk3_warrior_sub_juggernaut_path_3_13': [70,9],
        'tk3_warrior_sub_juggernaut_path_3_14': [69,8],
        'tk3_warrior_sub_juggernaut_path_3_15': [67,9],
        'tk3_warrior_sub_juggernaut_path_3_16': [67,10],
        'tk3_warrior_sub_juggernaut_path_3_2': [72,7],
        'tk3_warrior_sub_juggernaut_path_3_3': [70,6],
        'tk3_warrior_sub_juggernaut_path_3_4': [69,6],
        'tk3_warrior_sub_juggernaut_path_3_5': [68,7],
        'tk3_warrior_sub_juggernaut_path_3_6': [67,8],
        'tk3_warrior_sub_juggernaut_path_3_7': [66,9],
        'tk3_warrior_sub_juggernaut_path_3_8': [66,10],
        'tk3_warrior_sub_juggernaut_path_3_9': [67,11],
        'tk3_warrior_sub_juggernaut_synergy_1': [67,16],
        'tk3_warrior_sub_juggernaut_synergy_2': [67,12],
        'tk3_warrior_sub_weapon_master': [60,11],
        'tk3_warrior_sub_weapon_master_ascendancy': [59,3],
        'tk3_warrior_sub_weapon_master_path_1_1': [59,9],
        'tk3_warrior_sub_weapon_master_path_1_10': [58,15],
        'tk3_warrior_sub_weapon_master_path_1_11': [57,15],
        'tk3_warrior_sub_weapon_master_path_1_12': [56,14],
        'tk3_warrior_sub_weapon_master_path_1_13': [55,14],
        'tk3_warrior_sub_weapon_master_path_1_14': [55,13],
        'tk3_warrior_sub_weapon_master_path_1_15': [55,12],
        'tk3_warrior_sub_weapon_master_path_1_16': [56,11],
        'tk3_warrior_sub_weapon_master_path_1_2': [58,9],
        'tk3_warrior_sub_weapon_master_path_1_3': [57,9],
        'tk3_warrior_sub_weapon_master_path_1_4': [57,10],
        'tk3_warrior_sub_weapon_master_path_1_5': [57,11],
        'tk3_warrior_sub_weapon_master_path_1_6': [57,12],
        'tk3_warrior_sub_weapon_master_path_1_7': [57,13],
        'tk3_warrior_sub_weapon_master_path_1_8': [58,13],
        'tk3_warrior_sub_weapon_master_path_1_9': [58,14],
        'tk3_warrior_sub_weapon_master_path_2_1': [60,10],
        'tk3_warrior_sub_weapon_master_path_2_10': [61,3],
        'tk3_warrior_sub_weapon_master_path_2_11': [62,3],
        'tk3_warrior_sub_weapon_master_path_2_12': [63,4],
        'tk3_warrior_sub_weapon_master_path_2_13': [63,5],
        'tk3_warrior_sub_weapon_master_path_2_14': [63,6],
        'tk3_warrior_sub_weapon_master_path_2_15': [62,6],
        'tk3_warrior_sub_weapon_master_path_2_16': [62,7],
        'tk3_warrior_sub_weapon_master_path_2_2': [60,9],
        'tk3_warrior_sub_weapon_master_path_2_3': [61,8],
        'tk3_warrior_sub_weapon_master_path_2_4': [61,7],
        'tk3_warrior_sub_weapon_master_path_2_5': [61,6],
        'tk3_warrior_sub_weapon_master_path_2_6': [60,6],
        'tk3_warrior_sub_weapon_master_path_2_7': [60,5],
        'tk3_warrior_sub_weapon_master_path_2_8': [59,4],
        'tk3_warrior_sub_weapon_master_path_2_9': [60,3],
        'tk3_warrior_sub_weapon_master_path_3_1': [62,8],
        'tk3_warrior_sub_weapon_master_path_3_10': [63,14],
        'tk3_warrior_sub_weapon_master_path_3_11': [64,14],
        'tk3_warrior_sub_weapon_master_path_3_12': [65,14],
        'tk3_warrior_sub_weapon_master_path_3_13': [66,13],
        'tk3_warrior_sub_weapon_master_path_3_14': [66,12],
        'tk3_warrior_sub_weapon_master_path_3_15': [66,11],
        'tk3_warrior_sub_weapon_master_path_3_16': [65,11],
        'tk3_warrior_sub_weapon_master_path_3_2': [63,8],
        'tk3_warrior_sub_weapon_master_path_3_3': [64,8],
        'tk3_warrior_sub_weapon_master_path_3_4': [64,9],
        'tk3_warrior_sub_weapon_master_path_3_5': [64,10],
        'tk3_warrior_sub_weapon_master_path_3_6': [64,11],
        'tk3_warrior_sub_weapon_master_path_3_7': [64,12],
        'tk3_warrior_sub_weapon_master_path_3_8': [63,12],
        'tk3_warrior_sub_weapon_master_path_3_9': [63,13],
        'tk3_warrior_sub_weapon_master_synergy_1': [59,14],
        'tk3_warrior_sub_weapon_master_synergy_2': [62,13],
        'tk3_warrior_subclass_gate': [60,18],
        'tk3_wild_arcane_dabbler_b1_1': [44,35],
        'tk3_wild_arcane_dabbler_b1_2': [43,36],
        'tk3_wild_arcane_dabbler_b1_3': [43,37],
        'tk3_wild_arcane_dabbler_b1_4': [44,38],
        'tk3_wild_arcane_dabbler_b2_1': [45,34],
        'tk3_wild_arcane_dabbler_b2_2': [45,32],
        'tk3_wild_arcane_dabbler_b2_3': [45,31],
        'tk3_wild_arcane_dabbler_b2_4': [44,30],
        'tk3_wild_arcane_dabbler_b3_1': [46,32],
        'tk3_wild_arcane_dabbler_b3_2': [47,32],
        'tk3_wild_arcane_dabbler_b3_3': [48,33],
        'tk3_wild_arcane_dabbler_b3_4': [49,34],
        'tk3_wild_arcane_dabbler_capstone': [42,29],
        'tk3_wild_arcane_dabbler_gate': [43,41],
        'tk3_wild_arcane_dabbler_root': [46,35],
        'tk3_wild_bloodbound_b1_1': [30,61],
        'tk3_wild_bloodbound_b1_2': [31,62],
        'tk3_wild_bloodbound_b1_3': [32,63],
        'tk3_wild_bloodbound_b1_4': [33,62],
        'tk3_wild_bloodbound_b2_1': [30,60],
        'tk3_wild_bloodbound_b2_2': [29,60],
        'tk3_wild_bloodbound_b2_3': [27,59],
        'tk3_wild_bloodbound_b2_4': [26,59],
        'tk3_wild_bloodbound_b3_1': [29,58],
        'tk3_wild_bloodbound_b3_2': [29,57],
        'tk3_wild_bloodbound_b3_3': [31,56],
        'tk3_wild_bloodbound_b3_4': [32,57],
        'tk3_wild_bloodbound_capstone': [25,60],
        'tk3_wild_bloodbound_gate': [34,60],
        'tk3_wild_bloodbound_root': [31,60],
        'tk3_wild_bulwark_b1_1': [76,85],
        'tk3_wild_bulwark_b1_2': [77,84],
        'tk3_wild_bulwark_b1_3': [77,83],
        'tk3_wild_bulwark_b1_4': [76,82],
        'tk3_wild_bulwark_b2_1': [75,86],
        'tk3_wild_bulwark_b2_2': [75,88],
        'tk3_wild_bulwark_b2_3': [75,89],
        'tk3_wild_bulwark_b2_4': [76,90],
        'tk3_wild_bulwark_b3_1': [74,88],
        'tk3_wild_bulwark_b3_2': [73,88],
        'tk3_wild_bulwark_b3_3': [72,87],
        'tk3_wild_bulwark_b3_4': [71,86],
        'tk3_wild_bulwark_capstone': [78,91],
        'tk3_wild_bulwark_gate': [77,79],
        'tk3_wild_bulwark_root': [74,85],
        'tk3_wild_daredevil_b1_1': [90,59],
        'tk3_wild_daredevil_b1_2': [89,58],
        'tk3_wild_daredevil_b1_3': [88,57],
        'tk3_wild_daredevil_b1_4': [87,58],
        'tk3_wild_daredevil_b2_1': [90,60],
        'tk3_wild_daredevil_b2_2': [91,60],
        'tk3_wild_daredevil_b2_3': [93,61],
        'tk3_wild_daredevil_b2_4': [94,61],
        'tk3_wild_daredevil_b3_1': [91,62],
        'tk3_wild_daredevil_b3_2': [91,63],
        'tk3_wild_daredevil_b3_3': [89,64],
        'tk3_wild_daredevil_b3_4': [88,63],
        'tk3_wild_daredevil_capstone': [95,60],
        'tk3_wild_daredevil_gate': [86,60],
        'tk3_wild_daredevil_root': [89,60],
        'tk3_wild_fortune_seeker_b1_1': [46,87],
        'tk3_wild_fortune_seeker_b1_2': [47,87],
        'tk3_wild_fortune_seeker_b1_3': [48,86],
        'tk3_wild_fortune_seeker_b1_4': [49,85],
        'tk3_wild_fortune_seeker_b2_1': [45,86],
        'tk3_wild_fortune_seeker_b2_2': [44,87],
        'tk3_wild_fortune_seeker_b2_3': [43,88],
        'tk3_wild_fortune_seeker_b2_4': [42,89],
        'tk3_wild_fortune_seeker_b3_1': [43,86],
        'tk3_wild_fortune_seeker_b3_2': [42,85],
        'tk3_wild_fortune_seeker_b3_3': [42,84],
        'tk3_wild_fortune_seeker_b3_4': [43,83],
        'tk3_wild_fortune_seeker_capstone': [42,91],
        'tk3_wild_fortune_seeker_gate': [43,79],
        'tk3_wild_fortune_seeker_root': [46,85],
        'tk3_wild_jack_of_all_trades_b1_1': [74,33],
        'tk3_wild_jack_of_all_trades_b1_2': [73,33],
        'tk3_wild_jack_of_all_trades_b1_3': [72,34],
        'tk3_wild_jack_of_all_trades_b1_4': [71,35],
        'tk3_wild_jack_of_all_trades_b2_1': [75,34],
        'tk3_wild_jack_of_all_trades_b2_2': [76,33],
        'tk3_wild_jack_of_all_trades_b2_3': [77,32],
        'tk3_wild_jack_of_all_trades_b2_4': [78,31],
        'tk3_wild_jack_of_all_trades_b3_1': [77,34],
        'tk3_wild_jack_of_all_trades_b3_2': [78,35],
        'tk3_wild_jack_of_all_trades_b3_3': [78,36],
        'tk3_wild_jack_of_all_trades_b3_4': [77,37],
        'tk3_wild_jack_of_all_trades_capstone': [78,29],
        'tk3_wild_jack_of_all_trades_gate': [77,41],
        'tk3_wild_jack_of_all_trades_root': [74,35]
    }

    function applyTk3GridLayout() {
        var ids = Object.keys(skills)
        if (Object.keys(TK3_GRID_SPOTS).length !== ids.length) {
            throw new Error('[TK3 SkillTree] Grid map does not match the generated skill count')
        }
        var occupied = {}
        ids.forEach(function(id) {
            var cell = TK3_GRID_SPOTS[id]
            if (!cell || cell.length !== 2) {
                throw new Error('[TK3 SkillTree] Missing grid spot for ' + id)
            }
            var column = cell[0]
            var row = cell[1]
            if (column !== Math.floor(column) || row !== Math.floor(row)
                || column < 0 || column >= TK3_GRID.columns
                || row < 0 || row >= TK3_GRID.rows) {
                throw new Error('[TK3 SkillTree] Invalid grid spot for ' + id)
            }
            var key = column + ',' + row
            if (occupied[key]) {
                throw new Error('[TK3 SkillTree] Duplicate grid spot: ' + id + ' and ' + occupied[key])
            }
            occupied[key] = id
            skills[id].positionX = (column - TK3_GRID.originColumn) * TK3_GRID.spacing
            skills[id].positionY = (row - TK3_GRID.originRow) * TK3_GRID.spacing
        })
        if (skills[originId].positionX !== 0 || skills[originId].positionY !== 0) {
            throw new Error('[TK3 SkillTree] Origin must occupy the central grid spot')
        }
    }

    applyTk3GridLayout()


    // ---------------------------------------------------------------------
    // MAGIC SCHOOL NOTE
    // ---------------------------------------------------------------------
    // V3.0 deliberately does not draw the old nine standalone school ladders.
    // Their school-power identities are already represented inside Mage, Cleric and Occultist.
    // Once the six-class macro layout is approved, school specialization can return as TP satellites
    // without reintroducing a dense second ring through the profession islands.

    // ---------------------------------------------------------------------
    // VALIDATE + WRITE GENERATED DATA
    // ---------------------------------------------------------------------
    // Profession mastery/focus counts are unrestricted; the global 150-point budget is the limiter.
    // Class and subclass remain hard-limited to one each.
    // The 150-point cap is now the profession limiter. Players may enter and master every
    // profession if they are willing to spend the points. Only combat identity remains hard-limited.
    var treeSkillLimitations = {archetype:1,subclass:1,subclass_keystone:1}

    var validationSummary = validateGeneratedTree(treeSkillLimitations)

    Object.keys(skills).forEach(function(id){
        JsonIO.write('kubejs/data/skilltree/skills/'+id+'.json',skills[id])
    })

    // Force every historical/built-in tree file to deserialize to the same runtime ID.
    // This keeps the O key direct-to-tree even when old generated files still exist.
    ;['tree','soldier','alchemist','alchemy','hunter','cook','main_tree','archetypes','archetype_selection','martial','arcane','professions','general','tk3_archetypes','tk3_martial','tk3_arcane','tk3_professions','tk3_general'].forEach(function(fileId){
        JsonIO.write('kubejs/data/skilltree/skill_trees/'+fileId+'.json',{
            id:'skilltree:tree',
            skillIds:Object.keys(skills).map(function(id){return skills[id].id}),
            skillLimitations:treeSkillLimitations
        })
    })

    JsonIO.write('kubejs/data/tk3/skilltree_generation_summary.json',{
        version:TK3_SKILLTREE_VERSION,
        generatedNodes:Object.keys(skills).length,
        freeformConstellations:wildcardDefs.map(function(w){return w.id}),
        classes:classes.map(function(c){return c.id}),
        subclasses:classes.reduce(function(out,c){return out.concat(c.subclasses.map(function(s){return s.id}))},[]),
        professions:professions.map(function(p){return p.id}),
        recommendedMaxSkillPoints:150,
        validation:validationSummary,
        pointEconomy:{
            sharedEntryConstellation:12,
            chosenClassToSubclassGateIncludingShared:61,
            chosenSubclassAscendancy:28,
            signatureClassAndSubclassIncludingShared:89,
            optionalDeepClassRanks:20,
            optionalDeepSubclassRanks:24,
            fullChosenClassAndSubclass:133,
            professionMasteryPerWedge:15,
            allEightProfessionMasteries:120,
            freeformConstellationToKeystone:15,
            threeProfessionMasteries:45,
            signatureBuildWithThreeProfessionMasteries:134,
            remainingAfterSignatureBuild:16,
            note:'Professions are no longer hard-limited. The 150-point cap alone forces tradeoffs between combat depth, profession depth, wildcard constellations, and extra shared nodes.'
        },
        rules:{
            classLimit:1,
            subclassLimit:1,
            professionMasteryLimit:null,
            professionFocusLimitPerIsland:null,
            nativePointCostPerNode:1,
            subclassUnlockRequiresAdvancedRank:CLASS_SUBCLASS_UNLOCK_RANK,
            professionMasteryRequiresBranchRank:PROFESSION_MASTERY_RANK
        },
        layout:{
            mainClasses:6,
            subclasses:18,
            professionWedges:8,
            freeformConstellations:6,
            sharedConstellations:8,
            fingerprint:validationSummary.layoutFingerprint,
            locked:true,
            style:'120x120-winding-trunks-with-returning-side-branches',
            branchAnchors:TK3_BRANCH_GRAPH.anchors.length,
            graphEdges:1800,
            grid:{
                columns:TK3_GRID.columns,
                rows:TK3_GRID.rows,
                totalSpots:TK3_GRID.columns * TK3_GRID.rows,
                occupiedSpots:Object.keys(skills).length,
                spacing:TK3_GRID.spacing,
                originColumn:TK3_GRID.originColumn,
                originRow:TK3_GRID.originRow,
                previewWidth:6000,
                previewHeight:6000,
                layoutScale:0.96
            }
        }
    })

    console.info('[TK3 SkillTree v'+TK3_SKILLTREE_VERSION+'] Generated '+Object.keys(skills).length+' nodes.')
    console.info('[TK3 SkillTree] Classes: '+classes.map(function(c){return c.name}).join(', '))
    console.info('[TK3 SkillTree] Profession wedges: '+professions.map(function(p){return p.name}).join(', '))
    console.info('[TK3 SkillTree] Iron\'s Spellbooks detected: '+hasAttribute('irons_spellbooks:spell_power'))
    console.info('[TK3 SkillTree] Apothic Attributes detected: '+hasAttribute('apothic_attributes:crit_chance'))
})()
