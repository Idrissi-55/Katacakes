import { combineReducers } from 'redux';

import cakesReducer from './cakes';
import userReducer from './user';

const rootReducer = combineReducers({
  cakes: cakesReducer,
  user: userReducer,
});

export default rootReducer;
