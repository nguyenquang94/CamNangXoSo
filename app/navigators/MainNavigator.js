import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import RootScreen from '../containers/RootScreen';
import HomeScreen from '../containers/HomeScreen';
import HomeDetailScreen from '../containers/HomeDetailScreen';
import NewsScreen from '../containers/NewsScreen';
import DuDoanScreen from '../containers/DuDoanScreen';
import TinhThanhScreen from '../containers/TinhThanhScreen';
import TinhThanhDetailScreen from '../containers/TinhThanhDetailScreen';
import ShowWebLink  from '../containers/ShowWebLink';
import KQXSDetailScreen from '../containers/KQXSDetailScreen';
import ThongKeScreen from '../containers/ThongKeScreen';
import ThongKeDetailScreen from '../containers/ThongKeDetailScreen';
import KQ645Screen from '../containers/KQ645Screen';
import KQMax4DScreen from '../containers/KQMax4DScreen';

export const MainNavigator = StackNavigator({
	Root: { screen: RootScreen },
	Home: { screen: HomeScreen },
	HomeDetail: { screen: HomeDetailScreen},
	News: { screen: NewsScreen},
	DuDoan: { screen: DuDoanScreen},
	TinhThanh: { screen: TinhThanhScreen},
	TinhThanhDetail: { screen: TinhThanhDetailScreen},
	ShowWebLink: { screen: ShowWebLink},
	KQXS: { screen: KQXSDetailScreen},
	ThongKe: { screen: ThongKeScreen},
	ThongKeDetail: { screen : ThongKeDetailScreen},
	KQ645: { screen: KQ645Screen},
	KQMax4D: { screen: KQMax4DScreen},
}, {
	headerMode: 'none'
});

class MainNavigatorScreen extends Component {
	render() {
		return (
			<MainNavigator navigation={addNavigationHelpers({
				dispatch: this.props.dispatch,
				state: this.props.nav,
			})} />
		);
	}
}

function mapStateToProps(state) {
	return {
		nav: state.nav
	}
}

export default connect(mapStateToProps)(MainNavigatorScreen);