/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

// The slice of state includes fields for the game state, such as the username, description, direction, moves, history, loading, and coordinates.
// The code defines several reducers, which are functions that modify the state based on specific actions.
// Reducers set the username, description, direction, moves, and loading state fields.
// The reducers are used to update the state in response to actions triggered by the user or by asynchronous events, such as network requests.
// The code exports two functions, createPlayer and GenerateQuestion, which are action creators that dispatch actions to update the game state based on network requests.
// These functions use the fetch API to make HTTP requests to a game server, and then update the state based on the response data.
// The dispatch function is passed in as an argument to these functions, which allows them to dispatch actions to update the state through the reducers defined earlier in the code.

const games = createSlice({
  name: 'games',
  initialState: {
    username: null,
    description: null,
    direction: null,
    moves: null,
    history: [],
    loading: false,
    coordinates: null
  },

  reducers: {
    setUserName: (store, action) => {
      store.username = `${new Date().getTime()}+${action.payload}`
      // Add time to make the username unique
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    },
    setMoves: (store, action) => {
      if (store.moves) {
        store.history = [...store.history, store.moves]
      }
      store.moves = action.payload
    },

    setDirection: (store, action) => {
      store.direction = action.payload
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    },

    setCoordinates: (store, action) => {
      store.coordinates = action.payload
    },

    setPreviousMove: (store) => {
      if (store.history.length) {
        store.moves = store.history[store.history.length - 1]
        store.history = store.history.slice(0, store.history.length - 1)
        store.description = null;
        store.coordinates = null;
      }
    }
  }
});

export const createPlayer = (direction) => {
  return (dispatch, getState) => {
    dispatch(games.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().games.username,
        type: 'move',
        direction
      })
    })
      .then((response) => response.json())
      .then((game) => {
        dispatch(games.actions.setDescription(game.description))
        dispatch(games.actions.setMoves(game.actions))
        dispatch(games.actions.setCoordinates(game.coordinates))
      })
      .finally(() => dispatch(games.actions.setLoading(false)))
  }
}

export const GenerateQuestion = () => {
  return (dispatch, getState) => {
    dispatch(games.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().games.username,
        type: 'move',
        direction: getState().games.direction
      })
    })
      .then((response) => response.json())
      .then((game) => {
        dispatch(games.actions.setDescription(game.description))
        dispatch(games.actions.setMoves(game.actions))
        dispatch(games.actions.setCoordinates(game.coordinates))
      })
      .finally(() => dispatch(games.actions.setLoading(false)))
  }
}

export default games;