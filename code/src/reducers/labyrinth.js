import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'


export const labyrinth = createSlice({
  name: "labyrinth",
  initialState: {
    username: '',
    content: {}
  },
  
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setLabyrinthData: (state, action) => {
      state.content = action.payload
    }
  }
})

//Starting the game by sending a post request 
export const startGame =  () => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({ username: "SpelarensNamn" }),
    }

    dispatch(ui.actions.setLoading(true))
    fetch("https://wk16-backend.herokuapp.com/start", options)
    .then((res) => res.json())
    .then((json) => {
      dispatch(labyrinth.actions.setLabyrinthData(json))
    })
  }
}