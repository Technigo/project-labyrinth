import { createSlice } from '@reduxjs/toolkit';

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    userName: ''
    // quote: '',
    // history: []
  },
  reducers: {
    // setAuthor: (store, action) => {
    //   store.author = action.payload
    // },
    // setQuote: (store, action) => {
    //   store.quote = action.payload
    // }
    setGameState: (store, action) => {
      store.gameState = action.payload
    },
    setStart: (store, action) => {
      store.start = action.payload;
    }
  }
})

export default labyrinth;

export const generateLabyrinth = () => {
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState) => {
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().labyrinth.username
      })
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        dispatch(labyrinth.actions.setGameState(json))
        // .then((json) => console.log(json))
      })
  }
}