# Teuzin Core OS — Architecture

## Constraints
Target BTT Pi V1.2 / CB1-class ARM64 hardware with 1 GB RAM. Prefer native lightweight services over Docker initially. Keep the base small and optional services install-on-demand. Separate Teuzin-specific code from upstream artifacts.

## Layers
1. Upstream platform: official CB1 image/build system, boot assets, kernel, device tree, board configuration and vendor documentation.
2. Teuzin layer: branding, first-boot configuration, Core CLI, Monitor, Recovery, Modules manager, Web UI, local API, systemd units, tests and documentation.
3. Core services: Pi-hole, Tailscale, OpenSSH, Teuzin Remote Agent, WoL and complementary Cockpit.
4. Optional modules: Mosquitto, Restic, Unbound, Cloudflare Tunnel, Teuzin Notify, file sharing/Samba and Node-RED.
5. External integrations: Cloudflare Worker, Alexa Skill Teuzin AI, Windows 11 Pro and Pop!_OS PC, Android clients.

## Remote command flow
Alexa Skill -> authenticated HTTPS request to Cloudflare Worker -> board-initiated authenticated HTTPS polling/channel -> Teuzin Remote Agent validates identity, authorization, freshness, replay protection, operation and typed arguments -> fixed allowlisted operation such as WoL -> minimal audit event -> bounded result returned.
Never execute arbitrary shell text, scripts or user-supplied paths from remote requests.

## Web and local API
Teuzin Core Web is the primary UI; Cockpit is not a dependency. The local API must authenticate, authorize per operation, validate inputs, protect sessions, rate-limit sensitive actions, log security events without secrets, and bind to loopback or trusted private interfaces by default. No unrestricted shell endpoint.

## DNS and network
Pi-hole is the planned LAN DNS. Test one client before changing router DHCP. Reserve an address only after network discovery; do not assume IPs. Tailscale clients may use Pi-hole as tailnet DNS after validation. Unbound is optional as Pi-hole's upstream recursive resolver. Never operate open public DNS. Pi-hole does not necessarily block in-app ads such as YouTube.

## Remote desktop and WoL
Evaluate Windows 11 Pro RDP over Tailscale and RustDesk or another compatible option for Pop!_OS COSMIC/Wayland. Never expose RDP/SSH publicly. WoL depends on NIC, motherboard, firmware, power state and OS configuration; it does not choose a dual-boot entry.

## Updates and recovery
Updates may be detected and displayed but installation is manual and approval-gated, including security, packages, modules, kernel, bootloader and firmware. Show versions, changes, dependencies, risks, space and recovery plan before applying. Back up relevant configuration and validate services after approval. Do not promise rollback unless the selected design demonstrably supports it.

## Resource policy
Measure idle and peak CPU, RAM, storage, temperature and network use. Do not assume all optional modules can run simultaneously. Document measured values, not estimates presented as facts.
