import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { StartPage } from "components/StartPage";
import Labyrinth from "./reducers/Labyrinth";
import { ui } from "reducers/ui";
import { Loading } from "components/Loading";

const reducer = combineReducers({
 
  labyrinth: Labyrinth.reducer,
   ui: ui.reducer,
});

const store = configureStore({ reducer });

export const App = () => (


  <Provider store={store}>
   <article>
   <Loading />
<StartPage />

   </article>
     
  </Provider>
);
