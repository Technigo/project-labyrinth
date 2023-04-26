import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: '',
  isStarted: false,
  description: '',
  move: [],
  loading: false
}

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setUserName: (store, action) => {
      store.user = action.payload
    },
    gameIsStarted: (store, action) => {
      store.isStarted = action.payload
    },
    setDescription: (store, action) => {
      store.description = action.payload
    },
    setMove: (store, action) => {
      store.move = [...store.move, action.payload]
    },
    isLoading: (store, action) => {
      store.loading = action.payload
    }
  }

})

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(game.actions.isLoading(true))

    const start = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ username: getState().game.user })
    }
    fetch('https://labyrinth.technigo.io/start', start)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setDescription(data))
        dispatch(game.actions.gameIsStarted(true))
      })
      .finally(() => {
        dispatch(game.actions.isLoading(false))
      })
  }
}

export const nextMove = (direction) => {
  return (dispatch, getState) => {
    dispatch(game.actions.isLoading(true))

    const move = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().game.user,
        type: 'move',
        direction })
    }
    fetch('https://labyrinth.technigo.io/start', move)
      .then((res) => res.json())
      .then((data) => {
        dispatch(game.actions.setDescription(data))
          .finally(() => {
            dispatch(game.actions.isLoading(false))
          })
      })
  }
}
