import { createSlice } from '@reduxjs/toolkit'

const game = createSlice({
    name: 'game',
    initialState: {
        username: '',
        question: ''
    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload
        },
        setQuestion: (store, action) => {
            store.question = action.payload
        },

    }
})

// export const newPlayer = (username) => {
//     return (dispatch) => {
//         fetch('https://wk16-backend.herokuapp.com/start', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ "username": `${username}` })
//         })
//         .then((res) => res.json())
//         .then((json) => {
//             dispatch(game.actions.set?(json))//set vad?
//         })
//     }
// }
export default game