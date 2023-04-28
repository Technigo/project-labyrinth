import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { labyrinth } from 'reducers/labyrinth';
import { Background } from 'components/global-style/BackGround';
import LabyrintActions from 'components/LabyrinthActions';
import StartPage from 'components/StartPage';
import { userhistory } from 'reducers/userhistory';

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer,
    userhistory: userhistory.reducer
  });

  const store = configureStore({ reducer });
  //
  return (
    <Provider store={store}>
      <Background />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/game" element={<LabyrintActions />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}