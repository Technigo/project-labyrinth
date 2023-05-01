/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    game: null,
    loading: false
  },

  reducers: {
    username: (state, action) => {
      state.username = action.payload;
    },
    game: (state, action) => {
      state.game = action.payload;
    },
    loading: (state, action) => {
      state.loading = action.payload;
    },
    setCurrentPosition: (store, action) => {
      store.position = action.payload;
    }
  }
});

export const startGame = () => {
  return (dispatch, getState) => {
    // set loading to true
    dispatch(game.actions.loading(true));

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.username })
    };
    fetch('https://labyrinth.technigo.io/start/', options)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        // get the data from the api - save it as the game in global state
        dispatch(game.actions.game(data));
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // set loading to false
        dispatch(game.actions.loading(false));
      });
  };
};

export const nextStep = (direction) => {
  return (dispatch, getState) => {
    dispatch(game.actions.loading(true));
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.username,
        type: 'move',
        direction
      })
    };
    fetch('https://labyrinth.technigo.io/action', options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.game(data));
      })
      .catch((error) => console.error(error))
      .finally(() => dispatch(game.actions.loading(false)));
  };
};
