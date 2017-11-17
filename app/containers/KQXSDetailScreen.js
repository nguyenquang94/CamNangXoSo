import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Header, Title, Content, Footer, FooterTab, Spinner, Tab, Tabs, Button, Left, Right, Body, Icon, StyleProvider, Item, Input, Label, Form, Text, List, ListItem } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';
import { requestHomeDetail } from '../actions/me'
import { View, StyleSheet } from 'react-native';
import { goBack } from '../actions/nav';
import { AdMobBanner } from 'react-native-admob';
import renderIf from '../components/renderif';
import moment from 'moment';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { openHUD, closeHUD } from '../actions/hud';
const tableTitle = ['Đặc Biệt', 'Giải nhất', 'Giải nhỉ', 'Giải ba', 'Giải tư', 'Giải năm', 'Giải sáu', 'Giải bảy'];
const tableTitleMienTrung = ['Đặc Biệt', 'Giải nhất', 'Giải nhỉ', 'Giải ba', 'Giải tư', 'Giải năm', 'Giải sáu', 'Giải bảy'];
const tableHeaderienTrung = ['Giải', 'Phú Yên', 'Thừa Thiên Huế'];
const tableHeadermienNam = ['Bình Phước', 'Hậu Giang', 'Hồ Chí Minh', 'Long An'];

class KQXSDetailScreen extends Component {
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
			this.state.visible = false
			this.setState(this.state);
			return responseJson;
		})
		.catch((error) => {
			this.setState({visible: false})
		})
	}

	generateDataMB(data) {
		var arrData = [];
		var db = [];
		var g1 = [];
		var g2 = [];
		var g3 = [];
		var g4 = [];
		var g5 = [];
		var g6 = [];
		var g7 = [];
		db.push(data.giai_dacbiet);
		arrData.push(db);
		g1.push(data.giai_nhat);
		arrData.push(g1);
		g2.push(data.giai_nhi);
		arrData.push(g2);
		g3.push(data.giai_ba);
		arrData.push(g3);
		g4.push(data.giai_tu);
		arrData.push(g4);
		g5.push(data.giai_nam);
		arrData.push(g5);
		g6.push(data.giai_sau);
		arrData.push(g6);
		g7.push(data.giai_bay);
		arrData.push(g7);
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
		return (
			<StyleProvider style={getTheme(material)}>
			    <Container>
			        <Header hasTabs style={{backgroundColor: '#FD9727'}}>
			            <Left style={{flex: 1}}>
			                <Button transparent onPress={() => dispatch(goBack())}>
								<Icon name='md-arrow-back' />
							</Button>
			            </Left>
			            <Body style={{flex: 3}}>
			                <Title>Kết Quả Sổ Xố</Title>
			            </Body>
			            <Right style={{flex: 1}}></Right>
			        </Header>
			        <Content style={{backgroundColor: 'white'}}>
			            <Tabs initialPage={0} style={{backgroundColor: '#666666'}}  >
	                        <Tab heading="Miền Bắc" tabStyle={{backgroundColor: '#666666'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#fff'}} activeTextStyle={{color: '#000', fontWeight: 'bold'}} >
	                            <Text style={{marginLeft: 20, marginTop: 5, marginBottom: 10}}>Kết quả số xố Miền Bắc {current_date}</Text>
								<Table >
						          	<TableWrapper style={{flexDirection: 'row'}}>
						            	<Col data={tableTitle} style={styles.title} textStyle={styles.text}/>
						            	<Rows data={this.state.tableDataMB} flexArr={[2, 1, 1]} style={styles.row} textStyle={styles.text}/>
						          	</TableWrapper>
						        </Table>
						        {
									renderIf(this.state.visible) (
										<Spinner style={{
		                                    justifyContent: 'center',
		                                    alignItems: 'center'}}/>
							    	)
								}
	                        </Tab>
	                        <Tab heading="Miền Trung" tabStyle={{backgroundColor: '#666666'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#fff'}} activeTextStyle={{color: '#000', fontWeight: 'bold'}} >
	                            <Text style={{marginLeft: 20, marginTop: 5, marginBottom: 10}}>Kết quả số xố Miền Trung {current_date}</Text>
	                            <Table >
	                            	<Row data={tableHeaderienTrung} flexArr={[1, 2, 2]} style={styles.head} textStyle={styles.text}/>
						          	<TableWrapper style={{flexDirection: 'row'}}>
						            	<Col data={tableTitle} style={styles.title} textStyle={styles.text}/>
						            	<Rows data={this.state.tableDataMT} flexArr={[1 , 1, 1]} style={styles.row} textStyle={styles.text}/>
						          	</TableWrapper>
						        </Table>
	                            {
									renderIf(this.state.visible1) (
										<Spinner style={{
		                                    justifyContent: 'center',
		                                    alignItems: 'center'}}/>
							    	)
								}
	                        </Tab>
	                        <Tab heading="Miền Nam" tabStyle={{backgroundColor: '#666666'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#fff'}} activeTextStyle={{color: '#000', fontWeight: 'bold'}} >
	                            <Text style={{marginLeft: 20, marginTop: 5, marginBottom: 10}}>Kết quả số xố Miền Nam {current_date}</Text>
	                            <Table >
	                            	<Row data={tableHeadermienNam} flexArr={[1, 1, 1, 1]} style={styles.head} textStyle={styles.text}/>
						          	<TableWrapper style={{flexDirection: 'row'}}>
						            	<Col data={tableTitle} style={styles.title} textStyle={styles.text}/>
						            	<Rows data={this.state.tableDataMN} flexArr={[1 , 1, 1, 1]} style={styles.row} textStyle={styles.text}/>
						          	</TableWrapper>
						        </Table>
	                            {
									renderIf(this.state.visible2) (
										<Spinner style={{
		                                    justifyContent: 'center',
		                                    alignItems: 'center'}}/>
							    	)
								}
	                        </Tab>
                    	</Tabs> 
                    	
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

	renderRow(item) {
		return (
			<View style={{borderBottomColor: '#DDDDDD', borderBottomWidth: 1, paddingLeft: 5, paddingRight: 5, paddingBottom: 5, marginTop: 8}}>
				<Text style={{fontSize: 14, marginLeft: 10}}>{item.title}</Text>
				<Text style={{marginLeft: 10}} note>{item.description}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: '#f1f8ff' },
  title: { backgroundColor: '#f6f8fa' },
  row: { height: 28 },
  text: { textAlign: 'center' }
})


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

export default connect(mapStateToProps)(KQXSDetailScreen)