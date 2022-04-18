import { createSlice } from "@reduxjs/toolkit";

const game = createSlice({
  name: "game",
  initialState: {
    items: null,
    username: null,
  },
  reducers: {
    setName: (store, action) => {
      store.username = action.payload;
    },
    setItem: (store, action) => {
      store.items = action.payload;
      console.log(store.items);
    },
  },
});

export const fetchGame = () => {
  return (dispatch, getState) => {
    fetch("https://labyrinth-technigo.herokuapp.com/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: getState().game.username }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(game.actions.setItem(data)));
  };
};

export default game;
