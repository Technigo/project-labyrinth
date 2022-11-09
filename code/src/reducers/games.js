import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
}

const games = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload;
    },

    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload;
    },
  },
});

export const createPlayer = () => {
  return (dispatch, getState) => {
    // dispatch(games.actions.setLoading(true))
    fetch(`https://labyrinth.technigo.io/start`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username: getState().games.username }),
    })
    .then((response) => response.json()) 
    .then((data) => dispatch(games.actions.setCurrentPosition(data)))
  }
}

export const CreateQuestion = () => {
  return (dispatch, getState) => {
    fetch(`https://labyrinth.technigo.io/action`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: getState().games.username,
      })
    })
    .then((response) => response.json()) 
    .then((data) => dispatch(games.actions.setCurrentPosition(data)))
}
}

export default games;