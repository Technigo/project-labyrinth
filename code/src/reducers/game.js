import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

const restart = { username: "" };

const game = createSlice({
  name: "game",
  initialState: {
    username: "",
    gameData: null,
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },

    setGameData: (store, action) => {
      store.gameData = action.payload;
    },
    resetGame: () => {
      return restart;
    },
  },
});

export const generateGameData = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: getState().game.username,
      }),
    };
    fetch(`https://labyrinth-technigo.herokuapp.com/start`, options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setGameData(data));
      })
      .finally(() => dispatch(ui.actions.setLoading(false)));
  };
};

export const playGame = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: getState().game.username,
        type,
        direction,
      }),
    };
    fetch("https://labyrinth-technigo.herokuapp.com/action", options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setGameData(data));
        dispatch(ui.actions.setLoading(false));
      });
  };
};

export default game;
