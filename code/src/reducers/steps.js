import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";

const steps = createSlice({
  name: "steps",
  initialState: {
    username: "",
    startingPosition: [],
    steps: [],
  },
  reducers: {
    setUsername: (store, action) => {
      console.log("setUsername: ", action.payload);
      store.username = action.payload;
    },
    setSteps: (store, action) => {
      console.log("setSteps: ", action.payload);
      store.steps.push(action.payload);
    },
    setStartPosition: (store, action) => {
      console.log("setStartPosition: ", action.payload);
      store.startingPosition = action.payload;
    },
  },
});

export const fetchSteps = (direction) => {
  return (dispatch, getState) => {
    const state = getState();
    const infoToAPI = {
      username: state.steps.username,
      type: "move",
      direction: direction,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(infoToAPI),
    };
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/action", options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(steps.actions.setSteps(json));
        console.log("Latest movement", json);
        dispatch(ui.actions.setLoading(false));
      });
  };
};

export const fetchStart = () => {
  return (dispatch, getState) => {
    const state = getState();
    const username = {
      username: state.steps.username,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(username),
    };

    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/start", options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(steps.actions.setSteps(json));
        console.log("Start: ", json);
        dispatch(ui.actions.setLoading(false));
      });
  };
};

export default steps;
