import { createSlice } from '@reduxjs/toolkit';

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: null,
    currentPosition: {}
  },

  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload
    },
    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload
    },
  }
})

// THUNK 
export const generateLabyrinth = () => {

  const options = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: inputValue
    })
  }

  return (dispatch, getState) => {
    fetch(`https://labyrinth-technigo.herokuapp.com/start=${getState().labyrinth.username}`, options)
      .then(res => res.json())
      .then(position => dispatch(labyrinth.actions.setCurrentPosition(position)))
  }
}

export default labyrinth
