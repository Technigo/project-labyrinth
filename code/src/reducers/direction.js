import { createSlice } from '@reduxjs/toolkit'

const direction = createSlice({
  name: 'direction',
  initialState: {
    username: null,
    direction: null,
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    },
    setDirection: (store, action) => {
      store.direction = action.payload
    },
  }
})

export const generateGame = () => {
    return (dispatch, getState) => {
        fetch('https://wk16-backend.herokuapp.com/start', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({ username : getState().direction.username })
        })
        .then(res => res.json())
        // .then(data => dispatch(direction.actions.setUsername(data)))
        .then(data => console.log(data))
      } 
  }

// Thunk Sample Code 
// export const fetchTodos = () => {
//     return (dispatch) => {
//       dispatch(ui.actions.setLoading(true))
//       fetch('https://jsonplaceholder.typicode.com/users/1/todos')
//         .then((res) => res.json())
//         .then((json) => {
//           dispatch(todos.actions.setTodos(json))
//           dispatch(ui.actions.setLoading(false))
//         })
//     }
//   }

export default direction