import { createSlice } from "@reduxjs/toolkit";

const gameplay = createSlice({
  name: "gameplay",
  initialState: {
    username: null,
    question: {},
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setGameQuestion: (state, action) => {
      state.question = action.payload;
    },
  },
});

export default gameplay;

export const generateQuestion = () => {
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
