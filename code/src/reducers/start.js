import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

const start = createSlice({
  name: "start",
  initialState: {
    choices: [],
  },
  reducers: {
    startGame: (store, action) => {
      store.choices = action.payload;
    },
  },
});

export const fetchGame = () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: "Epic Knight" }),
  };

  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/start", options)
      .then((res) => res.json())
      .then(() => {
        setTimeout(() => dispatch(start.actions.startGame()), 1000);
        setTimeout(() => dispatch(ui.actions.setLoading(false)), 1000);
      });
  };
};

export default start;
