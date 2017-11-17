import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, StyleProvider, Item, Input, Label, Form, Text, List, ListItem } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';

import { updateLocalInfo, login } from '../actions/me';

export class LoginScreen extends Component {
	render() {
		const { dispatch } = this.props;
		return (
			<StyleProvider style={getTheme(material)}>
			    <Container>
			        <Header transparent>
			            <Left>
			                <Button transparent>
			                    <Icon name='menu' />
			                </Button>
			            </Left>
			            <Body>
			                <Title>Đăng nhập</Title>
			            </Body>
			            <Right />
			        </Header>
			        <Content padder>
			        	<Form>
							<Item stackedLabel>
								<Label>Username</Label>
								<Input onChangeText={(username) => dispatch(updateLocalInfo({ username }))}/>
							</Item>
							<Item stackedLabel last>
								<Label>Password</Label>
								<Input secureTextEntry onChangeText={(password) => dispatch(updateLocalInfo({ password }))}/>
							</Item>
						</Form>
						<Button block style={{ backgroundColor: "#398eb2" }} onPress={() => dispatch(login())}>
							<Text>
								Đăng nhập
							</Text>
						</Button>
			        </Content>
			    </Container>
			</StyleProvider>
		);
	}
}

function mapStateToProps(state) {
	const {
		rootScreen
	} = state;

	return {
		rootScreen,
	}
}

export default connect(mapStateToProps)(LoginScreen)