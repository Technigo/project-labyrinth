/* eslint-disable implicit-arrow-linebreak */
import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui'

const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    actions: [],
    coordinates: '',
    description: ''
  },
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
    }
  }
});

export default game;

export const generateGame = () => {
  return (dispatch, getState) => {
    // TODO: set isLoading to true here
    dispatch(ui.actions.setLoading(true))

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
        dispatch(ui.actions.setLoading(false))
      });
  }
  // TODO: set isLoading back to false
};
