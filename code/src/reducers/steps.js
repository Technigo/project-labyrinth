import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";
import uniqid from "uniqid";

const initialState = {
  username: "",
  startingPosition: [],
  steps: [],
  directions: [],
};

const steps = createSlice({
  name: "steps",
  initialState,
  reducers: {
    setUsername: (store, action) => {
      console.log("setUsername: ", action.payload);
      store.username = action.payload;
    },
    setSteps: (store, action) => {
      console.log("setSteps: ", action.payload);
      const id = uniqid();
      let latestStep = action.payload;
      latestStep = { ...latestStep, id: id };
      store.steps.push(latestStep);
    },
    setStartPosition: (store, action) => {
      console.log("setStartPosition: ", action.payload);
      store.startingPosition = action.payload;
    },
    setMovement: (store, action) => {
      store.directions.push(action.payload);
    },
    setInitialState: (store, action) => {
      return initialState;
    },
  },
});

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

export const fetchSteps = (direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    const state = getState();
    dispatch(steps.actions.setMovement(direction));

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

    fetch("https://wk16-backend.herokuapp.com/action", options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(steps.actions.setSteps(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};

export default steps;
