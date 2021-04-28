import { createSlice } from "@reduxjs/toolkit";

export const game = createSlice({
  name: "game",
  initialState: {
    type: "move",
    username: null,
    currentStep: {
      coordinates: 0.0,
      description: "",
      actions: [],
    },
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setCurrentStep: (store, action) => {
      store.currentStep = action.payload;
    },
  },
});

export const generateGame = (username) => {
  return (dispatch) => {
    fetch(`https://wk16-backend.herokuapp.com/start`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setUsername(username));
        dispatch(game.actions.setCurrentStep(data));
      });
  };
};

export const generateMove = (username, direction) => {
  return (dispatch) => {
    fetch(`https://wk16-backend.herokuapp.com/action`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        direction: direction,
        type: "move",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setCurrentStep(data));
      });
  };
};
