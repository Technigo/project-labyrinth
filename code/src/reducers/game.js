import { createSlice } from '@reduxjs/toolkit';

const game = createSlice({
  name: 'game',
  initialState: {
    player: null,
    currentStep: null
  },
  reducers: {
    setPlayer: (store, action) => {
      store.player = action.payload;
    },
    setCurrentStep: (store, action) => {
      store.currentStep = action.payload;
    }
  }
});

export const generateStep = (action, inputValue) => {
  if (action) {
    return (dispatch) => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: "player",
          type: action.type,
          direction: action.direction
        })
      }
      fetch('https://labyrinth-technigo.herokuapp.com/start/start', options)
        .then (res => res.json())
        .then(step => dispatch(game.actions.setCurrentStep(step)));
    }
  } else {
    return (dispatch) => {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: "player"
          })
        }
        fetch('https://labyrinth-technigo.herokuapp.com/start', options)
          .then (res => res.json())
          .then(step => dispatch(game.actions.setCurrentStep(step)));
      }
    }
  }

export default game;