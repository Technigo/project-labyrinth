import { createSlice } from '@reduxjs/toolkit';
// import { ui } from './ui'

export const gameState = createSlice({
  name: 'gameState',
  initialState: {
    username: '',
    stage: []
  },
  reducers: {
    setUser: (store, action) => {
      store.username = action.payload
    },
    setStage: (store, action) => {
      store.stage = action.payload
    },
    setRestartGame: (state) => {
      state.username = '';
      state.stage = [];
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload;
    }
  }
});

export const fetchGame = () => {
  return (dispatch, getState) => {
    dispatch(gameState.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().gameState.username })
    };

    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(gameState.actions.setStage(data));
        dispatch(gameState.actions.setLoading(false));
      })
      // .finally(() => dispatch(ui.actions.setLoading(false)));
  }
};

export const fetchGameSteps = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(gameState.actions.setLoading(true))
    const optionsAction = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().gameState.username,
        type: 'move',
        direction
      })
    };

    fetch('https://labyrinth.technigo.io/action', optionsAction)
      .then((res) => res.json())
      .then((data) => {
        dispatch(gameState.actions.setStage(data));
        dispatch(gameState.actions.setLoading(false));
      })
      // .finally(() => dispatch(ui.actions.setLoading(false)));
  }
};

/* setTimeout(() => {
  dispatch(labyrinth.actions.setStage(data))
    .finally(dispatch(ui.actions.setLoading(false)))
}, 500) */