import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  loading: false,
  response:
  {
    coordinates: '0',
    description: '',
    actions: [
      {
        type: '',
        direction: '',
        description: ''
      }
    ]
  }
}

export const Game = createSlice(
  {
    name: 'game',
    initialState,
    reducers: {
      setUsername: (store, action) => {
        store.username = action.payload
      },
      nextStep: (store, action) => {
        store.response = action.payload
      },
      setLoading: (store, action) => {
        store.loading = action.payload
      },
      restartGame: () => {
        return initialState;
      }
    }
  }
)

// thunk to handle start API
export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(Game.actions.setLoading(true))
    // sets loading to true at the beginning of game, as the data is being fetched
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.username
      })
    })
      .then((response) => response.json())
      .then((json) => {
        // get the data from the api - save it in global state
        dispatch(Game.actions.nextStep(json))
        // set loading to false to display game
      })
      .catch((error) => console.error(error))
      // set loading to false to display game
      .finally(() => dispatch(Game.actions.setLoading(false)))
  }
}

// thunk to handle action API
export const getStory = (direction) => {
  return (dispatch, getState) => {
    dispatch(Game.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.username,
        type: 'move',
        direction
      })
    })
      .then((response) => response.json())
      .then((json) => {
        // get the data from the api - save it in global state
        dispatch(Game.actions.nextStep(json))
      })
      .catch((error) => console.error(error))
      .finally(() => dispatch(Game.actions.setLoading(false)))
  }
}