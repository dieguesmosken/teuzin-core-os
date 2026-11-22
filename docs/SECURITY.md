# Teuzin Core OS — Security Policy

## Objectives
Protect the home network, accounts, private data, backups and remote-control functions. Minimize exposed services and privileged code.

## Identity and secrets
Use least privilege and unique credentials. Never hardcode or commit passwords, tokens, API keys, private keys, recovery codes or personal data. Keep secrets outside the repository and logs. Use scoped credentials and revoke exposed credentials. Authentication does not replace per-operation authorization.

## Network
Do not port-forward SSH, RDP, Cockpit, MQTT administration or local APIs. Use Tailscale for private administration. Cloudflare Tunnel, if enabled, exposes only the specifically approved HTTPS endpoint. Default firewall policy should deny unsolicited inbound traffic except documented required services. Never configure an open recursive DNS resolver.

## Remote operations
Never accept arbitrary shell commands, scripts, executable paths or command fragments from Alexa, Cloudflare, MQTT or web clients. Use fixed operation identifiers and typed bounded arguments. Validate identity, authorization, expiry, nonce/replay protection and arguments. Rate-limit sensitive operations. Audit operation, timestamp and outcome without logging secrets. Fail closed.

## Updates and supply chain
Updates are manual and approval-gated. Verify source, signatures/checksums where available, version, dependencies and compatibility. Preserve third-party notices. Avoid opaque downloads and untrusted root scripts. Record provenance for base images, kernel, bootloader and packages.

## Data and backups
Restic backups must be encrypted and restore-tested. Keep backup credentials separate from backup data. Never prune, overwrite or delete existing backups without explicit approval. Do not commit private configs, environment files, tokens, keys or backup contents. Define retention before enabling pruning.

## Safe operations
Prefer read-only inspection. Never format or write to the old recovery microSD. Before any future approved imaging, verify the target device by identity, not guessed device path. Destructive operations require a clear plan, verified target and explicit approval. Review diffs and scan for secrets before commits.

## Vulnerability handling
Do not publish exploit details or secrets in public issues. Coordinate remediation responsibly and document fixed versions and user impact.
