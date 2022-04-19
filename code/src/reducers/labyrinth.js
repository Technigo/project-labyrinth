import { createSlice } from '@reduxjs/toolkit';

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    description: {},
    currentStep: {},
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
  },
});

const START_API = 'https://labyrinth-technigo.herokuapp.com/start';

export const startGame = (username) => {
  return (dispatch) => {
    fetch(START_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(labyrinth.actions.setCurrentStep(json));
        console.log(json);
      });
  };
};
