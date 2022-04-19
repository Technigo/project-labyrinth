import { createSlice } from "@reduxjs/toolkit";

const questions = createSlice({
    name: 'questions',
    initialState: {
        username: '',
        gamedata: null,
        history: [],
        direction: ''
    },
    reducers: {
      setUsername : (store, action) => {
          store.username = action.payload
      },
      setGamedata: (store, action) => {
          store.gamedata = action.payload;
      },
      setHistory: (store, action) => {
        if (store.gamedata) {
          store.history = [...store.history, action.payload]
        }
      },
      setDirection: (store, action) => {
        store.direction = action.payload
      }
    }
})

export const generateGamedata = (username) => {  

    return (dispatch) => {
    
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
             username: 'TechnigoPlay',
        
            })
          }
        fetch('https://labyrinth-technigo.herokuapp.com/start', options)
        .then(res => res.json())
        .then(data => dispatch(questions.actions.setGamedata(data)))
    }


}

export const playGame = (username, direction) => {  

    return (dispatch) => {
    
        const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
             username: username,
             type: 'move',
             direction: direction
            })
          }
        fetch('https://labyrinth-technigo.herokuapp.com/action', options)
        .then(res => res.json())
        .then(data => 
            // dispatch(questions.actions.setGamedata(data)),
            dispatch(questions.actions.setDirection(direction)))
            // dispatch(questions.actions.setHistory(data)))
          
    }

    
}

// https://labyrinth-technigo.herokuapp.com/action

export default questions