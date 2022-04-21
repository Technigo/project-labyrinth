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
          store.username = action.payload;
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
            // dispatch(questions.actions.setDirection()))
                     
        // .then(data => console.log(data,'FUNKAR')))
        // body: direction funkar bara vid hårdkodat, hur uppdater. uppdateringen sker väl i initialstate?
                    
      
    }

    
}



export default questions