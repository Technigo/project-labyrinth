import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui'

const labyrinth = createSlice({
    name: 'labyrinth',
    initialState: {
        username: null,
        response: {}
    },
    reducers: {
      setUsername: (store, action) => {
        store.username = action.payload;
      },
      setResponse: (store, action) => {
        store.response = action.payload
      }
    }
})


export const startLabyrinth = () => {
  return (dispatch, getStore) => {
      dispatch(ui.actions.setLoading(true))
        fetch(`https://wk16-backend.herokuapp.com/start`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: getStore().labyrinth.username })
          })
        .then(res => res.json())
        .then(data => {
          dispatch(labyrinth.actions.setResponse(data))
          dispatch(ui.actions.setLoading(false))
        })
    }
  } 

export const continueLabyrinth = (type, direction) => {
  return (dispatch, getStore) => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://wk16-backend.herokuapp.com/action`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        username: getStore().labyrinth.username, 
        type: type, 
        direction: direction 
      })
    })
  .then(res => res.json())
  .then(data => {
    dispatch(labyrinth.actions.setResponse(data))
    dispatch(ui.actions.setLoading(false))
  })
  }
}

export default labyrinth;

//example response
/* {
    "coordinates": "0,0",
    "description": "You find yourself in under a large archway opening into a cavern.  A sense of purpose fills you.",
    "actions": [
        {
            "type": "move",
            "direction": "East",
            "description": "A worn sign 'The Temple of *ech*igo'. Some of the letters are missing. An overgrown paved path leads to the East"
        }
    ]
} 

// example with more than 1 action

{
    "coordinates": "1,1",
    "description": "The walls of the cavern seem to grow brighter and more colorful here. ",
    "actions": [
        {
            "type": "move",
            "direction": "South",
            "description": "The bridge somehow looks sturdier now.  Seeing it feels you with confidence."
        },
        {
            "type": "move",
            "direction": "West",
            "description": "A clear colorful pattern now marks the clearly cut stone pavers leading to the West"
        }
    ]
}



*/