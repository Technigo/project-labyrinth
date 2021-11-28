import { createSlice } from '@reduxjs/toolkit'
import ui from './ui'

const initialState = {
  username: '',
  currentCoordinates: null,
  storeCoordinates: [],
}

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setCurrentCoordinates: (state, action) => {
      state.currentCoordinates = action.payload
    },
    setStoreCoordinates: (state, action) => {
      if (state.currentCoordinates) {
        state.storeCoordinates = [...state.storeCoordinates, action.payload]
      }
    },
    restart: () => {
      return initialState
      // do we want to clear in the backend too?
    },
  },
})

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ username: getState().game.username }),
    })
      .then((response) => response.json())
      .then((data) => dispatch(game.actions.setCurrentCoordinates(data)))
      .catch((error) => console.error(error))
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}

export const nextAction = (type, direction) => {
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
      .then((response) => response.json())
      .then((data) => {
        dispatch(game.actions.setCurrentCoordinates(data))
        dispatch(game.actions.setStoreCoordinates(data))
      })
      .catch((error) => console.error(error))
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}
