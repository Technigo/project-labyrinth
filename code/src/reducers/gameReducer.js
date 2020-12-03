import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameDetails : [],
  gameStarted : false,
  gameOver : false,
  gameLoading : false,
  history : []
};

export const gameReducer = createSlice({
  name: 'gameReducer',
  initialState : initialState,
  reducers : {
    setCurrentState : (state,action) => {
      state.history = [... state.history, state.gameDetails];
      state.gameDetails = action.payload;
    },
    setGameLoading : (state,action) => {
      state.gameLoading = action.payload;
    },
    setGameStarted : (state,action) => {
      state.gameStarted = action.payload;
    },
    setGameOver : (state,action) => {
      state.gameOver = action.payload;
    },
    endGame : () => {
        return initialState;
    },
    historyGoBack : (state,action) => {
      state.gameDetails = state.history[state.history.length-1]
      state.history = state.history.slice(0, state.history.length -1);
    }
  }
})
