import { createSlice } from "@reduxjs/toolkit";

const game = createSlice( {
    name: 'game',
    initialState: {
    username: null,
    currentStep: {},
    history: []
},
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload
        },
        setHistory: (store, action) => {
            store.description = action.payload
        },
        setCurrentStep: (store, action) => {
            store.currentStep = action.payload
        }
    },
})

export const generateGame = () => {
    return (dispatch, getState) => {
      fetch(`https://labyrinth-technigo.herokuapp.com/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: `${getState().game.username}`}),
      })
        .then((res) => res.json())
        .then((json) => {
          dispatch(game.actions.setCurrentStep(json));
        });
    };
  };

  export const continueGame = (direction) => {
      return (dispatch, getState) => {
        fetch(`https://labyrinth-technigo.herokuapp.com/action`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                username: `${getState().game.username}`,
                type: 'move',
                direction: direction
            }),
          })
            .then((res) => res.json())
            .then((json) => {
              dispatch(game.actions.setCurrentStep(json))
              dispatch(game.actions.setHistory);
            });
      }
        
      
    

  }

  

export default game
