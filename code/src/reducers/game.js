import { createSlice } from '@reduxjs/toolkit';

const game = createSlice({
  name: 'game',
  initialState: {
    username: null,
    currentLocation: [],
    isLoading: false
  },
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload;
    },
    setCurrentLocation: (store, action) => {
      store.currentLocation = action.payload;
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload
    }
  }
  // an action to save the joke to global state
  // an action to save the category to global state
});
export const { setUserName, setCurrentLocation, setLoading } = game.actions;
export default game;

// a thunk to handle api call to start the game
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

