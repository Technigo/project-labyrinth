/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    coordinates: '',
    description: '',
    actions: [],
    username: null
  },
  reducers: {
    setUser: (store, action) => {
      store.username = action.payload
    }
  }

});
export default labyrinth;

export const startGame = () => {
  return (dispatch, getState) => {
    fetch(
      'https://labyrinth.technigo.io/start',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: getState().labyrinth.username })
      }
    )
      .then((res) => res.json())
      .then((location) => console.log(location))
      .catch((error) => console.error(error))
      .finally(console.log('all done'))
  }
};

/* export const generateQuote = () => {
  return (dispatch, getState) => {
    fetch(`https://api.quotable.io/random?author=${getState().quotes.author}`)
      .then((response) => response.json())
      .then((quote) => console.log(quote));
  }
} */