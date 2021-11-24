import { createSlice } from '@reduxjs/toolkit'
import { ui } from "./ui"

let user = ""

export const maze = createSlice({
  name: 'maze',
  initialState: {
      username: "",
      response: {}
  },
  reducers: {
    setUserName: (state, action) => {
        state.username = action.payload
        console.log("state.initialState", state.username)
        user = state.username
    },
    setResponse: (state, action) => {
        state.response = action.payload
        console.log("state.initialState", state.response)
    }
}})

export const startMaze = ( username) => {
    console.log("username the newest", username)
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({ username })
    }
    return (dispatch) => {   
        dispatch(ui.actions.setLoading(true))     
        fetch('https://wk16-backend.herokuapp.com/start', options)
        .then((res) => res.json())
        .then((data) => {
            console.log("post", data)
            dispatch(maze.actions.setResponse(data))   
            dispatch(maze.actions.setUserName(username))
            dispatch(ui.actions.setLoading(false)) 
        })
    }
}

export const moveMaze = (direction, type) => {
    console.log("before of fetch")
    console.log("store.maze.username", user)
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        type: type,
        direction: direction,
      }),
    }
    return ( dispatch ) =>
      /* dispatch(ui.actions.setLoading(true)); */
      fetch("https://wk16-backend.herokuapp.com/action", options)
        .then(res => res.json())
        .then(data => {
          dispatch(maze.actions.setResponse(data))
          console.log("json i moveMaze", data)
          /* dispatch(ui.actions.setLoading(false)); */
  
          console.log("outside of fetch")
        })
  }






/* const initialState = { */
  
    // coordinates: "0,0",
    // description: "You find yourself in under a large archway opening into a cavern.  A sense of purpose fills you.",
    // actions: [
    //     {
    //         type: "move",
    //         direction: "East",
    //         description: "A worn sign 'The Temple of *ech*igo'. Some of the letters are missing. An overgrown paved path leads to the East"
    //     }
    // ]
/*     content: {},
} */