import { createSlice } from '@reduxjs/toolkit';
import { API_START_URL, API_ACTION_URL } from 'utils/urls';

const game = createSlice({
  name: 'game',
  initialState: {
    player: '',
    position: '',
    history: []
  },
  reducers: {
    setPlayer: (store, action) => {
      store.player = action.payload;
    },
    setPosition: (store, action) => {
      store.position = action.payload;
    }
  }
});

export default game;

export const fetchStartPosition = () => {
  return (dispatch, getState) => {
    fetch(API_START_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.player })
    })
      .then((response) => response.json())
      .then((data) => dispatch(game.actions.setPosition(data)));
  }
}

export const nextStep = (type, direction) => {
  return (dispatch, getState) => {
    fetch(API_ACTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.player, type, direction })
    })
      .then((response) => response.json())
      .then((data) => dispatch(game.actions.setPosition(data)));
  }
}