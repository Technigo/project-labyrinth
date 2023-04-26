import { createSlice } from '@reduxjs/toolkit'
import { loading } from './loading'

export const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    loading: false,
    gameStep: {
      coordinates: ''
    }
  },

  reducers: {

    // an action to save the gameStep to local state
    setGame: (store, action) => {
      store.gameStep = action.payload
    },

    // an action to save the username
    setUsername: (store, action) => {
      store.username = action.payload;
    }

    // an action to save the current loading state to global state
    // setLoading: (store, action) => {
    //   store.loading = action.payload
    // }
  }
})
// the thunk:
export const getGameStarted = () => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().game.username
      })
    }
    fetch('https://labyrinth.technigo.io/start', options)
      .then((response) => response.json())
      .then((json) => {
        dispatch(game.actions.setGame(json))
        // dispatch(game.actions.setLoading(false))
      })
  }
}

export const getGameStep = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(loading.actions.setLoading(true))

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().game.username,
        type,
        direction
      })
    }
    fetch('https://labyrinth.technigo.io/action', options)
      .then((response) => response.json())
      .then((json) => {
        dispatch(game.actions.setGame(json))
      })
      .finally(() => dispatch(loading.actions.setLoading(false)))
    console.log(loading)
  }
}