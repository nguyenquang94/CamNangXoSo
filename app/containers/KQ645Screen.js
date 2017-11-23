import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Header, Title, Content, Footer, FooterTab, Spinner, Tab, Tabs, Picker, Button, Left, Right, Body, Icon, StyleProvider, Input, Label, Form, Text, List, ListItem } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';
import { requestHomeDetail } from '../actions/me'
const Item = Picker.Item;
import { View, StyleSheet, Image, TouchableOpacity, Linking, ListView, RefreshControl, Modal, Dimensions } from 'react-native';
import { goBack } from '../actions/nav';
import { AdMobBanner } from 'react-native-admob';
import renderIf from '../components/renderif';
import moment from 'moment';
import { openHUD, closeHUD } from '../actions/hud';
import Dates from 'react-native-dates';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
const tableHeader = ['Đầu số', 'Số lần', 'Tỉ lệ (%)'];
const tableTitle = ['0', '1', '2', '3', '4', '5', '6', '7'];
var win = Dimensions.get('window');
import { openSideMenu } from '../actions/sidemenu';

class KQ645Screen extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	title: '',
			data: [],
			dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
			visible: false,
			link: '',
			type: '',
			count: 1,
			modalVisible: false,
			dataModal: ''
        }
    }

    componentDidMount() {
		this.getData(this.state.count);
	}

	getData(count) {
		this.setState({visible: true})
		fetch(`http://truyenaudio.mobi/ttv_api/mega/MegaAPI.php?action=getResultHistory645&page=${count}` , {
			method: 'GET',
		})
		.then((response) => response.json())
		.then((responseJson) => {
			this.state.visible = false;
			this.state.data = responseJson.result;
			this.state.dataSource = this.state.dataSource.cloneWithRows(this.state.data);
			this.setState(this.state);
			return responseJson;
		})
		.catch((error) => {
			this.setState({visible: false})
		})
	}

	getData1(count) {
		fetch(`http://truyenaudio.mobi/ttv_api/mega/MegaAPI.php?action=getResultHistory645&page=${count}` , {
			method: 'GET',
		})
		.then((response) => response.json())
		.then((responseJson) => {
			this.state.data = this.state.data.concat(responseJson.result);
			this.state.dataSource = this.state.dataSource.cloneWithRows(this.state.data);
			this.setState(this.state);
			return responseJson;
		})
		.catch((error) => {
		})
	}

    _onRefresh() {
    	this.state.count = this.state.count + 1;
    	this.setState(this.state);
    	this.getData(1)
    }

    _onEndReached() {
    	this.state.count = this.state.count + 1;
    	this.setState(this.state);
    	this.getData1(this.state.count)
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
			                <Title>Vietlott MEGA 6/45</Title>
			            </Body>
			            <Right style={{flex: 1}}></Right>
			        </Header>
			        	<ListView
			        	 refreshControl={
					          <RefreshControl
					            refreshing={this.state.visible}
					            onRefresh={this._onRefresh.bind(this)}
					          />
					        }
					    style={{backgroundColor: 'white'}}
			        	onEndReached={this._onEndReached.bind(this)}
			        	onEndReachedThreshold={20}
				        dataSource={this.state.dataSource}
				        renderRow={(rowData) => 
				        	<TouchableOpacity onPress={()=> this.showModal(rowData)}>
					        	<View style={{flexDirection: 'row', borderBottomColor: '#DDDDDD', borderBottomWidth: 1, marginTop: 5, height: 40}}>
					        		<View style={{marginTop: 10, marginLeft: 5}}>
					        			<Text style={{fontSize: 12}}>{this.formatDate(rowData.create_date)}</Text>
					        		</View>
					        		<View style={{width: 35, height: 35, borderRadius: 17, borderColor: '#205AA7', borderWidth: 2, justifyContent: 'center', marginLeft: 10}}>
					        			<Text style={{alignSelf: 'center'}}>{rowData.bo_1}</Text>
					        		</View>
					        		<View style={{width: 35, height: 35, borderRadius: 17, borderColor: '#339900', borderWidth: 2, justifyContent: 'center', marginLeft: 10}}>
					        			<Text style={{alignSelf: 'center'}}>{rowData.bo_2}</Text>
					        		</View>
					        		<View style={{width: 35, height: 35, borderRadius: 17, borderColor: '#DD0000', borderWidth: 2, justifyContent: 'center', marginLeft: 10}}>
					        			<Text style={{alignSelf: 'center'}}>{rowData.bo_3}</Text>
					        		</View>
					        		<View style={{width: 35, height: 35, borderRadius: 17, borderColor: '#205AA7', borderWidth: 2, justifyContent: 'center', marginLeft: 10}}>
					        			<Text style={{alignSelf: 'center'}}>{rowData.bo_4}</Text>
					        		</View>
					        		<View style={{width: 35, height: 35, borderRadius: 17, borderColor: '#339900', borderWidth: 2, justifyContent: 'center', marginLeft: 10}}>
					        			<Text style={{alignSelf: 'center'}}>{rowData.bo_5}</Text>
					        		</View>
					        		<View style={{width: 35, height: 35, borderRadius: 17, borderColor: '#3366FF', borderWidth: 2, justifyContent: 'center', marginLeft: 10}}>
					        			<Text style={{alignSelf: 'center'}}>{rowData.bo_6}</Text>
					        		</View>
					        		<View style={{ justifyContent: 'center', marginLeft: 10}}>
					        			<Icon style={{color: '#666666', fontSize: 14}} name='ios-arrow-forward-outline' />
					        		</View>
					        		
								</View>
							</TouchableOpacity>
				        }
				        canLoadMore={true}
				    />
				    {this.renderModal()}
			        <AdMobBanner
                        bannerSize="smartBannerPortrait"
                        adUnitID="ca-app-pub-7350182379499361/8563659309"
                        testDeviceID="EMULATOR"
                        didFailToReceiveAdWithError={this.bannerError}/>
			    </Container>
			</StyleProvider>
		);
	}

	renderModal() {
		var dataModal = this.state.dataModal;
		return(
			<Modal
				style={{marginTop: 10}}
	          	animationType="slide"
	          	transparent={false}
	          	visible={this.state.modalVisible}
	          	onRequestClose={() => {alert("Modal has been closed.")}}
          	>
	          	<StyleProvider style={getTheme(material)}>
				    <Container>
				        <Header style={{backgroundColor: '#FD9727'}}>
				            <Left style={{flex: 1}}>
				                <Button transparent onPress={() => this.setModalVisible(!this.state.modalVisible)}>
				                    <Icon style={{fontSize: 40}} name='ios-close' />
				                </Button>
				            </Left>
				            <Body style={{flex: 3, alignItems: 'center', alignSelf: 'center'}}>
				                <Title>Thống Kê Giải Thưởng</Title>
				            </Body>
				            <Right style={{flex: 1}}>
				            </Right>
				        </Header>
				        <Content>
				        	
				       		<List>
				       			<ListItem style={{height: 100}} icon>
					              	<View style={{alignItems: 'center', justifyContent: 'center'}}>
							       		<Text style={{color: 'red', fontSize: 20}}>Jackpot</Text>
							       		<Text style={{color: 'red', fontWeight: 'bold', fontSize: 30}}>{dataModal.jackpot_gia_tri} đ</Text>
							       		<Text style={{color: 'black', fontSize: 14}}> Số người trúng giải {dataModal.jackpot_so_giai}</Text>
				       				</View>
					            </ListItem>
					            <ListItem icon>
					              	<Body style={{flexDirection: 'column'}}>
					              	<Text style={{color: 'red'}}>Giải Nhất</Text>
					                	<Text>{dataModal.nhat_gia_tri}</Text>
					              	</Body>
					              	<Right>
					                	<Text>{dataModal.nhat_so_giai} giải</Text>
					              	</Right>
					            </ListItem>
					            <ListItem icon>
					              	<Body>
					                	<Text>Giải Nhì</Text>
					                	<Text>{dataModal.nhi_gia_tri}</Text>
					              	</Body>
					              	<Right>
					                	<Text>{dataModal.nhi_so_giai} giải</Text>
					              	</Right>
					            </ListItem>
					            <ListItem icon>
					              	<Body>
					                	<Text style={{color: 'red'}}>Giải Ba</Text>
					                	<Text>{dataModal.ba_gia_tri}</Text>
					              	</Body>
					              	<Right>
					                	<Text>{dataModal.ba_so_giai} giải</Text>
					              	</Right>
					            </ListItem>
					          </List>
				        </Content>
				    </Container>
				</StyleProvider>
	        </Modal>
		);
	}

	showModal(data) {
		this.state.dataModal = data;
		this.setState(this.state);
		this.setModalVisible(!this.state.modalVisible);
	}

	setModalVisible(visible) {
    	this.setState({modalVisible: visible});
  	}

	formatDate(date){
		return moment(date).format("DD/MM/YYYY");
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

export default connect(mapStateToProps)(KQ645Screen)