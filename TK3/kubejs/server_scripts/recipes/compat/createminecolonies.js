// priority: 0
// TK3 compatibility/integration recipes for createminecolonies. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 3 / Expedition & settlement machines [------------------------<-//

    // Colony Warehouse Stock Link / Shapeless
    event.shapeless(
        "createminecolonies:colony_warehouse_stock_link",
        [
            "create:stock_link",
            "minecolonies:blockhutwarehouse",
            "create:electron_tube"
        ])
        .id("kubejs:tk3/addons/createminecolonies_colony_warehouse_stock_link");
});
