import { createSlice } from '@reduxjs/toolkit'
import { ui } from './ui'

export const game = createSlice({
  name: 'game',
  initialState: {
    username: 'player1'
  },
  reducers: {}
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
export default game;