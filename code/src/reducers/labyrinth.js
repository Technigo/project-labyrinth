import { createSlice } from '@reduxjs/toolkit';


const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: null,
    question: {}
  },

  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload
    },
    setQuestion: (store, action) => {
      store.question = action.payload
    },
  }
})

export default labyrinth

// THUNK 1
export const generateLabyrinth = () => {
  return (dispatch, getState) => {
    fetch('https://labyrinth-technigo.herokuapp.com/start', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
      username: getState().labyrinth.username }),
   })
  
      .then((res) => res.json())
      .then((data) => dispatch(labyrinth.actions.setQuestion(data)))
  }
}

// THUNK 2
export const generateQuestion = () => {
  return (dispatch, getState) => {
    fetch('https://labyrinth-technigo.herokuapp.com/action', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username: getState().labyrinth.username, type: 'move', direction: direction,
      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(labyrinth.actions.setQuestion(data)))
  }
}