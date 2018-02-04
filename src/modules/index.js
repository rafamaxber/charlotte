import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import hotels from './hotels';

export default combineReducers({
  router: routerReducer,
  hotels
})
