import { createSlice } from '@reduxjs/toolkit';

const quotes = createSlice({
  name: 'quotes',
  initialState: {
    author: '',
    quote: '',
    history: []
  },
  reducers: {
    setAuthor: (store, action) => {
      store.author = action.payload;
    },
    setQuote: (store, action) => {
      store.quote = action.payload;
    }
  }
});

export default quotes;

export const generateQuote = () => {
  return (dispatch, getState) => {
    fetch(`https://labyrinth.technigo.io/start`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: 'TechnigoPlayer'
        })
    })
      .then((response) => response.json())
      .then((quote) => console.log(quote));
  }
}
