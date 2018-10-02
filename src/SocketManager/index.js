import io from 'socket.io-client';
import { setHashToURL } from '../Utils/utils';
import store from '../store/config';
import {
    startGame,
    searchGame,
    setYourID,
    updatePlayers,
    readyGame,
    finishGame
} from '../store/actions/game_actions';

let instance = null;

export default class SocketManager {
    constructor() {
        if (!instance) {
            instance = this;
        }

        return instance;
    }

    initConnect(URLhash) {
        this.socket = io.connect('http://localhost:8080');

        this.socket.on('connect', () => {
            store.dispatch(setYourID(this.socket.id));
        });

        this.socket.emit('init', URLhash);

        this.socket.on('roomCreated', function (data) {
            setHashToURL(`#${data}`);
        })

        this.socket.on('startGame', function (data) {
            store.dispatch(startGame(data));
        })

        this.socket.on('opponentLeave', function (data) {
            store.dispatch(searchGame());
        })

        this.socket.on('updatePlayers', function (players) {
            store.dispatch(updatePlayers(players));
        })

        this.socket.on('playersReady', function () {
            store.dispatch(readyGame());
        })

        this.socket.on('gameFinished', function (winner) {
            store.dispatch(finishGame(winner));
        })
    }

    emitGestureSelect(gestureID) {
        this.socket.emit('gestureSelect', gestureID);
    }

    emitPlayerReady() {
        this.socket.emit('ready');
    }

    getSocket() {
        return this.socket;
    }
}
