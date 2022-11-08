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
    const start = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().game.userInput })
    };
    fetch('https://labyrinth-technigo.herokuapp.com/start', start) // samma som happy
      .then((res) => res.json())
      .then(
        (data) => console.log('data', data)
      );
  };
};

// fetch(`https://api.quotable.io/random?author=${getState().quotes.author}`) // ändra
//   .then((response) => response.json())
//    .then((quote) => console.log(quote));

