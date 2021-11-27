import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  player: '',
  items: [],
  moveHistory: [],
};

export const game = createSlice({
  name: 'game',
  initialState: {
    username: null,
    currentPosition: null,
    history: [],
    loading: false,
  },

  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload;
    },
    setLoading: (store, action) => {
      store.loading = action.payload;
    },
    resetGame: () => {
      return initialState;
    },
  },
});

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ username: getState().game.username }),
      // We're using getState() to get the value from the state variable username instead of passing it into the thunk as an argument
    })
      .then((res) => res.json())
      .then((data) => dispatch(game.actions.setCurrentPosition(data)))
      .finally(() => dispatch(game.actions.setLoading(false)));
  };
};

export const nextStep = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username: getState().game.username,
        type,
        direction,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setCurrentPosition(data));
      })
      .finally(() => dispatch(game.actions.setLoading(false)));
  };
};
