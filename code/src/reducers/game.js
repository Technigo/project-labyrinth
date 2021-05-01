import { createSlice } from '@reduxjs/toolkit'

const game = createSlice({
  name: 'game',
  initialState: {
    username:'',
    gameElements: {}
  },

  reducers: {
    setUserName:(store, action) => {
/*       store.username = action.payload */
      store.userName = action.payload 
    },
    setGameElements: (store, action) => {
      store.gameElements = action.payload
    }
        
  }
})
// Post request and dispatching the action that will set the game´s elements
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

export const continueGame = (userName, direction) =>{
return (dispatch) => {
    fetch ('https://wk16-backend.herokuapp.com/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: userName, type: "move", direction: direction }),
    })
    .then(response => response.json())  
    .then(json => {
      dispatch(game.actions.setGameElements(json))
    })
  }
} 

export default game