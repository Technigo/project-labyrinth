import { createSlice } from "@reduxjs/toolkit";

import ui from "./ui";

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
            store.history.push(action.payload)
        },
        setCurrentStep: (store, action) => {
            store.currentStep = action.payload
        }
           },
})

export const generateGame = () => {
    return (dispatch, getState) => {
        dispatch(ui.actions.setLoading(true))

      fetch(`https://labyrinth-technigo.herokuapp.com/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: `${getState().game.username}`}),
      })
        .then((res) => res.json())
        .then((json) => {
          dispatch(game.actions.setCurrentStep(json))
          dispatch(ui.actions.setLoading(false))
        });
    };
  };

  export const continueGame = (type, direction) => {
      return (dispatch, getState) => {
          dispatch(ui.actions.setLoading(true))

        fetch(`https://labyrinth-technigo.herokuapp.com/action`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                username: `${getState().game.username}`,
                type,
                direction
            }),
          })
            .then((res) => res.json())
            .then((json) => {
              dispatch(game.actions.setCurrentStep(json))
              dispatch(game.actions.setHistory)
              dispatch(ui.actions.setLoading(false))
            });
      }
  }

  

export default game
