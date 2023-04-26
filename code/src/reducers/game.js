import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'Hannah Sammy Johanna',
  gameId: ''
}

const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setGameId: (state, action) => {
      state.gameId = action.payload;
    }
  }
});
export default game;

export const generateGame = () => {
  return (dispatch, getState) => {
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().game.username
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
}