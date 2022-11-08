import { createSlice } from '@reduxjs/toolkit';

const gamestate = createSlice({
  name: 'gamestate',
  initialState: {
    username: '',
    status: '',
    isLoading: false
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setLoading: (store, action) => {
      store.isLoading = action.payload;
    },
    setstatus: (store, action) => {
      store.status = action.payload;
    }

  }
});

export default gamestate;

export const generateGame = (username) => {
  return (dispatch) => {
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username })
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then((json) => { dispatch(gamestate.actions.status(json)) })
  };
};
//   return (dispatch, getState) => {
//     fetch(`https://api.quotable.io/random?author=${getState().gamestate.author}`)
//       .then((response) => response.json())
//       .then((quote) => console.log(quote));
//   }
// }