import { createSlice } from '@reduxjs/toolkit'

const game = createSlice({
    name: 'game', 
    initialState: {
        player: null,
        description: null
    },
    reducers: {
        setPlayer: (store, action) => {
            store.player = action.payload
        },
        setDescription: (store, action) => {
            store.description = action.payload
        }

    }

})  

export const generatePlayerName = () => {
const options =  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    
        username: 'technigoplayer91'
    })
}

return (dispatch) => {
fetch('https://labyrinth-technigo.herokuapp.com/start', options)
.then((res) => res.json())
        .then(player => dispatch(game.actions.setPlayer(player)))
            
}
}

export default game

// export const fetchTodos = () => {
//     return (dispatch) => {
//         dispatch(ui.actions.setLoading(true))
//         fetch('https://jsonplaceholder.typicode.com/todos')
//         .then((res) => res.json())
//         .then((json) => {
//             dispatch(todos.actions.setTodos(json))
//             dispatch(ui.actions.setLoading(false))
//         })
//     }
// }