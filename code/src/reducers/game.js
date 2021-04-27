import { createSlice } from '@reduxjs/toolkit'

import startUrl from '../reusables/urls'

const game = createSlice({
  name: 'game',
  initialState: {
    userName: null
  },
  reducers: {
    setUserName: (store, action) => {
      store.userName = action.payload
    }
    // setDirections: ()

  }
})

export const generateGame = () => {
  return (dispatch) => {
    fetch(startUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"username": `${userName}`})
    })
      .then(res => res.json())
      .then(direction => )
  }
}



export default game