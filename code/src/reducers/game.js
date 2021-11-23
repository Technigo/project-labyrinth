import { createSlice } from "@reduxjs/toolkit";
import { ui } from "./ui"

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

export const startGame = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch()//Doing a post request to API1 and sending the userName
  }
}

export const moveFurther = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch()//Doing a post request to API2 and sending the userName, direction and type
  }
}