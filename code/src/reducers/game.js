import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui'

// Dont put anything dependant on the api inside here://
export const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    location: '',
    isLoading: false,
    coordinates: null,
    step: []

  },
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload
      console.log(store.username)
    },
    setLocation: (store, action) => {
      store.location = action.payload
      console.log(store.location)
    },
    setStep: (store, action) => {
      store.step = action.payload
      console.log(store.step)
    },
    setCoordinates: (store, action) => {
      store.coordinates = action.payload
    }
    // restartGame: (store) => {
    //   store.location = ''
    //   store.username = ''
    // }
  }
});

// First thunk

export const fetchGame = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().game.username
      })
    }

    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setLocation(data))
        dispatch(game.actions.setCoordinates(game.coordinates))
      })
      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000))
  }
}

// Second thunk

export const navigateGame = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().game.username,
        type: 'move',
        direction: getState().game.step
      })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setLocation(data))
        dispatch(game.actions.setCoordinates(game.coordinates))
      })
      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000))
  }
}

