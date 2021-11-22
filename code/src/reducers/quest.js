import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

export const quest = createSlice({
  name: "quest",
  initialState: {
    player: "",
    items: [],
  },
  reducers: {
    selectData: (state, action) => {
      state.items.push(action.payload);
      console.log("action.payload", action.payload);
    },
    setPlayersName: (state, action) => {
      const playerName = action.payload;
      state.player = playerName;
      console.log("playersName", playerName);
    },
  },
});

export const fetchData = () => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: `${state.player}` }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(quest.actions.selectData(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
