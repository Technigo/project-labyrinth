import { createSlice } from '@reduxjs/toolkit'
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
      state.username = action.payload
    },
    setCoordinates: (state, action) => {
      state.coordinates = action.payload
    },
    setDescription: (state, action) => {
      state.description = action.payload
    },
    setActionOption: (state, action) => {
      state.actions = action.payload
    }
  }
})
export default labyrinth;
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
        console.log(data)
        dispatch(labyrinth.actions.setCoordinates(data.coordinates))
        dispatch(labyrinth.actions.setDescription(data.description))
        dispatch(labyrinth.actions.setActionOption(data.actions))
        dispatch(loading.actions.setLoading(false))
      })
  }
}

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
        console.log(data)
        dispatch(labyrinth.actions.setCoordinates(data.coordinates))
        dispatch(labyrinth.actions.setDescription(data.description))
        dispatch(labyrinth.actions.setActionOption(data.actions))
        dispatch(loading.actions.setLoading(false))
      })
  }
}