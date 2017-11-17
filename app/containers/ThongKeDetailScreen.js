import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Header, Title, Content, Footer, FooterTab, Spinner, Tab, Tabs, Picker, Button, Left, Right, Body, Icon, StyleProvider, Input, Label, Form, Text, List, ListItem } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';
import { requestHomeDetail } from '../actions/me'
const Item = Picker.Item;
import { View, StyleSheet, Dimensions, Image, TouchableOpacity, Linking } from 'react-native';
import { goBack } from '../actions/nav';
import { AdMobBanner } from 'react-native-admob';
import renderIf from '../components/renderif';
import moment from 'moment';
import { openHUD, closeHUD } from '../actions/hud';
import Dates from 'react-native-dates';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
const tableHeader = ['Đầu số', 'Số lần', 'Tỉ lệ (%)'];
const tableTitle = ['0', '1', '2', '3', '4', '5', '6', '7'];

class ThongKeDetailScreen extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	title: '',
			data: [],
			visible: false,
			link: '',
			type: '',

        }
    }

    componentDidMount() {
		this.generateData();
		this.getData(this.state.link);
	}

	getData(link) {
		this.setState({visible: true})
		fetch(`http://truyenaudio.mobi/ttv_api/xoso/XoSoAPI.php?action=${link}` , {
			method: 'GET',
		})
		.then((response) => response.json())
		.then((responseJson) => {
			this.state.visible = false;
			this.state.data = responseJson;
			this.setState(this.state);
			return responseJson;
		})
		.catch((error) => {
			this.setState({visible: false})
		})
	}

	generateData() {

	}

    generateData() {
    	var type = this.props.navigation.state.params.type;
    	this.state.type = type;
    	this.setState(this.state);
    	switch(type) {
    		case 1:
    			this.state.title ='Đầu số trong 30 ngày';
    			this.state.link = 'getTKDauSoMoThuong';
    		break;
    		case 2:
    			this.state.title = 'Đuôi số trong 30 ngày';
    			this.state.link = 'getTKDuoiSoMoThuong';
    		break;
    		case 3:
    			this.state.title = 'Bộ số xuất hiện nhiều';
    			this.state.link = 'getTK12BoSoRaNhieu';
    		break;
    		case 4:
    			this.state.title = 'Bộ số xuất hiện ít';
    			this.state.link = 'getTK12BoSoRaIt';
    		break;
    	}
    	this.setState(this.state);
    }

	render() {
		const { me, dispatch } = this.props
		var current_date = new moment ().format("DD-MM-YYYY");
		return (
			<StyleProvider style={getTheme(material)}>
			    <Container>
			        <Header hasTabs style={{backgroundColor: '#FD9727'}}>
			            <Left style={{flex: 1}}>
			                <Button transparent onPress={() => dispatch(goBack())}>
								<Icon name='md-arrow-back' />
							</Button>
			            </Left>
			            <Body style={{flex: 3, alignItems: 'center', alignSelf: 'center'}}>
			                <Title>{this.state.title}</Title>
			            </Body>
			            <Right style={{flex: 1}}></Right>
			        </Header>
			        <Content style={{backgroundColor: 'white'}}>
			        	<List style={{borderWidth: 0.5, borderColor: 'black', marginLeft: 5, marginRight: 5, marginTop: 5, marginBototm :5}}>
			        		{this.renderList()}
			        	</List>
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

	renderList() {
		var renderContent = [];
			renderContent.push(
				<View style={{height: 50, flexDirection: 'row', borderWidth: 0.5, borderColor: 'black', flex: 1}}>
					<View style={{flex: 0.2, justifyContent: 'center'}}>
						<Text style={{color: 'red', fontWeight: 'bold', alignSelf: 'center'}}>Đầu số</Text>
					</View>
					<View style={{flex: 0.4 , borderLeftWidth: 1, boderLeftColor: 'black', justifyContent: 'center'}}>
						<Text style={{color: 'red', fontWeight: 'bold', alignSelf: 'center'}}>Số lần</Text>
					</View>
					<View style={{flex: 0.4 , borderLeftWidth: 1, boderLeftColor: 'black', justifyContent: 'center'}}>
						<Text style={{color: 'red', fontWeight: 'bold', alignSelf: 'center'}}>Tỉ Lệ (%)</Text>
					</View>	
				</View>
			);
		if (this.state.data) {
			if (this.state.type == 1) {
				this.state.data.map((items) => {
					renderContent.push(
						<View style={{height: 40, flexDirection: 'row', borderWidth: 0.5, borderColor: 'black', flex: 1}}>
							<View style={{flex: 0.2, justifyContent: 'center'}}>
								<Text style={{ alignSelf: 'center'}}>{items.dau_so}</Text>
							</View>
							<View style={{flex: 0.4, borderLeftWidth: 1, boderLeftColor: 'black', justifyContent: 'center'}}>
								<Text style={{ alignSelf: 'center'}}>{items.sl}</Text>
							</View>
							<View style={{flex: 0.4, borderLeftWidth: 1, boderLeftColor: 'black', justifyContent: 'center'}}>
								<Text style={{ alignSelf: 'center'}}>{items.percent}</Text>
							</View>	
						</View>
					);
				});
			} else  if (this.state.type == 2) {
				this.state.data.map((items) => {
					renderContent.push(
						<View style={{height: 40, flexDirection: 'row', borderWidth: 0.5, borderColor: 'black', flex: 1}}>
							<View style={{flex: 0.2, justifyContent: 'center'}}>
								<Text style={{ alignSelf: 'center'}}>{items.dit_so}</Text>
							</View>
							<View style={{flex: 0.4, borderLeftWidth: 1, boderLeftColor: 'black', justifyContent: 'center'}}>
								<Text style={{ alignSelf: 'center'}}>{items.sl}</Text>
							</View>
							<View style={{flex: 0.4, borderLeftWidth: 1, boderLeftColor: 'black', justifyContent: 'center'}}>
								<Text style={{ alignSelf: 'center'}}>{items.percent}</Text>
							</View>	
						</View>
					);
				});
			} else {
				this.state.data.map((items) => {
					renderContent.push(
						<View style={{height: 40, flexDirection: 'row', borderWidth: 0.5, borderColor: 'black', flex: 1}}>
							<View style={{flex: 0.2, justifyContent: 'center'}}>
								<Text style={{ alignSelf: 'center'}}>{items.boso}</Text>
							</View>
							<View style={{flex: 0.4, borderLeftWidth: 1, boderLeftColor: 'black', justifyContent: 'center'}}>
								<Text style={{ alignSelf: 'center'}}>{items.sl}</Text>
							</View>
							<View style={{flex: 0.4, borderLeftWidth: 1, boderLeftColor: 'black', justifyContent: 'center'}}>
								<Text style={{ alignSelf: 'center'}}>{items.percent}</Text>
							</View>	
						</View>
					);
				});
			}
			
		}
		return renderContent;
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

const styles = StyleSheet.create({
  	head: { height: 40, backgroundColor: '#f1f8ff' },
  	title: { backgroundColor: '#f6f8fa' },
  	row: { height: 28 },
  	text: { textAlign: 'center' }
})

export default connect(mapStateToProps)(ThongKeDetailScreen)