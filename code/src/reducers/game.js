/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

export const game = createSlice({
  name: 'game',
  initialState: {
    all: []
  },
  reducers: {
    setGame: (store, action) => {
      store.all = action.payload
    }
  }
})

// creating a Thunk, which is really a function, and that function returns another function. In that function, Redux will pass
// it a dispatch. This will allow us to dispatch more actions to our state. It can also pass another function
// called getState, which we can use to get the current state of our Redux store if we need to.

export const fetchGame = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start')
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGame(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}