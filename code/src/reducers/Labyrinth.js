import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

const labyrinth = createSlice({
  name: "labyrinth",
  initialState: {
    username: null,
    location: null,
    action: null,
    loading: false
  },

  reducers: {
    setLocation: (store, action) => {
      store.location = action.payload;
    },

    setUsername: (store, action) => {
      store.username = action.payload;
    },

    setAction: (store, action) => {
      store.action = action.payload;
    }
  }
});

export default labyrinth;

export const fetchLabyrinth = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: getState().labyrinth.username
      })
    };

    fetch("https://wk16-backend.herokuapp.com/start", config)
      .then((res) => res.json())
      .then((json) => dispatch(labyrinth.actions.setLocation(json)))
      .finally(() => dispatch(ui.actions.setLoading(false)));
  };
};

export const continueLabyrinth = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        direction: getState().labyrinth.action,
        type: "move"
      })
    };

    fetch("https://wk16-backend.herokuapp.com/action", config)
      .then((res) => res.json())
      .then((json) => dispatch(labyrinth.actions.setLocation(json)))
      .finally(() => dispatch(ui.actions.setLoading(false)));
  };
};
