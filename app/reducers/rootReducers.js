import { combineReducers } from 'redux';
import { nav, rootScreen } from './nav';
import { me } from './me';
import { sidemenu } from './sidemenu';
import { hud } from './hud';

const rootReducer = combineReducers({
	nav,
	rootScreen,
	me,
	sidemenu,
	hud
})

export default rootReducer;