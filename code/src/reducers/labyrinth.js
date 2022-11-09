import { createSlice } from '@reduxjs/toolkit';

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: ''
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    }
    // setGameStep: (store, action) => {
    //   store.
    // }
  }
})

export const startGame = () => {
  return () => {
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'username',
        type: 'move',
        direction: ''
      })
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
  }
}