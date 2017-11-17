import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, StyleProvider, Item, Input, Label, Form, Text, List, ListItem } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';
import { requestHomeDetail } from '../actions/me'
import { View, Linking, TouchableOpacity, RefreshControl } from 'react-native';
import { goBack, goToTinhThanhDetail } from '../actions/nav';
import { openSideMenu } from '../actions/sidemenu';
import { requestNews } from '../actions/me';
import Spinner from 'react-native-loading-spinner-overlay';
import { AdMobBanner } from 'react-native-admob';

const data = [ {name: 'Bắc Ninh', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Fbac-ninh-bn.rss' },
				{name: 'Hải Phòng', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Fhai-phong-hp.rss' },
				{name: 'Hà Nội', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Fnam-dinh-nd.rss' },
				{name: 'Nam Định', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Fbac-ninh-bn.rss' },
				{name: 'An Giang', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Fan-giang-ag.rss' },
				{name: 'Bình Dương', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Fbinh-duong-bd.rss' },
				{name: 'Bạc Liêu', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Fbac-lieu-bl.rss' },
				{name: 'Bình Phước', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Fbinh-phuoc-bp.rss' },
				{name: 'Bến Tre', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Fben-tre-btr.rss' },
				{name: 'Đồng Nai', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Fdong-nai-dn.rss' },
				{name: 'Đồng Tháp', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Fdong-thap-dt.rss' },
				{name: 'TP Hồ Chí Minh', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Ftp.hcm-hcm.rss' },
				{name: 'Hậu Giang', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Fhau-giang-hg.rss' },
				{name: 'Kiên Giang Giang', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Fkien-giang-kg.rss' },
				{name: 'Long An', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Flong-an-la.rss' },
				{name: 'Sóc Trăng', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Fsoc-trang-st.rss' },
				{name: 'Tiền Giang', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Ftien-giang-tg.rss' },
				{name: 'Tây Ninh', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Ftay-ninh-tn.rss' },
				{name: 'Trà Vinh', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Ftra-vinh-tv.rss' },
				{name: 'Vĩnh Long', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Fvinh-long-vl.rss' },
				{name: 'Vũng Tàu', link : 'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Fvung-tau-vt.rss' },
			]

class TinhThanhScreen extends Component {

	constructor(props) {
        super(props);
        this.state = {
			data: [],
			title: '',
			visible: false,
        }
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
			            	<Title>Xổ Số Các Tỉnh Thành</Title>
			            </Body>
			            <Right style={{flex: 1}}></Right>
			        </Header>
			        <Spinner visible={this.state.visible}/>
			        <Content style={{backgroundColor: 'white', marginTop: 5, paddingBottom: 5}}>
			           	<List
	                        dataArray={ data }
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
			<TouchableOpacity onPress={ ()=> this.gotoDetailTinhThanh(item)} style={{borderBottomColor: '#DDDDDD', borderBottomWidth: 1, paddingLeft: 8, paddingRight: 8, paddingBottom: 5, marginTop: 8}}>
				<Text style={{fontSize: 14}}>{item.name}</Text>
			</TouchableOpacity>
		);
	}

	gotoDetailTinhThanh(item) {
		global.tinhthanh = item;
		this.props.dispatch(goToTinhThanhDetail());
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

export default connect(mapStateToProps)(TinhThanhScreen)