import { createSlice } from "@reduxjs/toolkit"
import { ui } from "./ui"
import { API_START_URL, API_ACTION_URL } from "../utils/urls"

export const game = createSlice({
  name: "game",
  initialState: {
    player: null,
    currentPosition: null,
    history: [],
  },
  reducers: {
    setPlayer: (store, action) => {
      store.player = action.payload
    },

    setCurrentPosition: (store, action) => {
      store.history = [...store.history, store.currentPosition] //when setting the current position we also save the last position in history
      store.currentPosition = action.payload
    },

    // setHistory: (store, action) => {
    //   store.history = [...store.history, action.payload]
    // },

    setMoveBack: (store) => {
      if (store.history.length > 1) {
        store.currentPosition = store.history[store.history.length - 1]
        store.history = store.history.slice(0, store.history.length - 1) //removes the move in history array when clicked on back
      }
    },

    restartGame: (store) => {
      store.player = null
      store.currentPosition = null
      store.history = []
    },
  },
})

export const fetchStartPosition = () => {
  return (dispatch, getState) => {
    // const state = getState()
    dispatch(ui.actions.setLoading(true))
    fetch(API_START_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: getState().game.player }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(game.actions.setCurrentPosition(data)))
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}

export const nextStep = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch(API_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: getState().game.player,
        type,
        direction,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setCurrentPosition(data))
        // dispatch(game.actions.setHistory(data))
      })
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}
