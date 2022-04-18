import { createSlice } from "@reduxjs/toolkit"

const game = createSlice({
    name: "game",
    initialState: {
      userName: 0,
      gameState:
        {},
      gameStarted: false,
      isLoading: false,
    },
})

export const startGame = (userName) => {

    return (dispatch) => {
      dispatch(game.actions.setLoading(true))
      fetch('https://labyrinth-technigo.herokuapp.com/start', {
        method: 'POST',
        headers: { 'content-type': 'application/JSON' },
        body: JSON.stringify({
          username: userName
        })
      })

        .then(response => response.json())
        .then(data => {
          console.log(data)
          
          dispatch(game.actions.setStartPosition(data))
          dispatch(game.actions.setLoading(false))
        })
    }
  }
  
  export default game