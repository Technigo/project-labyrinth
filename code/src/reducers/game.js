import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'Hannah Sammy Johanna'
}

const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setActions: (state, action) => {
      state.action = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setCordinates: (state, action) => {
      state.cordinates = action.payload;
    }
  }
});
export default game;

export const generateGame = () => {
  return (dispatch, getState) => {
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().game.username
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(game.actions.setActions(data.actions));
        dispatch(game.actions.setDescription(data.descriptions));
        dispatch(game.actions.setCordinates(data.cordinates));
      })
      .catch((error) => console.error(error));
  }
}