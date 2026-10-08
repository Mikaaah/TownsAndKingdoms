// T&K3 reusable boss catalyst lenses.
// A single kubejs:tk3_catalyst_lens item carries its visual identity through
// minecraft:dyed_color and its name through minecraft:custom_name.

const TK3BossLensDataComponents = Java.loadClass("net.minecraft.core.component.DataComponents")
const TK3BossLensColor = Java.loadClass("net.minecraft.world.item.component.DyedItemColor")
const TK3BossLensComponent = Java.loadClass("net.minecraft.network.chat.Component")

const TK3_LENS_COLORS = {
    EMPTY: 0xFFFFFF,
    NETHERSTAR: 0xDDF4FF,
    EVERBURNING: 0xFF5A1F,
    VOIDGUARD: 0x9A5CFF,
    ACCURSED: 0x9BCB57
}

function tk3Lens(name, rgb) {
    const stack = Item.of("kubejs:tk3_catalyst_lens")
    stack.set(TK3BossLensDataComponents.DYED_COLOR, new TK3BossLensColor(rgb, false))
    if (name) {
        stack.set(TK3BossLensDataComponents.CUSTOM_NAME, TK3BossLensComponent.literal(name))
    }
    return stack
}

function tk3LensIngredient(rgb) {
    const stack = Item.of("kubejs:tk3_catalyst_lens")
    stack.set(TK3BossLensDataComponents.DYED_COLOR, new TK3BossLensColor(rgb, false))
    return stack.asIngredient()
}

ServerEvents.recipes(event => {
    const emptyLens = tk3Lens("Empty Catalyst Lens", TK3_LENS_COLORS.EMPTY)
    const netherstarLens = tk3Lens("Netherstar Lens", TK3_LENS_COLORS.NETHERSTAR)
    const everburningLens = tk3Lens("Everburning Lens", TK3_LENS_COLORS.EVERBURNING)
    const voidguardLens = tk3Lens("Voidguard Lens", TK3_LENS_COLORS.VOIDGUARD)
    const accursedLens = tk3Lens("Accursed Lens", TK3_LENS_COLORS.ACCURSED)

    // Universal blank lens. Cheap enough to prepare, but requires the established
    // precision / AE2 material language already present in the pack.
    event.recipes.create.mechanical_crafting(
        emptyLens,
        [
            " B ",
            "BQB",
            " B "
        ], {
        B: "create:brass_sheet",
        Q: "ae2:quartz_glass"
    })
        .id("kubejs:tk3/catalysts/empty_lens")

    // Boss materials charge a fresh white lens through Ars.
    // The resulting lenses are reusable catalysts in the later mechanism assemblies.
    event.recipes.ars_nouveau.enchanting_apparatus(
        ["minecraft:nether_star"],
        tk3LensIngredient(TK3_LENS_COLORS.EMPTY),
        netherstarLens,
        3000)
        .id("kubejs:tk3/catalysts/netherstar_lens")

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["cataclysm:ignitium_ingot"],
        tk3LensIngredient(TK3_LENS_COLORS.EMPTY),
        everburningLens,
        5000)
        .id("kubejs:tk3/catalysts/everburning_lens")

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["cataclysm:gauntlet_of_guard"],
        tk3LensIngredient(TK3_LENS_COLORS.EMPTY),
        voidguardLens,
        7000)
        .id("kubejs:tk3/catalysts/voidguard_lens")

    event.recipes.ars_nouveau.enchanting_apparatus(
        ["cataclysm:cursium_ingot"],
        tk3LensIngredient(TK3_LENS_COLORS.EMPTY),
        accursedLens,
        9000)
        .id("kubejs:tk3/catalysts/accursed_lens")
})
