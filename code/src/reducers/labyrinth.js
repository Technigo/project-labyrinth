import { createSlice } from '@reduxjs/toolkit'

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    playerName: '',
    actions: localStorage.getItem('startContent')
      ? JSON.parse(localStorage.getItem('startContent'))
      : [],
    description: '',
    history: [],
    error: '',
    loading: false
  },
  reducers: {
    setName: (store, action) => {
      store.playerName = action.payload
    },
    setActions: (store, action) => {
      if (store.actions) {         //check this logic, right now an empty array [] is stored in the first index
        store.history = [...store.history, store.actions]
      }

      store.actions = action.payload
    }, 
    setPreviousAction: (store, action) => {
      if (!store.history.length < 1) {          //check this logic
        store.actions = store.history[store.history.length - 1]
        store.history = store.history.slice(0, store.history.length - 1)
      }
    },
    setError: (store, action) => {
      store.error = action.payload
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    }
  }
})

export const startContent = () => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true))   

    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ username : getState().labyrinth.playerName }),
    })
      .then(res => {
        if (res.ok) {
          dispatch(labyrinth.actions.setError(''))
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then(data => {
        dispatch(labyrinth.actions.setActions(data))
        localStorage.setItem('startContent', JSON.stringify(data))
      })
      .catch(error => dispatch(labyrinth.actions.setError(error.message)))
      .finally(() => dispatch(labyrinth.actions.setLoading(false)))
  }
}

export const gameContent = (action) => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true))

    fetch('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ 
        username : getState().labyrinth.playerName,
        type : action.type,
        direction : action.direction 
      }),
    })
      .then(res => {
        if (res.ok) {
          dispatch(labyrinth.actions.setError(''))
          return res.json()
        } else {
          throw new Error(res.statusText)
        }
      })
      .then(data => {
        dispatch(labyrinth.actions.setActions(data))
        localStorage.setItem('startContent', JSON.stringify(data))
      })
      .catch(error => dispatch(labyrinth.actions.setError(error.message)))
      .finally(() => dispatch(labyrinth.actions.setLoading(false)))
    }
}

export default labyrinth
