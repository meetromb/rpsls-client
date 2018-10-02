import {
    START_GAME,
    SEARCH_GAME,
    SET_YOUR_ID,
    SELECT_GESTURE,
    UPDATE_PLAYERS,
    READY_GAME,
    FINISH_GAME
} from '../types';

import sm from '../../SocketManager';

const initialState = {
    gameStatus: 'searching',
    players: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_YOUR_ID:
            return { ...state, yourID: action.payload, players: null}
        case START_GAME:
            return { ...state, ...action.payload, winner: null }
        case SEARCH_GAME:
            return { ...state, players: null, gameStatus: action.payload }
        case SELECT_GESTURE:
            if (state.players && state.gameStatus === 'choosing') {
                const SocketManager = new sm();
                SocketManager.emitGestureSelect(action.payload);

                const updatedPlayers = state.players.map(item => {
                    if (item.id === state.yourID) {
                        return { ...item, action: action.payload }
                    }
                    return item
                })

                return { ...state, gameStatus: action.gameStatus, players: updatedPlayers }
            } else {
                return state;
            }
        case UPDATE_PLAYERS:
            return { ...state, players: action.payload }
        case READY_GAME:
            return { ...state, gameStatus: action.payload }
        case FINISH_GAME:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}
