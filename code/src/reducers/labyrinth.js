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

    setUsername: (store, action) => {
      store.username = action.payload
    },

    setCoordinates: (store, action) => {
      store.coordinates = action.payload
    },

    setDescrition: (store, action) => {
      store.coordinates = action.payload
    },
    setAction: (store, action) => {
      store.action = action.payload
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
        dispatch(labyrinth.actions.setActionOption(data.actions))
        dispatch(loading.actions.setLoading(false))
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
        dispatch(labyrinth.actions.setActionOption(data.actions))
        dispatch(loading.actions.setLoading(false))
      })
  }
}