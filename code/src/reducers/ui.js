import { createSlice } from '@reduxjs/toolkit'

const ui = createSlice({
  name: 'ui',
  initialState: {
    Loading: false
  },
  reducers: {
    setLoading: (store, action) => {
      store.Loading = action.payload
    }
  }
})

export default ui
