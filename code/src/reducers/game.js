import { createSlice } from '@reduxjs/toolkit'

const game = createSlice({
  name: 'direction',
  initialState: {
    username: null,
    direction: null,
    history:[],
    loading: false
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setDirection: (store, action) => {
      store.direction = action.payload
    },    
    setHistory: (store, action) => {
      console.log(action)
      if(store.direction){
        store.history = [...store.history, store.direction]
      } store.direction = action.payload
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    }
  }
})

export const generateGame = (username) => {
    return (dispatch, getState) => {
      dispatch(game.actions.setLoading(true))
        fetch('https://wk16-backend.herokuapp.com/start', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ username: getState().game.username})
        })
        .then(res => res.json())
        .then(data => dispatch(game.actions.setDirection(data)))  
        .finally(() => dispatch(game.actions.setLoading(false)))
      } 
  }

export const nextStep = (username,direction) => {
  return (dispatch) => {
    dispatch(game.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/action', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ 
            username : username,             
            type : 'move', direction
          })

        })
        .then(res => res.json())
        .then(data => {
          dispatch(game.actions.setDirection(data))  
          dispatch(game.actions.setHistory(data))
        }
        )
        .finally(() => dispatch(game.actions.setLoading(false)))
      }
}

export default game