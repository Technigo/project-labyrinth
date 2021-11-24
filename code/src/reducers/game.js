import { createSlice } from '@reduxjs/toolkit';
import { ui } from "./ui";


export const game = createSlice({
  name: 'game',
  initialState: {
    username: null,
    currentPosition: null,
    history: [], // this can be used to implement a go back functionality
    // loading: false,
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload
    },
    setHistory: (store, action) => {
      // Here you need to continue to work on implementing the "go back" logic
      // what should happen with the array when a user goes back a step?
      if (store.currentPosition) {
        store.history = [...store.history, action.payload]
      }
    },
    // setLoading: (store, action) => {
    //   store.loading = action.payload
    // },
  },
})

// Redux THUNK: For starting the game by fetching the first endpoint
export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ username: getState().game.username }),
      // We're using getState() to get the value from the state variable username instead of passing it into the thunk as an argument
    })
      .then(res => res.json())
      .then(data => dispatch(game.actions.setCurrentPosition(data)))
      .finally(() => dispatch(ui.actions.setLoading(false)))
      
  }
}

// Redux THUNKS: For continuing the game by fetching the second endpoint
export const nextStep = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username: getState().game.username,
        type,
        direction,
      }),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(game.actions.setCurrentPosition(data))
        dispatch(game.actions.setHistory(data))
      })
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}
