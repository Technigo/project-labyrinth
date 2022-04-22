import { createSlice } from "@reduxjs/toolkit";
import loading from './loading'

const restart = { username: '' }  //FÖR ATT NOLLSTÄLLA

const questions = createSlice({
    name: 'questions',
    initialState: {
        username: '',
        gamedata: null,
        // history: [], //ANVÄNDS EJ
        direction: '',
        // isLoading: false
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
    //   setLoading : (store, action) => {
    //     store.isLoading = action.payload;
    // },
          
      // setHistory: (store, action) => {  //ANVÄNDS EJ
      //   if (store.gamedata) {
      //     store.history = [...store.history, action.payload]
      //   }
      // },
      // setDirection: (store, action) => {
      //   store.direction = action.payload
      // }
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