/* eslint-disable no-shadow */
import { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
  name: 'games',
  initialState: {
    username: '',
    description: [],
    location: '',
    loading: false
  },
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    },
    setLocation: (store, action) => {
      store.location = action.payload
      console.log('Location', store.location)
    }
  }
});

export const gameBoard = () => { // start api
  return (dispatch, getState) => {
    const data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().game.username })
    }
    dispatch(game.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', data)
      .then((response) => response.json())
      .catch((error) => console.log('Error', error))
      .then((username) => dispatch(game.actions.setUserName(username)))
      .then((response) => dispatch(game.actions.setDescription(response.description)))
      .finally(() => dispatch(game.actions.setLoading(false)))
  }
}

export const gameAction = () => { // fetching options and getting the game riddles going
  return (dispatch, getState) => {
    const data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().game.username }),
      type: 'move',
      direction: getState().game.description
    }
    dispatch(game.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/action', data)
      .then((response) => response.json())
      .then((description) => dispatch(game.actions.setDescription(description)))
      .then((json) => dispatch(game.actions.setLocation(json)))
      .finally(() => dispatch(game.actions.setLoading(false)))
  }
}

export default game