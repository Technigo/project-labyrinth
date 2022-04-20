import { createSlice } from '@reduxjs/toolkit'

import ui from './ui'

const initialState = {
  username: null,
  currentStep: {},
  history: []
}

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: initialState,
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },

    setCurrentStep: (store, action) => {
      store.currentStep = action.payload
    },

    setHistory: (store, action) => {
      store.history.push(action.payload)
    },

    restartGame: () => {
      return initialState
    }
  }
})

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth-technigo.herokuapp.com/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: `${getState().labyrinth.username}` })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch(labyrinth.actions.setCurrentStep(data))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

export const continueGame = (direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth-technigo.herokuapp.com/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: `${getState().labyrinth.username}`,
        type: "move",
        direction: direction
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch(labyrinth.actions.setCurrentStep(data))
        dispatch(labyrinth.actions.setHistory(direction))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

export default labyrinth
