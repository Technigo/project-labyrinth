import { createSlice } from '@reduxjs/toolkit';

import { spinner } from './spinner';

export const game = createSlice({
  name: 'game',
  initialState: {
    startGame: [],
  },
  reducers: {
    setStartGame: (state, action) => {
      state.startGame = action.payload;
    },
  },
});

//Tänker att en annan reducer kommer kunna vara nåt i stil med:
//  setUsername: (store, action) => {
//  store.username = action.payload
// },
// och att man ändrar i initialState till userName: null

//Fetchen + spinner-setLoading funkar och syns i console-log/redux devtools, men jag har inte lyckats displaya varken spinnern eller resultaten från fetchen
export const fetchStartGame = () => {
  return (dispatch) => {
    dispatch(spinner.actions.setLoading(true));

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'JoLo' }),
    };

    fetch('https://wk16-backend.herokuapp.com/start', options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setStartGame(json));
        dispatch(spinner.actions.setLoading(false));
      });
  };
};
