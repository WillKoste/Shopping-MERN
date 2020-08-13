import axios from 'axios';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEM_ERROR} from './types';

export const getItems = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5005/api/items');

    dispatch({
      type: GET_ITEMS,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    });
  }
}

export const deleteItem = (id) => async dispatch => {
  console.log(id);
  const res = await axios.delete(`http://localhost:5005/api/items/${id}`);
  
  try {
    dispatch({
      type: DELETE_ITEM,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    });
  }
}