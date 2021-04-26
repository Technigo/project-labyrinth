import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';

import Main from 'components/Main';

export default () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
