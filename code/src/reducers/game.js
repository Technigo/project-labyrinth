import { createSlice } from "@reduxjs/toolkit";

const game = createSlice( {
    name: 'game',
    initialState: {
    username: '',
    description: {},
    currentStep: {},
},
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload
        },
        setDescription: (store, action) => {
            store.username = action.payload
        },
        setCurrentStep: (store, action) => {
            store.username = action.payload
        }
    },
}
)

export const generateGame = (username) => {
    return (dispatch) => {
      fetch(`https://labyrinth-technigo.herokuapp.com/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username }),
      })
        .then((res) => res.json())
        .then((json) => {
          dispatch(game.actions.setCurrentStep(json));
          console.log(json);
        });
    };
  };

export default game