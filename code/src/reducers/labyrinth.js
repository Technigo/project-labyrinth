/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentDirection: [],
  userName: ''
}

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState,
  reducers: {

    setUserName: (store, action) => {
      store.userName = (action.payload)
    },

    setGameState: (store, action) => {
      store.gameState = action.payload
      // how to do this?
    },

    setCurrentDirection: (store, action) => {
      store.labyrinth.currentDirection.push(action.payload)
    },

    restartGame: (store) => {
      store.userName = ''
    }
  }
})
export const startTheGame = () => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinth.userName })
    };

    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((data) => console.log('start', data))
      .finally((json) => {
        dispatch(labyrinth.actions.setCurrentDirection(json))
      })
  };
}

export const continueGame = (direction) => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinth.userName,
        type: 'move',
        direction })
    };

    fetch('https://labyrinth.technigo.io/action', options)
      .then((res) => res.json())
      .then((json) => console.log('continute', json))
      .finally((json) => {
        dispatch(labyrinth.actions.setCurrentDirection(json))
      })
  };
}

// export const { setUserName } = labyrinth.actions

// export const selectInfoPlayer = ((store) => store.labyrinth.userName)