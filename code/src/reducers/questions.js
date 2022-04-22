import { createSlice } from "@reduxjs/toolkit";
import loading from './loading'

const restart = { username: '' }  

const questions = createSlice({
  name: 'questions',
  initialState: {
    username: '',
    gamedata: null,
    direction: '',
  },

  reducers: {
    setUsername : (store, action) => {
      store.username = action.payload;
    },
    setGamedata: (store, action) => {
      store.gamedata = action.payload;
    },
    resetGame: () => {
      return restart;
    },
  }
})

export const generateGamedata = () => {  

  return (dispatch, getState) => {
    dispatch(loading.actions.setLoading(true))
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      username: getState().questions.username,
      })
    }
    fetch('https://labyrinth-technigo.herokuapp.com/start', options)
      .then(res => res.json())
      .then((data) => dispatch(questions.actions.setGamedata(data)),
      setTimeout(() => dispatch(loading.actions.setLoading(false)), 1000)
      )
  }
}

export const playGame = (type, direction) => {  
  
  return (dispatch, getState) => {
    
    dispatch(loading.actions.setLoading(true))
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        username: getState().questions.username,
        type,
        direction,
        })
      }
      fetch('https://labyrinth-technigo.herokuapp.com/action', options)
      .then(res => res.json())
      .then((data) => dispatch(questions.actions.setGamedata(data)),
      setTimeout(() => dispatch(loading.actions.setLoading(false)), 1000)
      )
  }
}

export default questions