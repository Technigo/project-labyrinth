import { createSlice } from '@reduxjs/toolkit';

const game = createSlice({ // quotes
  name: 'game', // quotes
  initialState: {
    username: '',
    description: ''
    // steps: [] // Osäker på vad vi behöver här
  },
  reducers: {
    setUser: (store, action) => {
      store.username = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    }
    // setStep: (store, action) => {
    //   store.steps = [...store.moves, action.payload];
    //   console.log('store.steps', store.steps)
    // }
  }
});

export default game;

export const generateDescription = () => {
  return (dispatch, getState) => {
    const start = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().game.username })
    };
    fetch('https://labyrinth-technigo.herokuapp.com/start', start) // samma som happy
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setDescription(data))
        console.log('data', data);
      });
  };
};

export const generateNextDescription = (direction) => {
  return (dispatch, getState) => {
    const action = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().game.username,
        type: 'move',
        direction })
    };
    fetch('https://labyrinth-technigo.herokuapp.com/action', action) // samma som happy
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setDescription(data))
        console.log('data2', data);
      });
  };
};
