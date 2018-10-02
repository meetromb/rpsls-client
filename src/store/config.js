import { createStore, compose } from 'redux';

import reducers from './reducers';

let reduxCompose = compose;

reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(reducers, reduxCompose());