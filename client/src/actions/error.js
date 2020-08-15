import axios from 'axios';
import {GET_ERRORS, CLEAR_ERRORS} from './types';

export const getErrors = (msg, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: {msg, status, id}
  }
}

export const clearErrors = () => async dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  });
}