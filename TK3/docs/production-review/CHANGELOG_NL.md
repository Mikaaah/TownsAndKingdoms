# Productiereparatie — 4 oktober 2026

- De drie late receptscripts verwijderen ook eerdere recepten uit `event.addedRecipes`. KubeJS 2101 behandelt die afzonderlijk van originele modrecepten. Er blijft per custom recipe ID één definitieve declaratie over.
- De uiteindelijke whitelist draait na alle overrides, op priority `-40000`. De toegestane IDs zijn opgebouwd uit de overgebleven declaraties. Vanilla buckets en bone meal krijgen geen nieuwe outputbeperking.
- Invoer die eerder via `replaceInput` moest worden gemigreerd, staat rechtstreeks goed in de bronrecepten. Vroege Ars/XP-machines gebruiken Calculation; de eerste PRC, Separator en Rotary-route gebruiken Inductive. Chemical Infuser en Osmium Compressor gebruiken Arcane. Dit voorkomt kringlopen via antimatter-materialen.
- Spout en Mechanical Pump gebruiken Rotation Machine. Nieuwe Press/Basin-routes leveren Fluid Pipes en Empty Tubes vóór Sealed. De mechanische tube-route blijft beschikbaar.
- Er zijn 200 exacte handrecepten voor hout: één log/wood → twee planken. De saw-route behoudt zijn hogere opbrengst. Raw Copper-smelting/blasting, de glass-bottle-craft en XP-bottle-conversie van 10 mB zijn beschikbaar binnen de whitelist.
- Netherrack en Blackstone hebben afzonderlijke generatorselectoren. Er zijn nu zeventien lens/frame-combinaties, inclusief de bestaande Scoria/Scorchia-routes.
- Vier expliciete itemmodellen gebruiken dezelfde texture als hun startup-registratie. Vier namen van incomplete mechanismen zijn aangepast aan de actieve keten. De behouden PNG-bestanden zijn byte voor byte gelijk aan het oorspronkelijke pakket.
- Verouderde rebuild-scripts en questdocumentatie zijn vervangen door actuele controles en instructies. FTB Quests-, questicon-, SkillTree- en stagebestanden zijn buiten deze levering gehouden.

## Paintball-keten

Milling blijft de uitvoerbare route voor pigment plus de volgende paintball. De native Create 6.0.10 Item Drain ondersteunt in een Emptying-recept één itemresultaat en een vloeistofresultaat. Twee itemresultaten met nul vloeistof vereisen een aanvullende implementatie; deze ZIP claimt die variant niet. De Crushing-variant gebruikt afzonderlijke chance rolls en garandeert geen exclusieve keuze van precies één kleur.
