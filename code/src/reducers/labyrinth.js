import { createSlice } from '@reduxjs/toolkit';

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    coordinates: null,
    description: null,
    actions: null,
    loading: false
  },
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload
      console.log(store.username)
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    },
    setCoordinates: (store, action) => {
      store.coordinates = action.payload.coordinates
    }
  }
})

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ username: getState().labyrinth.username })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinth.actions.setCoordinates(data))
        console.log(data)
      })
      .finally(() => {
        dispatch(labyrinth.actions.setLoading(false))
      })
    console.log('Hey whoa!')
  }
}