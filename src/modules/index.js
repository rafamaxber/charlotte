import { combineReducers } from 'redux';
import {
  loadingBarReducer,
} from 'react-redux-loading-bar';
import { routerReducer } from 'react-router-redux';
import hotels from './hotels';

export default combineReducers({
  router: routerReducer,
  hotels,
  loadingBar: loadingBarReducer,
})
