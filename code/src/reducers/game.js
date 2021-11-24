import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

export const game = createSlice({
  name: "game",
  initialState: {
    username: "",
    currentPosition: null,
    gameList: [{ description: "hahahaah" }],
  },
  reducers: {
    setUsername: (store, action) => {
      console.log("setUsername: ", action.payload);
      store.username = action.payload;
    },

    setGameList: (state, action) => {
      state.gameList = action.payload;
    },
  },
});

export const fetchGame = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "MajBritt" }),
    };

    fetch("https://wk16-backend.herokuapp.com/start", options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameList(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};

export const nextStep = (direction) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "MajBritt",
        direction: direction,
        type: "move",
      }),
    };

    fetch("https://wk16-backend.herokuapp.com/action", options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameList(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
