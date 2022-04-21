import { createSlice } from "@reduxjs/toolkit";

const START_URL = "https://labyrinth-technigo.herokuapp.com/start";
const NEXT_URL = "https://labyrinth-technigo.herokuapp.com/action";

const initialState = {
  username: "",
  gameStatus: null,
  loading: false,
};

export const labyrinth = createSlice({
  name: "labyrinth",
  initialState,
  reducers: {
    setLoading: (store, action) => {
      store.loading = action.payload;
    },
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
    dispatch(labyrinth.actions.setLoading(true));
    fetch(START_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: getState().labyrinth.username }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(labyrinth.actions.setGameStatus(json));
        dispatch(labyrinth.actions.setLoading(false));
      });
  };
};
export const nextStep = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true));
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
        dispatch(labyrinth.actions.setLoading(false));
      });
  };
};
