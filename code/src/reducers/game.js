import { createSlice } from "@reduxjs/toolkit";

import { ui } from "./ui"
import { START_API_URL } from '../utils/urls'
import { NEXT_PLACE_API_URL } from '../utils/urls'

export const game = createSlice({
  name: 'game',
  initialState: {
    places: [],
    userName: ''
  },
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload
    },
    setPlaces: (state, action) => {
      state.places = action.payload
    }
  }
})

//Doing a post request to API1 and sending the userName
//The fetch is working, but the Username in the body needs to be changed from Technigoa to the action.payload, when the StartGame.js is set up
export const startGame = () => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: "Technigoa" })
    }

    /* dispatch(ui.actions.setLoading(true)) */
    fetch(START_API_URL, options)
      .then(response => response.json())
      .then(json => dispatch(game.actions.setPlaces(json))) 
  }
}


//Doing a post request to API2 and sending the userName, direction and type
//The fetch is not tested yet/ Username and direction need to be changed to action.payload
export const moveFurther = () => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: "TechnigoPlayer", 
        type: "move", 
        direction: "East"
      })
    }

    /* dispatch(ui.actions.setLoading(true)) */
    fetch(NEXT_PLACE_API_URL, options)
      .then(response => response.json())
      .then(json => dispatch(game.actions.setPlaces(json)))
  }
}