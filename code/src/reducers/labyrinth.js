import { createSlice } from '@reduxjs/toolkit'

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    coordinates: '',
    description: ''
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
    }
  }
})
export default labyrinth;

export const generateLabyrinthData = () => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'Technigo'
      })
    }

    fetch('https://labyrinth.technigo.io/start', options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        dispatch(labyrinth.actions.setCoordinates(data.coordinates))
        dispatch(labyrinth.actions.setDescription(data.description))
      })
  }
}