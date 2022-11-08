import { createSlice } from '@reduxjs/toolkit';

const games = createSlice({
  name: 'games',
  initialState: {
    username: null
},
  reducers: {
    setPlayer: (store, action) => {
      store.username = action.payload;
    }
  }
});

export const createPlayer = () => {
  return (dispatch, getState) => {
    fetch(`https://labyrinth.technigo.io/start`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: getState().game.username
        })
    })
      .then((response) => response.json())
      .then((username) => console.log(username));
  }
}

export default games;