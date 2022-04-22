import { createSlice } from '@reduxjs/toolkit'
import loader from './loader'

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: null,
    question: {},
    steps: [],
  },

  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload
    },
    setQuestion: (store, action) => {
      store.question = action.payload
    },
    setStep: (store, action) => {
      store.steps = [...store.steps, action.payload]
    },
  },
})
export default labyrinth

// THUNK 1
export const generateLabyrinth = () => {
  return (dispatch, getState) => {
    dispatch(loader.actions.setLoading(true))
    fetch('https://labyrinth-technigo.herokuapp.com/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().labyrinth.username,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => dispatch(labyrinth.actions.setQuestion(data)), 2000)
        setTimeout(() => dispatch(loader.actions.setLoading(false)), 2000)
      })
  }
}
// THUNK 2
export const generateQuestion = (direction) => {
  return (dispatch, getState) => {
    dispatch(loader.actions.setLoading(true))
    fetch('https://labyrinth-technigo.herokuapp.com/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type: 'move',
        direction: direction,
      }),
    }).then((data) => {
      dispatch(labyrinth.actions.setQuestion(data))
      dispatch(loader.actions.setLoading(false))
    })
  }
}
