import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Header, Title, Content, Footer, FooterTab, Spinner, Tab, Tabs, Button, Left, Right, Body, Icon, StyleProvider, Item, Input, Label, Form, Text, List, ListItem } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';
import { requestHomeDetail } from '../actions/me'
import { View, StyleSheet, Dimensions, Image, TouchableOpacity, Linking } from 'react-native';
import { goBack, gotoThongKeDetailScreen } from '../actions/nav';
import { AdMobBanner } from 'react-native-admob';
import renderIf from '../components/renderif';
import moment from 'moment';
import { openHUD, closeHUD } from '../actions/hud';
import { openSideMenu } from '../actions/sidemenu';

class ThongKeScreen extends Component {
	constructor(props) {
        super(props);
        this.state = {
			data: [],
			visible: false,
        }
    }

	render() {
		const { me, dispatch } = this.props
		var current_date = new moment ().format("DD-MM-YYYY");
		return (
			<StyleProvider style={getTheme(material)}>
			    <Container>
			        <Header hasTabs style={{backgroundColor: '#FD9727'}}>
			            <Left style={{flex: 1}}>
							<Button transparent onPress={() => dispatch(openSideMenu())}>
								<Icon name='menu' />
							</Button>
			            </Left>
			            <Body style={{flex: 3, alignItems: 'center', alignSelf: 'center'}}>
			                <Title>Thống kê kết quả</Title>
			            </Body>
			            <Right style={{flex: 1}}></Right>
			        </Header>
			        <Content style={{backgroundColor: 'white', paddingTop: 10}}>
			            <List>
				            <ListItem icon>
				              	<Left>
				                	<Icon name="md-clipboard" style={{color: 'green'}}/>
				              	</Left>
				              	<Body style={{padding: 5}}>
				              		<TouchableOpacity onPress={ () => dispatch(gotoThongKeDetailScreen(1))}>
				                		<Text>Thống kê đầu số xuất hiện trong 30 ngày gần nhất</Text>
				                	</TouchableOpacity>
				              	</Body>
				              	<Right>
				                	<Icon name="md-arrow-dropright" style={{color: 'blue'}}/>
				              	</Right>
				            </ListItem>
				            <ListItem icon>
				              	<Left>
				                	<Icon name="ios-podium"  style={{color: 'green'}} />
				              	</Left>
				              	<Body style={{padding: 5}}>
				              		<TouchableOpacity onPress={ () => dispatch(gotoThongKeDetailScreen(2))}>
				                		<Text>Thống kê đuôi số xuất hiện trong 30 ngày gần nhất</Text>
				                	</TouchableOpacity>
				              	</Body>
				              	<Right>
				                	<Icon name="md-arrow-dropright" style={{color: 'blue'}}/>
				              	</Right>
				            </ListItem>
				            <ListItem icon>
				              	<Left>
				                	<Icon name="md-globe" style={{color: 'green'}}/>
				              	</Left>
				              	<Body style={{padding: 5}}>
				              		<TouchableOpacity onPress={ () => dispatch(gotoThongKeDetailScreen(3))}>
				                		<Text>Thống kê bộ số xuất hiện nhiều nhất</Text>
				                	</TouchableOpacity>
				              	</Body>
				              	<Right>
				                	<Icon name="md-arrow-dropright" style={{color: 'blue'}}/>
				              	</Right>
				            </ListItem>
				            <ListItem icon>
				              	<Left>
				                	<Icon name="md-help-buoy" style={{color: 'green'}}/>
				              	</Left>
				              	<Body style={{padding: 5}}>
				              		<TouchableOpacity onPress={ () => dispatch(gotoThongKeDetailScreen(4))}>
				                		<Text>Thống kê bộ số xuất hiện ít nhất</Text>
				                	</TouchableOpacity>
				              	</Body>
				              	<Right>
				                	<Icon name="md-arrow-dropright" style={{color: 'blue'}}/>
				              	</Right>
				            </ListItem>
				        </List>
			        </Content>
			        <AdMobBanner
                        bannerSize="smartBannerPortrait"
                        adUnitID="ca-app-pub-7350182379499361/8563659309"
                        testDeviceID="EMULATOR"
                        didFailToReceiveAdWithError={this.bannerError}/>
			    </Container>
			</StyleProvider>
		);
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

export default connect(mapStateToProps)(ThongKeScreen)