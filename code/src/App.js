import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

// Components
import { Loading } from './components/Loading';
import { Labyrinth } from './components/Labyrinth';

// Reducers
import { labyrinth } from './reducers/labyrinth';
import { ui } from './reducers/ui';

// ----------------------------------------------------------------

const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
  ui: ui.reducer,
});

const store = configureStore({ reducer });

// ----------------------------------------------------------------

export const App = () => {
  return (
    <Container>
      <Provider store={store}>
        <Loading />
        <Labyrinth />
      </Provider>
    </Container>
  );
};

// ----------------------------------------------------------------

const Container = styled.main`
  margin: 0%;
  width: 100%;
  height: 100%;
  background: #000;
`;
