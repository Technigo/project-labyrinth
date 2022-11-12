import { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
  name: 'game',
  initialState: {
    progress: {},
    username: '',
    history: [],
    isLoading: false
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
      console.log('setUsername invoked')
    },
    setProgress: (store, action) => {
      store.progress = action.payload;
      console.log('setProgress invoked')
      console.log(store.progress)
    },
    setLoader: (store, action) => {
      store.isLoading = action.payload;
      console.log('setLoader invoked')
    }
  }
});

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoader(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.username })
    }
    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((data) => dispatch(game.actions.setProgress(data)))
      .finally(() => dispatch(game.actions.setLoader(false)))
  }
}

export const gameProgress = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoader(true))
    const optionsAction = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.username,
        type,
        direction
      })
    };

    fetch('https://labyrinth.technigo.io/action', optionsAction)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setProgress(data));
      })
      .finally(() => dispatch(game.actions.setLoader(false)))
  }
};