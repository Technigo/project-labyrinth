import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";
import { gameSteps } from "reducers/gameSteps";
import { loading } from "reducers/loading";
import { screen } from "reducers/screen";

// A configureStore component which combine the reducers and apply middleware to be able to return the store.
export const configureStore = (preloadedState) => {
  const composedEnhancers =
    (process.env.NODE_ENV !== "production" &&
      typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  const store = createStore(
    combineReducers({
      gameSteps: gameSteps.reducer,
      loading: loading.reducer,
      screen: screen.reducer,
    }),
    preloadedState,
    composedEnhancers(applyMiddleware(thunkMiddleware))
  );

  return store;
};
