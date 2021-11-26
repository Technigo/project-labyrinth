import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({
  name: 'game',
  initialState: {
    username: null,
    currentCoordinates: null,
    history: [],
    loading: false,
  },
  
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setCurrentCoordinates: (store, action) => {
      store.currentCoordinates = action.payload
    },
    setHistory: (store, action) => {
      if (store.currentCoordinates) {
        store.history = [...store.history, action.payload]
      }
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    },
    setResetGame: (store) => {
      store. username = ''
      store.currentCoordinates = []
      store.history = []
    },
  },
})

//Sending a post request to get the data to generate the game 
export const generateGame =  () => {
  return (dispatch, getState) => { // get the current state of the store, for values defined in initialState
    dispatch(game.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: getState().game.username }),
      // Using getState() to get the value from the state variable username instead of passing it into the thunk as an argument
    })
    .then((res) => res.json())
    .then(data => dispatch(game.actions.setCurrentCoordinates(data))) 
    .finally(() => dispatch(game.actions.setLoading(false)))
  }
}

export const nextStep = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: getState().game.username,
        type, //shorthand of type: type
        direction,
      }),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(game.actions.setCurrentCoordinates(data))
        dispatch(game.actions.setHistory(data))
      })
      .finally(() => dispatch(game.actions.setLoading(false)))
  }
}