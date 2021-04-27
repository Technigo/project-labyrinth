import { createSlice } from '@reduxjs/toolkit'

import { API_START } from '../reusables/urls'

export const directions = createSlice({
  name: "directions",
  initialState: {
    player: '',
  },
  reducers: {
    setPlayer: (store, action) => {
      store.player = action.payload
    }
    ,
    handleFetchedData: (store, action) => {
      console.log(action.payload)
    }
  }
})

export const fetchData = (player) => {
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