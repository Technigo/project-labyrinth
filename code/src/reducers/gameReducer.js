import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName : '',
  gameDetails : [],
  gameStarted : false,
  gameLoading : false,
  history : []
};

export const gameReducer = createSlice({
  name: 'gameReducer',
  initialState : initialState,
  reducers : {
    setCurrentState : (state,action) => {
      state.history = [...state.history, state.gameDetails];
      state.gameDetails = action.payload;
    },
    setGameLoading : (state,action) => {
      state.gameLoading = action.payload;
    },
    setGameStarted : (state,action) => {
      state.gameStarted = action.payload;
    },
    setUserName : (state,action) => {
      state.userName = action.payload;
    },
    endGame : () => {
        return initialState;
    }
  }
})
