import { createSlice } from '@reduxjs/toolkit';
import ui from './ui';

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: null,
    position: null,
    history: []
  },

  reducers: {
    setName: (store, action) => {
      store.username = action.payload;
    },
    setQuote: (store, action) => {
      store.quote = action.payload;
    }
  }
});

export default labyrinth;

export const fetchLabyrinth = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth-technigo.herokuapp.com/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().game.username
      })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinth.actions.setPosition(data))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

export const generateQuote = () => {
  return (dispatch, getState) => {
    fetch(`https://api.quotable.io/random?author=${getState().labyrinth.author}`)
      .then((response) => response.json())
      .then((quote) => console.log(quote));
  }
}
