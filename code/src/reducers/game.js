import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

export const game = createSlice({
  name: "game",
  initialState: {
    type: "move",
    username: null,
    description: "",
    actions: "",
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setActions: (store, action) => {
      store.actions = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    },
  },
});

export const generateGame = (username) => {
  return (dispatch, getState) => {
    fetch(`https://wk16-backend.herokuapp.com/start`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: getState().game.username }),
    })
      .then((res) => res.json())
      .then((question) => dispatch(game.actions.setDescription(question)));
  };
};

//     "coordinates": "0,0",
//     "description": "You find yourself in under a large archway opening into a cavern.  A sense of purpose fills you.",
//     "actions": [
//         {
//             "type": "move",
//             "direction": "East",
//             "description": "A worn sign 'The Temple of *ech*igo'. Some of the letters are missing. An overgrown paved path leads to the East"
//         }
//     ]
// }
// }
