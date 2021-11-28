import { createSlice } from "@reduxjs/toolkit"
import { ui } from "./ui"

const initialState = {
  username: "",
  response: {},
  coordinates: "",
}

export const labyrinth = createSlice({
  name: "labyrinth",

  initialState: initialState,
  reducers: {
    // get username input from the player as payload and set it here.
    setusername: (state, action) => {
      state.username = action.payload
    },

    // get moved directions as payload
    setResponse: (state, action) => {
      state.response = action.payload
    },

    setCoordinates: (state, action) => {
      state.coordinates = action.payload
    },

    // to use global state value of initial state
    reStart: () => {
      return initialState
    },
  },
})

export const fetchInitialData = (username) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinth.actions.setResponse(data))
        dispatch(labyrinth.actions.setCoordinates(data.coordinates))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

export const continueLabyrinth = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://wk16-backend.herokuapp.com/action`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type: type,
        direction: direction,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinth.actions.setResponse(data))
        dispatch(labyrinth.actions.setCoordinates(data.coordinates))
        dispatch(ui.actions.setLoading(false))
      })
  }
}
