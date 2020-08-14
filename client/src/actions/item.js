import axios from 'axios';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEM_ERROR} from './types';

export const getItems = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5005/api/items');

    console.log(res.data.data);

    dispatch({
      type: GET_ITEMS,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: {msg: err.response}
    });
  }
}

export const deleteItem = (id) => async dispatch => {
  await axios.delete(`http://localhost:5005/api/items/${id}`);
  
  try {
    dispatch({
      type: DELETE_ITEM,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: {msg: err.response}
    });
  }
}

export const addItem = (item, history, edit = false) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const res = await axios.post('http://localhost:5005/api/items', item, config)

    if(!edit){
      history.push('/');
    }

    dispatch({
      type: ADD_ITEM,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: {msg: err.response}
    });
  }
}