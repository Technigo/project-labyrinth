import { createSlice } from "@reduxjs/toolkit";

const game = createSlice({
    name: "game",
    initialState: {
        username: null,
        // position: []
    },
    reducers: {

         setUsername: (state, action) => {
            state.username = action.payload
         }
    }
})


export const fetchData = () => {
    
    return (getState) => {
       
        fetch('https://labyrinth-technigo.herokuapp.com/start', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username: getState().game.username
                        })
                    })
            .then(res => res.json())
            .then(data => console.log(data))
    }
}


export default game