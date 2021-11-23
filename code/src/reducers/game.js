// import { createSlice } from "@reduxjs/toolkit";
// import { ui } from "./ui";

// export const games = createSlice({
//   name: "games",
//   initialState: {
//     gameList: [],
//   },
//   reducers: {
//     setGameList: (state, action) => {
//       state.gameList = action.payload;
//     },
//   },
// });

// export const Game = () => {
//   return (dispatch) => {
//     dispatch(ui.actions.setLoading(true));
//     fetch("https://wk16-backend.herokuapp.com/start", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username: "Maj-Britt" }),
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         dispatch(game.actions.setGameList(json));
//         dispatch(ui.actions.setLoading(false));
//       });
//   };
// };

// export const fetchGameContinue = () => {
//   return (dispatch) => {
//     dispatch(ui.actions.setLoading(true));
//     fetch("https://wk16-backend.herokuapp.com/action", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username: "Maj-Britt" }),
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         dispatch(game.actions.setGameList(json));
//         dispatch(ui.actions.setLoading(false));
//       });
//   };
// };

import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

export const game = createSlice({
  name: "game",
  initialState: {
    gameList: [{ description: "hahahaah" }],
  },
  reducers: {
    setGameList: (state, action) => {
      state.gameList = action.payload;
    },
  },
});

export const fetchGame = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: "MajBritt" }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameList(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
