import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({
  name: 'game',
  initialState: {
    username:'',
    gameElements: {}
  },

  reducers: {
    setUserName:(store, action) => {
      store.username = action.payload
    },
    setGameElements: (store, action) => {
      store.gameElements = action.payload
    }
        
  }
})

export const startGame = (userName) => {
  return (dispatch) => {
    fetch ('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: userName }),
    })
    .then(response => response.json())  
    .then(json => {
      dispatch(game.actions.setGameElements(json))
    })
  }

} 
export default game