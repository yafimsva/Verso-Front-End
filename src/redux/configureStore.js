import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import layout from './reducers/layoutReducer';
import sidebar from './reducers/sidebarReducers';
import theme from './reducers/themeReducer';
import glossary from './reducers/fetchReducer';
import user from './reducers/userReducer';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
	middleware.push(logger);
}

const rootReducer = combineReducers({
	sidebar,
	layout,
	theme,
	glossary,
	user,
});

export const store = createStore(rootReducer, applyMiddleware(...middleware));
