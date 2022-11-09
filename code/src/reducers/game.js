/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { createSlice } from '@reduxjs/toolkit';

const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    gameStarted: false,
    gameOver: false,
    description: '',
    response: {},
    direction: ''
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
      console.log('Name', action);
    },
    setDirection: (store, action) => {
      store.direction = action.payload;
    },
    setResponse: (store, action) => {
      store.response = action.payload;
    },
    showGame: (state) => {
      state.gameStarted = true;
    }
  }
});

export default game;

export const startGame = (nextMove) => {
  //  const dispatch = useDispatch();
  return (dispatch, getState) => {
    // const uniqueUsername = uuidv4() + '/' + getState().game.username;
    // const direction = getState().direction;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().game.username,
        type: 'move',
        direction: getState().game.direction
      })
    };

    fetch(`https://labyrinth.technigo.io/${nextMove}`, options)
      .then((response) =>
        response
          .json()
          .then((json) =>
            dispatch(game.actions.setResponse(json), console.log(json))
          )
      )
      .catch((error) => {
        console.error(error);
      });
  };
};

// export const asyncStartGame = () => {
//   return async (dispatch, getState) => {
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         username: getState().game.username
//       })
//     };

//     try {
//       const response = await fetch(
//         'https://labyrinth.technigo.io/start',
//         options
//       );
//       const json = await response.json();
//       console.log('test2', json);
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };
