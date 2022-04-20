import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

const START_URL = "https://wk16-backend.herokuapp.com/start";

const initialState = {
  username: "",
  items: { coordinates: "0.0", description: "", actions: [] },
};

export const labyrinth = createSlice({
  name: "labyrinth",
  initialState,
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setItems: (store, action) => {
      store.setItems = action.payload;
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
        dispatch(labyrinth.actions.setItems(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
