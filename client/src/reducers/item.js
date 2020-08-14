import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEM_ERROR} from '../actions/types';

const initialState = {
  items: [],
  loading: true,
  error: null
};

export default function(state = initialState, action){
  const {type, payload} = action;
  
  switch(type){
    case GET_ITEMS:
      return {
        ...state,
        items: payload,
        loading: false
      }
    case ADD_ITEM:
      return {
        ...state,
        loading: false,
        logs: [payload, ...state.items]
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(i => i._id !== payload),
        loading: false
      }
    case ITEM_ERROR:
      return {
        ...state,
        loading: false,
        err: payload
      }
    default:
      return state;
  }
}