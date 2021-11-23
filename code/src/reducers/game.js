import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

import { ui } from './ui'

export const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    currentStep: {},
    steps: [],
  },
  reducers: {
    createUser: (store, action) => {
      store.username = action.payload
    },
    setCurrentStep: (store, action) => {
      store.currentStep = { ...action.payload }
    },
    setSteps: (store, action) => {
      const newSteps = [...store.steps, action.payload]
      store.steps =  [...newSteps] 
    },
  },
})

export const startGame = input => {
  return dispatch => {
    const newUser = input + uniqid()
    dispatch(game.actions.createUser(newUser))
    dispatch(ui.actions.setLoading(true))

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: `${newUser}`,
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
    dispatch(game.actions.setSteps(action.direction))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: `${getState().game.username}`,
        type: `${action.type}`,
        direction: `${action.direction}`,
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
