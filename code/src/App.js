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

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background: ${({ coordinates }) =>
    coordinates === '0,0' // Set background color depending on coordinates
      ? `#f5f5f5`
      : coordinates === '0,1'
      ? `#383838`
      : coordinates === '0,2'
      ? `#828282`
      : coordinates === '0,3'
      ? `pink`
      : coordinates === '1,0'
      ? `#f0b837`
      : coordinates === '1,1'
      ? `#f5d282`
      : `#fff`};
  color: ${({ coordinates }) =>
    coordinates === '0,1' // Set text color depending on coordinates,
      ? //to match the background color
        `#fff`
      : coordinates === '0,2'
      ? `#fff`
      : `#000`};
`;
