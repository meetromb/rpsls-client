import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import store from './store/config';
import { getHashFromURL } from './Utils/utils';
import sm from './SocketManager';

const SocketManager = new sm();
SocketManager.initConnect(getHashFromURL())

const AppWithState = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(<AppWithState />, document.getElementById('root'));
registerServiceWorker();
