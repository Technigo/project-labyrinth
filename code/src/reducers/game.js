import { createSlice } from '@reduxjs/toolkit';

const game = createSlice({ // quotes
  name: 'game', // quotes
  initialState: {
    userInput: '',
    description: '',
    history: [] // Osäker på vad vi behöver här
  },
  reducers: {
    setUser: (store, action) => {
      store.userInput = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    }
  }
});

export default game;

export const generateDescription = () => {
  return (dispatch, getState) => {
    fetch(`https://api.quotable.io/random?author=${getState().game.userInput}`) // ändra
      .then((response) => response.json())
      .then((description) => console.log(description));
  }
}