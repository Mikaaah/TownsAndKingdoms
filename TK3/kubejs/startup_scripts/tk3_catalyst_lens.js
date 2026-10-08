const TK3LensDataComponents = Java.loadClass("net.minecraft.core.component.DataComponents")
const TK3DyedItemColor = Java.loadClass("net.minecraft.world.item.component.DyedItemColor")

StartupEvents.registry("item", event => {
    event.create("tk3_catalyst_lens")
        .displayName("Empty Catalyst Lens")
        .component(
            TK3LensDataComponents.DYED_COLOR,
            new TK3DyedItemColor(0xFFFFFF, false)
        )
        .color((stack, tintIndex) => {
            if (tintIndex !== 1) return -1

            const dyed = stack.get(TK3LensDataComponents.DYED_COLOR)
            return dyed == null ? 0xFFFFFF : dyed.rgb()
        })
})
