import { createSlice } from '@reduxjs/toolkit'

export const games  = createSlice({
    name: 'games',
    initialState: {
        coordinates: null,
        description: null,
        // actions:[],
        username: ''
    },
    reducers: {
        setUserName: (store, action) => {
            store.username = action.payload
        },
        setDescription: (store, action) => {
            store.description = action.payload
        },
    }
})

export const createNewPlayer = (username) => {
    return (dispatch) => {
        fetch('https://wk16-backend.herokuapp.com/start', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: `${username}`
            }),
        })
        .then(res => res.json())
        .then(data => dispatch(games.actions.setUserName(data)))
    }
}

export const CarryOnGame = (direction, username) => {
    return (dispatch) => {
        fetch('https://wk16-backend.herokuapp.com/action', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username: `${username}`,
                type: 'move',
                direction: `${direction}`
            }),
        })
        .then(res => res.json())
//        .then(data => console.log(data))
        .then(data => dispatch(games.actions.setDescription(data)))
    }
}

//export default games