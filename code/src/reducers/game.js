import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  gameStarted: false,
  response: {},
  direction: '',
  isLoading: false
};

const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
      console.log('Name', action);
    },
    setDirection: (state, action) => {
      state.direction = action.payload;
    },
    setResponse: (state, action) => {
      state.response = action.payload;
    },
    showGame: (state) => {
      state.gameStarted = true;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    restart: () => {
      return initialState;
    }
  }
});

export default game;

export const gameProgress = (nextMove) => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true));
    dispatch(game.actions.setResponse({}));
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.username,
        type: 'move',
        direction: getState().game.direction
      })
    };

    fetch(`https://labyrinth.technigo.io/${nextMove}`, options)
      .then((response) => response.json())
      .then((json) => {
        dispatch(game.actions.setResponse(json));
        dispatch(game.actions.setLoading(false));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
