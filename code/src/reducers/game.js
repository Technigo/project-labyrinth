/* eslint-disable no-shadow */
import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

export const game = createSlice({
  name: 'games',
  initialState: {
    username: '',
    description: {},
    location: [],
    isCompleted: false
  },
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    },
    setLocation: (store, action) => {
      store.location = [...store.location, action.payload]
      console.log('Location', store.location)
    },
    setCompleted: (store, action) => {
      store.isCompleted = action.payload;
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
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', data)
      .then((response) => response.json())
      .then((data) => {
        dispatch(game.actions.setDescription(data))
      })
      .catch((error) => console.log('Error', error))
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}

export const gameAction = (item) => { // fetching options and getting the game riddles going
  return (dispatch, getState) => {
    const data = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().game.username,
        type: item.type,
        direction: item.direction }),
      type: 'move',
      direction: getState().game.description
    }
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/action', data)
      .then((response) => response.json())
      .then((data) => {
        dispatch(game.actions.setDescription(data))
        if (data.actions && data.actions.length === 0) {
          dispatch(game.actions.setCompleted(true))
        }
      })
      .finally(() => {
        dispatch(game.actions.setLocation(item))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

export default game