import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

export const maze = createSlice({
  name: "maze",
  initialState: {
    userName: "",
    text: [],
  },
  reducers: {
    setMaze: (state, action) => {
      state.text = action.payload;
    },
    setUserName: (store, action) => {
      store.userName = action.payload;
    },
  },
});

export const fetchMaze = (userName) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));

    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: userName }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(maze.actions.setMaze(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};

export const fetchMaze2 = (userName, type, direction) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));

    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        type: type,
        direction: direction,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(maze.actions.setMaze(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
