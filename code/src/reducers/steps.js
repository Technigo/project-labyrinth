import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: ''
}

const steps = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload
    }
  }
})

export const fetchStart = () => {
  return () => {}
}

export default steps
