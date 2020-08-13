import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types';
import {v4 as uuidv4} from 'uuid';

const initialState = {
  items: [
    {id: uuidv4(), name: 'Steak'},
    {id: uuidv4(), name: 'Tree Soup'},
    {id: uuidv4(), name: 'Button Baby'},
    {id: uuidv4(), name: 'Serious Steven'}
  ]
};

export default function(state = initialState, action){
  const {type, payload} = action;
  
  switch(type){
    default:
      return state;
  }
}