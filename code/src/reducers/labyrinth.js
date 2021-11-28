import { createSlice } from "@reduxjs/toolkit"

export const labyrinth = createSlice ({
  name: 'labyrinth',
  initialState: {
    username: null,
    currentPosition: null,
    // history: [],
    loading: false,
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setCurrentPosition: (store, action) => {
      store.currentPosition = action.payload
    },
    setLoading: (store, action) => {
      store.loading = action.payload
    },
    reStartGame: () => {
      return labyrinth
    },
    // setHistory: (store, action) => {
    //   if (store.currentPosition) {
    //     store.history = [...store.history, action.payload]
    //   }
    // },
    }
 })


 export const fetchStartData = (username) => {

  return (dispatch) => {
    dispatch(labyrinth.actions.setLoading(true))
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinth.actions.setCurrentPosition(data))
        dispatch(labyrinth.actions.setUsername(username))
        dispatch(labyrinth.actions.setLoading(false))
      })
  }
}

export const fetchLabyrinthPath = (type, direction) => {

  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true))
    fetch(`https://wk16-backend.herokuapp.com/action`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type: type,
        direction: direction,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinth.actions.setCurrentPosition(data))
        dispatch(labyrinth.actions.setLoading(false))
        // dispatch(labyrinth.actions.setHistory(data))
      })
    
  }
}