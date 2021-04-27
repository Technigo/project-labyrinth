import { createSlice } from '@reduxjs/toolkit'

import { API_START, API_MOVE } from '../reusables/urls'

export const directions = createSlice({
  name: "directions",
  initialState: {
    player: '',
    step: null, 
    history: null
  },
  reducers: {
    setPlayer: (store, action) => {
      store.player = action.payload
    }
    ,
    handleFetchedData: (store, action) => {
      store.history = [store.step, action.payload]
      
      store.step = action.payload
    }
  }
})

export const fetchStart = (player) => {
  return (dispatch, getStore) => {
    fetch(API_START, {
      method: "POST",
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify({ username: getStore().directions.player }) 
    })
      .then(res => res.json())
      .then(data => dispatch(directions.actions.handleFetchedData(data)))
  }
}

export const fetchMove = (type, direction) => { 
  return (dispatch, getStore) => {
    const data = {username: getStore().directions.player, type: type, direction: direction}
    console.log(data)
    fetch(API_MOVE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => dispatch(directions.actions.handleFetchedData(data)))
  }
}