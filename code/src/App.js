import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import Loading from 'components/Loading';
import { labyrinth } from 'reducers/labyrinth';
import ui from 'reducers/ui';

import { SelectPage } from 'components/SelectPage';
import { PageWrapper } from 'Globalstyles';

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer,
    ui: ui.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <PageWrapper>
        <SelectPage />
        {/* <Loading /> */}
      </PageWrapper>
    </Provider>
  )
}

// NINAS APP.js,Header fortsätter vidare medan SelectStart
// bestämmer om det är StartState eller TodoList som visas.
// return (
//   <Provider store={store}>
//     <AppWrapper>
//       <Header />
//       <SelectStart />
//     </AppWrapper>
//     <Footer />
//   </Provider>
// );
// }

