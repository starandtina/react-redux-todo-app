import { combineReducers }    from 'redux';
import { routerStateReducer } from 'redux-router';
import counter                from './counter';
import * as todoReducers      from './todo';

export default combineReducers({
  // counter,
  router: routerStateReducer,
  ...todoReducers
});
