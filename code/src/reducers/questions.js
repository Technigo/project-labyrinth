import { createSlice } from "@reduxjs/toolkit";

const restart = { username: '' }  //FÖR ATT NOLLSTÄLLA

const questions = createSlice({
    name: 'questions',
    initialState: {
        username: '',
        gamedata: null,
        // history: [], //ANVÄNDS EJ
        direction: ''
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
        .then(data => dispatch(questions.actions.setGamedata(data)))
          
    }
}

export const playGame = (type, direction) => {  

    return (dispatch, getState) => {
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
        .then(data => 
            dispatch(questions.actions.setGamedata(data)))
    }
}



export default questions