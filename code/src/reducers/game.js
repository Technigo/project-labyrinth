import { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
  name: 'game',
  initialState: {
    userName: '',
    gameObject: {
      coordinates: '',
      description: '',
      actions: []
    }
  },
  reducers: {
    setStage: (state, action) => {
      state.gameObject = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    }
  }
});

export const fetchGame = () => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.userName })
    };

    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setStage(data));
        console.log(data)
      });
  };
};

export const fetchGameSteps = ({ direction }) => {
  return (dispatch, getState) => {
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
      .then((json) => {
        dispatch(game.actions.setStage(json));
      });
  };
};