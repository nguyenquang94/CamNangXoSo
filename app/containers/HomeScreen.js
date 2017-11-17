import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Dimensions, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';

import { Container, Header, Card, CardItem, Thumbnail, Spinner, Title, Content, Tab, Tabs, Footer, FooterTab, Button, Left, Right, Segment, Body, Icon, StyleProvider, Item, Input, Label, Form, Text, List, ListItem, Subtitle, H3 } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';

import { openSideMenu } from '../actions/sidemenu';
import renderIf from '../components/renderif';
import { Define } from '../Define';
import { gotoKQSXScreen, gotoThongKeScreen, gotoKQ645, gotoKQMax4D } from '../actions/nav'
import { requestHomeDetail } from '../actions/me'
import { AdMobBanner } from 'react-native-admob';
import moment from 'moment';
var win = Dimensions.get('window');
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { openHUD, closeHUD } from '../actions/hud';
const tableTitle = ['Đặc Biệt', 'Giải nhất', 'Giải nhỉ', 'Giải ba', 'Giải tư', 'Giải năm', 'Giải sáu', 'Giải bảy'];
const tableTitleMienTrung = ['Đặc Biệt', 'Giải nhất', 'Giải nhỉ', 'Giải ba', 'Giải tư', 'Giải năm', 'Giải sáu', 'Giải bảy'];
const tableHeaderienTrung = ['Giải', 'Phú Yên', 'Thừa Thiên Huế'];
const tableHeadermienNam = ['Bình Phước', 'Hậu Giang', 'Hồ Chí Minh', 'Long An'];

class HomeScreen extends Component {

	constructor(props) {
        super(props);
        this.state = {
			data: [],
			visible: false,
			visible1: false,
			visible2: false,
			tableDataMB: [],
			tableDataMT: [],
			tableDataMN: [],
			current_tab: 'mb',
        }
    }
	componentDidMount() {
		this.getData();
		this.getData1();
		this.getData2()
	}

	getData() {
		this.setState({visible: true})
		fetch('http://truyenaudio.mobi/ttv_api/xoso/XoSoAPI.php?action=getKTXSRegionNewest&region=1' , {
			method: 'GET',
		})
		.then((response) => response.json())
		.then((responseJson) => {
			this.generateDataMB(responseJson[0]);
			this.state.visible = false;
			this.setState(this.state);
			return responseJson;
		})
		.catch((error) => {
			this.setState({visible: false})
		})
	}

	generateDataMB(data) {
		var arrData = [];
		var db = '';
		var g1 = '';
		var g2 = '';
		var g3 = '';
		var g4 = '';
		var g5 = '';
		var g6 = '';
		var g7 = '';
		var date = '';
		db = data.giai_dacbiet;
		arrData.push(db);
		g1 = data.giai_nhat;
		arrData.push(g1);
		g2 = data.giai_nhi;
		arrData.push(g2);
		g3 = data.giai_ba;
		arrData.push(g3);
		g4 = data.giai_tu;
		arrData.push(g4);
		g5 = data.giai_nam;
		arrData.push(g5);
		g6 = data.giai_sau;
		arrData.push(g6);
		g7 = data.giai_bay;
		arrData.push(g7);
		date = data.ngay_quay;
		arrData.push(date);
		this.state.tableDataMB = arrData;
		this.setState(this.state);
	}

	generateDataMT(data) {
		var data1 = data[0];
		var data2 = data[1];
		var arrData = [];
		var db = [];
		var g1 = [];
		var g2 = [];
		var g3 = [];
		var g4 = [];
		var g5 = [];
		var g6 = [];
		var g7 = [];
		var date = data.ngay_quay;
		db.push(data1.giai_dacbiet);
		db.push(data2.giai_dacbiet);
		arrData.push(db);
		g1.push(data1.giai_nhat);
		g1.push(data2.giai_nhat);
		arrData.push(g1);
		g2.push(data1.giai_nhi);
		g2.push(data2.giai_nhi);
		arrData.push(g2);
		g3.push(data1.giai_ba);
		g3.push(data2.giai_ba);
		arrData.push(g3);
		g4.push(data1.giai_tu);
		g4.push(data2.giai_tu);
		arrData.push(g4);
		g5.push(data1.giai_nam);
		g5.push(data2.giai_nam);
		arrData.push(g5);
		g6.push(data1.giai_sau);
		g6.push(data2.giai_sau);
		arrData.push(g6);
		g7.push(data1.giai_bay);
		g7.push(data2.giai_bay);
		arrData.push(g7);
		this.state.tableDataMT = arrData;
		this.setState(this.state);
	}

	generateDataMN(data) {
		var data1 = data[0];
		var data2 = data[1];
		var data3 = data[2];
		var data4 = data[3];
		var arrData = [];
		var db = [];
		var g1 = [];
		var g2 = [];
		var g3 = [];
		var g4 = [];
		var g5 = [];
		var g6 = [];
		var g7 = [];
		var date = data.ngay_quay;
		db.push(data1.giai_dacbiet);
		db.push(data2.giai_dacbiet);
		db.push(data3.giai_dacbiet);
		db.push(data4.giai_dacbiet);
		arrData.push(db);
		g1.push(data1.giai_nhat);
		g1.push(data2.giai_nhat);
		g1.push(data3.giai_nhat);
		g1.push(data4.giai_nhat);
		arrData.push(g1);
		g2.push(data1.giai_nhi);
		g2.push(data2.giai_nhi);
		g2.push(data3.giai_nhi);
		g2.push(data4.giai_nhi);
		arrData.push(g2);
		g3.push(data1.giai_ba);
		g3.push(data2.giai_ba);
		g3.push(data3.giai_ba);
		g3.push(data4.giai_ba);
		arrData.push(g3);
		g4.push(data1.giai_tu);
		g4.push(data2.giai_tu);
		g4.push(data3.giai_tu);
		g4.push(data4.giai_tu);
		arrData.push(g4);
		g5.push(data1.giai_nam);
		g5.push(data2.giai_nam);
		g5.push(data3.giai_nam);
		g5.push(data4.giai_nam);
		arrData.push(g5);
		g6.push(data1.giai_sau);
		g6.push(data2.giai_sau);
		g6.push(data3.giai_sau);
		g6.push(data4.giai_sau);
		arrData.push(g6);
		g7.push(data1.giai_bay);
		g7.push(data2.giai_bay);
		g7.push(data3.giai_bay);
		g7.push(data4.giai_bay);
		arrData.push(g7);
		arrData.push(date);
		this.state.tableDataMN = arrData;
		this.setState(this.state);
	}

	getData1() {
		this.setState({visible1: true})
		fetch('http://truyenaudio.mobi/ttv_api/xoso/XoSoAPI.php?action=getKTXSRegionNewest&region=2' , {
			method: 'GET',
		})
		.then((response) => response.json())
		.then((responseJson) => {
			this.generateDataMT(responseJson)
			this.state.visible1 = false
			this.setState(this.state);
			return responseJson;
		})
		.catch((error) => {
			this.setState({visible1: false})
		})
	}

	getData2() {
		this.setState({visible2: true})
		fetch('http://truyenaudio.mobi/ttv_api/xoso/XoSoAPI.php?action=getKTXSRegionNewest&region=3' , {
			method: 'GET',
		})
		.then((response) => response.json())
		.then((responseJson) => {
			this.generateDataMN(responseJson)
			this.state.visible2 = false
			this.setState(this.state);
			return responseJson;
		})
		.catch((error) => {
			this.setState({visible2: false})
		})
	}

	render() {
		const { me, dispatch } = this.props
		var current_date = new moment ().format("DD-MM-YYYY");
		const tableData = [
		    [''],
		    ['']
	    ];
	    var current_tab = this.state.current_tab;
		return (
			<StyleProvider style={getTheme(material)}>
			    <Container>
			        <Header style={{backgroundColor: '#FD9727'}}>
			            <Left style={{flex: 1}}>
			                <Button transparent onPress={() => dispatch(openSideMenu())}>
			                    <Icon name='menu' />
			                </Button>
			            </Left>
			            <Body style={{flex: 3, alignItems: 'center', alignSelf: 'center'}}>
			                <Title>Cẩm nang xổ số</Title>
			            </Body>
			            <Right style={{flex: 1}}></Right>
			        </Header>
			        <Content style={{backgroundColor: 'white', paddingTop: 5}}>
			        	 <Segment>
			             	<Button onPress={() => this.changeTab('mb')} first style={{flexDirection: 'column', height: 50, backgroundColor: (current_tab=='mb')?'#FD9727':'white'}}>
			             		<Text style={{color: (current_tab=='mb')?'white':'black'}}>Miền Bắc</Text>
			             		<Subtitle style={{color: (current_tab=='mb')?'white':'black'}}>18:15</Subtitle>
			             	</Button>
			              	<Button onPress={() => this.changeTab('mt')} style={{flexDirection: 'column', height: 50, backgroundColor: (current_tab=='mt')?'#FD9727':'white'}} active>
			              		<Text style={{color: (current_tab=='mt')?'white':'black'}}>Miền Trung</Text>
			              		<Subtitle style={{color: (current_tab=='mt')?'white':'black'}}>17:15</Subtitle>
			              	</Button>
			              	<Button onPress={() => this.changeTab('mn')} last style={{flexDirection: 'column', height: 50, backgroundColor: (current_tab=='mn')?'#FD9727':'white'}} active>
			              		<Text style={{color: (current_tab=='mn')?'white':'black'}}>Miền Nam</Text>
			              		<Subtitle style={{color: (current_tab=='mn')?'white':'black'}}>16:15</Subtitle>
			              	</Button>
			            </Segment>
			            <View style={{margin: 5}}>
			            	{this._renderData()}
			            </View>
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

	_renderData() {
		var current_tab == this.state.current_tab;
		var renderContent = [];
		if (current_tab ==  'mb') {
			renderContent.push(
				<View style={{height: 50, flexDirection: 'row', borderWidth: 0.5, borderColor: 'black', flex: 1}}>
					<Text style={{color: 'black', alignSelf: 'center', marginLeft: 5}}>Kết quả ngày : {this.state.tableDataMB[8]}</Text>
				</View>
			);
			renderContent.push(
				<View style={{height: 50, flexDirection: 'row', borderWidth: 0.5, borderColor: 'black', flex: 1}}>
					<View style={{flex: 0.3, justifyContent: 'center'}}>
						<Text style={{color: 'red', fontWeight: 'bold', alignSelf: 'center'}}>Giải</Text>
					</View>
					<View style={{flex: 0.7 , borderLeftWidth: 1, boderLeftColor: 'black', justifyContent: 'center'}}>
						<Text style={{color: 'red', fontWeight: 'bold', alignSelf: 'center'}}>Số lần</Text>
					</View>
				</View>
			);
			if (this.state.tableDataMB) {
					this.state.tableDataMB.map((items, index) => {
						if (index != 8) {
							renderContent.push(
								<View style={{height: 40, flexDirection: 'row', borderWidth: 0.5, borderColor: 'black', flex: 1}}>
									<View style={{flex: 0.3, justifyContent: 'center'}}>
										<Text style={{ alignSelf: 'center'}}>{this.generateGiai(index)}</Text>
									</View>
									<View style={{flex: 0.7, borderLeftWidth: 1, boderLeftColor: 'black', justifyContent: 'center'}}>
										<Text style={{ alignSelf: 'center', marginLeft: 3, marginRight: 3, color: (index == 0)?'red': 'black'}}>{items}</Text>
									</View>
								</View>
							);
						}
					});
			}
		} else if (current_tab == 'mt') {
			renderContent.push(
				<View style={{height: 50, flexDirection: 'row', borderWidth: 0.5, borderColor: 'black', flex: 1}}>
					<Text style={{color: 'black', alignSelf: 'center', marginLeft: 5}}>Kết quả ngày : {this.state.tableDataMT[8]}</Text>
				</View>
			);
			renderContent.push(
				<View style={{height: 50, flexDirection: 'row', borderWidth: 0.5, borderColor: 'black', flex: 1}}>
					<View style={{flex: 0.3, justifyContent: 'center'}}>
						<Text style={{color: 'red', fontWeight: 'bold', alignSelf: 'center'}}>Giải</Text>
					</View>
					<View style={{flex: 0.7 , borderLeftWidth: 1, boderLeftColor: 'black', justifyContent: 'center'}}>
						<Text style={{color: 'red', fontWeight: 'bold', alignSelf: 'center'}}>Số lần</Text>
					</View>
				</View>
			);
			if (this.state.tableDataMT) {
					this.state.tableDataMT.map((items, index) => {
						if (index != 8) {
							renderContent.push(
								<View style={{height: 40, flexDirection: 'row', borderWidth: 0.5, borderColor: 'black', flex: 1}}>
									<View style={{flex: 0.3, justifyContent: 'center'}}>
										<Text style={{ alignSelf: 'center'}}>{this.generateGiai(index)}</Text>
									</View>
									<View style={{flex: 0.7, borderLeftWidth: 1, boderLeftColor: 'black', justifyContent: 'center'}}>
										<Text style={{ alignSelf: 'center', marginLeft: 3, marginRight: 3, color: (index == 0)?'red': 'black'}}>{items}</Text>
									</View>
								</View>
							);
						}
					});
			}
		}
		return renderContent;
	}

	generateGiai(value) {
		var name = '';
		switch(value) {
			case 0:
				name = 'Đặc Biệt'
				break;
			case 1:
				name = 'Giải Nhất'
				break;
			case 2:
				name = 'Giải Nhì'
				break;
			case 3:
				name = 'Giải Ba'
				break;
			case 4:
				name = 'Giải Tư'
				break;
			case 5:
				name = 'Giải Năm'
				break;
			case 6:
				name = 'Giải Sáu'
				break;
			case 7:
				name = 'Giải Bảy'
				break;
		}
		return name;
	}

	renderRow(item) {
		return (
			<View style={{borderBottomColor: '#DDDDDD', borderBottomWidth: 1, paddingLeft: 5, paddingRight: 5, paddingBottom: 5, marginTop: 8}}>
				<Text style={{fontSize: 14, marginLeft: 10}}>{item.title}</Text>
				<Text style={{marginLeft: 10}} note>{item.description}</Text>
			</View>
		);
	}

	changeTab(value) {
		this.state.current_tab = value;
		this.setState(this.state);
	}
}

const styles = StyleSheet.create({
  	head: { height: 40, backgroundColor: '#f1f8ff' },
  	title: { backgroundColor: '#f6f8fa' },
  	row: { height: 28 },
  	text: { textAlign: 'center' }
})

	// constructor(props) {
 //        super(props);
 //        this.state = {
 //        	current_tab: 'mb',
 //        	data_mb: [],
 //        	data_mt: [],
 //        	data_mn: [],
 //        	is_mb: false,
 //        	is_mt: false,
 //        	is_mn: false,
 //        	loading: false,
 //        }
 //    }

	// componentDidMount() {
	// 	this.getDataMB('mb', '16-11-2017');
	// }

	// getDataMB(type, date) {
	// 	console.log(type + " " + date);
	// 	fetch('http://portal.ketquachat.net/view_province.php', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Accept': 'application/json',
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({
	// 			pwd: 'devgold!@#123',
	// 			code: "123",
	// 			date: date,
	// 		})
	// 	})
	// 	.then((response) => response.json())
	// 	.then((responseJson) => {
	// 		// this.state.data = this.state.data.concat(responseJson.result);
	// 		// this.state.dataSource = this.state.dataSource.cloneWithRows(this.state.data);
	// 		// this.setState(this.state);
	// 		console.log('nguyenvandasd', responseJson)
	// 		return responseJson;
	// 	})
	// 	.catch((error) => {
	// 	})
	// }

	// _openLink(item) {
	// 	global.link = 'http://ketqua.net/so-ket-qua';
	// 	global.title = 'Kết Quả Lô Tô';
	// 	this.props.dispatch(goToTWebLinkl());
	// }

	// changeTab(value) {
	// 	this.state.current_tab = value;
	// 	this.setState(this.state);
	// }

	// render() {
	// 	var current_date = new moment ().format("DD-MM-YYYY");
	// 	var screen = Dimensions.get('window');
	// 	var current_tab =  this.state.current_tab;
	// 	const { dispatch, absence } = this.props;
	// 	return (
	// 		<StyleProvider style={getTheme(material)}>
	// 		    <Container>
	// 		        <Header style={{backgroundColor: '#FD9727'}}>
	// 		            <Left style={{flex: 1}}>
	// 		                <Button transparent onPress={() => dispatch(openSideMenu())}>
	// 		                    <Icon name='menu' />
	// 		                </Button>
	// 		            </Left>
	// 		            <Body style={{flex: 3, alignItems: 'center', alignSelf: 'center'}}>
	// 		                <Title>Cẩm nang xổ số</Title>
	// 		                <Subtitle>{current_date}</Subtitle>
	// 		            </Body>
	// 		            <Right style={{flex: 1}}></Right>
	// 		        </Header>
	// 		        <Content style={{padding: 5, marginBottom: 5, backgroundColor: '#CCCCCC'}}>
	// 			        <Segment>
	// 		             	<Button onPress={() => this.changeTab('mb')} first style={{flexDirection: 'column', height: 50, backgroundColor: (current_tab=='mb')?'#FD9727':'white'}}>
	// 		             		<Text style={{color: (current_tab=='mb')?'white':'black'}}>Miền Bắc</Text>
	// 		             		<Subtitle style={{color: (current_tab=='mb')?'white':'black'}}>18:15</Subtitle>
	// 		             	</Button>
	// 		              	<Button onPress={() => this.changeTab('mt')} style={{flexDirection: 'column', height: 50, backgroundColor: (current_tab=='mt')?'#FD9727':'white'}} active>
	// 		              		<Text style={{color: (current_tab=='mt')?'white':'black'}}>Miền Trung</Text>
	// 		              		<Subtitle style={{color: (current_tab=='mt')?'white':'black'}}>17:15</Subtitle>
	// 		              	</Button>
	// 		              	<Button onPress={() => this.changeTab('mn')} last style={{flexDirection: 'column', height: 50, backgroundColor: (current_tab=='mn')?'#FD9727':'white'}} active>
	// 		              		<Text style={{color: (current_tab=='mn')?'white':'black'}}>Miền Nam</Text>
	// 		              		<Subtitle style={{color: (current_tab=='mn')?'white':'black'}}>16:15</Subtitle>
	// 		              	</Button>
	// 		            </Segment>
	// 		        	<View style={{flexDirection: 'row'}}>
	// 		        		<Card style={{flex: 1}}>
	// 				            <CardItem>
	// 				              	<TouchableOpacity onPress={ ()=> dispatch(gotoKQSXScreen())} style={{alignItems: 'center', alignSelf: 'center'}}>
	// 				              		<Image
	// 										style={{width: win.width/2 - 40, height: 150, resizeMode: 'contain'}}
	// 										source={require('../images/ic_xoso.png')}
	// 									/>
	// 					                <Text>
	// 					                   Kết quả Xổ Số
	// 					                </Text>
	// 				              	</TouchableOpacity>
	// 				            </CardItem>
	// 				        </Card>
	// 				        <Card style={{flex: 1}}>
	// 				            <CardItem>
	// 				              	<TouchableOpacity onPress={ ()=> dispatch(gotoThongKeScreen())} style={{alignItems: 'center', alignSelf: 'center'}}>
	// 				              		<Image
	// 										style={{width: win.width/2 - 40, height: 150, resizeMode: 'contain'}}
	// 										source={require('../images/ic_thongke.png')}
	// 									/>
	// 					                <Text>
	// 					                   Thống Kê
	// 					                </Text>
	// 				              	</TouchableOpacity>
	// 				            </CardItem>
	// 				        </Card>
	// 		        	</View>
	// 		        	<View style={{flexDirection: 'row'}}>
	// 		        		<Card style={{flex: 1}}>
	// 				            <CardItem>
	// 				              	<TouchableOpacity onPress={ ()=> dispatch(gotoKQ645())} style={{alignItems: 'center', alignSelf: 'center'}}>
	// 				              		<Image
	// 										style={{width: win.width/2 - 40, height: 150, resizeMode: 'contain'}}
	// 										source={require('../images/ic_mega645.png')}
	// 									/>
	// 					                <Text>
	// 					                   Vietlott Mega 645
	// 					                </Text>
	// 				              	</TouchableOpacity>
	// 				            </CardItem>
	// 				        </Card>
	// 				        <Card style={{flex: 1}}>
	// 				            <CardItem>
	// 				              	<TouchableOpacity onPress={ ()=> dispatch(gotoKQMax4D())} style={{alignItems: 'center', alignSelf: 'center'}}>
	// 				              		<Image
	// 										style={{width: win.width/2 - 40, height: 150, resizeMode: 'contain'}}
	// 										source={require('../images/ic_max4d.jpg')}
	// 									/>
	// 					                <Text>
	// 					                   Vietlott Max 4D
	// 					                </Text>
	// 				              	</TouchableOpacity>
	// 				            </CardItem>
	// 				        </Card>
	// 		        	</View>

	// 		        	<View></View>
	// 		        </Content>
	// 		        <AdMobBanner
 //                        bannerSize="smartBannerPortrait"
 //                        adUnitID="ca-app-pub-7350182379499361/8563659309"
 //                        testDeviceID="EMULATOR"
 //                        didFailToReceiveAdWithError={this.bannerError}/>
	// 		    </Container>
	// 		</StyleProvider>
	// 	);
	// }

	// goToLinkWeb(link){
	// 	Linking.openURL(link);
	// }


function mapStateToProps(state) {
	const {
		rootScreen,
		absence,
	} = state;

	return {
		rootScreen,
		absence,
	}
}

export default connect(mapStateToProps)(HomeScreen)