import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  username: '',
  history: [],
  gameStatus: {}
}

export const games = createSlice({
  name: 'games',
  initialState, 
  // username: null,
    // game: null
  
  reducers: {
    setUserName: (store, action) => {
      store.username = action.payload;
    },
    setGame: (store, action) => {
      store.history = [...store.history, store.gameStatus]
      store.game = action.payload;
    },
    nextStep: (store, action) => {
      store.username = action.payload
    }
  }
})

export const createPlayer = (username) => {
  return (dispatch) => {
    fetch('https://wk16-backend.herokuapp.com/start', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'username': `${username}`})
    })
    .then((res) => res.json())
    .then((game) => dispatch(games.actions.setGame(game)))
  }
  }

  export const continueGame = (step, username) => {
    return (dispatch) => {
      fetch('https://wk16-backend.herokuapp.com/action', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: `${username}`, type: 'move', direction: `${step}`})
      })
      .then((res) => res.json())
      .then((game) => dispatch(games.actions.setGame(game)))
    }
    }




/*export const generateQuestion = (direction) => {
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

export default games*/
