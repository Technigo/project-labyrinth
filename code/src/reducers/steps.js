import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui";
import uniqid from "uniqid";

const initialState = {
  username: "",
  startingPosition: [],
  currentStep: null,
  steps: [],
  directions: [],
};

const steps = createSlice({
  name: "steps",
  initialState,
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setCurrentStep: (store, action) => {
      store.currentStep = action.payload;
    },
    setSteps: (store, action) => {
      const id = uniqid();
      let latestStep = action.payload;
      latestStep = { ...latestStep, id: id };
      store.steps.push(latestStep);
    },
    setStartPosition: (store, action) => {
      store.startingPosition = action.payload;
    },
    setHistory: (store, action) => {
      const latestStep = {
        ...store.currentStep,
        directionTaken: action.payload,
      };
      store.steps.push(latestStep);
    },
    setInitialState: () => {
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
        dispatch(steps.actions.setCurrentStep(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};

export const fetchSteps = (direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    const state = getState();
    dispatch(steps.actions.setHistory(direction));

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
        dispatch(steps.actions.setCurrentStep(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};

export default steps;
