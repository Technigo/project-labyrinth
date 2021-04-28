import { createSlice } from '@reduxjs/toolkit'

import { startUrl } from '../reusables/urls'

const game = createSlice({
  name: 'game',
  initialState: {
    userName: null,
    gameData: null,
    gameStart: false
  },
  reducers: {
    setUserName: (store, action) => {
      store.userName = action.payload
    },
    setGameData: (store, action) => {
      store.gameData = action.payload
    },
    setGameStart: (store, action) => {
      store.gameStart = action.payload
    }

  }
})

export const generateGame = (userName) => {
  return (dispatch) => {
    fetch(startUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: userName})
    })
      .then(res => res.json())
      // .then(gameData => console.log(gameData))
      .then(gameData => dispatch(game.actions.setGameData(gameData)) )
  }
}




export default game