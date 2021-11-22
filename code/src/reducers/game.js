import { createSlice } from "@reduxjs/toolkit"
import { ui } from "./ui"

export const game = createSlice({
  name: "game",
  initialState: {
    userName: "",
  },
  reducers: {
    // när store och state?
    setUserName: (state, action) => {
      state.username = action.payload
    },
  },
})

export const fetchStartPosition = (username) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setUserName(data))
        // console.log("FIRST STARTING GAME POSITION", data)
        dispatch(ui.actions.setLoading(false))
      })
    // testar om vi kan göra så
    // .finally(() => {
    //   dispatch(ui.actions.setLoading(false))
    // })
  }
}
