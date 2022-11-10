import { createSlice } from '@reduxjs/toolkit';

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    coordinates: '',
    description: ''
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },

    setGameStep: (store, action) => {
      if (store.description !== '') {
        store.description.push(store.description);
      }
      store.description = action.payload;
    }

    //   setPreviousGameStep: (store, action) =>
  }
});

export const startGame = () => {
  return (dispatch) => {
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'username',
        type: 'type',
        direction: 'direction'
      })
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then((username) => dispatch(username.action.setUsername(username)))
  }
}