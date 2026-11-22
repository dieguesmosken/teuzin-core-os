# Teuzin Core OS — Project Overview

## Identity
- Project: Teuzin Core OS
- Initial product: Teuzin Core OS 1.0 — Home Infrastructure
- Brand: Teuzin Labs
- Repository: https://github.com/dieguesmosken/teuzin-core-os
- Upstream: https://github.com/bigtreetech/CB1
- Hardware reference: https://github.com/bigtreetech/BTT-Pi

## Goal
Create a lightweight, reliable and security-conscious home infrastructure OS derived from the official BIGTREETECH CB1 ecosystem. It targets the BIGTREETECH Pi V1.2, with constrained resources; reliability, low memory use, recoverability and a small attack surface take priority.

## Target hardware context
Planning specifications for the BTT Pi V1.2 / CB1 family: Allwinner H616, quad-core ARM Cortex-A53 around 1.5 GHz, 1 GB DDR3L RAM, 100 Mbps Ethernet, 2.4 GHz Wi-Fi and microSD storage. Confirm exact board revision, power options, interfaces and drivers against official documentation before implementation.

## Product experience
- Teuzin Core Web: primary lightweight responsive dashboard for phone and desktop.
- Cockpit: complementary Linux administration interface.
Teuzin Core Web must not depend on Cockpit. It uses a narrow authenticated local API with explicit permissions and audit logging, never an unrestricted shell.

## Planned core capabilities
- Lightweight Linux base derived from the official CB1 build ecosystem.
- Pi-hole for home DNS filtering.
- Tailscale for private remote connectivity.
- SSH for controlled administration.
- Wake-on-LAN for the user's Ethernet-connected PC, subject to firmware/NIC validation.
- Teuzin Remote Agent for status and allowlisted operations.
- Teuzin Core Web and local API.
- Cockpit as complementary administration.
- Teuzin Core CLI, Monitor and Recovery.
- Authenticated Cloudflare Worker integration and existing Alexa Skill Teuzin AI.
- Teuzin Notify.

## Optional install-on-demand modules
Mosquitto MQTT, Restic, Unbound, Cloudflare Tunnel, Teuzin Notify, file sharing (evaluate Samba) and Node-RED. They are not all enabled by default. A Teuzin Core Modules manager should show status, dependencies, resource estimates, install/enable/disable/update/remove actions and validation. Assess combinations against the 1 GB RAM limit.

Home Assistant is initially an external integration, not a service hosted on this board.

## Remote access and automation
Use Tailscale for private access. Do not expose SSH, RDP, Cockpit or internal APIs directly to the internet. Cloudflare Tunnel is optional and may expose only explicitly approved HTTPS endpoints. The board should initiate authenticated outbound HTTPS communication to the Worker. Alexa operations must be allowlisted; initial candidate is WoL. WoL does not select Windows or Pop!_OS in a dual-boot system. Never accept arbitrary remote commands.

## Delivery
Research first, then implement in approved milestones. Preserve upstream history and licenses, test clean builds, and document image verification and recovery before any production installation.
