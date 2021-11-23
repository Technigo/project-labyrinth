import { createSlice } from "@reduxjs/toolkit"
import { loader } from './loader'


// 1. Try starting the game with Postman
// 2. Get the game started in your code using fetch
// 3. Display the description and actions from the response
// 4. Allow the user/player to select an action
// 5. Perform a POST request based on the action selected
// 6. Handle the response from the `POST /action` to update the game state


export const labyrinth = createSlice ({
  name: 'labyrinth',
  initialState: {
    username: "",
    response: {},
  },

  reducers: {
    setusername: (state, action) => {
      state.username = action.payload
    },
    setResponse: (state, action) => {
      state.response = action.payload
    },
    //   gameStart: (state, action) => {
    //   state.gameStart = action.payload
    // },
    //   gameEnd: (state, action) => {
    //   state.gameStart = action.payload
    // },
    //   gameDirection: (state, action) => {
    //     state.move = action.payload
    // }
    }
 })


 export const fetchStartData = (username) => {
  // console.log("hello")
  return (dispatch) => {
    dispatch(loader.actions.setLoading(true))
    fetch("https://wk16-backend.herokuapp.com/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(labyrinth.actions.setResponse(json))
        dispatch(loader.actions.setLoading(false))
      })
  }
}

export const labyrinthPath = (type, direction) => {
  return (dispatch, getState) => {
    dispatch(loader.actions.setLoading(true))
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
        dispatch(labyrinth.actions.setResponse(data))
        dispatch(loader.actions.setLoading(false))
      })
  }
}