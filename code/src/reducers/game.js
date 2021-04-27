import { createSlice } from '@reduxjs/toolkit'

const game = createSlice({
  name: 'game',
  initialState: {
    userName: null,
    gameState: null,
    action: null
  },
  reducers: {
    setUserName: (store, action) => {
      store.userName = action.payload
    },
    setGameState: (store, action) => {
      store.gameState = action.payload
    },
    setAction: (store, action) => {
      store.action = action.payload
    },
  }
})

export const startGame = () => {
  return (dispatch, getState) => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.userName })
    }
    fetch('https://wk16-backend.herokuapp.com/start', config)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        dispatch(game.actions.setGameState(json))
      })
  }
}

export const continueGame = () => {
  return (dispatch, getState) => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.userName,
        direction: getState().game.action.direction,
        type: getState().game.action.type
      })
    }
    fetch('https://wk16-backend.herokuapp.com/action', config)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        dispatch(game.actions.setGameState(json))
      })
  }
}
export default game