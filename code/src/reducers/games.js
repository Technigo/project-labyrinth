import { createSlice } from '@reduxjs/toolkit'
//import React, { useState, useEffect } from 'react' 

const games = createSlice({
  name: 'games',
  initialState: {
    username: null,
    description: {},
    ourActions: null
  },
  reducers: {
    setName: (store, action) => {
      store.username = action.payload
    }, 
    setDescription: (store, action) => {
      store.description = action.payload
    }, 
    setAction: (store, action) => {
      store.ourActions = action.payload
    }
  }
})

export const generateGame = (name) => {
  return (dispatch) => {
    fetch('https://wk16-backend.herokuapp.com/start', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ username : name })
      })
    .then(res => res.json())
    .then(question => dispatch(games.actions.setDescription(question)))
  }
}

export const generateMove = (name, directionMove) => {
  return (dispatch) => {
    fetch('https://wk16-backend.herokuapp.com/action', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ username: name, type: 'move', direction: directionMove })
      })
    .then(res => res.json())
    .then(question => dispatch(games.actions.setDescription(question)))
  }
}

/* export const generateGame = (name, ourActions) => {
  return (dispatch) => {
    if(name){
      fetch('https://wk16-backend.herokuapp.com/start', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ username : name })
      })

      .then(res => res.json())
      .then(question => dispatch(games.actions.setDescription(question)))
    } else {
      fetch('https://wk16-backend.herokuapp.com/action', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ username: name, type: 'move', direction: ourActions })
      })
      .then(res => res.json())
      .then(question => {
          dispatch(games.actions.setDescription(question))
      })
    } 
  } 
    
} */

export default games

