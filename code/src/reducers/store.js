import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    username: null,
    currentDirection: [],
    loading: false
}

export const game = createSlice({
    name:'game', // do we need to have the same name ?
    initialState,
    reducers: {
        addUserName: (store, actions) => {
            store.username = actions.payload
        },
        setCurrentDirection: (store, actions) => {
            store.currentDirection = actions.payload
        },
        setLoading: (store, actions) => {
            store.loading = actions.payload
        }
    }
})
export const fetchTheGame = () => {
    
    return (getState, dispatch) => {
      
    /*    const store = getState()
       const username = {
        username: store.game.username
       } */
       const option = {
        method: 'POST',
        headers:{ 
            'Content-type': 'application/json' 
        },
        body: JSON.stringify({
            username: 'technigoplayer'}),
       }
       fetch(`https://labyrinth.technigo.io/start`, option)
       
       /* {
        method: 'POST',
        headers:  {'Content-Type': 'application/json'},
        body: JSON.stringify(username),
       } */
       .then((resp) => resp.json())
       .then((json) => { dispatch(game.actions.setCurrentDirection(json))})
       .then((startGame) => console.log(startGame))
    }
}

export const contiuneGame = (direction) => {
    return (dispatch, getState) => {
        dispatch(game.actions.setLoading(true))

        const option = {
            method: 'POST',
            headers:{ 'Content-type': 'application/json' },
            body: JSON.stringify({
            username: "technigoplayer", /* look at user name setup  */
            type: 'move',
            direction: direction
        })
           }
    fetch('https://labyrinth.technigo.io/action', option)
    .then(res => res.json())
    .then(json => {
        dispatch(game.actions.setCurrentDirection(json))
    })
    .then((startGame) => console.log(startGame))
    }
}


// fetch link https://labyrinth.technigo.io/start
