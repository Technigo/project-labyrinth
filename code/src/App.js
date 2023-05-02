import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { maze } from 'reducers/maze';
import { ui } from 'reducers/ui';
import { userhistory } from 'reducers/userhistory';
import { WelcomePage } from 'components/WelcomePage';
import { MazeActions } from 'components/MazeActions';

export const App = () => {
  const reducer = combineReducers({
    maze: maze.reducer,
    ui: ui.reducer,
    userhistory: userhistory.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/game" element={<MazeActions />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
