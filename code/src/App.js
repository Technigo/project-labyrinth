import React, { useState } from 'react';
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
  // Keep record of current coordinates for styling props
  const [currentCoordinates, setCurrentCoordinates] = useState('');

  return (
    <Container coordinates={currentCoordinates}>
      <Provider store={store}>
        <Loading />
        <Labyrinth setCurrentCoordinates={setCurrentCoordinates} />
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
