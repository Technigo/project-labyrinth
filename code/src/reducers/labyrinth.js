import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  gameStarted: false,
  response: {},
  direction: '',
  isLoading: false
}

export const labyrinth = createSlice({
  name: 'labyrinth',
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
    restart: (state) => {
      // return initialState;
      // console.log('restart started')
      state.username = initialState.username
      state.gameStarted = initialState.gameStarted
      state.response = initialState.response
      state.direction = initialState.direction
      state.isLoading = initialState.isLoading
    }
  }
});

// a thunk to handle api call

export const gameProgress = (nextMove) => {
  const url = nextMove === 'start' ? 'https://labyrinth.technigo.io/start' : 'https://labyrinth.technigo.io/action';

  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true));
    dispatch(labyrinth.actions.setResponse({}));
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type: 'move',
        direction: nextMove
      })
    };

    console.log(nextMove)
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        dispatch(labyrinth.actions.setResponse(json));
        dispatch(labyrinth.actions.setLoading(false));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};