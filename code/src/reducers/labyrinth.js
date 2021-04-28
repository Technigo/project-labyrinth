import { createSlice } from '@reduxjs/toolkit'

const savedLocalStore = JSON.parse(localStorage.getItem("labyrinth"))
const savedActions = savedLocalStore.labyrinth.actions
const savedUserName = savedLocalStore.labyrinth.userName
const savedHistory = savedLocalStore.labyrinth.history

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    userName: localStorage.getItem("labyrinth") ? savedUserName : null,
    actions: localStorage.getItem("labyrinth") ? savedActions : null,
    history: localStorage.getItem("labyrinth") ? savedHistory : [],
    error: null,

  },
  reducers: {
    addUserName: (store, action) => {
      store.userName = action.payload
    },
    addActions: (store, action) => {
      if (store.actions) {
        store.history = [...store.history, store.actions]
      }
      store.actions = action.payload
    },
    setPreviousStep: (store, action) => {
      if (store.history.length) {
        store.actions = store.history[store.history.length - 1]
        store.history = store.history.slice(0, store.history.length - 1)
      }
    },
    setError: (store, action) => {
      store.error = action.payload
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
        .then(response => {
          if (response.ok) {
            dispatch(labyrinth.actions.setError(null))
            return response.json()
          } else {
            throw new Error(response.statusText)

          }
        })
        .then(async data => {
          await dispatch(labyrinth.actions.addActions(data))
          await localStorage.setItem("labyrinth", JSON.stringify(getState()))
        })
        .catch(err => dispatch(labyrinth.actions.setError(err.message))
        )
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
      .then(response => {
        if (response.ok) {
          dispatch(labyrinth.actions.setError(null))
          return response.json()
        } else {
          throw new Error(response.statusText)
        }
      })
      .then(async data => {
        await dispatch(labyrinth.actions.addActions(data))
        await localStorage.setItem("labyrinth", JSON.stringify(getState()))
      })
      .catch(err => dispatch(labyrinth.actions.setError(err.message)))
  }
}



export default labyrinth