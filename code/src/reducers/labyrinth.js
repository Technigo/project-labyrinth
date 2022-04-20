import { createSlice } from '@reduxjs/toolkit';
import mouseEventsHaveKeyEvents from 'eslint-plugin-jsx-a11y/lib/rules/mouse-events-have-key-events';
import { ui } from './ui';

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    currentStep: {},
    history: [],
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    },

    setCurrentStep: (store, action) => {
      store.currentStep = action.payload;
    },

    setHistory: (store, action) => {
      store.history.push(action.payload);
    },
  },
});

const START_API = 'https://labyrinth-technigo.herokuapp.com/start';

export const startGame = (username) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch(START_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(labyrinth.actions.setCurrentStep(json));
        dispatch(ui.actions.setLoading(false));
        console.log(json);
      });
  };
};

const NEXT_API = 'https://labyrinth-technigo.herokuapp.com/action';

export const continueGame = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));
    fetch(NEXT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type,
        direction,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(labyrinth.actions.setCurrentStep(json));
        dispatch(ui.actions.setLoading(false));
      });
  };
};
