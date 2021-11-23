import { createSlice } from '@reduxjs/toolkit';
//import { ui } from "./ui";

export const gamestate = createSlice({
  name: 'gamestate',
  initialState: {
		userName: '',
    gameStatus: {},
    loading: false,
    history: []
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setGameStatus: (state, action) => {
      state.gameStatus= action.payload;
    },  
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setRestartGame: (state) => {
      state.userName = '';
      state.gameStatus = {}; 
    }
  }
});

export const fetchGame = () => {
  return (dispatch) => {
    // dispatch(ui.actions.setLoading(true));
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ username: 'TechnigoPlayer'}),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(gamestate.actions.setGameStatus(json));
        //dispatch(ui.actions.setLoading(false));
      });
  };
};

export const nextMove = () => {
  return (dispatch) => {

    fetch('https://wk16-backend.herokuapp.com/action', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify({ username: '', type: 'move', direction: '' }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(gamestate.actions.setGameStatus) //add reducer in the end
      })
      .finally(() => dispatch(gamestate.actions.setLoading(false)))
  };
};    



