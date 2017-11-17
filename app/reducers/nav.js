import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { MainNavigator } from '../navigators/MainNavigator';
import { NavigationActions } from 'react-navigation';

import {
	SWITCH_TO_ABSENCE_LIST,
	GO_TO_HOME_DETAIL,
	SWITCH_TO_NEWS_LIST,
	SWITCH_TO_DUDOAN_LIST,
	SWITCH_TO_HOME,
	SWITCH_TO_TINH_THANH,
	GO_TO_TINHTHANH_DETAIL,
	GO_TO_WEBLINK,
	GO_TO_KQXS_SCREEN,
	GO_TO_THONGKE_SCREEN,
	GO_TO_THONGKE_DETAIL_SCREEN,
	GO_TO_KQ_645,
	GO_TO_KQ_MAX4D_SCREEN

} from '../actions/nav';

const firstAction = MainNavigator.router.getActionForPathAndParams('Root');
const tempNavState = MainNavigator.router.getStateForAction(firstAction);


export function nav(state = tempNavState, action)
{
	switch (action.type)
	{
		case GO_TO_HOME_DETAIL: 
			return MainNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: "HomeDetail" }),
				state
			);
		case GO_TO_TINHTHANH_DETAIL: 
			return MainNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: "TinhThanhDetail" }),
				state
			);
		case GO_TO_WEBLINK: 
			return MainNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: "ShowWebLink" }),
				state
			);
		case 'Navigation/BACK':
			return MainNavigator.router.getStateForAction(
				NavigationActions.back(),
				state
			);
		case GO_TO_KQXS_SCREEN:
			return MainNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: "KQXS" }),
				state
			);
		case GO_TO_KQ_645:
			return MainNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: "KQ645" }),
				state
			);
		case GO_TO_THONGKE_SCREEN:
			return MainNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: "ThongKe" }),
				state
			);
		case GO_TO_KQ_MAX4D_SCREEN:
			return MainNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: "KQMax4D" }),
				state
			);
		case GO_TO_THONGKE_DETAIL_SCREEN:
			return MainNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: "ThongKeDetail" , params: {type: action.typeGo}}),
				state
			);
		default:
			return state;
	}
}

export function rootScreen(state = "dashboard", action) {
	switch (action.type) {
		case SWITCH_TO_HOME:
			return "home";
		case SWITCH_TO_NEWS_LIST:
			return "news";
		case SWITCH_TO_DUDOAN_LIST:
			return "dudoan";
		case SWITCH_TO_TINH_THANH:
			return "tinhthanh";
		default:
			return state;
	}
}