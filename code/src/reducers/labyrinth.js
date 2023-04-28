/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import loading from './loading'

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    coordinates: '',
    description: '',
    actions: []
  },
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

    setAction: (state, action) => {
      state.actions = action.payload
    }
  }
});

export default labyrinth;

// a thunk to handle api call
export const getLabyrinth = () => {
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
        console.log(data)
        dispatch(labyrinth.actions.setCoordinates(data.coordinates))
        dispatch(labyrinth.actions.setDescription(data.description))
        dispatch(labyrinth.actions.setAction(data.actions))
        setTimeout(() => { dispatch(loading.actions.setLoading(false)) }, 1500)
      })
  }
}

export const getAction = (type, direction) => {
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
        console.log(data)
        dispatch(labyrinth.actions.setCoordinates(data.coordinates))
        dispatch(labyrinth.actions.setDescription(data.description))
        dispatch(labyrinth.actions.setAction(data.actions))
        setTimeout(() => { dispatch(loading.actions.setLoading(false)) }, 1500)
      })
  }
}