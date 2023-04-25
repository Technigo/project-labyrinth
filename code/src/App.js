import React from 'react'
import { Provider } from 'react-redux';
// import { Provider, useSelector } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import { CompassAnimation } from 'components/LoadingStates/CompassAnimation';
import { labyrinth } from './reducers/labyrinth'
import { loading } from './reducers/loading'
import Container from './components/Container.js'
// import Background from './components/Background.js'

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer,
    loading: loading.reducer
  })

  const store = configureStore({ reducer })

  // const coordinates = useSelector((state) => state.labyrinth.coordinates)
  // console.log('coordinates:', coordinates)
  // const isLoading = useSelector((state) => state.loading.isLoading)
  // console.log('isLoading:', isLoading)

  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}

/*
    if (loadingState) {
    return (
      <CompassAnimation />
    )
  }

    return (
    <Provider store={store}>
      {!isLoading && (
        <Background>
          <Container />
        </Background>
      )}
      {isLoading && <CompassAnimation />}
    </Provider>
  )

      <Provider store={store}>
      <Background>
        <Container />
        <CompassAnimation />
      </Background>
    </Provider>
*/