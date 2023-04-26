/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  currentPosition: null,
  history: [],
  loading: false
}

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState, // I added the declaration of initialState above this function, I thought it was easter to navigate.
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload
      console.log(store.username)
    },
    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    },
    restartGame: () => {
      return initialState
    } // This function returns the state to the initial state, that is declared above.

    /* setPreviousMove: (store, action) => {
      if (store.history.length) {
        store.moves = store.history[store.history.length - 1]
        store.history = store.history.slice(0, store.history.length - 1)
      }
    } */
  }
})

// FIRST FETCH REQUEST - to start the game.
export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ username: getState().labyrinth.username })
    })
      .then((res) => res.json())
      .then((swag) => {
        dispatch(labyrinth.actions.setCurrentPosition(swag))
      })
      .finally(() => {
        dispatch(labyrinth.actions.setLoading(false))
      })
    console.log('Hey whoa!')
  }
}

// SECOND FETCH REQUEST - to continue the game.
export const nextMove = (type, direction) => {
  // We send in the type and direction from the actions array. We can access them when we're mapping them in the Labyrinth-component.
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type,
        direction
      }) // Here the username, type and direction is posted to the API.
    })
      .then((res) => res.json())
      .then((swag) => {
        dispatch(labyrinth.actions.setCurrentPosition(swag));
        // Here we update our currentPosition with the new data (or swag hahah!) that we get back from the API.
      })
      .finally(() => dispatch(labyrinth.actions.setLoading(false)))
  }
}