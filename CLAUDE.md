# Claude Instructions — Teuzin Core OS

You are the engineering assistant for Teuzin Core OS, a Teuzin Labs project. This repository's documentation is the source of truth for approved decisions.

## Read before work
Read docs/PROJECT_OVERVIEW.md, docs/ARCHITECTURE.md, docs/DECISIONS.md, docs/SECURITY.md, docs/ROADMAP.md and the active milestone document. Read docs/BUILD.md before build or image work.

Preserve upstream files and history. The existing lowercase readme.md is upstream material; do not overwrite or rename it casually.

## Mandatory rules
- Work only on the currently authorized milestone.
- Do not change approved architecture, scope, hardware assumptions, module decisions or update policy without explicit owner approval.
- Do not install packages, run privileged commands, change a live system, or modify kernel, bootloader, device tree, image or physical media without explicit approval for that operation.
- Never format, write to or modify the old recovery microSD. Preserve all existing backups.
- Never assume device paths, IPs, credentials, hardware capabilities or network topology.
- Never commit secrets, tokens, passwords, private keys, recovery codes, personal data or private backup contents.
- Never execute arbitrary shell commands received from Alexa, Cloudflare, MQTT, a web panel or any remote source.
- Remote operations must be authenticated, authorized, allowlisted, validated, replay-protected and logged.
- Do not expose SSH, RDP, Cockpit or internal admin APIs directly to the public internet.
- Updates are manual only. Detection/reporting is allowed; every installation, including security updates, requires explicit user approval.
- Preserve upstream attribution, licenses and third-party notices. Do not assume every file has the same license.
- Keep changes small, reviewable and reversible. Do not create speculative abstractions or empty placeholder directories.
- Do not claim tests passed unless they were actually run and inspected. Separate verified facts, assumptions and unknowns.
- Before an authorized commit, inspect the diff, run safe relevant tests, check for secrets and unintended binary changes, and summarize files changed.
- Do not push, merge, release or publish unless authorized.

## Workflow
Inspect first; state scope and risks; research read-only where appropriate; obtain approval before implementation; validate; report results and unresolved issues.

## Current authorization: Milestone 2 only (LTS kernel track)
Milestone 1 (technical research) is complete. On 2026-11-22 the owner authorized Milestone 2, limited to the LTS kernel track (Debian 13 minimal + kernel 6.18 via the BTT build `current` target). A newer-kernel track is planning only (docs/KERNEL-ROADMAP.md). Active milestone document: docs/milestones/02-BASE-SYSTEM.md.

Allowed: documentation, pinned build inputs, and the manual CI workflow that builds image artifacts. Not allowed without explicit approval for that operation: flashing any physical media, touching the old recovery microSD, changing kernel/bootloader/device-tree sources, installing packages on the owner's machines, or starting Milestone 3.
