import { createSlice } from "@reduxjs/toolkit"
import { ui } from "./ui"

import { START_URL, ACTION_URL } from "../utils/urls"

const initialState = {
  username: '',
  currentStep: {},
  loading: false,
}

export const game = createSlice({
    name: "game",
    initialState,
    reducers: {
      setUsername: (store, action) => {
        store.username = action.payload
      },
      setCurrentPosition: (store, action) => {
        store.currentPosition = action.payload
      },
      setLoading: (store, action) => {
        store.loading = action.payload
      },
      setNewGame: () => {
        return initialState
      },
    },
  })
  
  export const startGame = () => {
    return (dispatch, getState) => {
        dispatch(ui.actions.setLoading(true))
        fetch(START_URL, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({ username: getState().game.username }),
          // We're using getState() to get the value from the state variable username instead of passing it into the thunk as an argument
        })
            .then((res) => res.json())
            .then((json) => {
                dispatch(game.actions.setCurrentPosition(json))
                dispatch(ui.actions.setLoading(false))
            })
    }
}

export const nextStep = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch(ACTION_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username: getState().game.username,
        type,
        direction,
      }),
    })
      .then(res => res.json())
      .then(json => {
        dispatch(game.actions.setCurrentPosition(json))
      })
      .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}
  