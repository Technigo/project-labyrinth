/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';

const items = [
  // { id: 1, text: 'Water the plants', complete: false },
  // { id: 2, text: 'Practise playing the guitar', complete: false },
  // { id: 3, text: 'Do your daily kata!', complete: false }
]

export const choices = createSlice({
  name: 'actions',
  initialState: {
    items
  },
  currentUser: '',
  reducers: {
    addDescription: (state, action) => {
      state.items.push({
        description: '',
        actions: [{
          type: action.payload,
          direction: action.payload,
          description: action.payload
        }]
      })
    },
    addUserName: (state, action) => {
      state.currentUser = action.payload
      console.log('currentuser is:', state.currentUser)
    }
    /* ,
    selectDirection: (state, action) => {
      state.items
    }
*/
  }
}) // ENDING PARENTESIS

export const Thunk = (currentUser) => {
  return (dispatch) => {
    dispatch(choices.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: { currentUser } })
    })
      .then((response) => response.json())
      .then((json) => {
        // update state/store with the api data
        dispatch(choices.actions.addDescription(json))
        dispatch(choices.actions.setLoading(false))
      })
  }
}