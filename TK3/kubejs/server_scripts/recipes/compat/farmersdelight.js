// priority: 0
// TK3 compatibility/integration recipes.
ServerEvents.recipes(event => {
    // Diamond Knife / Shaped
    event.shaped(
        "farmersdelight:diamond_knife",
        [
            " D",
            "S "
        ], {
        "D": "minecraft:diamond",
        "S": "mekanism:ingot_steel"
    })
        .id("kubejs:tk3/addons/farmersdelight_diamond_knife");
});
