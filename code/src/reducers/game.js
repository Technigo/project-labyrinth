/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit'

import { ui } from './ui'

const newUser = {
  username: null,
  currenStep: {},
  history: []
}

export const game = createSlice({
  name: 'game',
  initialState: newUser,
  reducers: {
    startGame: (state, action) => {
      const { username } = action.payload
      state.username.push({ username })
    }
  }
})

export const fetchStart = () => {
  const START_API = 'https://wk16-backend.herokuapp.com/start'
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch(START_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username })
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        dispatch(game.actions.startGame)
        dispatch(ui.actions.setLoading(false))
      })
  }
}