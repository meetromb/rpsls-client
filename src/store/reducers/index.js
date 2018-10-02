import { combineReducers } from 'redux';

import Popups from './popups_reducer';
import Game from './game_reducer';

const rootReducer = combineReducers({
    Popups,
    Game
});

export default rootReducer;
