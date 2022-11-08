import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

export const game = createSlice({
  name: 'game',
  initialState: {
    username: 'Duckling',
    location: null,
    move: ''
  },

  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload;
    },
    setLocation: (store, action) => {
      store.location = action.payload;
    },
    setMove: (store, action) => {
      store.move = action.payload;
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
        console.log(data)
        /* dispatch(ui.actions.setLoading(false)) */
      })
  }
}

// Second thunk

export const generateMoves = ({ type, direction }) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/jason' },
      body: JSON.stringify({
        username: getState().game.username,
        type,
        direction
      })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setLocation(data))
        dispatch(ui.actions.setLoading(false))
      })
  }
}