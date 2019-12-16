/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers';

const middleware = applyMiddleware(thunk, logger);

const reduxDevTools = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose;

const store = createStore(
  rootReducer,
  reduxDevTools(
    middleware,
  ),
);

export default store;
