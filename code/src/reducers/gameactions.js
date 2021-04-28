import React from 'react';
import { createSlice } from '@reduxjs/toolkit'

import { API_START } from '../utils/urls'

const gameactions = createSlice({
  name: 'gameactions',
  initialState: {
    username: null,
    gamestart: null,
    actions: null
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setGamestart: (store, action) => {
      store.gamestart = action.payload
    },
    setActions: (store, action) => {
      store.actions = action.payload
    }
  }
})

export const generateGame = () => {
  return (dispatch, getState) => {
    return (
      fetch(API_START, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ username: getState().gameactions.username })
      })
        .then(res => res.json())
        .then(data => dispatch(gameactions.actions.setGamestart(data)))
    )
  }
}
export default gameactions
//
//console.log(data)