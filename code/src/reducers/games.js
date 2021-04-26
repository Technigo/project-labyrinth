import { createSlice } from '@reduxjs/toolkit'
//import React, { useState, useEffect } from 'react' 

const games = createSlice({
  name: 'games',
  initialState: {
    username: null,
    description: null
  },
  reducers: {
    setName: (store, action) => {
      store.username = action.payload
    }, 
    setDescription: (store, action) => {
      store.description = action.payload
    }
  }
})


/* const [quest, setQuest] = useState([])

useEffect(() => {
  fetchList()
}, [])

const fetchList = () => {
  fetch('https://wk16-backend.herokuapp.com/start')
    .then(res => res.json())
    .then(quest => setQuest(quest))
} */

export const generateGame = (name) => {
  return (dispatch, getState) => {
      fetch('https://wk16-backend.herokuapp.com/start', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ username : name })
      })
      .then(res => res.json())
      .then(question => dispatch(games.actions.setDescription(question)))
    } 
}

/* export const  = (name, direction) => {
  return (dispatch, getState) => {
      fetch('https://wk16-backend.herokuapp.com/action', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ username: name, type: 'move', direction: direction })
      })
      .then(res => res.json())
      .then(question => dispatch(games.actions.setDescription(question)))
    } 
}
 */


export default games

