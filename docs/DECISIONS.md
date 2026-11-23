# Teuzin Core OS — Approved Decisions

This is the record of owner-approved decisions. Do not change them unilaterally. Propose changes with rationale, impact and alternatives.

## D-001 — Identity
Approved: Teuzin Core OS; initial product Teuzin Core OS 1.0 — Home Infrastructure; brand Teuzin Labs.

## D-002 — Upstream strategy
Approved: customize/fork the official BIGTREETECH CB1 ecosystem. Do not rewrite the entire kernel or distribution at the start. Keep Teuzin scripts, configs, services, patches and docs separate where practical. Preserve upstream history, licenses and notices.

## D-003 — Administration
Approved: Teuzin Core Web is primary; Cockpit is complementary. The web panel must function without Cockpit.

## D-004 — Optional modules
Approved as install-on-demand: Mosquitto MQTT, Restic, Unbound, Cloudflare Tunnel, Teuzin Notify, file sharing (evaluate Samba) and Node-RED. Not all installed or active by default; account for 1 GB RAM.

## D-005 — Updates
Approved: manual updates only. Detection/reporting is allowed. No automatic installation, including security updates. Explicit approval required for packages, modules, kernel, bootloader and firmware. Present changes, versions, dependencies, risks, storage needs and recovery plan first.

## D-006 — Lightweight deployment
Approved direction: prefer native services over Docker initially due to limited RAM. Revisit only with evidence and approval.

## D-007 — Remote access
Approved: Tailscale for private remote access. Do not expose SSH, RDP, Cockpit or internal admin APIs directly to the public internet. Cloudflare Tunnel is optional and narrowly scoped.

## D-008 — Remote automation
Approved: Alexa/Worker/Agent communication must be authenticated and allowlisted. No arbitrary shell execution. Initial operation candidate is WoL.

## D-009 — Recovery media and backups
Approved: preserve the old microSD containing the previous Pi-hole/Tailscale setup as an untouched recovery reference. Do not format or modify it. Never overwrite existing backups without explicit approval.

## D-010 — Milestone workflow
Approved: research before implementation; work incrementally; test and review each milestone; commit meaningful progress in clear milestone-sized commits after review and authorization.

## D-011 — Derivative project, no upstream contributions
Approved by the owner on 2026-11-22: this repository is a derivative of bigtreetech/CB1, not a contribution fork. Changes are never sent back to the original. Do not open pull requests, issues or comments on bigtreetech repositories from this project. Upstream attribution and licenses are preserved (see CLAUDE.md).

## D-012 — Release policy
Approved by the owner on 2026-11-22: every successful CI image build is published automatically as a GitHub **pre-release** and is considered untested. Only after the owner reports that a build was tested on hardware is it promoted to a normal release (workflow `promote-release`). Images are never flashed by the assistant; the owner flashes new media only.

## D-013 — Project landing page and website
Approved by the owner on 2026-11-22: a custom repository landing page (`.github/README.md`, PT-BR and EN; the upstream `readme.md` is kept untouched) and a static project website deployed by GitHub Actions to GitHub Pages under a teuzin.com.br subdomain. The site lists releases, roadmap, install guide and build status. Branding details remain subject to Milestone 3 review.

## D-014 — Bootloader for the LTS track
Approved by the owner on 2026-11-23: keep the 6.18 LTS kernel (`BRANCH=current`), but build U-Boot and ATF from the sources that `BRANCH=vendor` uses: `bigtreetech/u-boot` branch `bpi-v2026.04` pinned by commit, and ATF `lts-v2.14.1`. Implemented as the build extension `ci/userpatches/extensions/teuzin-vendor-uboot.sh`; no bigtreetech source is modified.
Evidence (bench, 2026-11-23, BTT Pi V1.2 with AC300 Ethernet PHY): build 10 (`base-lts-6.18.38-r10`, mainline U-Boot v2024.01) printed no line on the UART0 serial console (115200) and brought up neither HDMI nor Ethernet. The official BTT image V3.1.0 (`CB1_Debian13_minimal_kernel7.0_20260430`, `BRANCH=vendor`) booted on the same board and card reader setup with serial, Ethernet and HDMI working. Pending confirmation: r10 with only the bootloader area replaced by the V3.1.0 one.
Alternative not taken: switch the whole image to `BRANCH=vendor` (BTT kernel 7.0), which would leave the LTS track.

## Change control
If research conflicts with an approved decision, document the conflict and alternatives and ask the owner. Do not silently reinterpret approval.
