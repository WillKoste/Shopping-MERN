import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEM_ERROR} from '../actions/types';
import {v4 as uuidv4} from 'uuid';

const initialState = {
  items: [
    // {id: uuidv4(), name: 'Steak'},
    // {id: uuidv4(), name: 'Tree Soup'},
    // {id: uuidv4(), name: 'Button Baby'},
    // {id: uuidv4(), name: 'Serious Steven'}
  ]
};

export default function(state = initialState, action){
  const {type, payload} = action;
  
  switch(type){
    case GET_ITEMS:
      return {
        ...state,
        items: payload
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(i => i._id !== payload)
      }
    default:
      return state;
  }
}