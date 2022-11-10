/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';
import { loading } from './loading';

export const maingame = createSlice({
  name: 'maingame',
  initialState: {
    username: '',
    gameProps: {
      coordinates: '',
      description: '',
      actions: [],
      history: []
    }
  },
  reducers: {
    setGameProps: (state, action) => {
      state.gameProps = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    }
    /* historyGoBack: (state) => {
      if (state.history.length > 1) {
        state.gameProps = state.history[state.history.length - 1];
        state.history = state.history.slice(0, state.history.length - 1);
      } */

  }

});
// add gameOver: false in initialState?

export const fetchGameStart = () => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().maingame.username })
    };

    fetch('https://labyrinth.technigo.io/start', options)
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        console.log(options)
        dispatch(maingame.actions.setGameProps(json))
      })
  }
}

export const fetchGameStep = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(loading.actions.setLoading(true))

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().maingame.username,
        type,
        direction
      })
    };

    fetch('https://labyrinth.technigo.io/action', options)
      .then((response) => response.json())
      .then((json) => {
        dispatch(maingame.actions.setGameProps(json))
        console.log(json)
      })
      .finally(() => dispatch(loading.actions.setLoading(false)))
  }
}

/*
This POST request needs a JSON body (like the /start request) containing the same username you started the game with.
In addition, your JSON body will specify what action was done by the player:
type - the type of action (currently only move)
direction - the direction to move */
