import { createSlice } from '@reduxjs/toolkit'

const savedLocalStore = localStorage.getItem("labyrinth") ? JSON.parse(localStorage.getItem("labyrinth")) : null
const savedActions = localStorage.getItem("labyrinth") ? savedLocalStore.actions : null
const savedUserName = localStorage.getItem("labyrinth") ? savedLocalStore.userName : null
const savedHistory = localStorage.getItem("labyrinth") ? savedLocalStore.history : []
const savedDirectionChoices = localStorage.getItem("labyrinth") ? savedLocalStore.directionChoices : []

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    userName: savedUserName,
    actions: savedActions,
    history: savedHistory,
    error: null,
    loading: false,
    directionChoices: savedDirectionChoices

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
      if (store.directionChoices.length) {
        store.directionChoices = store.directionChoices.slice(0, store.directionChoices.length - 1)
      }
    },
    setDirectionChoice: (store, action) => {
      store.directionChoices = [...store.directionChoices, action.payload]
    },
    setError: (store, action) => {
      store.error = action.payload
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    },
    restartGame: (store) => {
      store.userName = null
      store.actions = null
      store.history = []
      store.error = null
      store.loading = false
      store.directionChoices = []
    }
  },

})

export const generateData = (direction) => {
  if (direction) {
    return (dispatch, getState) => {
      dispatch(labyrinth.actions.setLoading(true))
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
        .then(data => {
          dispatch(labyrinth.actions.addActions(data))
        })
        .catch(err => dispatch(labyrinth.actions.setError(err.message)))
        .finally(() => dispatch(labyrinth.actions.setLoading(false)))
    }
  }
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true))
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
      .then(data => {
        dispatch(labyrinth.actions.addActions(data))
      })
      .catch(err => dispatch(labyrinth.actions.setError(err.message)))
      .finally(() => dispatch(labyrinth.actions.setLoading(false)))
  }
}

export default labyrinth