import { createSlice } from '@reduxjs/toolkit'


 const games = createSlice({
  name: 'games',
  initialState: {
    username: null,
    actions: null,
    loading: false
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload 
    },

    setRespons: (store, action) => {
      store.actions = action.payload
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    }
  }
}) 

export const generateGame = () => {
  return (dispatch, getState) => {
      dispatch(games.actions.setLoading(true))
      fetch(`https://wk16-backend.herokuapp.com/start`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ username : getState().games.username })
      })
      .then(res => res.json())
      .then(data => dispatch(games.actions.setRespons(data)))
      .finally(() => dispatch(games.actions.setLoading(false)))
    } 
}

export const continueGame = (decission) => {
  return (dispatch, getState) => {
    dispatch(games.actions.setLoading(true))
    fetch(`https://wk16-backend.herokuapp.com/action`, {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify({ 
        username: getState().games.username,
        type: decission.type,
        direction: decission.direction, 

      })

    })
      .then(res => res.json())
      .then(data => dispatch(games.actions.setRespons(data)))
      .finally(() => dispatch(games.actions.setLoading(false)))
  }
}

export default games