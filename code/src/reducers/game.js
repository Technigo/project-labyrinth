/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';
import { ApiStart, ApiMove } from '../utils/api.js';

export const game = createSlice({
  name: 'game',
  initialState: {
    username: null,
    position: null
  },
  reducers: {
    addPlayer: (store, action) => {
      store.username = `${new Date().getTime()} ${action.payload}`
    },
    setCurrentPosition: (store, action) => {
      store.position = action.payload
    },
    restartGame: (store) => {
      store.username = null
      store.position = null
    }
  }
})

export const ui = createSlice({
  name: 'ui',
  initialState: {
    loading: false
  },
  reducers: {
    setLoading: (store, action) => {
      store.loading = action.payload
    }
  }
})

export const startGame = () => {
  return (dispatch, getState) => {
    // dispatch loading state to be true here
    dispatch(ui.actions.setLoading(true))
    fetch(ApiStart, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.username })
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setCurrentPosition(json))
        // dispatch loading state to be false here
      })
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}

export const nextMove = (direction) => {
  return (dispatch, getState) => {
    // dispatch loading state to be true here
    dispatch(ui.actions.setLoading(true))
    fetch(ApiMove, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.username,
        type: 'move',
        direction
      })
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setCurrentPosition(json))
        // dispatch loading state to be false here
      })
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}
