import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

const game = createSlice({
  name: 'game',
  initialState: {
    username: null,

    // Stores the whole fetch from the API
    currentLocation: [],

    loading: false
  },

  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload;
    },
    setCurrentLocation: (store, action) => {
      store.currentLocation = action.payload;
    }
  }
});

// First thunk

export const generateLabyrinth = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    const username = { username: getState().game.username }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(username)
    }

    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setCurrentLocation(data))
      })
      // To increase the time loading page is showing we added setTimeout
      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000))
  }
}

// Second thunk

export const generateMoves = (direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().game.username,
        type: 'move',
        direction
      })
    }

    fetch('https://labyrinth.technigo.io/action', options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setCurrentLocation(data))
      })
      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 1500))
  }
}
export default game