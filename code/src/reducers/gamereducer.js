import { createSlice } from "@reduxjs/toolkit"
import { API_ACTION_URL } from "utils/urls"

export const gamereducer = createSlice({
  name: "gamereducer",
  initialState: {
    ui: null,
    gamereducer: null,
    //loading: false,
  },
  reducers: {
    setUi: (store, action) => {
      store.ui = action.payload
    },
    setGamereducer: (store, action) => {
      store.gamereducer = action.payload
    },
  },
})

// START ELLER ACTION?
export const generateQuestion = () => {
  return (dispatch, getState) => {
    fetch(API_ACTION_URL)
      .then((res) => res.json())
      .then((gamereducer) =>
        dispatch(gamereducer.actions.setGamereducer(gamereducer))
      )
  }
}
