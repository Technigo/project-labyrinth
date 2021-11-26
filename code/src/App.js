import React from "react";
import { Provider } from "react-redux";
import { Main } from "components/Main";
import { configureStore } from "configureStore/configureStore";

// set up the local storage with the information from configureStore.
const persistedStateJSON = localStorage.getItem("ReduxState");
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

const store = configureStore(persistedState);

store.subscribe(() => {
  localStorage.setItem("ReduxState", JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
