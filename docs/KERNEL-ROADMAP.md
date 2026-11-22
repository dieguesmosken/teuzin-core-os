# Kernel Roadmap

Status: **DRAFT for owner review** (not committed). Planning only; no implementation.

## Policy
- Product kernel = a **longterm (LTS)** series with security fixes. Current choice: **6.18 LTS** via the BTT build `current` target (supported to Dec 2028 per kernel.org release list, checked 2026-11-22).
- Newer kernels are a separate, later track and never replace the LTS base without owner approval and bench evidence.

## Tracks
| Track | Kernel | Status | Notes |
|---|---|---|---|
| A (now) | 6.18 LTS (`current`) | Milestone 2 | CB1 DTS and RTL8189FS config present at pinned SHA; hardware validation pending |
| B (fallback) | 6.12 LTS (`legacy`) | Reserve | Supported to 2028; use only if 6.18 fails bench tests |
| C (later) | Newest stable (7.1+) | Planning only | No CB1 DTS or vendor support in the BTT build; needs DTS and driver porting |
| Rejected | 7.0 (`vendor`/`edge`) | EOL 2026-06-27 | Used by official V3.1.0; no longer receives fixes |

## Entry criteria for Track C (all required)
1. Track A is stable on hardware and released/approved by the owner.
2. A stable series exists that has either an upstream CB1/H616 DTS path or a small, reviewable port.
3. Wi-Fi (RTL8189FS), Ethernet (STMMAC + internal PHY), SD boot and PMIC (AXP313A) work in a bench test on spare media.
4. Rollback to Track A is documented and tested (recovery microSD preserved, D-009).

## Evaluation plan (when authorized)
1. Diff 6.18 → target kernel for sun50i-h616 DTS, STMMAC, AXP313A, MMC/SDIO changes.
2. Build on the owner host with pinned refs; log to `UPSTREAM.lock`-style file for the experiment.
3. Bench test on a separate new microSD with the same checklist as Milestone 2.
4. Decision record (D-0xx): adopt, defer, or reject, with evidence.

## Rules
- Kernel experiments never touch the production card or the recovery card.
- Every kernel ref used in a build is pinned by version/commit; moving branches are not accepted.
- Security updates stay within the LTS series; kernel upgrades are manual (D-005).
