import { createSlice } from "@reduxjs/toolkit";

import { ui } from "./ui"
import { START_API_URL } from '../utils/urls'
import { NEXT_PLACE_API_URL } from '../utils/urls'

export const game = createSlice({
  name: 'game',
  initialState: {
    places: [],
    userName: 'Technigod'
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
//The fetch is working. UserName is send in as a function argument.
export const startGame = () => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.userName })
    }

    dispatch(ui.actions.setLoading(true))
    fetch(START_API_URL, options)
      .then(response => response.json())
      .then(json => dispatch(game.actions.setPlaces(json))) 
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}


//Doing a post request to API2 and sending the userName, direction and type
//The fetch is tested and works/ type and direction need to be send from the OnClick
export const moveFurther = (type, direction) => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.userName, 
        type, 
        direction
      })
    }

    dispatch(ui.actions.setLoading(true))
    fetch(NEXT_PLACE_API_URL, options)
      .then(response => response.json())
      .then(json => dispatch(game.actions.setPlaces(json)))
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}