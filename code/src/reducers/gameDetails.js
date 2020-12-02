import { createSlice } from '@reduxjs/toolkit';

export const gameDetails = createSlice({
  name: 'gameDetails',
  initialState: {
    username: "asdf",
    gameDetails: {},
    // history: []
  },
  reducers: {
    generateDescription: (state, action) => {
      // if (state.gameDetails.gameDetails) {
      // state.history = [...state.history, state.gameDetails]
      //}
      state.gameDetails = action.payload;
    },

    generateMoves: (state, action) => {
      // if (state.gameDetails.gameDetails) {
      // state.history = [...state.history, state.gameDetails]
      //}
      state.gameDetails = action.payload;
    },

    addUsername: (state, action) => {
      state.username = action.payload;
    },

    // historyGoBack: (state, action) => {
    //   if(state.history.length > 0) {
    //     state.gameDetails = state.history[state.history.length - 1];
    //     state.history = state.history.slice(0, state.history.length - 1);

    //   }
    // }
  },
});
