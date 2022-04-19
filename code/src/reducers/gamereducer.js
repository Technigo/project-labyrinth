import { createSlice } from "@reduxjs/toolkit"
//START ELLER ACTION?
// import { API_START_URL, API_ACTION_URL } from "utils/urls"

export const gamereducer = createSlice({
  name: "gamereducer",
  initialState: {
    username: null,
    currentPosition: null,
    // history: [],
    loading: false,
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload
    },
    // gör en setHistory här om vi ska lägga till den funktionen
  },
  setLoading: (store, action) => {
    store.loading = action.payload
  },
})

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(gamereducer.actions.setLoading(true))
    fetch("https://labyrinth-technigo.herokuapp.com/start", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username: getState().game.username }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(gamereducer.actions.setCurrentPosition(data)))
      .finally(() => dispatch(gamereducer.actions.setLoading(false)))
  }
}

export const nextStep = (type, direction) => {
  return (dispatch, getState) => {
    // dispatch(gamereducer.actions.setLoading(true))
    fetch("https://labyrinth-technigo.herokuapp.com/action", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: getState().gamereducer.username,
        type,
        direction,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(gamereducer.actions.setCurrentPosition(data))
        // dispatch(game.actions.setHistory(data))
      })
    // .finally(() => dispatch(gamereducer.actions.setLoading(false)))
  }
}
