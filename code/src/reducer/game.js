import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

export const game = createSlice({
  name: 'game',
  initialState: {
    username: null,
    location: null,
    direction: []
  },

  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload;
    },
    setLocation: (store, action) => {
      store.location = action.payload;
    },
    setDirection: (store, action) => {
      store.direction = action.payload;
    }

  }
});

// First thunk

export const generateLabyrinth = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().game.username
      })
    }

    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setLocation(data))
      })
  }
}

// Second thunk

export const generateMoves = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().game.username,
        type: 'move',
        direction: getState().game.direction
      })
    }

    fetch('https://labyrinth.technigo.io/action', options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setLocation(data))
        dispatch(ui.actions.setLoading(false))
      })
  }
}