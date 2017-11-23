import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, StyleProvider, Item, Input, Label, Form, Text, List, ListItem } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';

import { openSideMenu, closeSideMenu } from '../actions/sidemenu'
import { switchTinhThanhList, switchToUserList, switchToNews, switchDudoan, switchHome, goToTWebLinkl } from '../actions/nav'
import { gotoKQSXScreen, gotoThongKeScreen, gotoKQ645, gotoKQMax4D } from '../actions/nav'
import { requestNews } from '../actions/me';
import { Linking, Image } from 'react-native';

class SideMenuScreen extends Component {
	render() {
		const { me, dispatch } = this.props;
		return (
			<StyleProvider style={getTheme(material)}>
			    <Container>
			        <Header style={{backgroundColor: '#FD9727', height: 100}}>
						<Left>
							<Image
								style={{width: 100, height: 100}}
								source={require('../images/icon.png')}
							/>
						</Left>
			            <Body>
			                <Title style={{marginLeft: 10}}>Cẩm nang sổ xố</Title>
			            </Body>
			        </Header>
			        <Content style={{ backgroundColor: "#FFFFFF" }}>
			        	<List>
			        		<ListItem icon button onPress={() => {
									dispatch(switchHome()); 
									dispatch(closeSideMenu());
								}}>
								<Body>
									<Text>Xổ Số Truyền Thống</Text>
								</Body>
								<Right>
									<Icon name='md-arrow-round-forward' />
								</Right>
							</ListItem>
							<ListItem icon button onPress={() => {
									dispatch(gotoThongKeScreen()); 
									dispatch(closeSideMenu());
								}}>
								<Body>
									<Text>Thống Kê</Text>
								</Body>
								<Right>
									<Icon name='md-arrow-round-forward' />
								</Right>
							</ListItem>
							<ListItem icon button onPress={() => {
									dispatch(gotoKQ645()); 
									dispatch(closeSideMenu());
								}}>
								<Body>
									<Text>Vietlott Mega 645</Text>
								</Body>
								<Right>
									<Icon name='md-arrow-round-forward' />
								</Right>
							</ListItem>
							<ListItem icon button onPress={() => {
									dispatch(gotoKQMax4D()); 
									dispatch(closeSideMenu());
								}}>
								<Body>
									<Text>Vietlott Max 4D</Text>
								</Body>
								<Right>
									<Icon name='md-arrow-round-forward' />
								</Right>
							</ListItem>
			        		<ListItem icon button onPress={() => {
									dispatch(switchTinhThanhList()); 
			        				dispatch(closeSideMenu());
								}}>
								<Body>
									<Text>Sổ xố tỉnh thành</Text>
								</Body>
								<Right>
									<Icon name='md-arrow-round-forward' />
								</Right>
							</ListItem>
			        		<ListItem icon button onPress={() => {
			        				dispatch(closeSideMenu());
			        				dispatch(switchToNews());
								}}>
								<Body>
									<Text>Tin Tức</Text>
								</Body>
								<Right>
									<Icon name='md-arrow-round-forward' />
								</Right>
							</ListItem>
							<ListItem icon button onPress={() => {
			        				dispatch(closeSideMenu());
			        				dispatch(switchDudoan());
								}}>
								<Body>
									<Text>Dự Đoán Kết Quả</Text>
								</Body>
								<Right>
									<Icon name='md-arrow-round-forward' />
								</Right>
							</ListItem>
			        	</List>
			        </Content>
			        <Footer style={{backgroundColor: '#FD9727'}}>
			            <FooterTab style={{backgroundColor: '#FD9727'}}>
			                <Button full style={{backgroundColor: '#FD9727'}}>
			                    <Text style={{color: 'black'}}>Version Beta 2.0</Text>
			                </Button>
			            </FooterTab>
			        </Footer>
			    </Container>
			</StyleProvider>
		);
	}

	_openLink(item) {
		global.link = 'http://ketqua.net/lich-quay-thuong';
		global.title = 'Lịch Quay Thưởng';
		global.type = 1;
		this.props.dispatch(goToTWebLinkl());
	}

	goToLinkWeb(link){
		Linking.openURL(link);
	}
}


function mapStateToProps(state) {
	const {
		rootScreen,
		me
	} = state;

	return {
		rootScreen,
		me,
	}
}

export default connect(mapStateToProps)(SideMenuScreen)