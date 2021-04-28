import { createSlice } from '@reduxjs/toolkit'

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    userName: null,
    actions: null,
    history: []
    
  },
  reducers: {
    addUserName: (store, action) => {
      store.userName = action.payload
    },
    addActions: (store, action) => {
      if (store.actions){
        store.history=[...store.history, store.actions]
      }
      store.actions = action.payload
    },
    setPreviousStep: (store, action)=>{
      if (store.history.length) {
        store.actions = store.history[store.history.length-1]
        store.history = store.history.slice(0, store.history.length-1)
      }
    }
  },

})

export const generateData = (direction) => {
  if (direction) {
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
        .then(async data => {
           await dispatch(labyrinth.actions.addActions(data)) 
           await localStorage.setItem("labyrint", JSON.stringify(getState()))
          })

    }
  }
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
      .then(async data => {
        await dispatch(labyrinth.actions.addActions(data))
        await localStorage.setItem("labyrint", JSON.stringify(getState()))
      })
  }
}



export default labyrinth