import { createSlice } from '@reduxjs/toolkit'
import { loading } from './loading'

const initialState = {
  username: null,
  currentStep: {}
  // coordinates: '',
  // description: '',
  // direction: '',
  // actions: [],
}
export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState,

  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    // setCoordinates: (store, action) => {
    //   store.coordinates = action.payload
    // },
    // setDescription: (store, action) => {
    //   store.description = action.payload
    // },
    // setActionOption: (store, action) => {
    //   store.actions = action.payload
    // },
    setCurrentStep: (store, action) => {
      store.currentStep = action.payload
    },

    restart: () => {
      return initialState
    }
  }
})

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().labyrinth.username })
    }

    fetch('https://labyrinth.technigo.io/start', options)
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data)
        dispatch(labyrinth.actions.setCurrentStep(data))
        dispatch(loading.actions.setLoading(false));
      })
  }
}

export const continueGame = (direction) => {
  return (dispatch, getState) => {
    dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type: 'move',
        direction
      })
    }

    fetch('https://labyrinth.technigo.io/action', options)
      .then((respons) => respons.json())
      .then((data) => {
        // dispatch(labyrinth.actions.setCoordinates(data.coordinates));
        // dispatch(labyrinth.actions.setDescription(data.description));
        dispatch(labyrinth.actions.setCurrentStep(data));
        dispatch(loading.actions.setLoading(false));
      })
  }
}