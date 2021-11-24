import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

export const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    gameList: {
      coordinates: '',
      description: '',
      actions: []
    }
  },
  reducers: {
    setGameElements: (state, action) => {
      state.gameList = action.payload;
    },
    setUserName: (store, action) => {
      store.username = action.payload;
    }
  }
});

export const fetchGame = (userName) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: userName })
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        dispatch(game.actions.setGameElements(json));
      })
      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
  };
};

export const fetchGameInstructions = ({ move = 'move', direction }) => {
  return (dispatch, getState) => {
    const { username } = getState().game;
    dispatch(ui.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        type: move,
        direction: direction
      })
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameElements(json));
      })
      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000));
  };
};
