import { createSlice } from '@reduxjs/toolkit';

import { spinner } from './spinner';

export const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    gameObject: {
      coordinates: '',
      description: '',
      actions: [],
    },
  },
  reducers: {
    setGameObject: (state, action) => {
      state.gameObject = action.payload;
    },
    setUserName: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const fetchGame = () => {
  return (dispatch, getState) => {
    dispatch(spinner.actions.setLoading(true));

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: getState().game.username }),
    };

    fetch('https://wk16-backend.herokuapp.com/start', options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameObject(json));
        setTimeout(() => dispatch(spinner.actions.setLoading(false)), 4000);
      });
  };
};

export const fetchGameSteps = ({ direction }) => {
  return (dispatch, getState) => {
    dispatch(spinner.actions.setLoading(true));

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: getState().game.username,
        type: 'move',
        direction: direction,
      }),
    };

    fetch('https://wk16-backend.herokuapp.com/action', options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameObject(json));
        setTimeout(() => dispatch(spinner.actions.setLoading(false)), 1000);
      });
  };
};
