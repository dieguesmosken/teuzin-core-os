# Teuzin Core OS build extension (does not modify bigtreetech/build sources).
# The BTT fork's install_can0() writes /etc/network/interfaces.d/can0, which needs ifupdown.
# With BUILD_MINIMAL=yes on trixie, ifupdown is not installed (it is only in packages.additional),
# so the rootfs step fails. Install just ifupdown into the cached rootfs.
function extension_prepare_config__teuzin_add_ifupdown() {
	display_alert "Extension: ${EXTENSION}: adding package to rootfs" "ifupdown" "info"
	add_packages_to_rootfs ifupdown
}
