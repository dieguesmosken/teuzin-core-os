# Milestone 2 — Base System (LTS kernel track)

Status: **DRAFT for owner review** (not committed). Scope decided by the owner on 2026-11-22: start with the **LTS kernel**; a newer-kernel track is planned only (see `docs/KERNEL-ROADMAP.md`).

## Goal
Select and validate a verified base for BTT Pi V1.2 (Allwinner H616, 1 GB RAM): Debian 13 minimal + kernel 6.18 LTS, built from pinned inputs, with hostname, users, SSH, network and boot validated on real hardware. Preserve recovery media (D-009).

## Selected track
- Build system: `bigtreetech/build`, branch `bpi-main-26.08.0`, pinned by commit SHA (checked 2026-11-22: `555de9b208cb136b26a9c9d2d40aec952abbc444`).
- Board: `bigtreetech-cb1`, `BRANCH=current` (kernel 6.18), Debian trixie, minimal, CLI.
- Control image (read-only comparison, not the product): official Armbian CB1 trixie minimal.

## Verified facts about the `current` target (from build repo at the pinned SHA)
- Kernel: mainline stable 6.18.y plus Armbian `archive/sunxi-6.18` patches and the CB1 DTS (`sun50i-h616-bigtreetech-cb1-sd`); config `linux-sunxi64-current.config`. The source ref is a moving branch, so it must be pinned in `UPSTREAM.lock`.
- U-Boot: **mainline v2024.01 + Armbian patches**, with the CB1 defconfig/DTS added by `board_bigtreetech-cb1/bigtreetech-cb1-dts-and-deconfig.patch`. This is older than the vendor U-Boot (`bpi-v2026.04`) used by `BRANCH=vendor`. Whether it is acceptable is a bench-test question, not an assumption.
- ATF: `lts-v2.12.9` for `current` (vendor uses `lts-v2.14.1`).
- Wi-Fi: RTL8189FS built as module; availability on 6.18 must be confirmed on hardware.

## Limits of this environment (verified 2026-11-22)
The cloud workspace cannot run the build or the bench test: no route to deb.debian.org, apt.armbian.com or kernel.org, 2 CPUs / 7 GB RAM / ~30 GB free, and no board. Build and flashing must happen on an owner-provided Linux host (Ubuntu 24.04, ≥8 GB RAM, ~50 GB free) and a new spare microSD.

## Work packages
1. **Pin inputs** — create `UPSTREAM.lock` (build SHA, kernel 6.18.y exact version, U-Boot ref, ATF tag, Debian snapshot/date, host OS). Documentation only.
2. **Build on owner host** — `./compile.sh` with `BOARD=bigtreetech-cb1 BRANCH=current RELEASE=trixie BUILD_MINIMAL=yes BUILD_DESKTOP=no`; record log, checksums, artifact names. Exact flags to be confirmed against `compile.sh --help` at the pinned SHA.
3. **Bench test (needs approval before any flashing)** — flash a **new** microSD only; never the old recovery card. Validate: boot to login, serial console, hostname, user/SSH (key-only), Ethernet (including large transfers, issue #243 pattern), Wi-Fi fallback, `dmesg` errors, temperature/stability soak, power-cycle behavior.
4. **Compare with control** — same checks on official Armbian CB1 trixie minimal; decide whether Option B holds or Option C is needed (owner decision, D-002).
5. **Report** — results, known issues, remaining risks; owner approval gates Milestone 3.

## Acceptance criteria
- `UPSTREAM.lock` complete and reproducible from a clean host.
- Boot, SSH, Ethernet and Wi-Fi validated on hardware, evidence attached (logs, not claims).
- 24 h stability soak without kernel Oops or link loss, or failures documented.
- Recovery card and backups untouched.

## Prerequisites needing owner input
- Linux build host available (yes/no, specs).
- New high-endurance microSD (never the recovery card).
- Board revision (V1.2 vs V1.2.1).
- Ethernet as production link, Wi-Fi as fallback (confirm).
- Authorization wording in `CLAUDE.md` ("Milestone 1 only") to be updated by the owner.

## Out of scope
Branding, Pi-hole, Tailscale, Core services, optional modules, newer-than-LTS kernel, public distribution.
