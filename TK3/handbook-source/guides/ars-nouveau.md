# Ars Nouveau spellcraft

**DESIGN YOUR SPELL · GROW SOURCE · BUILD LIVING AUTOMATION**

Ars Nouveau lets you assemble spells instead of only selecting predefined ones. Its personal mana powers your casting; **Source** supports magical machines and automation. Keep those resources distinct while learning the system. [Browse the core glyph catalogue](../glyph-catalogue/).

## First spell

Obtain the starter spellbook using the recipe available in JEI. Open its spell editor, select a method, add an effect and save the spell in a slot. Learn more glyphs with the **Scribe's Table** and the ingredients shown in the installed guide. Higher book tiers unlock more advanced spellcraft. [Author casting guide](https://ars.guide/book/getting_started/spell_casting/).

Begin with one effect you can understand. Test it on a safe target before adding complexity, especially for block-changing or area spells.

## Understand the chain

| Part | Job | Example |
|---|---|---|
| Method | Determines how the spell reaches its target | Touch, Projectile, Self or Underfoot |
| Effect | Performs the operation | Break, Harm, Heal, Light or Launch |
| Augment | Modifies a compatible effect | Amplify, AOE, Pierce or Extend Time |

Augments modify the appropriate preceding effect; they are not independent attacks. A glyph's tier, compatibility and cost influence which chains you can build. The [glyph catalogue](../glyph-catalogue/) shows the compatible augments explicitly found in the referenced source, with author links for inherited behaviour. [Author glyph introduction](https://ars.guide/book/getting_started/introduction_to_glyphs/).

## Useful experiments

These are simple core-glyph combinations to try once their glyphs are unlocked. They are learning examples rather than the strongest build or a guaranteed starting-book unlock.

| Spell idea | Chain to test | What to observe |
|---|---|---|
| Mining tool | Touch → Break | Harvest level, tool restrictions and mana cost |
| Ranged attack | Projectile → Harm | Travel time, aim and line of sight |
| Personal recovery | Self → Heal | Healing gained compared with mana consumed |
| Local lighting | Touch → Light | Target surface and placement |
| Movement | Self → Launch | Height, landing safety and surroundings |

Add **Amplify** to an effect that supports it, then compare the result and cost. Add area or duration only after the basic spell behaves as expected. Avoid building a long chain whose effects compete with one another. [Author spellcraft guide](https://ars.guide/book/getting_started/introduction_to_spellcrafting/).

## Mana and Source

Personal mana limits how often you cast. Source is collected by Sourcelinks and held in **Source Jars**, then moved through **Source Relays** to nearby consumers. Build a small generator, a jar and one consumer before making a large network. Check range, relay targeting and storage before assuming a machine is broken. [Author Source guide](https://ars.guide/book/getting_started/source/).

## Machines & magical helpers

| System | Role | First thing to check |
|---|---|---|
| Imbuement Chamber | Magical material preparation | Correct ingredients and Source conditions |
| Enchanting Apparatus | Higher magical crafting | Pedestal setup and the installed recipe |
| Starbuncle | Item transport | Assigned routes and valid inventory access |
| Whirlisprig | Plant-related automation | Its supported environment and instructions |
| Drygmy | Creature-related resource gathering | Required nearby creatures and Source |
| Wixie | Crafting/brewing automation | Recipe instructions and available supplies |
| Bookwyrm / Storage Lectern | Magical storage access | Linked storage and interaction setup |
| Spell Turret | Repeated spell operation | Valid spell, targeting and Source supply |

Start each helper as a small standalone system. Add buffers between collection and processing, then connect it to Create or digital storage. The installed book is the authority for exact ranges and setup details. [Author automation guide](https://ars.guide/book/getting_started/magical_automation/).

## The alpha's Ars addons

**Ars Creo** and **Create: Ars Nouveau Compat** link Ars and Create systems. **Ars Sable** documents improved Starbuncle pathing, Source interactions across sublevels/world boundaries and sublevel warp/render support. Its presence does not guarantee every contraption has been tested. [Ars Sable author project](https://www.curseforge.com/minecraft/mc-mods/ars-sable).

**Ars 'n Spells** connects Ars and Iron's magic through configurable integration. Verify the active mode before treating both mana pools, regeneration or equipment bonuses as interchangeable. [Integration reference](https://www.curseforge.com/minecraft/mc-mods/ars-n-spells).

**Reliquified Ars Nouveau** adds relic-based progression around Ars mechanics; see [Artifacts & Relics](../artifacts-relics/). **KubeJS Ars Nouveau** enables scripted integrations. The wider Ars guide includes many optional addons: this wiki only treats projects in the [alpha list](../modlist/) as selected.

## T&K workshop connection

The existing campaign guide connects Ars to **chapter 4 Arcane Industry**, with the Enchanting Apparatus, Arcane Mechanism and Arcane Machine route. Native Source collection and authored factory recipes are separate concerns. Follow the [actual recipe workshop](../../workshop/) for T&K ingredients rather than copying an upstream crafting recipe.

## Troubleshooting

- Spell will not save: check glyph tier, chain structure and augment compatibility.
- Spell casts but does little: check targeting, harvest level or affected entity/block conditions.
- Machine stops: check Source, relay connections and output capacity.
- Helper is idle: inspect its task assignment, environment and reachable inventory.

[Core glyphs](../glyph-catalogue/) · [Iron’s spells](../irons-spells/) · [Automation](../../automation/).
