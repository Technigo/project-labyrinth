import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const labyrinth = createSlice({
  name: "labyrinth",
  initialState: {
    username: '',
    content: []
  },
  reducers: {
    setLabyrinthData: (state, action) => {
      state.content = action.payload
    }
  }
})

export const fetchLabyrinthData =  () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch("https://wk16-backend.herokuapp.com/start")
    .then((res) => res.json())
    .then((json) => {
      dispatch(labyrinth.actions.setLabyrinthData(json))
      dispatch(ui.actions.setLoading(false))
    })
  }
}