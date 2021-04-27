import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

export const game = createSlice({
  name: "game",
  initialState: {
    type: "move",
    username: null,
    description: {
      coordinates: 0.0,
      description: "",
      actions: [],
    },
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setCoordinates: (store, action) => {
      store.coordinates = action.payload;
    },
    setActions: (store, action) => {
      store.actions = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    },
  },
});

export const generateGame = () => {
  return (dispatch, getState) => {
    fetch(`https://wk16-backend.herokuapp.com/start`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: getState().game.username }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setDescription(data));
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
        dispatch(game.actions.setDescription(data));
      });
  };
};
