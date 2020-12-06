import { createSlice } from '@reduxjs/toolkit';

export const gameDetails = createSlice({
  name: 'gameDetails',
  initialState: {
    userName: "0",
    gameDetails: {},
    gameStarted: false,
    gameFinished: false,
    history: [],
    isLoading: false,
  },
  reducers: {
    //this action sets the description in the beginning of the game
    setDescription: (state, action) => {
      state.gameDetails = action.payload;
    },
    //this action sets the following moves and takes care of the history 
    setMoves: (state, action) => {
      if (state.gameDetails) {
        state.history = [...state.history, state.gameDetails]
      }
      state.gameDetails = action.payload;
    },
    //action that helps us to get back to the previous position by modifying history array
    historyGoBack: state => {
      if (state.history.length > 0) {
        state.gameDetails = state.history[state.history.length - 1]
        state.history = state.history.slice(0, state.history.length)
      }
    },
    //helps to render content depending on where we are in the game
    startGame: (state) => {
      state.gameStarted = true
    },
    //takes care of the Play over again process
    gameFinished: (state) => {
      state.gameFinished = true
    },
    //sets the userName with the dispatch onGameBegin in GameBegin      
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    //sets Loading state
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
},
);
