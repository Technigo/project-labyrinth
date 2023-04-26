import { createSlice } from '@reduxjs/toolkit'

export const game = createSlice({
  name: 'game',
  initialState: { username: null, currentLocation: [], loading: false },
  reducers: {
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload
    }
  }
})

export const postUsername = () => {
  return (dispatch) => {
    /* dispatch(ui.actions.setLoading(true)) */
    fetch('labyrinth.technigo.io/start', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: 'TEST123459'
      })
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setCurrentLocation(json.coordinates));
      })
  }
}