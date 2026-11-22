# Teuzin Core OS — Roadmap

Milestones are sequential approval gates. Completion does not automatically authorize the next milestone.

1. **Technical research:** repository/upstream provenance, build system, hardware compatibility, release stability, licensing, resource feasibility, security and recovery. Deliver sourced report and plan. No implementation.
2. **Base system:** select verified base; reproducible build inputs; hostname, users, SSH, network and boot validation. Preserve recovery media.
3. **Customization foundation:** approved branding, system configuration, Core CLI and service conventions.
4. **Core network services:** Pi-hole and Tailscale; test one client before router DHCP changes.
5. **Administration and observability:** local API, Teuzin Core Web, Monitor and complementary Cockpit; implement authz and audit before privileged actions.
6. **Remote control and notifications:** Remote Agent, authenticated Worker, WoL, Alexa Teuzin AI and Teuzin Notify. Start with narrow WoL allowlist.
7. **Optional modules:** Modules manager; evaluate MQTT, Restic, Unbound, Cloudflare Tunnel, file sharing/Samba and Node-RED individually; measure resources.
8. **Build and clean-image validation:** automate image build, preserve licenses, test clean build, document checksums, flashing precautions, first boot and recovery. No physical flashing without explicit approval.
9. **Stabilization and 1.0:** reliability, security, update, backup/restore and resource tests; release notes, limitations and supported recovery.

A milestone is complete only when deliverables, tests, known issues and remaining risks are documented and the owner approves progression.
