# Teuzin Core OS — Build and Image Policy

The exact commands, dependencies and host environment must be established from the current upstream project during Milestone 1. Do not invent a build procedure.

## Required build documentation
Record host OS/version; required packages and toolchain versions; build entry point and configuration; image format and partition layout; boot assets; kernel, bootloader and device-tree provenance; download sources and integrity checks; disk/RAM requirements; build duration; output artifacts and checksums; known limitations and reproducibility status.

## Upstream-first
Pin and record upstream repository, branch/tag and commit SHA. Keep Teuzin changes separate where practical. Preserve licenses and provenance. Do not redistribute binary artifacts until licensing is understood.

## Image safety
Never flash or write an image to physical media without explicit approval. Identify target media by model, capacity and device identity; never rely on a guessed device path. Preserve the old recovery microSD and all backups. Provide verification and recovery instructions before an approved flash.

## Updates
The OS may detect and display updates but must not install automatically. Every installation requires explicit approval, including security updates, modules, kernel, bootloader and firmware.

## Validation
Build cleanly, retain logs and exact versions, verify image checksum and partition layout, test on disposable/test media before production, measure resource usage and document failures. Never label an untested build stable.
