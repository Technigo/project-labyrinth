import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loading } from 'reducers/loading';
import { maingame } from 'reducers/maingame';
import { StartPage } from 'components/StartPage';
import { OuterWrapper, InnerWrapper } from 'GlobalStyles';
// import { LoadingPage } from 'components/LoadingPage';
// import { GamePage } from 'components/GamePage';

export const App = () => {
  const reducer = combineReducers({
    maingame: maingame.reducer,
    loading: loading.reducer
  });
  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <OuterWrapper>
        <InnerWrapper>
          <StartPage />
        </InnerWrapper>
      </OuterWrapper>
    </Provider>
  )
}
