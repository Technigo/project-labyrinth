/* eslint-disable object-shorthand */
import { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    stage: [],
    isLoading: false
  },
  reducers: {
    setUser: (store, action) => {
      store.username = action.payload
    },
    setStage: (store, action) => {
      store.stage = action.payload
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload
    }
  }
});

export const fetchGame = () => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.username })
    };

    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setStage(data));
        console.log(data)
      })
      .finally(dispatch(game.actions.setLoading(false)))
  }
};

export const fetchGameSteps = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true))
    const optionsAction = {
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

    fetch('https://labyrinth.technigo.io/action', optionsAction)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setStage(data));
      })
      .finally(dispatch(game.actions.setLoading(false)))
  }
};

