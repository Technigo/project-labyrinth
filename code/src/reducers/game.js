import { createSlice } from '@reduxjs/toolkit'
import { API_START_URL, API_ACTION_URL } from '../utils/urls'
import { ui } from './ui'

export const game = createSlice({
  name: 'game',
  initialState: {
    player: null,
    currentPosition: null,
    history: []
  },
  reducers: {
    setPlayer: (store, action) => {
      store.player = action.payload
    },

    setCurrentPosition: (store, action) => {
      store.history = [...store.history, store.currentPosition]
      store.currentPosition = action.payload
    }
  }
})
// Thunk 1
export const fetchStartPosition = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch(API_START_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.player })
    })
      .then((res) => res.json())
      .then((data) => dispatch(game.actions.setCurrentPosition(data)))
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}

// Thunk 2
export const nextStep = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch(API_ACTION_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.player,
        type,
        direction
      })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setCurrentPosition(data))
      })
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}