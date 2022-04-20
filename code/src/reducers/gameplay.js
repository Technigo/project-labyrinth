import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  question: {},
  moves: [],
};

const gameplay = createSlice({
  name: "gameplay",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setGameQuestion: (state, action) => {
      state.question = action.payload;
    },
    setMove: (state, action) => {
      state.moves = [...state.moves, action.payload];
    },
    restart: () => {
      return initialState;
    },
  },
});

export default gameplay;

export const generateFirstQuestion = () => {
  return (dispatch, getState) => {
    fetch("https://labyrinth-technigo.herokuapp.com/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: getState().gameplay.username }),
    })
      .then((response) => response.json())
      .then((data) => dispatch(gameplay.actions.setGameQuestion(data)));
  };
};

export const generateNextQuestion = (direction) => {
  return (dispatch, getState) => {
    fetch("https://labyrinth-technigo.herokuapp.com/action", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: getState().gameplay.username,
        type: "move",
        direction: direction,
      }),
    })
      .then((response) => response.json())
      .then((data) => dispatch(gameplay.actions.setGameQuestion(data)));
  };
};
