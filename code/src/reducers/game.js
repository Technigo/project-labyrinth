import { createSlice } from '@reduxjs/toolkit';
import { API_START, API_ACTION } from 'utils/urls'
import { ui } from './ui';

export const game = createSlice({
  name: 'game',
  initialState: {
    currentPosition: null,
    username: null,
    history: []
  },
  reducers: {
    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload;
    },

    setUsername: (store, action) => {
      store.username = action.payload;
    },

    setHistory: (store, action) => {
      if (store.currentPosition) {
        store.history = [...store.history, action.payload];
      }
    }
  }
});

// eslint-disable-next-line max-len

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
      .then((data) => {
        console.log(`Response data: ${JSON.stringify(data)}`)
        return dispatch(game.actions.setCurrentPosition(data));
      })
      .finally(() => dispatch(ui.actions.setLoading(false)))
  };
};

export const fetchAction = (action) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch(API_ACTION, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.username,
        type: action.type,
        direction: action.direction })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(`Response action: ${JSON.stringify(data)}`)
        dispatch(game.actions.setCurrentPosition(data));
        dispatch(game.actions.setHistory(data));
      })
      .finally(() => dispatch(ui.actions.setLoading(false)))
  };
};