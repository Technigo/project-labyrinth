/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';
import { ApiStart } from '../utils/url';

export const game = createSlice({
  name: 'game',
  initialState: {
    username: null,
    position: null
  },
  reducers: {
    addPlayer: (store, action) => {
      store.username = action.payload
    },
    setCurrentPosition: (store, action) => {
      store.position = action.payload
    }
  }
})

export const startGame = () => {
  return (dispatch, getState) => {
    // dispatch loading state to be true here
    fetch(ApiStart, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.username })
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setCurrentPosition(json))
        // dispatch loading state to be false here
      })
  }
}
