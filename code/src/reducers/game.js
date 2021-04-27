import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const game = createSlice ({
  name: "game",
  initialState: {
    username: "Ojskipojski",
    coordinates: 0,
    description: "",
    actions: [
      
    ]
    //gameRunning bool
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setGameState: (store, action) => {
      const updatedGameState = {
        username: store.username,
        coordinates: action.payload.coordinates,
        description: action.payload.description,
        actions: action.payload.actions
      }
      store = updatedGameState
    },
    toggleComplete: (store, action) => {
      const updatedTasks = store.tasks.map(task => {
        if (task.id === action.payload) {
          return {
            ...task,
            isComplete: !task.isComplete
          }
        } else {
          return task
        }
      })
      store.tasks = updatedTasks
    }
  }
})

//${method} where method is either action or start in the url 

const start = ( type, direction ) => {
  return (dispatch, getState) => {
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      body: {
        username: "Ojski",
        type: "",
        direction: ""
      }
    })
      .then(res => res.json())
      .then(update => dispatch(game.actions.setUsername(update))) 
  }
}

export const advance = ( type, direction ) => {
  return (dispatch, getState) => {
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      body: {
        username: "Ojskipojski",
        type: "",
        direction: ""
      }
    })
      .then(res => res.json())
      .then(update => dispatch(game.actions.setGameState(update))) 
  }
}

export default game