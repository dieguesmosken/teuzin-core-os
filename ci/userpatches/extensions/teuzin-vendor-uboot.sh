# Teuzin Core OS build extension (does not modify bigtreetech/build sources). See docs/DECISIONS.md D-014.
# BRANCH=current builds mainline U-Boot v2024.01 + Armbian patches. Build 10 (base-lts-6.18.38-r10) printed
# nothing on the UART0 serial console of a BTT Pi V1.2, while the official BTT V3.1.0 image (BRANCH=vendor)
# booted on the same board. Keep the 6.18 LTS kernel, but build U-Boot and ATF from the same sources that
# BRANCH=vendor uses in config/sources/families/sun50iw9.conf, pinned by commit.
TEUZIN_UBOOT_SOURCE='https://github.com/bigtreetech/u-boot.git'
TEUZIN_UBOOT_COMMIT='f96e38b8232d9acf0c6ab7128dac2437ead29fa0' # branch bpi-v2026.04, checked 2026-11-23
TEUZIN_ATF_TAG='lts-v2.14.1'                                   # tag commit e82c7ced9e76aea35b176e608d67dfe5ebe1c569

function post_family_config_branch_current__teuzin_vendor_uboot() {
	display_alert "Extension: ${EXTENSION}: U-Boot from BTT vendor tree" "${TEUZIN_UBOOT_COMMIT}, ATF ${TEUZIN_ATF_TAG}" "info"
	declare -g BOOTSOURCE="${TEUZIN_UBOOT_SOURCE}"
	declare -g BOOTBRANCH="commit:${TEUZIN_UBOOT_COMMIT}"
	declare -g BOOTPATCHDIR='NEED-NOT' # the vendor tree already carries the CB1 board support; same as BRANCH=vendor
	declare -g ATFBRANCH="tag:${TEUZIN_ATF_TAG}"
}
