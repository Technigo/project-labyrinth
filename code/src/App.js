import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

// Components
import { Loading } from './components/Loading';
import { Labyrinth } from './components/Labyrinth';
import { DirectionButtons } from './components/DirectionButtons';

// Reducers
import { labyrinth } from './reducers/labyrinth';
import { ui } from './reducers/ui';

const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
  ui: ui.reducer,
});

const store = configureStore({ reducer });
// ----------------------------------------------------------------

export const App = ({ coordinates }) => {
  return (
    <Container coordinates='1,2'>
      <Provider store={store}>
        <Loading />
        <Labyrinth />
        <DirectionButtons />
      </Provider>
    </Container>
  );
};

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background: ${(props) =>
    props.coordinates === '0,0'
      ? `#fff`
      : props.coordinates === '0,1'
      ? `#383838`
      : props.coordinates === '0,2'
      ? `#585858`
      : props.coordinates === '0,3'
      ? `pink`
      : props.coordinates === '1,0'
      ? `#f0b837`
      : props.coordinates === '1,1'
      ? `#f5d282`
      : `#fff`
    };
`;