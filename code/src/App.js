import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import MainPage from 'components/MainPage.js'
import Footer from 'components/Footer.js'
import { game } from 'reducers/game.js'
import { loading } from 'reducers/loading.js'
import { OuterWrapper, InnerWrapper } from 'components/GlobalStyles'

export const App = () => {
  const reducer = combineReducers({

    game: game.reducer,
    loading: loading.reducer

  })

  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <OuterWrapper>
        <InnerWrapper>
          <MainPage />
        </InnerWrapper>
      </OuterWrapper>
      <Footer />
    </Provider>
  )
}
