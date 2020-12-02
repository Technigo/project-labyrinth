import  { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
    name: 'game',
    initialState: {
        username:"",
        game: { 
          actions: [] 
        },
        history: []
    },

    reducers: {
      setPlayerName: (state, action) => {
        state.username = action.payload;
      },

      startGame:(state, action) => { 
        if (state.game.game) {
          state.history = [...state.history, state.game];
        }
        state.game = action.payload;  
        console.log(state.game) 
      },

      continueGame:(state,action) => { 
        const currentGameState = action.payload;
        state.history = [...state.history, state.game];
        state.game = currentGameState;

      },


      historyGoBack: (state, action) => {
        if (state.history.length > 0) {
          state.game = state.history[state.history.length - 1];
          state.history = state.history.slice(0, state.history.length - 1);
        };
      }
          
  }
});
  
