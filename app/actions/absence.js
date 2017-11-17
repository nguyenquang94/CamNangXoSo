export const RECEIVE_ABSENCE_LIST = 'RECEIVE_ABSENCE_LIST';
export const DID_SELECT_ABSENCE = 'DID_SELECT_ABSENCE';
export const DID_DESELECT_ABSENCE = 'DID_DESELECT_ABSENCE';

import { Define } from '../Define';
import { goToAbsenceDetail } from './nav';

export function requestAbsenceList() {
	return (dispatch, getState) => {
		fetch(Define.url('api/absence') , {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + getState().me.accessToken
			}
		})
		.then((response) => response.json())
		.then((responseJson) => {
			dispatch(receiveAbsenceList(responseJson));
			return responseJson;
		})
		.catch((error) => {
			console.error(error);
		})
	}
}

function receiveAbsenceList(data) {
	return {
		type: RECEIVE_ABSENCE_LIST,
		data
	}
}

export function selectAbsenceId(absence_id) {
	return (dispatch, getState) => {
		dispatch(goToAbsenceDetail());
		dispatch(selectAbsence(absence_id));
	}
}

export function selectAbsence(absence) {
	return {
		type: DID_SELECT_ABSENCE,
		absence
	}
}

export function deselectAbsence() {
	return {
		type: DID_DESELECT_ABSENCE
	}
}

export function updateAbsence(absence_id, absence_data) {
	return (dispatch, getState) => {
		fetch(Define.url(`api/absence/${absence_id}`) , {
			method: 'PUT',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + getState().me.accessToken
			},
			body: JSON.stringify(absence_data)
		})
		.then((response) => response.json())
		.then((responseJson) => {
			if (responseJson.code && responseJson.code == 200)
			{
				dispatch(requestAbsenceList());
				alert("Done");
			}
			return responseJson;
		})
		.catch((error) => {
			alert("Error");
		})
	};
}