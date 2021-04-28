import { createSlice } from '@reduxjs/toolkit'

const game = createSlice({
  name: 'direction',
  initialState: {
    username: null,
    direction: null,
    loading: false
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setDirection: (store, action) => {
      store.direction = action.payload
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    }
  }
})

export const generateGame = () => {
    return (dispatch, getState) => {
      dispatch(game.actions.setLoading(true))
        fetch('https://wk16-backend.herokuapp.com/start', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ username : getState().game.username })
        })
        .then(res => res.json())
        .then(data => dispatch(game.actions.setDirection(data)))  
        .finally(() => dispatch(game.actions.setLoading(false)))
      } 
  }

export const nextStep = () => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/action', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ 
            username : getState().game.username, 
            direction : getState().game.action,
            type : 'move'
          })

        })
        .then(res => res.json())
        .then(data => dispatch(game.actions.setDirection(data)))  
        .finally(() => dispatch(game.actions.setLoading(false)))

      }
}


export default game