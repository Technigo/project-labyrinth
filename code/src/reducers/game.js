import { createSlice } from '@reduxjs/toolkit';
import { API_START_URL, API_ACTION_URL } from 'utils/urls';
import ui from './ui';

const game = createSlice({
  name: 'game',
  initialState: {
    username: 'Hippoplayer',
    position: '',
    history: []
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setPosition: (store, action) => {
      store.position = action.payload;
    }
  }
});

// Thunk 1

export const fetchStartPosition = () => {
  return (dispatch, getState) => {
    fetch(API_START_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.username })
    })
      .then((response) => response.json())
      .then((data) => dispatch(game.actions.setPosition(data)));
  }
}

// Thunk 2

export const nextStep = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch(API_ACTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.username, type, direction })
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(game.actions.setPosition(data))
        dispatch(ui.actions.setLoading(false))
      });
  }
}

export default game;