import { createSlice } from '@reduxjs/toolkit'

const games = createSlice({
  name: 'games',
  initialState: {
    username: null,
    description:{
      coordinates: 0.0,
      description: '',
      actions: []
    },
   /*  description: localStorage.getItem('question') 
    ? JSON.parse(localStorage.getItem('question'))
    : {
      coordinates: 0.0,
      description: '',
      actions: []
    },  */
    history: [],
    error: null, 
    loading: false 
  },
  reducers: {
    setName: (store, action) => {
      store.username = action.payload
    }, 
    setDescription: (store, action) => {
      store.description = action.payload;
    }, 
    setHistory: (store, action) => {
      store.history = [...store.history, action.payload]
    },
    setError: (store, action) => {
      store.error = action.payload
    }, 
    setLoading: (store, action) => {
      store.loading = action.payload
    }, 
  }
})

export const generateGame = (name) => {
  return (dispatch) => {
    dispatch(games.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/start', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ username : name })
      })
    .then(res =>  {
      if(res.ok) {
        dispatch(games.actions.setError(null))
        return res.json()
      } else {
        throw new Error (res.statusText)
      }
    })
    .then(question => {
      dispatch(games.actions.setDescription(question))
      localStorage.setItem('question', JSON.stringify(question))
    })
    .catch(error => dispatch(games.actions.setError(error.message)))
    .finally(() => { 
      setTimeout(() => {
        dispatch(games.actions.setLoading(false))
      }, 1500)
    })
  }
}

export const generateMove = (name, directionMove) => {
  return (dispatch) => {
    dispatch(games.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/action', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ username: name, type: 'move', direction: directionMove })
      })
    .then(res => { 
      if(res.ok) {
        dispatch(games.actions.setError(null))
        return res.json()
      } else {
        throw new Error (res.statusText)
      }
    })
    .then(question => {
      dispatch(games.actions.setDescription(question))
      localStorage.setItem('question', JSON.stringify(question))
      dispatch(games.actions.setHistory(directionMove))
    })
    .catch(error => dispatch(games.actions.setError(error.message)))
    .finally(() => dispatch(games.actions.setLoading(false)))
  }
}


export default games

