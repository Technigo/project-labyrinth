import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui'

export const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    gameState: {
      description: '',
      actions: []
    }
  },
  reducers: {
    setGameState: (state, action) => {
      const newState = state
      newState.gameState = action.payload
      return newState
    },
    setUserName: (state, action) => {
      const newState = state
      newState.username = action.payload
      return newState
    },
  }
});

export const startNewGame = (username) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    dispatch(game.actions.setUserName(username))

    fetch("https://wk16-backend.herokuapp.com/start", {
      method: 'POST',
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ username: username })
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameState(json))
        dispatch(ui.actions.setLoading(false))

      })
  }
}

export const executeAction = (username, type, direction) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: 'POST',
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        type: type,
        direction: direction
      })
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameState(json))
        dispatch(ui.actions.setLoading(false))

      })
  }
}

