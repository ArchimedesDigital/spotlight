import 'es6-shim';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from './containers/Root';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import { loginJWT } from './lib/auth'; // eslint-disable-line
import { wsClient } from './middleware/apolloClient'; // eslint-disable-line

import './fonts.css';
import './index.css';

const store = configureStore();
injectTapEventPlugin();

ReactDOM.render(<Root store={store} />, document.getElementById('react-root'));

registerServiceWorker();
