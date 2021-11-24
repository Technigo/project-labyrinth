import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

import { ui } from './ui'

const initialState = {
  username: '',
  currentStep: {},
  history: [],
}

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    createUser: (store, action) => {
      store.username = action.payload
    },
    setCurrentStep: (store, action) => {
      store.currentStep = { ...action.payload }
    },
    addHistory: (store, action) => {
      const newHistory = [...store.history, action.payload]
      store.history = [...newHistory]
    },
    restartGame: () => {
      return initialState
    },
  },
})

export const startGame = input => {
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    const newUser = input + uniqid()
    dispatch(game.actions.createUser(newUser))

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: newUser,
      }),
    }

    fetch('https://wk16-backend.herokuapp.com/start', options)
      .then(res => res.json())
      .then(json => {
        setTimeout(() => {
          dispatch(game.actions.setCurrentStep(json))
          dispatch(ui.actions.setLoading(false))
        }, 300)
      })
  }
}

export const nextStep = action => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    dispatch(game.actions.addHistory(action))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: getState().game.username,
        type: action.type,
        direction: action.direction,
      }),
    }

    fetch('https://wk16-backend.herokuapp.com/action', options)
      .then(res => res.json())
      .then(json => {
        setTimeout(() => {
          dispatch(game.actions.setCurrentStep(json))
          dispatch(ui.actions.setLoading(false))
        }, 300)
      })
  }
}

export const navigateWithKeys = action => {
  return (dispatch, getState) => {
    let nextAction = undefined
    if (action.key === 'ArrowUp') {
      nextAction = getState().game.currentStep.actions.find(action => action.direction === 'North')
    } else if (action.key === 'ArrowDown') {
      nextAction = getState().game.currentStep.actions.find(action => action.direction === 'South')
    } else if (action.key === 'ArrowLeft') {
      nextAction = getState().game.currentStep.actions.find(action => action.direction === 'West')
    } else if (action.key === 'ArrowRight') {
      nextAction = getState().game.currentStep.actions.find(action => action.direction === 'East')
    }
    if (nextAction) {
      dispatch(nextStep(nextAction))
    }
  }
}
