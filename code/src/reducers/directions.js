import { createSlice } from '@reduxjs/toolkit'

import { API_START, API_MOVE } from '../reusables/urls'

export const directions = createSlice({
  name: "directions",
  initialState: {
    player: '',
    step: localStorage.getItem('directions') 
      ? JSON.parse(localStorage.getItem('directions'))
      : null, 
    history: null, 
    loading: false
  },
  reducers: {
    setPlayer: (store, action) => {
      store.player = action.payload
    }
    ,
    handleFetchedData: (store, action) => {
      if (store.step) {
        store.history = [store.history, store.step]
      }
      
      store.step = action.payload
    }, 
    setLoading: (store, action) => {
      store.loading = action.payload
    }
  }
})

export const fetchStart = () => {
  return (dispatch, getStore) => {
    dispatch(directions.actions.setLoading(true))
    fetch(API_START, {
      method: "POST",
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify({ username: getStore().directions.player }) 
    })
      .then(res => res.json())
      .then((data) => { 
        dispatch(directions.actions.handleFetchedData(data))
        console.log("fetchStart klar")})
      .finally(dispatch(directions.actions.setLoading(false)))
  }
}

export const fetchMove = (type, direction) => { 
  return (dispatch, getStore) => {
    const data = {username: getStore().directions.player, type: type, direction: direction}
    dispatch(directions.actions.setLoading(true))
    fetch(API_MOVE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then((data) => {
        dispatch(directions.actions.handleFetchedData(data))
        localStorage.setItem('directions', JSON.stringify(data))
        dispatch(directions.actions.setLoading(false))})
  }
}