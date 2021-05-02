import { createSlice } from '@reduxjs/toolkit'

import { API_START, API_ACTION } from '../utils/urls'

const gameactions = createSlice({
  name: 'gameactions',
  initialState: {
    username: null,
    gamestart: null,
    loading: false,
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setGamestart: (store, action) => {
      store.gamestart = action.payload
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    }
  }
})

export const generateGame = () => {
  return (dispatch, getState) => {
    fetch(API_START, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ username: getState().gameactions.username })
    })
      .then(res => res.json())
      .then(data => dispatch(gameactions.actions.setGamestart(data)))
  }
}

export const nextAction = (direction) => {
  return (dispatch, getState) => {
    dispatch(gameactions.actions.setLoading(true))
    fetch(API_ACTION, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().gameactions.username,
        direction: direction,
        type: 'move'
      })
    })
      .then(res => res.json())
      .then(data => dispatch(gameactions.actions.setGamestart(data)))
      .finally(() => dispatch(gameactions.actions.setLoading(false)))
  }
}

export default gameactions
