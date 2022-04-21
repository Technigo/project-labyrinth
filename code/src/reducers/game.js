import { createSlice } from "@reduxjs/toolkit";

const game = createSlice({
  name: "game",
  initialState: {
    username: "",
    gameData: null,
    history: [],
    direction: "",
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },

    setGameData: (store, action) => {
      store.gameData = action.payload;
    },

    // setPreviousDescription: (store, action) => {
    //   if (store.history.length) {
    //     store.description = store.history[store.history.length - 1];

    //     // V1 immutable
    //     // const editedHistory = store.history.slice(0, store.history.length - 1);
    //     // store.history = editedHistory;

    //     // v2 mutable
    //     store.history.splice(store.history.length - 1, 1);
    //   }
    // },
    setHistory: (store, action) => {
      if (store.gameData) {
        store.history = [...store.history, action.payload];
      }
    },
    setDirection: (store, action) => {
      store.direction = action.payload;
    },
  },
});

// export const generateQuote = (tag) => {
//   return (dispatch, getState) => {
//     if (tag) {
//       fetch(
//         `https://api.quotable.io/random?author=${
//           getState().quotes.author
//         }&tags=${tag}`
//       )
//         .then((res) => res.json())
//         .then((quote) => dispatch(quotes.actions.setQuote(quote)));
//     } else {
//       fetch(`https://api.quotable.io/random?author=${getState().quotes.author}`)
//         .then((res) => res.json())
//         .then((quote) => dispatch(quotes.actions.setQuote(quote)));
//     }
//   };
// };

export const generateGameData = () => {
  return (dispatch, getState) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: getState().game.username,
      }),
    };
    fetch(`https://labyrinth-technigo.herokuapp.com/start`, options)
      .then((res) => res.json())
      .then((data) => dispatch(game.actions.setGameData(data)));
  };
};

export const playGame = (type, direction) => {
  return (dispatch, getState) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: getState().game.username,
        type,
        direction,
      }),
    };
    fetch("https://labyrinth-technigo.herokuapp.com/action", options)
      .then((res) => res.json())
      .then((data) => dispatch(game.actions.setGameData(data)));
  };
};

export default game;
