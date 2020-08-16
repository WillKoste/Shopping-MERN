import {USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: true,
  user: null
};

export default function(state = initialState, action){
  const {type, payload} = action;

  switch(type){
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        user: payload,
        isAuthenticated: true
      }
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.data);
      console.log(payload);
      console.log(payload.user);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        isLoading: false
      }
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        token: null
      }
    default:
      return state;
  }
}