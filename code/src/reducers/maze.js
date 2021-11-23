import { createSlice } from "@reduxjs/toolkit"

import { START_URL } from "../utils/urls"

export const maze = createSlice({
    name: "maze",
    initialState: {
      mazeMessage: []
    },
    reducers: {
      setMazeMessage: (state, action) => {
        state.mazeMessage = [action.payload]
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
        fetch(START_URL, options)
        .then((res) => res.json())
        .then((json) => {
            dispatch(maze.actions.setMazeMessage(json))
        })
    }
  }