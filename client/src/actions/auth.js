import axios from 'axios';
import {USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL} from './types';
import {getErrors} from './error';
import setAuthToken from '../utils/setAuthToken';

export const loadUser = () => async (dispatch) => {
  if(localStorage.token){
    setAuthToken(localStorage.token);
  }
  
  try {
    const res = await axios.get('http://localhost:5005/api/auth/user');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    console.log('The issue lies here');
    dispatch({
      type: AUTH_ERROR
    });
  }
}

export const login = (email, password) => async dispatch => {
  console.log('hey babe');
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({email, password});
  try {
    const res = await axios.post('http://localhost:5005/api/auth/login', body, config);


    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data
    });
  }
}

export const register = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify(formData);
  try {
    const res = await axios.post('http://localhost:5005/api/auth/register', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: err.response.data
    });
  }
}

export const logout = () => async dispatch => {
  try {
    dispatch({
      type: LOGOUT_SUCCESS
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: err.response.data
    });
  }
}