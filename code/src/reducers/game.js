import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

const initialState = {
  username: '',
  location: ''
}

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    submitUsername: (store, action) => {
      console.log(action)
      const input = action.payload

      const selectedUsername = {
        username: input
      }
      store.username = selectedUsername
    },
    startGame: (store, action) => {
      console.log(action)
    },
    // playGame: (store, action) => {
    //   console.log(action)
    // },

    setLocation: (store, action) => {
      console.log(action)

      const location = action.payload

      const newLocation = {
        username: location
      }
      store.playerLocation = newLocation
    },
    restart: () => {
      return initialState
    }
  }
})

export const gameStart = (username) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username })
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.startGame(json))
        // dispatch(game.actions.setLocation())   - Lagra koordinater hur? Finns i console.log
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// export const gamePlay = (username) => {
//   return (dispatch) => {
//     dispatch(ui.actions.setLoading(true))
//     fetch('https://wk16-backend.herokuapp.com/action', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username: username, type: "move", direction: direction })
//     })
//       .then((res) => res.json())
//       .then((json) => {
//         console.log(gamePlay)
//         dispatch(game.actions.playGame(json))
//         // dispatch(game.actions.setLocation())   - Lagra koordinater hur? Finns i console.log
//         dispatch(ui.actions.setLoading(false))
//       })
//   }
// }



export default game
