import { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    progress: '',
    history: []
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setProgress: (store, action) => {
      store.progress = action.payload;
    }
  }
});

export const startGame = () => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.username })
    }
    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((data) => {
        dispatch(game.actions.setProgress(data))
      })
  }
}