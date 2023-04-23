import React from 'react'
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { labyrinth } from './reducers/labyrinth'
import { loading } from './reducers/loading'
// import Spinner from './components/LoadingStates/Spinner'
// import CompassAnimation from './components/LoadingStates/CompassAnimation'
import StartPage from './components/StartPage.js'
import LabyrinthPage from './components/LabyrinthPage/LabyrinthPage.js'

// https://lottiefiles.com/79847-compass-magnetism

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer,
    loading: loading.reducer
  })

  const store = configureStore({ reducer })

  const coordinates = '';

  return (
    <Provider store={store}>
      <div className="container">
        {coordinates === '' && <StartPage />}
        {coordinates !== '' && <LabyrinthPage />}
      </div>
    </Provider>
  )
}

//         <Spinner />

/*
  return (
    <Provider store={store}>
      <div className="container">
        {coordinates === '' && <StartPage />}
        {coordinates !== '' && <LabyrinthPage />}
      </div>
    </Provider>
  )
*/