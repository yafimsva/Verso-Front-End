import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { ApplicationState, reducers } from './';
import layout from '../reducers/layoutReducer';
import sidebar from '../reducers/sidebarReducers';
import theme from '../reducers/themeReducer';
import sales from '../reducers/salesDataReducers';
import glossary from '../reducers/fetchGlossaryReducer';

export default function configureStore(
	history: History,
	initialState?: ApplicationState
) {
	const middleware = [thunk, routerMiddleware(history)];

	const rootReducer = combineReducers({
		...reducers,
		sidebar,
		layout,
		theme,
		sales,
		glossary,

		router: connectRouter(history)
	});

	const enhancers = [];
	const windowIfDefined =
		typeof window === 'undefined' ? null : (window as any);
	if (windowIfDefined && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__) {
		enhancers.push(windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__());
	}

	return createStore(
		rootReducer,
		initialState,
		compose(applyMiddleware(...middleware), ...enhancers)
	);
}
