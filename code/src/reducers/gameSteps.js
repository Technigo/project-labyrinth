import { createSlice } from "@reduxjs/toolkit";
import { STARTGAMEAPI, CONTINUEGAMEAPI } from "../utils/urls";
import { loading } from "./loading";

export const gameSteps = createSlice({
  name: "gameSteps",
  // InitialState contains a empty username, a empty gameStepList and empty gameHistory.
  initialState: {
    username: "",
    gameStepList: [],
    gameHistory: [],
  },
  reducers: {
    // SetGamesteps sets the gameStepList with the payload that is sent in.
    setGameStep: (store, action) => {
      store.gameStepList = action.payload;
    },

    // setUserName with the payload username that is sent in.
    setUsername: (store, action) => {
      const { username } = action.payload;
      store.username = username;
    },

    // setGameHistory with the payload object that is sent in (an object with the direction and the description.).
    setGameHistory: (store, action) => {
      const { direction, description } = action.payload;
      store.gameHistory = [...store.gameHistory, { direction, description }];
    },
    resetGame: (store) => {
      store.username = "";
      store.gameStepList = [];
      store.gameHistory = [];
    },
  },
});

// fetchGameData takes in a username as a prop and then dispatch the setLoading to true.
// fetch the STARTGAMEAPI with the username in the body. Then it dispatches gameSteps with the json. And finally sets the loading to false.
export const fetchGameData = (username) => {
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true));
    fetch(STARTGAMEAPI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username }),
    })
      .then((results) => results.json())
      .then((json) => {
        dispatch(gameSteps.actions.setGameStep(json));
      })
      .finally(() => dispatch(loading.actions.setLoading(false)));
  };
};

// Continue FetchGameData sets the loading to true and fetches the continue game api with the information needed in the body.
// it then setGameStep to json and dispatch the setGmaeHistory with an object with direction and description. And finally sets the loading to false.
export const continueFetchGameData = (
  username,
  type,
  direction,
  description
) => {
  return (dispatch) => {
    dispatch(loading.actions.setLoading(true));
    fetch(CONTINUEGAMEAPI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        type: type,
        direction: direction,
      }),
    })
      .then((results) => results.json())
      .then((json) => {
        dispatch(gameSteps.actions.setGameStep(json));
        dispatch(gameSteps.actions.setGameHistory({ direction, description }));
      })
      .finally(() => dispatch(loading.actions.setLoading(false)));
  };
};
