import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'


const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
      username: null,
      response: {}
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setResponse: (store, action) => {
      store.response = action.payload
    }
  }
})

export const startLabyrinth = () => {
  return (dispatch, getStore) => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://wk16-backend.herokuapp.com/start`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: getStore().labyrinth.username })
      })
    .then(res => res.json())
    .then(data => {
      dispatch(labyrinth.actions.setResponse(data))
    })
    .finally(() => dispatch(ui.actions.setLoading(false)))
  }
} 

export const continueLabyrinth = (type, direction) => {
  return (dispatch, getStore) => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://wk16-backend.herokuapp.com/action`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        username: getStore().labyrinth.username, 
        type: type, 
        direction: direction 
      })
    })
    .then(res => res.json())
    .then(data => {
      dispatch(labyrinth.actions.setResponse(data))
  })
    .finally(() => dispatch(ui.actions.setLoading(false)))
  }
}

export default labyrinth