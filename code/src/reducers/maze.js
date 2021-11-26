import { createSlice } from "@reduxjs/toolkit"
import { ui } from "./ui"

// The Store
export const maze = createSlice({
  name: "maze",
  initialState: {
    username: "",
    response: null,
    history: [],
  },
  reducers: {
    setUserName: (state, action) => {
      state.username = action.payload
    },
    setResponse: (state, action) => {
      state.response = action.payload
    },
    setHistory: (state, action) => {
      if (state.respone !== null) {
        state.history = [...state.history, action.payload]
      }   
    },
  },
})

// Thunk for maze start fetch
export const startMaze = username => {
  
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  }
  return dispatch => {
    dispatch(ui.actions.setLoading(true))
    fetch("https://wk16-backend.herokuapp.com/start", options)
      .then(res => res.json())
      .then(data => {
        
        dispatch(maze.actions.setResponse(data))
        dispatch(maze.actions.setUserName(username))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// Thunk for move fetch
export const moveMaze = (direction, type) => {
  
  return (dispatch, getStore) => {
    dispatch(ui.actions.setLoading(true))
    fetch("https://wk16-backend.herokuapp.com/action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: getStore().maze.username,
        type: type,
        direction: direction,
      }),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(maze.actions.setResponse(data))
        dispatch(maze.actions.setHistory(data))
        dispatch(ui.actions.setLoading(false))
      })
  }
}