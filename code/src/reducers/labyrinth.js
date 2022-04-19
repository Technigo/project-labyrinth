import { createSlice } from '@reduxjs/toolkit'

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: null,
  },
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload
    },
  },
})

export const generateLabyrinth = (username) => {
  return (dispatch, getState) => {
    fetch('https://labyrinth-technigo.herokuapp.com/start', {
      method: 'POST',
      headers: {
        'Content type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(labyrinth.actions.setUserName(username)))
  }
}
