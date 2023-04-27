import { createSlice } from '@reduxjs/toolkit';

const game = createSlice({
  name: 'game',
  initialState: {
    username: null,
    currentLocation: {},
    isLoading: false,
    isGameStarted: false,
    isStartScreen: true,
    isEndScreen: false
  },
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload;
    },
    setCurrentLocation: (store, action) => {
      store.currentLocation = action.payload;
      if (action.payload.actions.length === 0) {
        store.isEndScreen = true;
      } else {
        store.isEndScreen = false;
      }
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload
    },
    setGameStarted: (store, action) => {
      store.isGameStarted = action.payload
    },
    showStartScreen: (store) => {
      store.isStartScreen = true;
    },
    hideStartScreen: (store) => {
      store.isStartScreen = false;
    },
    restart: (store) => {
      store.username = null;
      store.currentLocation = {};
      store.isLoading = false;
      store.isGameStarted = false;
      store.isStartScreen = true;
      store.isEndScreen = false;
    }
  }
});
// eslint-disable-next-line max-len
export const { setUserName, setCurrentLocation, setLoading, setGameStarted, showStartScreen, hideStartScreen, restart } = game.actions;
export default game;

// thunk to handle api call to start the game
export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true));
    const username = { username: getState().game.username }

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(username)
    }

    fetch('https://labyrinth.technigo.io/start', options)
      .then((response) => response.json())
      .then((json) => {
        dispatch(game.actions.setCurrentLocation(json))
        dispatch(game.actions.setGameStarted(true));
      })
      .finally(setTimeout(() => dispatch(game.actions.setLoading(false)), 1500))
  }
}

// Second thunk to handle api call to play the game
export const playGame = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true));
    const { username } = getState().game;

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, type, direction })
    };

    fetch('https://labyrinth.technigo.io/action', options)
      .then((response) => response.json())
      .then((json) => {
        dispatch(game.actions.setCurrentLocation(json));
        dispatch(game.actions.setLoading(false));
      });
  };
};

