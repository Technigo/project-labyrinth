import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

const initialState = {
  username: '',
  coordinates: '',
  description: '',
  actions: []
}

export const maze = createSlice({
  name: 'maze',
  initialState,
  reducers: {
    storeUsername: (store, action) => {
      store.username = action.payload
    },
    storeCoordinates: (store, action) => {
      store.coordinates = action.payload
    },
    storeDescription: (store, action) => {
      store.description = action.payload
    },
    storeActions: (store, action) => {
      store.actions = action.payload
    }
  }
})

export const postUsername = () => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().maze.username
      })
    }
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        dispatch(maze.actions.storeCoordinates(data.coordinates))
        dispatch(maze.actions.storeDescription(data.description))
        dispatch(maze.actions.storeActions(data.actions))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

export const moveForward = (direction) => {
  return (dispatch, getState) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().maze.username,
        type: 'move',
        direction
      })
    }
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/action', options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        dispatch(maze.actions.storeCoordinates(data.coordinates))
        dispatch(maze.actions.storeDescription(data.description))
        dispatch(maze.actions.storeActions(data.actions))
        dispatch(ui.actions.setLoading(false))
      })
  }
}