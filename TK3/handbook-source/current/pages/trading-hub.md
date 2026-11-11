# Trading Hub

Give players a place to list a shop, browse the directory and travel to another destination. The floating globe is a block renderer; it does not use a ticking statue entity.

## Obtain and place

Follow the questbook's acquisition route for the Trading Hub.

The stable reward item is <code>tnkcore:trade_sharestone</code>, visibly named **Trading Hub**. The final starter/repeat-purchase reward assignment belongs to the questbook configuration.

Place both halves with the normal block item. Placement opens the setup editor. Give the destination a name, description and icon, then save.

## Browse and manage

The home screen links to the public shop directory and your personal listings. Search narrows the directory, sorting changes name/owner order, and arrows move through pages.

Your owned destinations open their editor. Ownership and block identity are checked by the server; editing a listing does not transfer ownership of another player's block.

The supplied icon picker has **130 icons**. Servers can restrict the allowed selection.

## Teleport

Open a destination and use **Teleport**. The Hub uses Waystones-backed travel with landing checks and a default five-second cooldown. It is not the same as a paid player-to-player trade transaction.

The directory helps players reach a shop; the actual item/currency exchange belongs to the shop system they build. Full multiplayer shop transactions and claims integration still need testing in the final combined pack.

## Keep the listing intact

Use the editor or remove the owning block normally. Do not move a Hub on a contraption: moving-base placement is not supported in this beta.

Server settings in <code>tnkcore-market-server.toml</code> control text limits, teleport cooldown and icons. Defaults are 40 characters for names and 240 for descriptions. Existing directory data persists in the world's saved data.
