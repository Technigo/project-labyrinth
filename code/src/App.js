/* eslint-disable linebreak-style */
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { choices } from 'reducers/choices'
import { ui } from 'reducers/ui'
import { Home } from 'pages/Home'
import styled from 'styled-components/macro'

const reducer = combineReducers({
  choices: choices.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <OuterWrapper>
      <Provider store={store}>
        <Home />
      </Provider>
    </OuterWrapper>
  )
}

const OuterWrapper = styled.section`
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`