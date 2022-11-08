import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ui from 'reducers/ui';

/* import Loading from 'components/Loading'; */
import labyrinth from './reducers/labyrinth';
import StartScreenCA from './components/StartScreenCA';

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer,
    ui: ui.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <StartScreenCA />
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

