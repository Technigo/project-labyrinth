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
    }
  }
});

export default gamestate;

export const generateGame = (username) => {
//   return (dispatch, getState) => {
//     fetch(`https://api.quotable.io/random?author=${getState().gamestate.author}`)
//       .then((response) => response.json())
//       .then((quote) => console.log(quote));
//   }
// }
return (dispatch, getState) => {
fetch(`https://labyrinth.technigo.io/start`, {
  method: `POST`,
  headers: { `Content-Type`: `application/json` },
  body: JSON.stringify({ status: setUsername }),
})
  .then((res) => res.json())
  .then((json) => console.log(json))
}