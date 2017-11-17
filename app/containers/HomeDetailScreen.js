import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, StyleProvider, Item, Input, Label, Form, Text, List, ListItem } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';
import { requestHomeDetail } from '../actions/me'
import { View } from 'react-native';
import { goBack } from '../actions/nav';
import { AdMobBanner } from 'react-native-admob';

class HomeDetailScreen extends Component {
	componentDidMount() {
		
	}
	render() {
		const { me, dispatch } = this.props
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
			                <Title>{me.data.feed.title}</Title>
			            </Body>
			            <Right style={{flex: 1}}></Right>
			        </Header>
			        <Content style={{backgroundColor: 'white', marginTop: 5}}>
			            <List
	                        dataArray={ me.data.items }
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
			<View style={{borderBottomColor: '#DDDDDD', borderBottomWidth: 1, paddingLeft: 5, paddingRight: 5, paddingBottom: 5, marginTop: 8}}>
				<Text style={{fontSize: 14, marginLeft: 10}}>{item.title}</Text>
				<Text style={{marginLeft: 10}} note>{item.description}</Text>
			</View>
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

export default connect(mapStateToProps)(HomeDetailScreen)