import React from 'react'
import { Provider } from 'react-redux';
// import { Provider, useSelector } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import { CompassAnimation } from 'components/LoadingStates/CompassAnimation';
import { labyrinth } from './reducers/labyrinth'
import { loading } from './reducers/loading'
import Container from './components/Container.js'

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer,
    loading: loading.reducer
  })

  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}

//         <Spinner />

// const coordinates = '';

/*
  return (
    <Provider store={store}>
      <div className="container">
        {coordinates === '' && <StartPage />}
        {coordinates !== '' && <LabyrinthPage />}
      </div>
    </Provider>
  )

    if (loadingState) {
    return (
      <CompassAnimation />
    )
  }

*/