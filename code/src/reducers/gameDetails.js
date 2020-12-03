import { createSlice } from '@reduxjs/toolkit';

export const gameDetails = createSlice({
    name: 'gameDetails',
    initialState: {
        userName: "0",
        gameDetails:{},
        gameStarted:false,
        gameFinished: false
       // history: []
    },
    reducers: {
        setDescription: (state, action) => {
         // if (state.gameDetails.gameDetails) {
           // state.history = [...state.history, state.gameDetails]
          //}
            state.gameDetails = action.payload; 
        },

        // historyGoBack: (state, action) => {
        //   if(state.history.length > 0) {
        //     state.gameDetails = state.history[state.history.length - 1];
        //     state.history = state.history.slice(0, state.history.length - 1);

        //   }
        // }
        //},
          setMoves: (state, action) => {
         // if (state.gameDetails.gameDetails) {
           // state.history = [...state.history, state.gameDetails]
          //}
            state.gameDetails = action.payload;   
        },
        startGame: (state) => { 
          state.gameStarted = true},
        
        gameFinished: (state) => { 
          state.gameFinished = true},
          
        setUserName: (state, action) => {
      state.userName = action.payload;
        }
    },

});
