import { createSlice } from '@reduxjs/toolkit'

 const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    userName: "",
    type: "",
    direction: ""
  },
  reducers: {
    addUserName:(store, action)=>{
      store.userName = action.payload
    }

  }

})

export default labyrinth