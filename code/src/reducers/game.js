import {createSlice} from "@reduxjs/toolkit";

const game  = createSlice ({
    name:'game',
    initialState: {
        username: null,
        currentStep: {}
    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload
        },
        setCurrentStep: (store, action) => {
            store.currentStep = { ...action.payload }
          },
    }
})

export const generateGame = (inputValue) => {
return dispatch => {
    const newUser = inputValue + Date.now().toString()
    dispatch(game.actions.setUsername(newUser))

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: newUser,
        })
    }

      fetch ('https://labyrinth-technigo.herokuapp.com/start', options)
      .then(res => res.json())
      .then(data => dispatch(game.actions.setCurrentStep(data)))
    }
  }


export default game


