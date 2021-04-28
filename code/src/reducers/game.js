import { createSlice } from '@reduxjs/toolkit'

const game = createSlice({
  name: 'game',
  initialState: {
    userName: null,
    gameState: null,
    action: null,
    loading: false,
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
    setLoading: (store, action) => {
      store.loading = action.payload;
    }
  }
})

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true));

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.userName })
    }

    fetch('https://wk16-backend.herokuapp.com/start', config)
      .then(res => res.json())
      .then(json => dispatch(game.actions.setGameState(json)))
      .finally(() => dispatch(game.actions.setLoading(false)));
  }
}

export const continueGame = () => {
  return (dispatch, getState) => {
    dispatch(game.actions.setLoading(true));

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.userName,
        direction: getState().game.action,
        type: 'move'
      })
    }

    fetch('https://wk16-backend.herokuapp.com/action', config)
      .then(res => res.json())
      .then(json => dispatch(game.actions.setGameState(json)))
      .finally(() => dispatch(game.actions.setLoading(false)));
  }
}
export default game
