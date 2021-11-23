import { createSlice } from "@reduxjs/toolkit"

// import { START_URL } from "../utils/urls"

export const maze = createSlice({
    name: "maze",
    initialState: {
      mazeMessage: []
    },
    reducers: {
      setMazeMessage: (state, action) => {
        state.MazeMessage = action.payload
      }
    }
  })
  
  export const fetchMazeMessage = () => {

    return (dispatch) => {

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "username": "ReadyTechnigoPlayerOne",
        }),
      }
        fetch('https://wk16-backend.herokuapp.com/start', options)
        .then((res) => res.json())
        .then((json) => {
            dispatch(maze.actions.setMazeMessage(json))
        })
    }
  }