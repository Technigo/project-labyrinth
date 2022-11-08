import { createSlice } from '@reduxjs/toolkit';

const quotes = createSlice({
  name: 'quotes',
  initialState: {
    username: '',
    quote: '',
    history: []
  },
  reducers: {
    setUser: (store, action) => {
      store.username = action.payload;
    },
    setQuote: (store, action) => {
      store.quote = action.payload;
    }
  }
});

export default quotes;

export const generateQuote = () => {
  return () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'username'
      })
    }

    fetch('https://labyrinth.technigo.io/start', options)
      .then((result) => result.json())
      .then((json) => console.log(json))
  }
}