import { createSlice } from '@reduxjs/toolkit';

const games = createSlice({
  name: 'games',
  initialState: {
    username: null,
    description: null,
    direction: null,
    moves: null,
    history: [],
    loading: false,
    coordinates: null,
  },

  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload;
    },
    setDescription: (store, action) => {
      store.description = action.payload;
    },
    setMoves: (store, action) => {
      if (store.moves) {
        store.history = [...store.history, store.moves]
      }
      store.moves = action.payload
    },

    setDirection: (store, action) => {
      store.direction = action.payload
   
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    },

    setCoordinates: (store, action) => {
      store.coordinates = action.payload
    },

    setPreviousMove: (store, action) => {
    if (store.history.length) {
      store.moves = store.history[store.history.length - 1]
      store.history = store.history.slice(0, store.history.length - 1)
    }
    }
  }
});

export const createPlayer = (direction) => {
  return (dispatch, getState) => {
    dispatch(games.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: getState().games.username,
          type: 'move',
          direction
        })
    })
    .then((response) => response.json()) 
    .then((game) => {
      dispatch(games.actions.setDescription(game.description))
      dispatch(games.actions.setMoves(game.actions))
      dispatch(games.actions.setCoordinates(game.coordinates))
    })
    .finally(() => dispatch(games.actions.setLoading(false)))
  }
}

export const GenerateQuestion = () => {
  return (dispatch, getState) => {
    dispatch(games.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().games.username,
        type: 'move',
        direction: getState().games.direction
      })
    })
    .then((response) => response.json())
    .then(game => {
      dispatch(games.actions.setDescription(game.description))
      dispatch(games.actions.setMoves(game.actions))
      dispatch(games.actions.setCoordinates(game.coordinates))
  })
  .finally(() => dispatch(games.actions.setLoading(false)))
}
}

export default games;