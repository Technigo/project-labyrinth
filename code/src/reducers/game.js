import { createSlice } from "@reduxjs/toolkit";

import ui from "./ui";

const initialState = {
  username: null,
  currentStep: {},
}

const game = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setCurrentStep: (store, action) => {
      store.currentStep = action.payload
    },
    restart: () => {
      return initialState;
    }
  }
})

export const generateGame = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))

    fetch(`https://labyrinth-technigo.herokuapp.com/start`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: `${getState().game.username}` }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setCurrentStep(json))
        dispatch(ui.actions.setLoading(false))
      });
  };
};

export const continueGame = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))

    fetch(`https://labyrinth-technigo.herokuapp.com/action`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${getState().game.username}`,
        type,
        direction
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setCurrentStep(json))
        dispatch(ui.actions.setLoading(false))
      });
  }
}



export default game
