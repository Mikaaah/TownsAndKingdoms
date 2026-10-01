# T&K3 Development Workflow

## Source of truth

- GitHub: technical/design source of truth
- Trello: implementation status, tasks and next actions
- in-game test instance: runtime validation

A design is not considered technically complete merely because it exists in documentation; runtime scripts/assets still need to be present and tested in the pack.

## AI-assisted development

AI is used to streamline development work, not to replace the design process.

The modpack direction, systems, balance intent, class structure, progression and implementation choices are still manually decided and reviewed.

AI support is mainly used for:
- documenting already-decided systems
- structuring and refining implementation details
- writing development responses/announcements
- organizing Trello/GitHub work
- reviewing scripts/configs and identifying likely issues
- accelerating repetitive drafting and migration work

The workflow is not "generate a modpack automatically." Decisions are worked out first; AI helps turn those decisions into structured, reviewable development output.

## Commit discipline

Prefer commits that:
- state the subsystem changed
- separate documentation-only updates from runtime changes when practical
- do not copy T&K2 reference files directly into the T&K3 runtime
- keep experimental worldgen/compatibility work clearly marked until tested
- update source-of-truth docs when architecture changes
