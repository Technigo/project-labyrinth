/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

const game = createSlice({
  name: 'game',
  initialState: {
    username: null,
    // Stores the whole fetch from the API
    currentLocation: []
  },

  reducers: {

    restartGame: (store) => {
      store.username = null
      store.currentLocation = []
    },
    setUserName: (store, action) => {
      store.username = `${new Date().getTime()} ${action.payload}`
    },

    setGame: (store, action) => {
      store.all = action.payload
    },

    // The setCurrentLocation reducer function sets the currentLocation property of the store object
    // to a new object that is a shallow copy of the action.payload object.
    // This is achieved by using the spread operator (...) to create a copy of the action.payload object
    // and then placing it in a new object with {} curly braces. By doing this, any changes made to the
    // currentLocation object will not modify the original action.payload object.

    setCurrentLocation: (store, action) => {
      store.currentLocation = { ...action.payload }
    }
  }
})

// creating a Thunk, which is really a function, and that function returns another function. In that function, Redux will pass
// it a dispatch. This will allow us to dispatch more actions to our state. It can also pass another function
// called getState, which we can use to get the current state of our Redux store if we need to.

// First thunk

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
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
export default game;