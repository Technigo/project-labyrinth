import { createSlice } from '@reduxjs/toolkit';
import { ui } from 'reducers/ui';

//initial state - when game starts
const initialState = {
  username: '',
  setCurrentChoice: null,
  setDirection: {},
};


export const gamestate = createSlice({
  name: 'gamestate',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload; //username property 
    },
    setCurrentChoice: (state, action) => {
      state.currentChoice = action.payload; //CurrentChoice property where the actual question is renderd 
    },
    setDirection: (state, action) => {
      state.direction = action.payload;
      state.history = [...state.history, action.payload] //Direction property 
    },
    setResetGame: (state, action) => { //here we reset game using state
      state.username = '';
      state.gameStatus = {};
      state.history = [];
    }
  }
});

//Here we post our start question
export const fetchGameInstructions = (username) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(gamestate.actions.setCurrentChoice(json));
        dispatch(ui.actions.setLoading(false))
      });
  };
}

//Here we post our chosen directions
export const directionAnswer = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));

    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: getState().gamestate.username,
        type: "move",
        direction: getState().gamestate.direction
      })
    })
      .then((res) => res.json())
      .then(data => {
        dispatch(gamestate.actions.setCurrentChoice(data))
        dispatch(ui.actions.setLoading(false));
      });
  };
}


