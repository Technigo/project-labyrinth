/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

const game = createSlice({
  name: 'labyrinth',
  initialState: {
    all: []
  },
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload
    },

    setGame: (store, action) => {
      store.all = action.payload
    },

    setLoading: (store, action) => {
      store.loading = action.payload
    },

    setCurrentLocation: (store, action) => {
      store.currentLocation = action.payload
    }
  }
})

// creating a Thunk, which is really a function, and that function returns another function. In that function, Redux will pass
// it a dispatch. This will allow us to dispatch more actions to our state. It can also pass another function
// called getState, which we can use to get the current state of our Redux store if we need to.

// export const startGame = () => {
//   return (dispatch, getState) => {
//     dispatch(ui.actions.setLoading(true))
//     const API_URL = 'https://labyrinth.technigo.io/start'
//     fetch(API_URL), {
//       method:
//     }
//       .then((res) => res.json())
//       .then((json) => {
//         // get the data from the API - save it in the global state
//         dispatch(game.actions.setGame(json))
//         dispatch(ui.actions.setLoading(false))
//       })
//   }
// }

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
      headers: { 'Content-Type': 'aplication/json' },
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