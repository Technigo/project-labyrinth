import { createSlice} from '@reduxjs/toolkit'

const games = createSlice({
  name: 'games',
  initialState: {
    userName: null,
    game: null
  },
  reducers: {
    setUserName: (store, action) => {
      store.userName = action.payload;
    },
    setGame: (store, action) => {
      store.game = action.payload
    }
  }
})

export const generateQuestion = (direction) => {
  return (dispatch, getState) => {
    if (direction) {
      // fetch(`http://api.quotable.io/random?author=${getState().quotes.author}&tags=${tag}`)
      fetch(`https://wk16-backend.herokuapp.com/start/userName=${getState().games.userName}`)
        .then((res) => res.json())
        .then((game) => dispatch(games.actions.setGame(game)))
  } else {
    fetch(`https://wk16-backend.herokuapp.com/action/userName=${getState().games.userName}`)
      .then((res) => res.json())
      .then((game) => dispatch(games.actions.setGame(game)))
    }
  }
}

export default games
