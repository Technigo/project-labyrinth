import { createSlice } from '@reduxjs/toolkit';

const gamestate = createSlice({
  name: 'gamestate',
  initialState: {
    username: '',
    nextQuestion: [],
    history: [],
    isLoading: false
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload;
    },
    setHistory: (store, action) => {
      store.history = action.payload;
    },
    setNextQuestion: (store, action) => {
      store.nextQuestion = action.payload;
    }
  }
});

export default gamestate;

export const generateGame = () => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().gamestate.username
      })
    }
    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then((json) => { dispatch(gamestate.actions.setNextQuestion(json)) })
  };
};
//   return (dispatch, getState) => {
//     fetch(`https://api.quotable.io/random?author=${getState().gamestate.author}`)
//       .then((response) => response.json())
//       .then((quote) => console.log(quote));
//   }
// }