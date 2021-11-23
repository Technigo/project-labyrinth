import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

export const game = createSlice({
  name: "game",
  initialState: {
    username: "",
    gameList: {
      coordinates: "",
      description: "",
      actions: [],
    },
  },
  reducers: {
    startGame: (store, action) => {
      store.gameList = action.payload;
    },

    setUsername: (store, action) => {
      store.username = action.payload;
    },
  },
});

export const fetchGame = (userName) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: userName }),
  };

  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/start", options)
      .then((res) => res.json())
      .then((json) => {
        setTimeout(() => dispatch(game.actions.startGame(json)), 800);
        setTimeout(() => dispatch(ui.actions.setLoading(false)), 800);
      });
  };
};

export const fetchInstructions = ({ move = "move", direction }) => {
  return (dispatch, getState) => {
    const { username } = getState().game;
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        type: move,
        direction: direction,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.startGame(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
