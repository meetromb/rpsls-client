import {
    START_GAME,
    SEARCH_GAME,
    SET_YOUR_ID,
    SELECT_GESTURE,
    UPDATE_PLAYERS,
    READY_GAME,
    FINISH_GAME
} from '../types';

export const setYourID = (playerID) => {
    return {
        type: SET_YOUR_ID,
        payload: playerID
    }
}

export const startGame = (gameData) => {
    return {
        type: START_GAME,
        payload: {
            gameStatus: 'choosing',
            ...gameData
        }
    }
}

export const searchGame = () => {
    return {
        type: SEARCH_GAME,
        payload: 'searching'
    }
}

export const selectGesture = (gestureID) => {
    return {
        type: SELECT_GESTURE,
        gameStatus: 'waiting',
        payload: gestureID
    }
}

export const updatePlayers = (players) => {
    return {
        type: UPDATE_PLAYERS,
        payload: players
    }
}

export const readyGame = () => {
    return {
        type: READY_GAME,
        payload: 'ready'
    }
}

export const finishGame = (winner) => {
    return {
        type: FINISH_GAME,
        payload: {
            gameStatus: 'finish',
            winner
        }
    }
}
