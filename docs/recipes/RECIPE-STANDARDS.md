# Recipe Standards

## Change types
REPLACE / REMOVE / REDIRECT / LATE-GATE / OPTIONAL / DECORATIVE

Avoid broad global replacements unless blast radius is documented.

Rules:
- group recipes by chapter/system
- centralize reusable generators
- use stable recipe IDs where possible
- use registry IDs, never display names
- tags only when progression-safe
- document every removed canonical recipe
- update dependency ledger for critical items

Planned KubeJS layout:
`server_scripts/recipes/`
`server_scripts/systems/`
`server_scripts/removals/`
`startup_scripts/`
`client_scripts/`
`data/tnk/`
`assets/tnk/`
