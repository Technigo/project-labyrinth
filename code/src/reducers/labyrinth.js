/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentDirection: [],
  userName: '',
  gameOver: false
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
      const newAction = action.payload
      const updatedActions = [...store.steps, newAction]
      store.actions = updatedActions
    },

    restartGame: (store) => {
      store.userName = ''
      store.actions = []
    }
  }
})

export const startTheGame = () => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ username: getState().labyrinth.userName })
    }
    fetch('https://labyrinth.technigo.io/start', options)
      .then((resp) => resp.json())
      .then((data) => console.log('start', data))
      .then((data) => {
        dispatch(labyrinth.actions.setCurrentDirection(data))
      // .finally(() => )
      })
  }
}

export const continueGame = () => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(
        {
          username: getState().labyrinth.userName,
          type: 'move',
          direction: 'East'
        }
      )
    }
    fetch('https://labyrinth.technigo.io/action', options)
      .then((res) => res.json())
      .then((json) => console.log('action', json))
      .then(() => dispatch())
  }

  // how to move to next step?
}

// export const { setUserName } = labyrinth.actions

// export const selectInfoPlayer = ((store) => store.labyrinth.userName)