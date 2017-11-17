import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, StyleProvider, Item, Input, Label, Form, Text, List, ListItem } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';
import { requestHomeDetail } from '../actions/me'
import { View, TouchableOpacity, Linking, WebView } from 'react-native';
import { goBack } from '../actions/nav';
import { openSideMenu } from '../actions/sidemenu';
import Spinner from 'react-native-loading-spinner-overlay';
import { AdMobBanner } from 'react-native-admob';


class ShowWebLink extends Component {

	constructor(props) {
        super(props);
        this.state = {
			data: [],
			title: '',
			visible: false,
        }
    }

	render() {
		const { me, dispatch } = this.props
		var link = global.link;
		return (
			<StyleProvider style={getTheme(material)}>
			    <Container>
			        <Header>
			            <Left style={{flex: 1}}>
			                <Button transparent onPress={() => dispatch(goBack())}>
								<Icon name='md-arrow-back' />
							</Button>
			            </Left>
			            <Body style={{flex: 3}}>
			                <Title>{global.title}</Title>
			            </Body>
			            <Right style={{flex: 1}}></Right>
			        </Header>
			        <Spinner visible={this.state.visible}/>
			        <WebView
				        automaticallyAdjustContentInsets={false}
				        style={{flex: 1}}
				        source={{uri: link}}
				        javaScriptEnabled={true}
				        domStorageEnabled={true}
				        decelerationRate="normal"
				        onNavigationStateChange={this.onNavigationStateChange}
				        onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
				        startInLoadingState={true}
				        scalesPageToFit={this.state.scalesPageToFit}
				        />
				     <AdMobBanner
                        bannerSize="banner"
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

export default connect(mapStateToProps)(ShowWebLink)