import { createSlice } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

export const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
  },
  reducers: {
    createUser: (store, action) => {
      const newUser = action.payload + uniqid()
      store.username = newUser
    },
  },
})
