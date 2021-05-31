import { createSlice } from "@reduxjs/toolkit";

const gameFetch = createSlice({
  name: "gameFetch",
  initialState: {
    username: null,
    description: "",
    actions: [],
    coordinates: "",
  },
  reducers: {
    setName: (store, action) => {
      store.username = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    },
    setActions: (store, action) => {
      store.actions = action.payload;
    },
    setCoordinates: (store, action) => {
      store.coordinates = action.payload;
    },
  },
});

export const onGameStart = (username: string) => {
  return (dispatch: any) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    };
    fetch("https://wk16-backend.herokuapp.com/start", options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(gameFetch.actions.setDescription(data.description));
        dispatch(gameFetch.actions.setActions(data.actions));
        dispatch(gameFetch.actions.setCoordinates(data.coordinates));
      });
  };
};

export const onDecision = (direction: any) => {
  return (dispatch: any, getState: any) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: getState().gameFetch.username,
        type: "move",
        direction,
      }),
    };
    fetch("https://wk16-backend.herokuapp.com/action", options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(gameFetch.actions.setDescription(data.description));
        dispatch(gameFetch.actions.setActions(data.actions));
        dispatch(gameFetch.actions.setCoordinates(data.coordinates));
      });
  };
};

export default gameFetch;
