import { configureStore, combineReducers } from "@reduxjs/toolkit";

import gameFetch from "./gameSlice";

const reducer = combineReducers({
  gameFetch: gameFetch.reducer,
});

const store = configureStore({ reducer });

export { store };
