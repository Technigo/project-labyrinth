import { createSlice } from '@reduxjs/toolkit';

import { ui } from 'reducers/ui';

const initialState = {
  username: '',
  gameStatus: {},
  history: []
};

export const gamestate = createSlice({
  name: 'gamestate',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      // get entered username as payload and set it here: gamestate will now have as 
      // username property the name entered by the user
      state.username = action.payload;
    },
    setGameStatus: (state, action) => {
      // received as payload the object we got as response, containing all data: coordinates, description and actions
      const currentGameState = action.payload;
      state.history = [...state.history, state.gameStatus];
      state.gameStatus = currentGameState;
    },
    historyGoBack: (state, action) => {
      // this reducer allows the user to go back to their previous move. We have an empty history array property in our
      // initial state which will be the one that stores the different moves the user takes. The first thing this reducer
      // does it to set the current gameStatus to the latest item in the history array (which will be the user's previous
      // move), and then it also removes the last item in the history array since that one should no longer be part of the
      // recorded moves.
      if (state.history.length > 0) {
        state.gameStatus = state.history[state.history.length -1];
        state.history = state.history.slice(0, state.history.length -1);
      }
    }
  }
});

export const fetchInitialInstructions = (globalUsername) => {
  // function that will do the initial POST request with object including username, so we can
  // get initial set of instructions back in the response
  // this set of instructions comes in an object form, so we now assign this object we got in the
  // response as the new gameStatus on our global state. So now instead of having an empty gameStatus
  // we'll have a gameStatus with object with instructions
  // This thunk also toggles the loading state so it shows a loading message while the fetch is being done
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: globalUsername }),
    })
      .then(response => response.json())
      .then(json => {
        dispatch(gamestate.actions.setGameStatus(json));
        dispatch(ui.actions.setLoading(false))
      })
  }
};

export const fetchSecondaryInstructions = (globalUsername, direction) => {
  // function that does the secondary fetches to get the coming instruction for the user until it reaches
  // an end. We send a POST request with an object containing the username; type="move" and the direction the
  // user chose (we got that data sent in as props). Then the json object we got as response with all 
  // instructions is set as the new gamestate using the setGameStatus reducer
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch('https://wk16-backend.herokuapp.com/action', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: globalUsername, type: "move", direction: direction }),
    })
      .then(response => response.json())
      .then(json => {
        dispatch(gamestate.actions.setGameStatus(json));
        dispatch(ui.actions.setLoading(false))
      })
  }
};
