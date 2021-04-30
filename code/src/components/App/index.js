import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import Main from 'components/Main';
import GlobalStyle from './style';

export default () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Main />
    </Provider>
  );
};
