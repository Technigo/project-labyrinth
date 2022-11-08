import { createSlice } from '@reduxjs/toolkit';
import ui from './ui';

// should we change labyrinth to game? easy to misspell labyrinth
const labyrinth = createSlice({
  name: 'labyrinth',
  initialState: {
    username: null,
    position: null,
    history: []
  },

  reducers: {
    setName: (store, action) => {
      store.username = action.payload;
    },
    setQuote: (store, action) => {
      store.quote = action.payload;
    }
  }
});

export const generateQuote = () => {
  return (dispatch, getState) => {
    fetch(`https://api.quotable.io/random?author=${getState().labyrinth.author}`)
      .then((response) => response.json())
      .then((quote) => console.log(quote));
  }
}

// Vårt project reducers
//   reducers: {
//     setUserName: (store, action) => {
//       store.username = action.payload;
//     },
//     setPosition: (store, action) => {
//       store.position = action.payload;
//     }
//     // restartGame: () => {
//     //   return initialState
//     // }
//   }
// });

export const fetchLabyrinth = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://labyrinth-technigo.herokuapp.com/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().labyrinth.username
      })
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(labyrinth.actions.setPosition(data))
        dispatch(ui.actions.setLoading(false))
      })
  }
}

// Nina andra hämtning av data.
// export const fetchMoreData = ({ move = 'move', direction }) => {
//   return (dispatch, getState) => {
//     dispatch(ui.actions.setLoading(true))
//     fetch('https://labyrinth-technigo.herokuapp.com/action', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         username: getState().labyrinth.username,
//         type: move,
//         direction
//       })
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         dispatch(labyrinth.actions.setPosition(data))
//         dispatch(ui.actions.setLoading(false))
//       })
//   }
// }

export default labyrinth;

