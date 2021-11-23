import { createSlice } from '@reduxjs/toolkit'

export const maze = createSlice({
  name: 'maze',
  initialState: {
      username: 'BestFox1',
      response: {}
  },
  reducers: {
    setUserName: (state, action) => {
        state.username = action.payload
        console.log("state.initialState", state.username)
    },
    setResponse: (state, action) => {
        state.response = action.payload
        console.log("state.initialState", state.response)
    }

}})

export const startMaze = (dispatch) => {
    console.log("post innan")
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({ username : "BestFox1" })
    }
    return (dispatch) => {      
        fetch('https://wk16-backend.herokuapp.com/start', options)
        .then((res) => res.json())
        .then((data) => {
            console.log("post", data)
            dispatch(maze.actions.setResponse(data))   
        })
    }
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