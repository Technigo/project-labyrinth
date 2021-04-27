import { createSlice } from '@reduxjs/toolkit'


 const games = createSlice({
  name: 'games',
  initialState: {
    username: null,
    actions: [],
    description: '',

  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload 
    },
    setDescription: (store, action) => {
      store.description = action.payload.description
    },
  }
}) 

export const generateGame = () => {
  return (dispatch, getState) => {
      fetch('https://wk16-backend.herokuapp.com/start', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ username : getState().games.username })
      })
      .then(res => res.json())
      .then(question => dispatch(games.actions.setDescription(question)))
    } 
}


export default games