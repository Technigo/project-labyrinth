import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

export const game = createSlice({
  name: "game",
  initialState: {
    type: "move",
    username: localStorage.getItem("username"),
    history: [],
    currentStep: localStorage.getItem("current-step")
      ? JSON.parse(localStorage.getItem("current-step"))
      : {
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
      if (store.currentStep) {
        store.history = [...store.history, action.payload];
      }
      store.currentStep = action.payload;
    },
    setPreviousStep: (store) => {
      if (store.history.length) {
        store.currentStep = store.history[store.history.length - 1];
        store.history = store.history.slice(0, store.history.length - 1);
      }
    },
    restartGame: (store) => {
      store.username = "";
      store.currentStep = {};
      store.history = [];
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
        // LOCAL STORAGE
        localStorage.setItem("current-step", JSON.stringify(data));
        localStorage.setItem("username", username);
      });
  };
};

export const generateMove = (username, direction) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
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
        //LOCAL STORAGE
        localStorage.setItem("current-step", JSON.stringify(data));
        dispatch(ui.actions.setLoading(false));
      });
  };
};

//TESTINGG
