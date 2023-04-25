/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';
import { ApiStart } from '../utils/url';

export const game = createSlice({
  name: 'game',
  initialState: {
    username: null,
    coordinates: ''
  },
  reducers: {
    addPlayer: (store, action) => {
      store.username = action.payload
    },
    setCurrentPosition: (store, action) => {
      store.coordinates = action.payload
    }
  }
})

export const startGame = () => {
  return (dispatch, getState) => {
    // dispatch loading state to be true here
    fetch(ApiStart, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.username })
    })
      .then((res) => res.json())
      .then((currentPosition) => {
        dispatch(game.actions.setCurrentPosition(currentPosition))
        // dispatch loading state to be false here
      })
  }
}

// Send the POST request with the input from your form (instead
// of 'Hello world' like this example does):
