import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { gamestate } from 'reducers/gamestate';
import { ui } from 'reducers/ui';

import { Home } from 'pages/Home';

const reducer = combineReducers({
  gamestate: gamestate.reducer,
  ui: ui.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

// Flow: First page rendered is the one for creating a username, move on the the CreateUsernamePage component
// and there it will have instruction to move on to the next Page accordingly
// Loading page will be shown when the isLoading global state is true: this is mainly
// when fetches are being performed
// Flow: Home > CreateUsernamePage > StartGamePage > InGamePage
