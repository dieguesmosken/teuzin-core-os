# Milestone 1 — Technical Research

**Status:** Not started  
**Authorization:** Read-only research and inspection only  
**Implementation approval:** Not granted

## Objective
Produce an evidence-based technical assessment and implementation proposal for Teuzin Core OS 1.0 on BIGTREETECH Pi V1.2 / CB1.

## Research tasks

### A. Repository and upstream
- Inspect repository tree, branches, tags, history and fork metadata.
- Confirm exact upstream, common ancestor, divergence and current release.
- Inspect related bigtreetech/BTT-Pi repository for hardware-specific differences.
- Inventory manuals, images, licenses and notices.
- Preserve upstream files, including lowercase readme.md.

### B. Build system
- Identify scripts, configuration, toolchain, host requirements and image process.
- Determine reproducibility and maintenance status.
- List dependencies, external downloads, integrity checks and privilege requirements.
- Identify safe extension points for custom packages, services, files and branding.

### C. Hardware compatibility
Verify from official sources: exact board revision, SoC, CPU architecture, RAM, storage, boot path, Ethernet controller/speed/driver, Wi-Fi chipset/bands/driver/firmware, power inputs, GPIO/USB/serial and relevant kernel/device-tree support.

### D. OS release stability
Compare official image releases/tags: Debian base, support status, kernel, bootloader, security maintenance, known Ethernet/Wi-Fi/boot/storage/device-tree issues and release regressions. Recommend a base only after weighing stability, support and recovery. Cite release notes and issue trackers.

### E. Resource feasibility
Assess base OS, SSH, Pi-hole, Tailscale, Cockpit, Teuzin Web/API/Agent and optional Mosquitto, Restic, Unbound, Cloudflare Tunnel, Samba/file sharing and Node-RED. Estimate or measure memory/storage use and recommend viable combinations; do not assume all modules can run together.

### F. Security and recovery
Assess LAN/tailnet/web/Alexa/Worker/tunnel threat model, authentication, authorization, secret storage, firewall, audit, manual updates, rollback limits, backup/restore and microSD endurance risks.

## Deliverables
1. Executive summary and recommended base version.
2. Repository/upstream map and commit provenance.
3. Build pipeline and dependencies.
4. Verified hardware compatibility matrix.
5. Release comparison with evidence.
6. Service/resource feasibility table.
7. Security and recovery risk register.
8. Proposed repository/build architecture.
9. Milestone plan with dependencies and acceptance criteria.
10. Open questions requiring owner decisions.

Cite primary sources with URLs and date checked. Separate verified facts, assumptions and unknowns. Do not copy large sections of upstream documentation.

## Prohibited in this milestone
No code changes or implementation files; no package installation; no kernel, bootloader, device-tree, image or partition changes; no flashing or writing to physical storage; no touching old microSD or backups; no router, DNS, firewall or live network changes; no automatic commits or pushes.

## Completion gate
Present the report and proposed plan. Stop and wait for explicit owner approval before Milestone 2.
