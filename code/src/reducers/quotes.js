import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({
  name: 'game',
  initialState: {
    user: '',
    started: false,
    description: '',
    // position: { actions: [], coordinates: '', description: '' },
    position: [],
    loading: true,
    direction: '',
    type: ''
  },
  reducers: {
    setUser: (store, action) => {
      store.user = action.payload;
    },
    gameStarted: (store, action) => {
      store.started = action.payload;
    },
    gamePosition: (store, action) => {
      store.position = action.payload;
    },
    isLoading: (store, action) => {
      store.loading = action.payload;
    },
    setDirection: (store, action) => {
      store.direction = action.payload;
    },
    setType: (store, action) => {
      store.type = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    }
  }
});
// save username on server
export const startGame = () => {
  return (dispatch, getState) => {
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().game.user })
    })
      .then((response) => response.json())
    // set username for game
      .then((data) => console.log(data))
      .then(
        (data) => dispatch(game.actions.setDescription(data)),
        dispatch(game.actions.gameStarted(true)),
        dispatch(game.actions.isLoading(false))
      );
  }
}

export const playerAction = () => {
  return (dispatch, getState) => {
    dispatch(game.actions.isLoading(false));
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().game.user,
        type: getState().game.type,
        direction: getState().game.direction
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then(
          (data) => dispatch(game.actions.gamePosition(data)),
          dispatch(game.actions.setDescription()),
          dispatch(game.actions.gameStarted(true)),
          dispatch(game.actions.isLoading(false))
        )
    })
  };
};