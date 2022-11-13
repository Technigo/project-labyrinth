import { createSlice } from '@reduxjs/toolkit'

const game = createSlice({
  name: 'game',
  initialState: {
    user: '',
    started: false,
    description: '',
    step: []
  },
  reducers: {
    setUser: (store, action) => {
      store.user = action.payload;
    },
    gameStarted: (store, action) => {
      store.started = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    },
    setStep: (store, action) => {
      store.step = [...store.moves, action.payload]
      // store.step = store.moves.push(action.payload) // this works too but above is correct way
    },
    isLoading: (store, action) => {
      store.loading = action.payload;
    }
  }
});

export default game;

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(game.actions.isLoading(true))
    const start = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().game.user })
    };
    fetch('https://labyrinth.technigo.io/start', start)
      .then((response) => response.json())
      .then((data) => {
        dispatch(game.actions.setDescription(data))
        dispatch(game.actions.gameStarted(true))
      })
      .finally(() => {
        dispatch(game.actions.isLoading(false))
      })
  }
}

export const nextStep = (direction) => {
  return (dispatch, getState) => {
    dispatch(game.actions.isLoading(true))
    const action = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().game.user,
        type: 'move',
        direction })
    };
    fetch('https://labyrinth.technigo.io/action', action)
      .then((response) => response.json())
      .then((data) => {
        dispatch(game.actions.setDescription(data));
      })
      .finally(() => {
        dispatch(game.actions.isLoading(false))
      })
  }
}