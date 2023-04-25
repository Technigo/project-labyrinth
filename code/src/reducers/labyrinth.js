import { createSlice } from '@reduxjs/toolkit';

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: null,
    coordinates: null
  },
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload
      console.log(store.username)
    }
  }
})

export const startGame = () => {
  return (getState) => {
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ username: getState().labyrinth.username })
    })
    console.log('Hey whoa!')
      .then((res) => res.json())
      .then((data) => console.log('data'))
  }
}
