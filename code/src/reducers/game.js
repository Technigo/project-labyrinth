import { createSlice } from '@reduxjs/toolkit';
import { API_START, API_ACTION } from 'utils/urls'
import { ui } from './ui';

export const game = createSlice({
  name: 'game',
  initialState: { // InitialState is an object.
    currentPosition: null,
    username: null,
    history: []
  },
  reducers: { // function with two different parameters by default
    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload;
    },

    setUsername: (store, action) => {
      store.username = action.payload;
    },
    // function that remembers where the user has been
    setHistory: (store, action) => {
      if (store.currentPosition) {
        store.history = [...store.history, action.payload];
      }
    }
  }
})

// eslint-disable-next-line max-len
/* Dont know where or how yet, but maybe try to reload/ delete history when the game ends.. */

export const fetchStart = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch(API_START, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.username })
    })
      .then((res) => res.json())
      /* .then((json) => console.log(json)) */
      .then((data) => dispatch(game.actions.setCurrentPosition(data)))
      .finally(() => dispatch(ui.actions.setLoading(false)))
  };
};

// Not sure this is accurate, i just copied the one above, and have not double checked yet.
export const fetchAction = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch(API_ACTION, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.username, type, direction })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setCurrentPosition(data));
        dispatch(game.actions.setHistory(data));
      })
      .finally(() => dispatch(ui.actions.setLoading(false)))
  };
};