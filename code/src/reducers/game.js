import { createSlice } from '@reduxjs/toolkit';

import { spinner } from './spinner';

export const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    // Jag la till allt som fanns i console-loggen men vet inte om det är rätt..Får det inte att funka
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

//Fetchen + spinner-setLoading funkar och syns i console-log/redux devtools, men jag har inte lyckats displaya varken spinnern eller resultaten från fetchen
export const fetchGame = (userName) => {
  return (dispatch) => {
    dispatch(spinner.actions.setLoading(true));

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: userName }),
    };

    fetch('https://wk16-backend.herokuapp.com/start', options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameObject(json));
        dispatch(spinner.actions.setLoading(false));
      });
  };
};

export const fetchGameSteps = ({ direction }) => {
  return (dispatch, getState) => {
    const { username } = getState().game;
    dispatch(spinner.actions.setLoading(true));

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        type: 'move',
        direction: direction,
      }),
    };

    fetch('https://wk16-backend.herokuapp.com/action', options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameObject(json));
        dispatch(spinner.actions.setLoading(false));
      });
  };
};
