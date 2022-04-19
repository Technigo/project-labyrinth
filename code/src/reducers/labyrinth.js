import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

const START_URL = "https://labyrinth-technigo.herokuapp.com/start";

const initialState = {
  username: "",
  coordinates: null,
};

export const labyrinth = createSlice({
  name: "labyrinth",
  initialState,
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setCoordinates: (store, action) => {
      store.coordinates = action.payload;
    },
    setNewLabirynth: () => {
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
      body: JSON.stringify(),
    };
    fetch(START_URL, options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(labyrinth.actions.setCoordinates(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
