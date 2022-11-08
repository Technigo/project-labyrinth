import { createSlice } from '@reduxjs/toolkit'

const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: '',
    stage: [],
    history: [],
    loading: false
  },
  reducers: {
    setUser: (store, action) => {
      store.username = action.payload
    },
    setStage: (store, action) => {
      store.stage = action.payload;
    }
  }
});

export default labyrinth;

export const startLabyrinth = () => {
  return (dispatch, getState) => {
    const API_URL = 'https://labyrinth.technigo.io/start'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().labyrinth.username
      })
    }
    fetch(API_URL, options)
      // eventuellt loader from another reducer set to true
      // --> dispatch(ui.actions.setLoading(true))
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        dispatch(labyrinth.actions.setStage(data))
        // eventuellt loader from another reducer set to false
        // --> dispatch(ui.actions.setLoading(false))
      })
    /*  fetch(`https://api.quotable.io/random?author=${getState().labyrinth.username}`)
      .then((response) => response.json())
      .then((quote) => console.log(quote)) */
  }
}

/* export const getActions = () => {
  return (dispatch, getState) => {
    const API_URL = 'https://labyrinth.technigo.io/action'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type: getState().labyrinth.action,
        direction:
      })
    }
    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        dispatch(labyrinth.actions.setStage(data))
      })
  }
} */

/* const handleOnFormSubmit = (event) => {
  event.preventDefault();

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: newThought
    })
  }
  setLoading(true)
  fetch(APIurl, options)
    .then((res) => res.json())
    .then((updatedThought) => {
      setNewThought((previousThoughts) => [updatedThought, ...previousThoughts])
    })
    .finally(() => handleCleanUp())
} */