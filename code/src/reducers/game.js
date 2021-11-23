import { createSlice } from '@reduxjs/toolkit';

import { spinner } from './spinner';

export const game = createSlice({
  name: 'game',
  initialState: {
    username: '',
    // Jag la till allt som fanns i console-loggen men vet inte om det är rätt..Får det inte att funka
    gameObject: {
      coordinates: '',
      description: '',
      actions: [],
    },
  },
  reducers: {
    setGameObject: (state, action) => {
      state.gameObject = action.payload;
    },
    setUserName: (state, action) => {
      state.username = action.payload;
      // const newUser = {
      //   text: action.payload,
      // }
      // state.startGame = [...state.startGame, newUser]
    },
  },
});

//Fetchen + spinner-setLoading funkar och syns i console-log/redux devtools, men jag har inte lyckats displaya varken spinnern eller resultaten från fetchen
export const fetchGame = (userName) => {
  return (dispatch) => {
    dispatch(spinner.actions.setLoading(true));

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: userName }),
    };
    //Jag funderade på om man var tvungen att lägga till description här ovan för att kunna displaya det i StartPage..
    fetch('https://wk16-backend.herokuapp.com/start', options)
      .then((res) => res.json())
      .then((json) => {
        dispatch(game.actions.setGameObject(json));
        dispatch(spinner.actions.setLoading(false));
      });
  };

  // export const fetchGameDescription = () => {
  //   return (dispatch) => {
  //     fetch('https://wk16-backend.herokuapp.com/description', {
  //       method: 'POST'
  //     })
  //   }
  // }
};
