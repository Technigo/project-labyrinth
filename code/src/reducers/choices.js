/* eslint-disable linebreak-style */
import { createSlice } from '@reduxjs/toolkit';
import { ui } from 'reducers/ui'

export const choices = createSlice({
  name: 'choices',
  initialState: {
    coordinates: '',
    description: '',
    items: []
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
  }
})

// Thunk for actions to be done around API calls, for when the user makes a choice in the game
export const fetchGame = (stage, direction, type) => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch(`https://labyrinth.technigo.io/${stage}`, {
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
        dispatch(choices.actions.addDescription(json.description))
        dispatch(choices.actions.addItems(json.actions))
        dispatch(choices.actions.addCoordinates(json.coordinates))
        dispatch(ui.actions.setLoading(false))
      })
  }
}
