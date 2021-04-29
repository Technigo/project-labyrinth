import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const game = createSlice ({
  name: "game",
  initialState: {
    username: "",
    coordinates: 0,
    description: "",
    actions: [],
    loadProgress: 100,
    error: null //less than half implemented
    //gameRunning bool
  },
  reducers: {
    setUsername: (store, action) => {
      console.log("username set!")
      store.username = action.payload
    },
    setGameState: (store, action) => {
      store.coordinates = action.payload.coordinates
      store.description = action.payload.description
      store.actions = action.payload.actions
    },
    setLoadProgress: (store, action) => {
      if (action.payload === 100) {
        store.loadProgress = action.payload
      } else {
        console.log("attempted fake load ;)")
        store.loadProgress = action.payload
        setTimeout(500)
        store.loadProgress = (action.payload + 10)
        setTimeout(500)
        store.loadProgress = (action.payload + 10)
      }
    },
    setError: (store, action) => {
      store.loadProgress = action.payload
    }
  }
})

//${method} where method is either action or start in the url 

export const start = ( name ) => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoadProgress(33))
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        username: name
      })
    })
      .then(res => {
        dispatch(game.actions.setLoadProgress(55))
        return res.json()
      })
      .then(update => {
        dispatch(game.actions.setLoadProgress(77))
        return dispatch(game.actions.setGameState(update))
      })
      .catch(error => dispatch(game.actions.setError(error.message)))
      .finally(() => dispatch(game.actions.setLoadProgress(100)))
  }
}

export const advance = ( action ) => {
  return (dispatch, getState) => {
    const state = getState()
    dispatch(game.actions.setLoadProgress(33))
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        username: state.game.username,
        type: action.type,
        direction: action.direction
      })
    })
      .then(res => {
        dispatch(game.actions.setLoadProgress(55))
        return res.json()
      })
      .then(update => {
        dispatch(game.actions.setLoadProgress(77))
        return dispatch(game.actions.setGameState(update))
      })
      .catch(error => dispatch(game.actions.setError(error.message)))
      .finally(() => dispatch(game.actions.setLoadProgress(100))) 
    }
}

export default game