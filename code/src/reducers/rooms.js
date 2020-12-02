import { createSlice } from '@reduxjs/toolkit'

const username = "NewUserClaudiaAxel133781"
const START_URL = "https://wk16-backend.herokuapp.com/start";
const ACTION_URL = "https://wk16-backend.herokuapp.com/action";

const initialState = {
  username: username,
  gameState: {
    description: "Desc",
    coordinates: "Coords",
    actions: []
  }
}

const startGameFetchInfo = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: username })
}

export const rooms = createSlice({
  name: 'rooms',
  initialState,
  reducers: {

    // Reducer that starts the game. 
    startGame: (state, action) => {
      fetch(START_URL, startGameFetchInfo)
      .then(response => response.json())
      .then(data => 
        // Här vill vi spara information till state:t. 
        console.log(data)
      )
    }, 

    setGameState: (state, action) => {
      console.log("Inne i setGameState")
      const currentGameState = action.payload
      state.gameState = currentGameState
    },

    setUsername: (state, action) => {
      console.log("Inne i setUsername-reducen")
      state.username = action.payload
    },

    

    generateNewRoom: (state, action) => {
      // Här är koden för att generate:a ett nytt rum
    }




  }
})

