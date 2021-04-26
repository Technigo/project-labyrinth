import { createSlice } from '@reduxjs/toolkit'

const game = createSlice({
  name: 'game',
  initialState: {
    userName: null
  },
  reducers: {
    setUserName: (store, action) => {
      store.userName = action.payload
    }
  }
})

export const startGame = () => {
  return (dispatch, getState) => {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: getState().game.userName })
    }
    fetch('https://wk16-backend.herokuapp.com/start', config)
      .then(res => res.json())
      .then(json => console.log(json))
  }
}
export default game