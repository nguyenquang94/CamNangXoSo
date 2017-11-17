import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, StyleProvider, Item, Input, Label, Form, Text, List, ListItem } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';
import { requestHomeDetail } from '../actions/me'
import { View, Linking, TouchableOpacity, RefreshControl } from 'react-native';
import { goBack, goToTWebLinkl } from '../actions/nav';
import { openSideMenu } from '../actions/sidemenu';
import { requestNews } from '../actions/me';
import Spinner from 'react-native-loading-spinner-overlay';
import { AdMobBanner } from 'react-native-admob';

class NewsScreen extends Component {

	constructor(props) {
        super(props);
        this.state = {
			data: [],
			title: '',
			visible: false,
        }
    }

	componentDidMount() {
		this.getData();
	}

	getData() {
		this.state.visible = true;
		this.setState(this.state);
		fetch('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Ftin-tuc-2583.rss' , {
			method: 'GET',
		})
		.then((response) => response.json())
		.then((responseJson) => {
			this.state.data = responseJson.items;
			this.state.title = responseJson.feed.title;
			this.state.visible = false;
			this.setState(this.state);
			return responseJson;
		})
		.catch((error) => {
			this.state.visible = false;
			this.setState(this.state);
		})
	}

	render() {
		const { dispatch, me } = this.props
		return (
			<StyleProvider style={getTheme(material)}>
			    <Container>
			        <Header>
			            <Left style={{flex: 1}}>
			                <Button transparent onPress={() => dispatch(openSideMenu())}>
			                    <Icon name='menu' />
			                </Button>
			            </Left>
			            <Body style={{flex: 3}}>
			            	<Title>Tin Tức Sổ Xố</Title>
			            </Body>
			            <Right style={{flex: 1}}></Right>
			        </Header>
			        <Spinner visible={this.state.visible}/>
			        <Content style={{backgroundColor: 'white', marginTop: 5, paddingBottom: 5}}>
			           	<List
	                        dataArray={ this.state.data }
	                        renderRow={ this.renderRow.bind(this) }
	                    />
			        </Content>
			        <AdMobBanner
                        bannerSize="banner"
                        adUnitID="ca-app-pub-7350182379499361/8563659309"
                        testDeviceID="EMULATOR"
                        didFailToReceiveAdWithError={this.bannerError}/>
			    </Container>
			</StyleProvider>
		);
	}

	renderRow(item) {
		return (
			<TouchableOpacity onPress={ ()=> this._openLink(item)} style={{borderBottomColor: '#DDDDDD', borderBottomWidth: 1, paddingLeft: 8, paddingRight: 8, paddingBottom: 5, marginTop: 8}}>
				<Text style={{fontSize: 14}}>{item.title}</Text>
				<Text style={{}} note>{item.description}</Text>
			</TouchableOpacity>
		);
	}

	_openLink(item) {
		global.link = item.link;
		global.title = 'Tin Tức Sổ Xổ';
		this.props.dispatch(goToTWebLinkl());
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

export default connect(mapStateToProps)(NewsScreen)