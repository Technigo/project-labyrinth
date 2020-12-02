import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

export const labyrinth = createSlice({
  name: "labyrinth",
  initialState: {
    content: {},
  },
  reducers: {
    setLabyrinthData: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const fetchLabyrinthData = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "Moa",
      }),
    })
      .then((results) => results.json())
      .then((json) => {
        dispatch(labyrinth.actions.setLabyrinthData(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};

export const fetchDirectionData = (direction) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "moa",
        type: "move",
        direction: direction,
      }),
    })
      .then((results) => results.json())
      .then((json) => {
        dispatch(labyrinth.actions.setLabyrinthData(json));
        dispatch(ui.actions.setLoading(false));
        console.log(json);
      });
  };
};
