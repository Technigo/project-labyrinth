import { createSlice } from '@reduxjs/toolkit'

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    userName: null,
    actions: []
  },
  reducers: {
    addUserName: (store, action) => {
      store.userName = action.payload
    },
    addActions: (store, action) => {
      store.actions = action.payload
    }
  }
})

export const generateData = () => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinth.userName })
    }
    fetch('https://wk16-backend.herokuapp.com/start', options)
      .then(response => response.json())
      .then(data => dispatch(labyrinth.actions.addActions(data)))
  } 
}

export const advanceGame = (direction) => {
  console.log(direction)
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        username: getState().labyrinth.userName,
        type: direction.type,
        direction: direction.direction
      })
    }
    fetch('https://wk16-backend.herokuapp.com/action', options)
      .then(response => response.json())
      .then(data => dispatch(labyrinth.actions.addActions(data)))
  } 
}

export default labyrinth