import { createSlice } from '@reduxjs/toolkit';

import ui from 'reducers/ui';
import { START_URL, CONTINUE_URL } from 'utils/urls';

const initialState = {
  player: null,
  currentStep: null,
  history: []
};

const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayer: (store, action) => {
      store.player = action.payload;
    },
    setCurrentStep: (store, action) => {
      if (store.currentStep) {
        store.history.push(store.currentStep);
      }
      store.currentStep = action.payload;
    },
    setPreviousStep: (store) => {
     if (store.history.length) {
       store.currentStep = store.history[store.history.length - 1];
       const changedHistory = store.history.slice(0, store.history.length - 1);
       store.history = changedHistory;
     }
    },
    restart: () => {
      return initialState;
    }
  }
});

export const generateGame = (action) => {
  if (action) {
    return (dispatch, getState) => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: getState().game.player,
          type: action.type,
          direction: action.direction
        })
      };

      dispatch(ui.actions.setLoading(true));
      fetch(CONTINUE_URL, options)
        .then((res) => res.json())
        .then((step) => {
          dispatch(game.actions.setCurrentStep(step));
          dispatch(ui.actions.setLoading(false));
        })
    }
  } else {
    return (dispatch, getState) => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: getState().game.player
        })
      };

      dispatch(ui.actions.setLoading(true));
      fetch(START_URL, options)
        .then((res) => res.json())
        .then((step) => {
          dispatch(game.actions.setCurrentStep(step));
          dispatch(ui.actions.setLoading(false));
        })
    }
  }
};

export default game;