/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    currentPosition: null,
    username: null,
    loading: false
  },

  reducers: {
    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload;
    },
    setUsername: (store, action) => {
      store.username = action.payload;
    },

    setLoading: (store, action) => {
      store.loading = action.payload;
    }
  }
});

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true));
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinth.username })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinth.actions.setCurrentPosition(data));
        dispatch(labyrinth.actions.setLoading(false));
      });
  };
};

export const nextStep = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true));
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type,
        direction
      })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinth.actions.setCurrentPosition(data));
        dispatch(labyrinth.actions.setLoading(false));
      });
  };
};