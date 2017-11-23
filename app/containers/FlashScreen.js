import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Container, Header, Title, Content, Footer, Spinner, FooterTab, Button, Left, Right, Body, Icon, StyleProvider, Item, Input, Label, Form, Text, List, ListItem } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/platform';
import { requestHomeDetail } from '../actions/me'
import { View, StyleSheet } from 'react-native';
import { goBack, switchHome } from '../actions/nav';
import { Image } from 'react-native';

class FlashScreen extends Component {
	componentDidMount(){
		const { me, dispatch } = this.props
        setTimeout(() => dispatch(switchHome()), 1000)
    }
	render() {
		const { me, dispatch } = this.props
	    return (
	        <View style={{backgroundColor :'#FD9727' , flex: 1, alignItems: 'center'}}>
				<Image
					style={{width: 150, height: 150, marginTop: 100, justifyContent: 'center',
					alignItems: 'center'}}
					source={require('../images/icon.png')}
				/>
	        	<Spinner style={{
	        			marginTop: 200,
                        justifyContent: 'center',
                        alignItems: 'center'}}/>
	        </View>
	    );
	}
}

const styles = StyleSheet.create({
  	container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#153C51',
    },
  	welcome: {
	    fontSize: 20,
	    textAlign: 'center',
	    margin: 10,
  	},
  	instructions: {
	    textAlign: 'center',
	    color: '#333333',
	    marginBottom: 5,
  	},
});

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

export default connect(mapStateToProps)(FlashScreen)