import { createSlice } from '@reduxjs/toolkit';

export const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    currentGameState: {},
    coordinatesArray: [],
    pastActions: [],
    positionHistory: [],
    squares: ['0,3', '1,3', '0,2', '1,2', '0,1', '1,1', '0,0', '1,0']
  },
  reducers: {
    addUserName: (store, action) => {
      const { username } = action.payload;
      store.username = username;
    },
    setCurrentGameState: (store, action) => {
      store.positionHistory = [
        ...store.positionHistory,
        store.currentGameState
      ];
      store.currentGameState = action.payload;
    },
    setCoordinates: (store, action) => {
      store.coordinatesArray = [...store.coordinatesArray, action.payload];
    },
    positionHistoryGoBack: (state, action) => {
      if (state.positionHistory.length > 0) {
        // This takes the last value (data from the last index) in positionHistory and save it into currentGameHistory
        state.currentGameState =
          state.positionHistory[state.positionHistory.length - 1];

        // Using the function slice to remove the last index in the array positionHistory
        state.positionHistory = state.positionHistory.slice(
          0,
          state.positionHistory.length - 1
        );

        // Using the function slice to remove the last index in the array coordinatesArray
        state.coordinatesArray = state.coordinatesArray.slice(
          0,
          state.coordinatesArray.length - 1
        );

        // Using the function slice to remove the last index in the array pastActions
        state.pastActions = state.pastActions.slice(
          0,
          state.pastActions.length - 1
        );
      }
    },
    restartGame: (store) => {
      store.username = '';
      store.currentGameState = {};
      store.pastActions = [];
    },
    setPastActions: (store, action) => {
      store.pastActions = [...store.pastActions, action.payload];
    }
  }
});
