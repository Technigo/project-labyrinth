import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    currentStep: '',
    type: '',
    direction: ''
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setCurrentStep: (store, action) => {
      store.currentStep = action.payload
    },
    setType: (store, action) => {
      store.type = action.payload
    },
    setDirection: (store, action) => {
      store.direction = action.payload
    }
  }
})

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().labyrinth.username
      })
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then((json) => dispatch(labyrinth.actions.setCurrentStep(json)))
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}

export const continueGame = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type: getState().labyrinth.type,
        direction: 'East'
      })
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then((json) => dispatch(labyrinth.actions.setCurrentStep(json)))
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}