import { createSlice } from '@reduxjs/toolkit'


 const games = createSlice({
  name: 'games',
  initialState: {
    username: null,
    actions: [],
    description:'',

  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload 
    },

    setRespons: (store, action) => {
      store.actions = action.payload
    },
  }
}) 

export const generateGame = () => {
  return (dispatch, getState) => {
      fetch(`https://wk16-backend.herokuapp.com/start`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ username : getState().games.username })
      })
      .then(res => res.json())
      .then(data => dispatch(games.actions.setRespons(data)))
      
    } 
}


export default games