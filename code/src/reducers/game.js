/* eslint-disable object-shorthand */
/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit'

import { ui } from './ui'

const initialState = {
  username: '',
  currenStep: {},
  history: []
}

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state, action) => {
      state.username = action.payload
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
        dispatch(ui.actions.setLoading(false))
      })
  }
}
//  dispatch(todos.actions.setTodos(json))