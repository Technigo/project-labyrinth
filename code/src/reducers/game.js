import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  play: {},
  history: [],
};

export const game = createSlice({
  name: "game",
  initialState,

  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },

    setGame: (state, action) => {
      //history is updated with the current history data
      //and the state.play data from a previous step
      state.history = [...state.history, state.play];

      //a state.play data is updated with the new payload
      state.play = action.payload;

      console.log(`History: ${state.history.description}`);
    },
    historyGoBack: (state) => {
      if (state.history.length > 0) {
        //adding the last item in history array to play object
        state.play = state.history[state.history.length - 1];

        //take the last item from the history array
        state.history = state.history.slice(0, state.history.length - 1);
      }
    },
  },
});
