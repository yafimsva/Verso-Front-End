import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from './react-auth0-spa';
import { store } from './redux/configureStore';
import config from './auth_config.json';
import App from './App';

ReactDOM.render(
	<Auth0Provider
		domain={config.domain}
		client_id={config.clientId}
		audience={config.audience}
		redirect_uri={window.location.origin}>
		<Provider store={store}>
			<App />
		</Provider>
	</Auth0Provider>,
	document.getElementById('root')
);
