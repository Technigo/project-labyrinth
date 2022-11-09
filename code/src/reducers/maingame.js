/* eslint-disable max-len */

import { createSlice } from '@reduxjs/toolkit';
// import { loading } from './loading';

export const maingame = createSlice({
  name: 'maingame',
  initialState: {
    username: '',
    gameProps: {
      coordinates: '',
      description: '',
      actions: []
    }
  },
  reducers: {
    setGameProps: (state, action) => {
      state.gameProps = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    }
  }

});
// add gameOver: false in initialState?

export const fetchGameStart = () => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'Greg' })
    };

    fetch('https://labyrinth.technigo.io/start', options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        console.log(options)
        console.log(fetchGameStart)
        dispatch(maingame.actions.setGameProps(json))
      })
  }
}

/* https://labyrinth.technigo.io/action
This POST request needs a JSON body (like the /start request) containing the same username you started the game with.
In addition, your JSON body will specify what action was done by the player:
type - the type of action (currently only move)
direction - the direction to move */

/*
export const fetchGameStart = () => {
  return (dispatch, getState) => {
    dispatch(loading.actions.setLoading(true));

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().maingame.username })
    };

    fetch('https://labyrinth.technigo.io/start', options)
      .then((response) => response.json())
      .then((json) => {
        dispatch(maingame.actions.setGameProps(json));
        dispatch(loading.actions.setLoading(false))
      })
  }
}
*/