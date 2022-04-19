import { createSlice, current } from "@reduxjs/toolkit"
//START ELLER ACTION?
import { API_START_URL, API_ACTION_URL } from "utils/urls"
import { ui } from "./ui"

export const gamereducer = createSlice({
  name: "gamereducer",
  initialState: {
    player: null,
    currentPosition: null,
    //loading: false,
  },
  reducers: {
    setPlayer: (store, action) => {
      store.player = action.payload
    },
    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload
    },
  },
})

// START ELLER ACTION?
export const generateQuestion = () => {
  return (dispatch, getState) => {
    fetch(API_START_URL)
      .then((res) => res.json())
      .then((currentPosition) =>
        dispatch(currentPosition.actions.setCurrentPosition(currentPosition))
      )
  }
}
