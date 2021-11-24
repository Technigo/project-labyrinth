import { createSlice } from '@reduxjs/toolkit'


export const game = createSlice({
  name: 'game',
  initialState: {
    username: null,
    labyrinthData: null,
    loading: false
  },
  
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setLabyrinthData: (store, action) => {
      store.labyrinthData = action.payload
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    }
  }
})

//Sending a post request to get the data to generate the game 
export const generateGame =  () => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({ username: getState().game.username }),
      // Using getState() to get the value from the state variable username instead of passing it into the thunk as an argument
    })
    .then((res) => res.json())
    .then(data => dispatch(game.actions.setLabyrinthData(data))) 
    .finally(() => dispatch(game.actions.setLoading(false)))
  }
}

export const nextStep = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({
        username: getState().game.username,
        type,
        direction,
      }),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(game.actions.setLabyrinthData(data))
        /* dispatch(game.actions.setHistory(data)) */
      })
      .finally(() => dispatch(game.actions.setLoading(false)))
  }
}