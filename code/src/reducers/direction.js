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