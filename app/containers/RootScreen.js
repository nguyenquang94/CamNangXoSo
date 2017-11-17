import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, StyleProvider, Item, Input, Label, Form, Text, List, ListItem } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';

import { loadSession, updateUserInfo } from '../actions/me';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import NewsScreen from './NewsScreen';
import DuDoanScreen from './DuDoanScreen';
import FlashScreen from './FlashScreen';
import TinhThanhScreen from './TinhThanhScreen';

import { Define } from '../Define';

class RootScreen extends Component {

	render() {
		const { rootScreen } = this.props;
		switch (rootScreen) {
				case 'dashboard':
					return <FlashScreen />;
				case 'home':
					return <HomeScreen />;	
				case 'news':
					return <NewsScreen />;
				case 'dudoan':
					return <DuDoanScreen />;
				case 'tinhthanh':
					return <TinhThanhScreen />;
				default:
					return <HomeScreen />;
			}
	}
}

function mapStateToProps(state) {
	const {
		rootScreen,
		me
	} = state;

	return {
		rootScreen,
		me
	}
}

export default connect(mapStateToProps)(RootScreen)