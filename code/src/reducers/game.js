import { createSlice } from '@reduxjs/toolkit'

import { spinner } from './spinner'

export const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    // Jag la till allt som fanns i console-loggen men vet inte om det är rätt..Får det inte att funka
    gameArray: {
      coordinates: '',
      description: '',
      actions: [],
    },
    // startGame: [],
  },
  reducers: {
    setStartGame: (state, action) => {
      state.gameArray = action.payload
    },
  },
  // setUserName: (state, action) => {
  //   const newUser = {
  //     text: action.payload,
  //   }
  //   state.startGame = [...state.startGame, newUser]
  // },
})

//Tänker att en annan reducer kommer kunna vara nåt i stil med:
//  setUsername: (store, action) => {
//  store.username = action.payload
// },
// och att man ändrar i initialState till userName: null

//Fetchen + spinner-setLoading funkar och syns i console-log/redux devtools, men jag har inte lyckats displaya varken spinnern eller resultaten från fetchen
export const fetchStartGame = () => {
  return (dispatch) => {
    dispatch(spinner.actions.setLoading(true))

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: 'JoLo', description: '' }),
    }
    //Jag funderade på om man var tvungen att lägga till description här ovan för att kunna displaya det i StartPage..
    fetch('https://wk16-backend.herokuapp.com/start', options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setStartGame(json))
        dispatch(spinner.actions.setLoading(false))
      })
  }

  // export const fetchGameDescription = () => {
  //   return (dispatch) => {
  //     fetch('https://wk16-backend.herokuapp.com/description', {
  //       method: 'POST'
  //     })
  //   }
  // }
}
