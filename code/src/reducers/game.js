/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const game = createSlice({
  name: 'game',
  initialState,

  reducers: {
    userName: (state, action) => {
      state.username = action.payload;
    },
    game: (state, action) => {
      state.game = action.payload;
    },
    loading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const startGame = () => {
  return (dispatch, getState) => {
    // set loading to true
    dispatch(game.actions.loading(true));
    fetch('https://labyrinth.technigo.io/start/')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        // get the data from the api - save it as the game in global state
        dispatch(game.actions.game(data));
        console.log(data);

        // set loading to false
        dispatch(game.actions.loading(false));
      });
  };
};
