import { createSlice } from '@reduxjs/toolkit'


 const games = createSlice({
  name: 'games',
  initialState: {
    username: null

  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload 
    }

  }
}) 

export default games