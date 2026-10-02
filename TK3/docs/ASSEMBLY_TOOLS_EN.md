# Tool-finished assembly


## Finishing tools and chapter rewards

Each mechanism sequence ends with a **tool held by a Deployer**. The tool is not a belt ingredient. Normal tools lose one durability per finishing operation. A chapter’s permanent reward is the same item with the Unbreakable component, so it fits the same recipe and stays in the deployer.

| Chapter | Final tool | Milestone reward |
|---|---|---|
| I | BetterEnd Iron Hammer | Unbreakable Workshop Hammer |
| II | Farmer’s Delight Iron Knife | Unbreakable Sealwright Knife |
| III | Create Sand Paper | Unbreakable Precision Abrasive |
| IV | Ars Enchanter’s Sword | Unbreakable Arcane Engraver |
| V | Earlier workshop tools | A second unbreakable Iron Hammer for a parallel kinetic line |

Craft and use an ordinary tool **before** finishing the chapter; the reward removes maintenance afterwards. Every player may claim each milestone reward once. It is not a recipe ingredient or an unlock token. On a server, a team can supply multiple finishing deployers by claiming its members’ rewards.

The Iron Hammer’s native shaped recipe uses four iron ingots and two sticks. Farmer’s Delight Iron Knife retains its native recipe. Create Sand Paper uses the explicit paper + sand support recipe. The Enchanter’s Sword uses its native Enchanting Apparatus recipe: diamond sword as reagent; one diamond, two gold blocks and two Source Gem Blocks on pedestals; no Source cost. Your apparatus and first Source generation are available before the Arcane Machine.

Put the starting item on a belt or depot and perform each deployment in order. Two alloys means **two separate deployments**, even when the same deployer is reused. All four sequences have one loop and a guaranteed output. A finishing tool replaces the old final press; there is no extra pressing operation afterwards.

All mechanisms require sequenced assembly. Only the tier 1 frame has a manual startup recipe from raw materials; automated frames use a casing plus one deployed mechanism. Stonecutting then selects the actual machine.

## Technical notes

Use Minecraft 1.21.1 item components: `minecraft:unbreakable: {}` and a JSON text string for `minecraft:custom_name`. FTB item rewards use the native ItemStack object and `team_reward: false`. The sequence tool step intentionally omits `keepHeldItem()`: Create damages items with a positive max damage and the Unbreakable component prevents that damage. This requires a Create version with the unbreakable deployer fix (6.0.7 or newer).

Source checks: Creators-of-Create/Create `mc1.21.1/dev` BeltDeployerCallbacks; FTBTeam/FTB-Quests `1.21.1/main` ItemReward and Reward; Reijin2312/BetterEnd-New-Dawn native Iron Hammer recipe; baileyholl/Ars-Nouveau `1.21.x` Enchanter’s Sword recipe. Static authoring checks pass. Minecraft runtime, personal reward claims in a team and tool wear still require an in-game check.
