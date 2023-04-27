import { createSlice } from '@reduxjs/toolkit'
import { loading } from './loading'

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    coordinates: '',
    description: '',
    actions: []
  },
  // Here we add functions that set the state, i.e. the username.
  reducers: {
    setUsername: (state, action) => {
      state.username = `${new Date().getTime()}+${action.payload}`
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
    // restarting, we set coordinates to '' to get to the start page
    // maybe fix later so it resets the whole state?
    restart: (state) => {
      state.coordinates = '';
      console.log('state.coordinates for restart:', state.coordinates)
    }
  }
})

export const generateLabyrinthData = () => {
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
        console.log('generateLabyrinthData data', data)
        console.log('generateLabyrinthData data.coordinates:', data.coordinates)
        dispatch(labyrinth.actions.setCoordinates(data.coordinates));
        dispatch(labyrinth.actions.setDescription(data.description));
        dispatch(labyrinth.actions.setActionOption(data.actions));
        setTimeout(() => { dispatch(loading.actions.setLoading(false)) }, 3500);
      })
  }
}

// The API request for when the user is selecting an action
export const generateActionData = (type, direction) => {
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
    fetch('https://labyrinth.technigo.io/action', options)
      .then((respons) => respons.json())
      .then((data) => {
        console.log('data', data);
        console.log('generateActionData data.coordinates:', data.coordinates);
        console.log('generateActionData data.description:', data.description);
        console.log('generateActionData data.actions:', data.actions);
        dispatch(labyrinth.actions.setCoordinates(data.coordinates));
        dispatch(labyrinth.actions.setDescription(data.description));
        dispatch(labyrinth.actions.setActionOption(data.actions));
        setTimeout(() => { dispatch(loading.actions.setLoading(false)) }, 2000);
      })
  }
}