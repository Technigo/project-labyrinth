import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

const game = createSlice({
  name: "game",
  initialState: {
    choices: [],
  },
  reducers: {
    choiceDirection: (store, action) => {
      store.choices = action.payload;
    },
  },
});

export const fetchDirection = () => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "Epic Knight",
      type: "move",
      direction: "",
    }),
  };

  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/action", options)
      .then((res) => res.json())
      .then(() => {
        dispatch(game.actions.choiceDirection());
        dispatch(ui.actions.setLoading(false));
      });
  };
};

export default game;
