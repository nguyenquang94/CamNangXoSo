export const UPDATE_INFO = 'UPDATE_INFO';
export const REMOVE_SESSION = 'REMOVE_SESSION';
export const UPDATE_NEWS = 'UPDATE_NEWS';

import { AsyncStorage } from 'react-native';
import { Define } from '../Define';
import { goToHomeDetailDetail, switchToNews } from '../actions/nav';
import { openHUD, closeHUD } from './hud';

export function updateInfo(data) {
	return {
		type: UPDATE_INFO,
		data 
	};
}

export function updateNews(data) {
	return {
		type: UPDATE_NEWS,
		data 
	};
}

export function requestHomeDetail(link) {
	return (dispatch, getState) => {
		dispatch(openHUD());
		const { me } = getState();
		fetch(link , {
			method: 'GET',
		})
		.then((response) => response.json())
		.then((responseJson) => {
			dispatch(updateInfo(responseJson));
			dispatch(goToHomeDetailDetail());
			dispatch(closeHUD());
			return responseJson;
		})
		.catch((error) => {
			dispatch(closeHUD());
		})
	}
}

export function requestNews(link) {
	return (dispatch, getState) => {
		dispatch(openHUD());
		const { me } = getState();
		fetch('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fxosodaiphat.com%2Ftin-tuc-2583.rss' , {
			method: 'GET',
		})
		.then((response) => response.json())
		.then((responseJson) => {
			dispatch(updateNews(responseJson));
			dispatch(closeHUD());
			return responseJson;
		})
		.catch((error) => {
			dispatch(closeHUD());
		})
	}
}

