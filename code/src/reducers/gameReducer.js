import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'
import { ui } from './ui'

export const gameReducer = createSlice({
  name: 'gameReducer',
  initialState: {
    currentStep: null,
    playerName: '',
    history: []
  },
  reducers: {
    gameBegin: (state, action) => {
      state.currentStep = action.payload
    },
    addPlayerName: (state, action) => {
      state.playerName = action.payload
    },
    makeMove: (state, action) => {
      state.currentStep = action.payload
      state.history = [...state.history, state.currentStep]
    },
    clearCurrentStep: (state) => {
      state.currentStep = null
    }
  }
})

export const addPlayer = (playerName) => {
  return (dispatch) => {
    dispatch(gameReducer.actions.addPlayerName(playerName))
  }
}

export const startGame = (playerName) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    const body = JSON.stringify({ username: playerName })
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(gameReducer.actions.gameBegin({ id: uniqid(), data: json }))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

export const handleMove = (direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    const player = getState().gameReducer.playerName
    const body = JSON.stringify({
      username: player,
      type: 'move',
      direction
    })
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(gameReducer.actions.makeMove({
          id: uniqid(),
          data: json
        }))
        dispatch(ui.actions.setLoading(false))
      })
  }
}