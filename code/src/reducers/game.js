import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

const initialState = {
  username: '',
  playerLocation: ''
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

export const gameStart = () => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST'
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.startGame(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// fetch('', {
//     method: 'POST'
//   })
//     .then((res) => res.json())
//     .then(() => {
//       fetchThoughts()
//       setYourLikes((value) => value + 1)
//     }, [])
export default game
