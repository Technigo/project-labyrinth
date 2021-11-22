import React from 'react'
import { Provider } from 'react-redux'
import { LoadingIndicator } from "./components/LoadingIndicator";
import { FirstPage } from 'components/FirstPage';

// import Start from './pages/Start'
// import QuestionPage from './pages/QuestionPage'
// import Summary from './pages/Summary'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import { quiz } from 'reducers/quiz'

const reducer = combineReducers({
  // quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <>
    <Provider store={store}>
      <main>
      <h1>Hello Labyrinth Game, what's your name?</h1>
        <FirstPage />
        {/* <LoadingIndicator /> */}
      </main>
      
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Start />} />
          <Route path="/questions" element={<QuestionPage />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </BrowserRouter> */}
    </Provider>
    </>
  );
};