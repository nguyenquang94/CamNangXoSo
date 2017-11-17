import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Dimensions, View, StyleSheet } from 'react-native'

import SideMenuScreen from './SideMenuScreen';
import MainNavigator from '../navigators/MainNavigator';

import { setSideMenu, closeSideMenu, allowShowMenu } from '../actions/sidemenu';
import { Drawer } from 'native-base';
import HudView from 'react-native-easy-hud';
import { setHUD } from '../actions/hud';

export class Skeleton extends Component {
	constructor(props) {
		super(props);
		const w = Dimensions.get('window');
		this.state = {
			screenSize: w
		}
	}
	render() {
		const { dispatch, sidemenu } = this.props;
		return (
			<View style={{ flex: 1 }}>
				{ this._renderHUD() }
				<Drawer
					ref={(ref) => dispatch(setSideMenu(ref))}
					content={<SideMenuScreen navigator={this.navigator} />}
					onClose={() => dispatch(closeSideMenu())}
				>
					<MainNavigator />
				</Drawer>
				{ this._renderHUD() }
			</View>
		);
	}

	_renderHUD() {
		const { dispatch, sidemenu } = this.props;
		return <HudView
		             ref={(hud) => dispatch(setHUD(hud))}
		        />
	}

	_onLayout(event) {
		var {x, y, width, height} = event.nativeEvent.layout;
		const { dispatch, sidemenu } = this.props;
		this.props.dispatch(allowShowMenu(width >= 500));
	}
}

const styles = StyleSheet.create({
	hScreen: {
		flex: 1,
		flexDirection: 'row',
	}
});

function mapStateToProps(state) {
	const {
		rootScreen,
		sidemenu,
	} = state;

	return {
		rootScreen,
		sidemenu
	}
}

export default connect(mapStateToProps)(Skeleton)