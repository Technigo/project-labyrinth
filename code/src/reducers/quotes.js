import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    quote: '',
    history: []
  },
  reducers: {
    setAuthor: (store, action) => {
      store.username = action.payload;
    },
    setGame: (store, action) => {
      store.game = action.payload;
    },
    setUserName: (store, action) => {
      store.username = action.payload;
    }
  }
});
// save username on server
export const userName = () => {
  return (dispatch) => {
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: 'username' })
    })
      .then((response) => response.json())
    // set username for game
      .then((json) => {
        dispatch(game.action.setUserName(json))
      })
  }
}

// export const generateQuote = () => {
//   return (dispatch, getState) => {
//     fetch(`http://api.quotable.io/random?author=${getState().quotes.author}`)
//       .then((response) => response.json())
//       .then((quote) => console.log(quote))
//   }
