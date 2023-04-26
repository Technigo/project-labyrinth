import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  gameStarted: false,
  response: {},
  direction: '',
  isLoading: false
}

export const labyrinth = createSlice({
  name: 'labyrinth',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
      console.log('Name', action);
    },
    setDirection: (state, action) => {
      state.direction = action.payload;
    },
    setResponse: (state, action) => {
      state.response = action.payload;
    },
    showGame: (state) => {
      state.gameStarted = true;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    restart: () => {
      return initialState;
    }
  }
});

// a thunk to handle api call

export const gameProgress = (nextMove) => {
  return (dispatch, getState) => {
    dispatch(labyrinth.actions.setLoading(true));
    // dispatch(labyrinth.actions.setResponse({}));
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: getState().labyrinth.username,
        type: 'move',
        direction: getState().labyrinth.direction
      })
    };

    console.log('nextMove')
    console.log(nextMove)
    fetch(`https://labyrinth.technigo.io/${nextMove}`, options)
      .then((response) => response.json())
      .then((json) => {
        console.log('json')
        console.log(json)
        dispatch(labyrinth.actions.setResponse(json));
        dispatch(labyrinth.actions.setLoading(false));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// fetch(`https://v2.jokeapi.dev/joke/${getState().room.coordinates}`)

// const obj = {name: "John", age: 30, city: "New York"};
// const myJSON = JSON.stringify(obj);

/* const submitHandler = (message) => {
    fetch('https://labyrinth.technigo.io/start', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => response.json()).then((data) => {
      setThoughtList((pv) => [data, ...pv])
    })
} */