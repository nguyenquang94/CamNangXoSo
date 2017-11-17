import { UPDATE_INFO, REMOVE_SESSION, UPDATE_NEWS } from '../actions/me';
const defaultState = {
	data: [],
	news: [],
	loaded: false,
	loading: true,
};
export function me(state = defaultState, action) {
	switch (action.type) {
		case UPDATE_INFO:
			return Object.assign({}, state, {
				loaded: true,
				loading: false,
				data: action.data,
			});
		case UPDATE_NEWS:
			return Object.assign({}, state, {
				loaded: true,
				loading: false,
				news: action.data,
			});
		case REMOVE_SESSION:
			return {};
		default:
			return state;
	}
}