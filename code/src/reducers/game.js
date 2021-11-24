import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

const initialState = {
  username: '',
  gameStatus: null,
  history: []
}

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    submitUsername: (store, action) => {
      store.username = action.payload
    },
    setGameStatus: (store, action) => {
      store.gameStatus = action.payload
    },
    setHistory: (store, action) => {
      if (store.gameStatus) {
        store.history = [action.payload, ...store.history]
      }
    },
    restart: () => {
      return initialState
      // return location.reload()
    }
  }
})

export const gameStart = (username) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username })
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameStatus(json))
        // dispatch(ui.actions.setLoading(false))
      })
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}

export const gamePlay = (username, direction) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        type: 'move',
        direction: direction
      })
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(gamePlay)
        dispatch(game.actions.setGameStatus(json))
        dispatch(game.actions.setHistory(json))
        // dispatch(ui.actions.setLoading(false))
      })
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}

export default game
