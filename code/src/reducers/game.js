/* eslint-disable implicit-arrow-linebreak */
import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

const initialState = {
  username: '',
  actions: [],
  coordinates: '',
  description: ''
  /* history: [], */
};

const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setActions: (store, action) => {
      store.actions = action.payload;
    },
    setCoordinates: (store, action) => {
      store.coordinates = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    },
    restartGame: () => initialState
  }
});

export default game;

export const generateGame = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));

    // fetch endpoint
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().game.username
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(game.actions.setActions(data.actions));
        dispatch(game.actions.setDescription(data.description));
        dispatch(game.actions.setCoordinates(data.coordinates));
      })
      .catch((error) => console.error(error))
      .finally(() => dispatch(ui.actions.setLoading(false)));
  };
};

export const generateMoves = (direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));

    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().game.username,
        type: 'move',
        direction
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(game.actions.setActions(data.actions));
        dispatch(game.actions.setDescription(data.description));
        dispatch(game.actions.setCoordinates(data.coordinates));
      })
      .catch((error) => console.error(error))
      .finally(() => dispatch(ui.actions.setLoading(false)));
  }
}
