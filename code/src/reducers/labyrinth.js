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
      state.username = action.payload
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
        console.log(data)
        dispatch(labyrinth.actions.setCoordinates(data.coordinates))
        dispatch(labyrinth.actions.setDescription(data.description))
        dispatch(labyrinth.actions.setActionOption(data.actions))
        dispatch(loading.actions.setLoading(false))
      })
  }
}