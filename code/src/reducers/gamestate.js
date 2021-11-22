import { createSlice } from "@reduxjs/toolkit";
//import { ui } from "./ui";

export const gamestate = createSlice({
  name: "gamestate",
  initialState: {
		username: "TechnigoPlayer",
    gameStatus: []
  },
  reducers: {
    setGameStatus: (state, action) => {
      state.gameStatus= action.payload;
    }
  }
});

export const fetchGame = () => {
  return (dispatch) => {
    // dispatch(ui.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: "POST",
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify({ username: "TechnigoPlayer"}),
    })
      .then((res) => res.json())
      .then((json) => {
				console.log("json", json)
        dispatch(gamestate.actions.setGameStatus(json));
        //dispatch(ui.actions.setLoading(false));
      });
  };
};
