// import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

// to states 

const START_URL = "https://wk16-backend.herokuapp.com/start"

export const labyrinth = createSlice({
    name: 'labyrinth',
    initialState: {
        username:"",
        game: { 
          actions: [],
        },
        history: []
    },
 // A action that change the iniital state to the input value the user puts in 
 //before you update the game we update previous game 
    reducers: {
        setPlayerName: (state, action) => {
            state.username = action.payload;
          },
    
          continueGame: (state,action) => { 
            const currentGameState = action.payload;
            state.history = [...state.history, state.game];
            state.game = currentGameState;
          },
    
          historyGoBack: (state, action) => {
            if (state.history.length > 0) {
              state.game = state.history[state.history.length - 1];
              state.history = state.history.slice(0, state.history.length - 1);
            };
          }, 
          setLoading: (state, action) => {
            state.isLoading = action.payload;
          }  
    }
})


//creating a POST request that will save the player name into the API
//we get back the data object which we dispatch as an action to change the state of desciption
// Creating a THUNK function inside a function, so we can reuse it 
//Content type so the fetch knows what type of data itcill expect 

// dispatching our jason data to dispplay the description 

export const generateStartInstructions = (playerName) => {

    return (dispatch) => {
        dispatch(labyrinth.actions.setLoading(true));
      fetch(START_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({username: playerName})
        })
      .then(res => res.json())
      .then(json => {
        console.log("SDOFKSDOFKDSF", json)
        dispatch(labyrinth.actions.continueGame(json));
        dispatch(labyrinth.actions.setLoading(false));
      });
    };
  };
  
  const CONTINUE_URL = "https://wk16-backend.herokuapp.com/action";
  
  export const generateGameProgress = (playerName, direction) => {
    return (dispatch) => { 
        dispatch(labyrinth.actions.setLoading(true));
      fetch(CONTINUE_URL, {
        method: "POST",
        body: JSON.stringify({ 
          username: playerName,
          type: "move", 
          direction:direction
        }),
        headers: { "Content-Type": "application/json" },
        })
      .then(res => res.json())
      .then(json => {
        dispatch(labyrinth.actions.continueGame(json));
        dispatch(labyrinth.actions.setLoading(false));
      });
    };
  };
  
