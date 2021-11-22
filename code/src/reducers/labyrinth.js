import { createSlice } from "@reduxjs/toolkit";
import { loader } from "./loader";

export const labyrinth = createSlice({
  name: "labyrinth",
  initialState: {
    labyrinthDescription: [{ description: "hello world" }],
  },
  reducers: {
    setlabyrinthDescription: (state, action) => {
      state.labyrinthDescription = action.payload;
    },
  },
});

export const fetchStartPage = () => {
  return (dispatch) => {
    dispatch(loader.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "FellowTraveler" }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(labyrinth.actions.setlabyrinthDescription(json));
        dispatch(loader.actions.setLoading(false));
      });
  };
};
