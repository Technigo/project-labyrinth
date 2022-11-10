/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';
import { ui } from 'reducers/ui'

const items = [
  // { id: 1, text: 'Water the plants', complete: false },
  // { id: 2, text: 'Practise playing the guitar', complete: false },
  // { id: 3, text: 'Do your daily kata!', complete: false }
]

export const choices = createSlice({
  name: 'choices',
  initialState: {
    coordinates: '',
    description: '',
    items
  },
  currentUser: '',
  reducers: {
    addDescription: (state, action) => {
      state.description = action.payload;
    },
    addItems: (state, action) => {
      state.items = action.payload;
    },

    addCoordinates: (state, action) => {
      state.coordinates = action.payload;
    },
    addUserName: (state, action) => {
      state.currentUser = action.payload
      console.log('currentuser is:', state.currentUser)
    }
    // addDirection: (state, action) => {
    //   state.direction = action.pay
    // }
  }
}) // ENDING PARENTESIS

// Thunk for the initial API call
export const fetchChoices = () => {
  return (dispatch, getState) => {
    console.log('user is:', getState().choices.currentUser)
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: getState().choices.currentUser })
    })
      .then((response) => response.json())
      .then((json) => {
        // update state/store with the api data
        console.log('json:', json)
        dispatch(choices.actions.addDescription(json.description))
        dispatch(choices.actions.addItems(json.actions))
        dispatch(choices.actions.addCoordinates(json.coordinates))
        dispatch(ui.actions.setLoading(false))
        console.log('fetch done')
        console.log('description:', getState().choices.description)
      })
  }
}
// Thunk for rest of the API calls
export const fetchGame = (direction, type) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth.technigo.io/action', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        { username: getState().choices.currentUser,
          direction,
          type }
      )
    })
      .then((response) => response.json())
      .then((json) => {
        // update state/store with the api data
        console.log('json:', json)
        dispatch(choices.actions.addDescription(json.description))
        dispatch(choices.actions.addItems(json.actions))
        dispatch(choices.actions.addCoordinates(json.coordinates))
        dispatch(ui.actions.setLoading(false))
      })
  }
}
