import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

const initialState = {
  username: '',
  actions: [],
  coordinates: '',
  description: ''
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

/* Sets the game */
export const generateGame = () => {
  return (dispatch, getState) => {
    /* starts loading page */
    dispatch(ui.actions.setLoading(true));

    /* gets info from API */
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().game.username
      })
    })
    /* sets all the info and removes loading page */
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

/* takes care of the users chioces of direction */
export const generateMoves = (direction) => {
  return (dispatch, getState) => {
    /* starts loading page */
    dispatch(ui.actions.setLoading(true));

    /* gets different info from API depending on username */
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
        console.log(data);
        dispatch(game.actions.setActions(data.actions));
        dispatch(game.actions.setDescription(data.description));
        dispatch(game.actions.setCoordinates(data.coordinates));
      })
      .catch((error) => console.error(error))
      .finally(() => dispatch(ui.actions.setLoading(false)));
  };
};
