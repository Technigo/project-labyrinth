import { createSlice } from '@reduxjs/toolkit'



export const game = createSlice({
  name: 'game',
  initialState: {
    userName: null
  },
  reducers: {
    setUserName: (store, action) => {
      store.userName = action.payload
    }
  }
})