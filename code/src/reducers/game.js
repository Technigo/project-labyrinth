/* eslint-disable no-shadow */
import { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
  name: 'game',
  initialState: {
    username: null,
    description: null
  },
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    }
  }
});

export const gameBoard = () => {
  return (dispatch, getState) => {
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().games.username })
    })
      .then((response) => response.json())
      .catch((error) => console.log('Error', error))
      .finally((game) => dispatch(game.actions.setDescription(game.description)))
  }
}

export default game