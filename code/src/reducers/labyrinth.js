/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit'

const steps = []

const initialState = {
  steps,
  userName: '',
  gameOver: false
}

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState,
  reducers: {

    setUserName: (store, action) => {
      const { input } = action.payload
      console.log(action)
      store.userName = input
    },

    setGameState: (store, action) => {
      store.gameState = action.payload
      // how to do this?
    },

    setNextStep: (store, action) => {
      // how to do this?
      const newStep = action.payload
      const updatedSteps = [...store.steps, newStep]
      store.steps = updatedSteps

      if (steps.length === 0) {
        store.gameOver = true
      }
    }
  }
})

export const generateActions = (input) => {
  return (/* dispatch, getState */) => {
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: input,
        type: 'move',
        direction: 'East'
      })
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      // how to move to next step?
  }
}