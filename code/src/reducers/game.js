/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    description: '',
    response: {},
    path: []
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
      console.log('Name', action);
    },
    setResponse: (store, action) => {
      store.response = action.payload;
    }
  }
});

export default game;

export const startGame = () => {
  //  const dispatch = useDispatch();
  return (dispatch, getState) => {
    const uniqueUsername = uuidv4() + '/' + getState().game.username;
    console.log(uniqueUsername);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: uniqueUsername
      })
    };

    fetch('https://labyrinth.technigo.io/start', options)
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
