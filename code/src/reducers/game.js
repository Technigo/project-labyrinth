import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui'

const initialState = {
  username: '',
  actions: [],
  coordinates: '',
  description: ''
}

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setUsername: (store, action) => {
      store.username = `${new Date().getTime()}+${action.payload}`
    },
    setActions: (store, action) => {
      store.actions = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    },
    setCoordinates: (store, action) => {
      store.coordinates = action.payload;
    },
    restartGame: () => initialState
  }
});

export const generateGame = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
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
}

export const generateMoves = (direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    /* insert dispatch that starts loading page */
    /* get different info from API depending on username */
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().game.username,
        type: 'move',
        direction
      })
    })
    /* sets the next move with all of the info and then removes loading page */
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setActions(data.actions));
        dispatch(game.actions.setDescription(data.description));
        dispatch(game.actions.setCoordinates(data.coordinates));
      })
      .catch((error) => console.error(error))
      .finally(() => dispatch(ui.actions.setLoading(false)));
  };
}