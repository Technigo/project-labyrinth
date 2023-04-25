import { createSlice } from '@reduxjs/toolkit'
import { loading } from './loading'

const initialState = {
  username: null,
  coordinates: '',
  description: '',
  direction: '',
  actions: [],
  currentStep: {}
}
export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState,
  // Add functions that set state
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
      // state.coordinates = '';
    },
    setCoordinates: (state, action) => {
      state.coordinates = action.payload
    },
    setDescription: (state, action) => {
      state.description = action.payload
    },
    setActionOption: (state, action) => {
      state.actions = action.payload
    },
    // restarting, putting the coordinates to '' to get to the start page
    // maybe chose that it resets the whole state?
    restart: () => {
      return initialState
      // state.coordinates = '';
      // console.log('state.coordinates restarting:', state.coordinates)
    }
  }
})

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinth.username })
    }

    fetch('https://labyrinth.technigo.io/start', options)
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data)
        console.log('data.coordinates:', data.coordinates)
        // dispatch(labyrinth.actions.setCoordinates(data.coordinates));
        // dispatch(labyrinth.actions.setDescription(data.description));
        // dispatch(labyrinth.actions.setActionOption(data.actions));
        setTimeout(() => { dispatch(loading.actions.setLoading(false)) }, 3000);
      })
  }
}

export const continueGame = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type,
        direction
      })
    }
    // need to add dispatch for labyrinth.action and coordinate/description/actionOption
    // set loading.actions.setLoading to false
    fetch('https://labyrinth.technigo.io/action', options)
      .then((respons) => respons.json())
      .then((data) => {
        dispatch(labyrinth.actions.setCoordinates(data.coordinates));
        dispatch(labyrinth.actions.setDescription(data.description));
        dispatch(labyrinth.actions.setActionOption(data.actions));
      })
  }
}