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
      const newUser = action.payload + uniqid()
      store.username = newUser
    },
    setCurrentStep: (store, action) => {
      store.currentStep = { ...action.payload }
    },
  },
})

export const startGame = input => {
  return dispatch => {
    dispatch(game.actions.createUser(input))
    dispatch(ui.actions.setLoading(true))

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: `${input}`,
      }),
    }

    fetch('https://wk16-backend.herokuapp.com/start', options)
      .then(res => res.json())
      .then(json => {
        dispatch(game.actions.setCurrentStep(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}
