import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { reducers } from './';
import { logger } from 'redux-logger';
import layout from '../reducers/layoutReducer';
import sidebar from '../reducers/sidebarReducers';
import theme from '../reducers/themeReducer';
import sales from '../reducers/salesDataReducers';
import glossary from '../reducers/fetchGlossaryReducer';
import user from '../reducers/userReducer';

export default function configureStore(history: History) {
	const middleware = [thunk, routerMiddleware(history)];

	if (process.env.NODE_ENV === 'development') {
		middleware.push(logger);
	}

	const rootReducer = combineReducers({
		...reducers,
		sidebar,
		layout,
		theme,
		sales,
		glossary,
		user,

		router: connectRouter(history),
	});

	const enhancers = [];
	const windowIfDefined =
		typeof window === 'undefined' ? null : (window as any);
	if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
		enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
	}

	return createStore(
		rootReducer,
		compose(applyMiddleware(...middleware), ...enhancers)
	);
}
