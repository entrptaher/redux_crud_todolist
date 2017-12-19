import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from '../reducers';
import { loadState, saveState } from './localStorage';

// create middlewares
const middleware = applyMiddleware(promise(),thunk, logger);

// state management: start the app with the current state in localStr
const persistedState = loadState();

const store = createStore(rootReducer, persistedState, middleware)

// save the state anytime we have a change in the store
store.subscribe(() => {
	saveState(store.getState());
})

export default store;
