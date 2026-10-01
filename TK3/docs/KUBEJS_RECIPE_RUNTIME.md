# T&K3 — Runtime Recipe API Reference

**Target:** Minecraft 1.21.1 / NeoForge  
**Source:** ProbeJS dump from the assembled T&K3 instance  
**Dump date:** 2026-10-01  
**Status:** Runtime-authoritative recipe API reference

> This file records recipe APIs that are actually exposed by the current T&K3 runtime according to ProbeJS.
>
> When this file conflicts with an old wiki example, prefer this runtime reference and verify behavior in-game.

---

## 1. Runtime verification

The supplied ProbeJS dump contains generated classes/bindings for all five locked core recipe integrations:

- Create + KubeJS Create
- Mekanism + KubeJS Mekanism
- Ars Nouveau + KubeJS Ars Nouveau
- Iron's Spells 'n Spellbooks + Iron's Spellbooks KubeJS
- Applied Energistics 2 + Applied KubeJS

The dump also exposes:

- `ServerEvents.recipes`
- typed `event.recipes.<namespace>` recipe builders
- KubeJS recipe removal/replacement APIs
- Applied KubeJS global bindings
- runtime item/fluid/chemical/component types used by the builders

---

# 2. Base KubeJS recipe event

ProbeJS exposes `RecipesKubeEvent` with:

- `event.recipes`
- `event.shaped(...)`
- `event.shapeless(...)`
- `event.smelting(...)`
- `event.blasting(...)`
- `event.smoking(...)`
- `event.campfire_cooking(...)`
- `event.stonecutting(...)`
- `event.smithing_transform(...)`
- `event.smithing_trim(...)`
- `event.custom(json)`
- `event.remove(filter)`
- `event.replaceInput(filter, match, replacement)`
- `event.replaceOutput(filter, match, replacement)`
- `event.findRecipes(filter)`
- `event.countRecipes(filter)`
- `event.findRecipeIds(filter)`
- `event.stage(filter, stage)`

### T&K3 rule

Use explicit recipe IDs for important custom recipes:

```text
kubejs:tk3/<system>/<recipe_name>
```

---

# 3. Create — verified runtime recipe namespace

Use:

```js
ServerEvents.recipes(event => {
    event.recipes.create...
})
```

ProbeJS exposes:

- `deploying(results, ingredients, processingTime?)`
- `mixing(results, ingredients, processingTime?)`
- `sandpaper_polishing(results, ingredients, processingTime?)`
- `mechanical_crafting(result, pattern, key, acceptMirrored?)`
- `compacting(results, ingredients, processingTime?)`
- `splashing(results, ingredients, processingTime?)`
- `conversion(results, ingredients, processingTime?)`
- `cutting(results, ingredients, processingTime?)`
- `pressing(results, ingredients, processingTime?)`
- `filling(results, ingredients, processingTime?)`
- `item_application(results, ingredients, processingTime?)`
- `milling(results, ingredients, processingTime?)`
- `emptying(results, ingredients, processingTime?)`
- `haunting(results, ingredients, processingTime?)`
- `basin(results, ingredients, processingTime?)`
- `crushing(results, ingredients, processingTime?)`
- `sequenced_assembly(results, ingredient, sequence, transitionalItem?, loops?)`

### Verified Create chain methods

Most processing recipes expose:

- `.processingTime(...)`
- `.heatRequirement(...)`
- `.heated()`
- `.superheated()`

Deploying and Item Application also expose:

- `.keepHeldItem()`
- `.keepHeldItem(boolean)`

Sequenced Assembly exposes:

- `.results(...)`
- `.ingredient(...)`
- `.sequence(...)`
- `.transitionalItem(...)`
- `.loops(...)`

### T&K3 use

Create remains the preferred system for:

- compact early/mid processing
- pressing
- crushing
- washing/splashing
- haunting
- filling/emptying
- basin processing
- deployer-based reusable catalysts
- engineered components
- sequenced assembly

---

# 4. Mekanism — verified runtime recipe namespace

Use:

```js
ServerEvents.recipes(event => {
    event.recipes.mekanism...
})
```

ProbeJS exposes the following typed builders:

- `centrifuging(output, input)`
- `washing(output, fluidInput, chemicalInput)`
- `metallurgic_infusing(output, itemInput, chemicalInput, perTickUsage?)`
- `chemical_conversion(output, input)`
- `evaporating(output, input)`
- `pigment_mixing(output, leftInput, rightInput)`
- `sawing(input, mainOutput?, secondaryOutput?, secondaryChance?)`
- `compressing(output, itemInput, chemicalInput, perTickUsage?)`
- `energy_conversion(input, output)`
- `smelting(output, input)`
- `mek_data(result, pattern, key)`
- `crystallizing(output, input)`
- `dissolution(output, itemInput, chemicalInput, perTickUsage?)`
- `purifying(output, itemInput, chemicalInput, perTickUsage?)`
- `crushing(output, input)`
- `reaction(itemInput, fluidInput, chemicalInput, duration?, itemOutput?, chemicalOutput?, energyRequired?)`
- `nucleosynthesizing(output, itemInput, chemicalInput, duration, perTickUsage?)`
- `oxidizing(output, input)`
- `injecting(output, itemInput, chemicalInput, perTickUsage?)`
- `chemical_infusing(output, leftInput, rightInput)`
- `rotary(chemicalOutput?, fluidOutput?, chemicalInput?, fluidInput?)`
- `combining(output, mainInput, extraInput)`
- `painting(output, itemInput, chemicalInput, perTickUsage?)`
- `separating(leftChemicalOutput, rightChemicalOutput, input, energyMultiplier?)`
- `activating(output, input)`
- `pigment_extracting(output, input)`
- `enriching(output, input)`

### Important runtime finding

The current installed KubeJS Mekanism integration exposes **more typed recipe builders than the older capability notes assumed**.

Specifically, the current ProbeJS runtime includes typed builders for:

- reaction
- separating
- washing
- oxidizing
- nucleosynthesizing
- rotary

Therefore, for this installed build, these should be attempted through the typed runtime builder before falling back to raw `event.custom(...)`.

### T&K3 use

Mekanism is reserved for later progression:

- advanced material refinement
- chemistry
- high-efficiency processing
- chemical conversion
- advanced alloys/components

---

# 5. Ars Nouveau — verified runtime recipe namespace

Use:

```js
ServerEvents.recipes(event => {
    event.recipes.ars_nouveau...
})
```

ProbeJS exposes:

- `caster_tome(tomeType?, name, spell, flavourText, color, sound?)`
- `enchanting_apparatus(pedestalItems?, reagent, result, sourceCost?, keepNbtOfReagent?)`
- `imbuement(input, output, source, pedestalItems?)`
- `crush(input, output, skipBlockPlace?)`
- `glyph(output, inputs, exp?)`
- `enchantment(pedestalItems, enchantment, level, sourceCost)`

### Verified chain methods

Enchanting Apparatus exposes:

- `.pedestalItems(...)`
- `.reagent(...)`
- `.result(...)`
- `.sourceCost(...)`
- `.keepNbtOfReagent(...)`

Imbuement exposes:

- `.input(...)`
- `.output(...)`
- `.source(...)`
- `.pedestalItems(...)`

### T&K3 use

Prefer Ars for:

- arcane material processing
- apparatus crafting
- imbuement
- magical catalysts
- magic/technology hybrid components

---

# 6. Iron's Spells 'n Spellbooks — verified runtime recipe namespace

Use:

```js
ServerEvents.recipes(event => {
    event.recipes.irons_spellbooks...
})
```

ProbeJS exposes three typed Alchemist Cauldron recipe builders:

- `alchemist_cauldron_brew(results, input, baseFluid, byproduct?)`
- `alchemist_cauldron_empty(result, input, fluid, sound?)`
- `alchemist_cauldron_fill(fluid, input, result, mustFitAll?, sound?)`

### Verified Brew fields

- `.results(...)`
- `.input(...)`
- `.baseFluid(...)`
- `.byproduct(...)`

### T&K3 use

Iron's recipe work should focus primarily on:

- Alchemist Cauldron processing
- combat-magic ingredients
- spell progression materials
- cross-mod magical equipment recipes

Custom spells/schools are outside normal recipe management and belong in their appropriate startup/event scripts.

---

# 7. AE2 — direct runtime namespace

ProbeJS exposes:

```js
event.recipes.ae2.matter_cannon()
event.recipes.ae2.transform()
event.recipes.ae2.inscriber()
event.recipes.ae2.charger()
event.recipes.ae2.entropy()
```

However, the generated recipe classes for these direct AE2 builders are typed as:

```text
UnknownKubeRecipe
```

### T&K3 rule

Do **not** use the direct `event.recipes.ae2.*` builder as the default implementation path when writing new AE2 recipes.

Prefer the concrete **Applied KubeJS** recipe helpers below.

---

# 8. Applied KubeJS — verified AE2 recipe helpers

The current runtime exposes these global bindings:

- `AE2`
- `AE2Recipes`
- `AE2Network`
- `AE2Keys`
- `AE2Crafting`
- `AE2Devices`
- `AE2Debug`
- `AE2Progression`

Equivalent `AppliedKJS...` bindings are also present.

For recipe management, use **`AE2Recipes`**.

ProbeJS verifies these recipe helpers:

### Charger

- `AE2Recipes.charger(event, ingredient, result)`
- `AE2Recipes.charger(event, ingredient, result, id)`
- `AE2Recipes.charger(ingredient, result)`

### Inscriber

- `AE2Recipes.inscriber(...)`
- `AE2Recipes.inscriberPress(...)`
- `AE2Recipes.inscriberWithBottom(...)`
- `AE2Recipes.inscriberNoBottom(...)`

The helper supports explicit processing mode and top/bottom press inputs where applicable.

### Transform

- `AE2Recipes.transformFluid(...)`
- `AE2Recipes.transformExplosion(...)`

### Entropy

- `AE2Recipes.entropy(...)`
- `AE2Recipes.entropyHeat(...)`
- `AE2Recipes.entropyCool(...)`

### Matter Cannon

- `AE2Recipes.matterCannon(...)`

### Utility/removal helpers

- `AE2Recipes.removeByType(...)`
- `AE2Recipes.removeByOutput(...)`
- `AE2Recipes.removeByInputContains(...)`
- `AE2Recipes.removeByPredicateJsonContains(...)`
- `AE2Recipes.validate(...)`
- `AE2Recipes.validateOrThrow(...)`
- `AE2Recipes.isValid(...)`
- `AE2Recipes.stringify(...)`
- `AE2Recipes.add(...)`

### T&K3 rule

Use Applied KubeJS recipe helpers for AE2 whenever a matching helper exists.

Raw AE2 JSON should only be used when:

1. no Applied KubeJS helper covers the recipe,
2. the exact installed recipe serializer has been inspected,
3. the resulting recipe has been tested in-game.

---

# 9. Runtime recipe authoring priority

For T&K3 recipes, use this priority order:

1. typed ProbeJS-confirmed builder
2. dedicated addon helper such as `AE2Recipes`
3. verified raw `event.custom(...)`
4. raw datapack JSON only where scripting adds no benefit

This replaces older assumptions derived only from wiki documentation.

---

# 10. Validation rule

Even when ProbeJS exposes a method, every new recipe family must still be tested at least once in the live instance.

Check:

- script reload succeeds
- no KubeJS errors
- recipe appears correctly in JEI/EMI
- inputs/outputs are correct
- fluids/chemicals are correct
- machine accepts the recipe
- progression gates cannot be bypassed
- recipe IDs do not collide

---

# 11. Source-of-truth hierarchy for recipe code

For actual T&K3 recipe implementation:

1. **Current ProbeJS dump / this runtime API reference**
2. exact installed mod/addon source where needed
3. live runtime test and KubeJS logs
4. current official documentation
5. old examples only as conceptual references

Never copy old T&K2 recipe code directly without revalidating it against this runtime.
