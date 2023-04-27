import { createSlice } from '@reduxjs/toolkit'
import { loading } from './loading'

const startURL = 'https://labyrinth.technigo.io/start'
const actionURL = 'https://labyrinth.technigo.io/action'

const initialState = {
  username: null,
  currentGameState: {}
}
export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState,

  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },

    setcurrentGameState: (store, action) => {
      store.currentGameState = action.payload
    },

    restart: (store) => {
      // store.username = initialState.username
      // store.currentGameState = initialState.currentGameState
      console.log('Restarting game...');
      store.username = null;
      store.currentGameState = '';
    }
  }
})

export const startGame = () => {
  return (dispatch, getState) => {
    dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().labyrinth.username })
    }

    fetch(startURL, options)
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data)
        dispatch(labyrinth.actions.setcurrentGameState(data))
        dispatch(loading.actions.setLoading(false));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export const continueGame = (direction) => {
  return (dispatch, getState) => {
    dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type: 'move',
        direction
      })
    }

    fetch(actionURL, options)
      .then((respons) => respons.json())
      .then((data) => {
        dispatch(labyrinth.actions.setcurrentGameState(data));
        dispatch(loading.actions.setLoading(false));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

// export const restartGame = () => {
//   return {
//     initialState
//   }
// }