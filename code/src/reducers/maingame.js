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
      })
      .finally(() => dispatch(loading.actions.setLoading(false)))
  }
}
