import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

const START_URL = "https://wk16-backend.herokuapp.com/start";
const NEXT_URL = "https://labyrinth-technigo.herokuapp.com/action";

const initialState = {
  username: "",
  gameStatus: null,
  items: { coordinates: "0.0", description: "", actions: {} },
};

export const labyrinth = createSlice({
  name: "labyrinth",
  initialState,
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setGameStatus: (store, action) => {
      store.gameStatus = action.payload;
    },
    restart: () => {
      return initialState;
    },
  },
});

export const startLabyrinth = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: getState().labyrinth.username }),
    };
    fetch(START_URL, options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(labyrinth.actions.setGameStatus(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
export const nextStep = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    fetch(NEXT_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type,
        direction,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(labyrinth.actions.setGameStatus(json));
      })
      .finally(() => dispatch(ui.actions.setLoading(false)));
  };
};
