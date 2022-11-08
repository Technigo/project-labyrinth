/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { createSlice } from '@reduxjs/toolkit';

const game = createSlice({
  name: 'game',
  initialState: {
    username: ''
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
      console.log('Namn', action);
    }
  }
});

export default game;

export const startGame = () => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.username
      })
    };
    fetch('https://labyrinth.technigo.io/start', options).then((response) =>
      response.json().then((json) => console.log('test2', json))
    );
  };
};
