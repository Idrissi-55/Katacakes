import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import cakeMiddleware from '../middlewares/cakeMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(cakeMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
