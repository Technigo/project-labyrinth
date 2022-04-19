import { createSlice } from "@reduxjs/toolkit";

const gameplay = createSlice({
  name: "gameplay",
  initialState: {
    username: null,
    questions: [],
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setGameQuestion: (state, action) => {
      state.questions = [...state.questions, action.payload]
    }
  },
});

export default gameplay;

export const generateQuestion = () => {
  return (dispatch) => {
    fetch("https://labyrinth-technigo.herokuapp.com/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "Testname" }),
    })
      .then((response) => response.json())
      .then((data) => dispatch(gameplay.actions.setGameQuestion(data)));
  };
};
