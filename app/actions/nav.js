export const SWITCH_TO_DUDOAN_LIST = 'SWITCH_TO_DUDOAN_LIST';
export const SWITCH_TO_NEWS_LIST = 'SWITCH_TO_NEWS_LIST';
export const SWITCH_TO_HOME = 'SWITCH_TO_HOME';
export const SWITCH_TO_TINH_THANH = 'SWITCH_TO_TINH_THANH';

export const GO_TO_HOME_DETAIL = 'GO_TO_HOME_DETAIL';
export const GO_TO_WEBLINK = 'GO_TO_WEBLINK';
export const GO_TO_TINHTHANH_DETAIL = 'GO_TO_TINHTHANH_DETAIL';
export const GO_BACK = 'Navigation/BACK';

export const GO_TO_KQXS_SCREEN = 'GO_TO_KQXS_SCREEN';
export const GO_TO_KQ_645 = 'GO_TO_KQ_645';
export const GO_TO_THONGKE_SCREEN = 'GO_TO_THONGKE_SCREEN';
export const GO_TO_THONGKE_DETAIL_SCREEN = 'GO_TO_THONGKE_DETAIL_SCREEN';
export const GO_TO_KQ_MAX4D_SCREEN = 'GO_TO_KQ_MAX4D_SCREEN';
export function switchDudoan() {
	return {
		type: SWITCH_TO_DUDOAN_LIST
	};
}

export function switchTinhThanhList() {
	return {
		type: SWITCH_TO_TINH_THANH
	}
}

export function switchHome() {
	return {
		type: SWITCH_TO_HOME
	};
}

export function switchToNews() {
	return {
		type: SWITCH_TO_NEWS_LIST
	};
}

export function goToHomeDetailDetail() {
	return {
		type: GO_TO_HOME_DETAIL
	};
}

export function goToTinhThanhDetail() {
	return {
		type: GO_TO_TINHTHANH_DETAIL
	};
}

export function goToTWebLinkl() {
	return {
		type: GO_TO_WEBLINK
	};
}

export function goBack() {
	return {
		type: GO_BACK
	}
}

export function gotoKQSXScreen () {
	return {
		type: GO_TO_KQXS_SCREEN
	}
}

export function gotoThongKeScreen () {
	return {
		type: GO_TO_THONGKE_SCREEN
	}
}

export function gotoThongKeDetailScreen (typeGo) {
	return {
		type: GO_TO_THONGKE_DETAIL_SCREEN,
		typeGo
	}
}

export function gotoKQ645 () {
	return {
		type: GO_TO_KQ_645
	}
}

export function gotoKQMax4D () {
	return {
		type: GO_TO_KQ_MAX4D_SCREEN
	}
}