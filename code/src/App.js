import React from 'react'
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { maze } from "./reducers/maze";
import { Maze } from "./components/Maze";

const reducer = combineReducers({
  maze: maze.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <main className="app">
        <h1>Hello from App.js!</h1>
        <Maze />
      </main>
    </Provider>
  );
};


// To do
// start the game by doing a POST request to https://wk16-backend.herokuapp.com/start
// insert username in the JSON request body 
// present the respons - description and action
// respond to user action by sending a POST request to https://wk16-backend.herokuapp.com/action
// insert same username as well as type and direction in the JSON request body
// and so on
// 
