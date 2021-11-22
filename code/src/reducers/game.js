import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

import { ui } from './ui'

export const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    currentStep: {},
  },
  reducers: {
    createUser: (store, action) => {
      store.username = action.payload
    },
    setCurrentStep: (store, action) => {
      store.currentStep = { ...action.payload }
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

    console.log('[startGame]', options)
    fetch('https://wk16-backend.herokuapp.com/start', options)
      .then(res => res.json())
      .then(json => {
        dispatch(game.actions.setCurrentStep(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

export const nextStep = action => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))

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

    console.log('[nextStep]', options)

    fetch('https://wk16-backend.herokuapp.com/action', options)
      .then(res => res.json())
      .then(json => {
        dispatch(game.actions.setCurrentStep(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}
