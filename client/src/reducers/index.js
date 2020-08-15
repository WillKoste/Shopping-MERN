import {combineReducers} from 'redux';
import item from './item';
import auth from './auth';
import error from './error';

export default combineReducers({
  item,
  auth,
  error
});