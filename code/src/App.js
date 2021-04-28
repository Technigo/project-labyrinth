import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components/macro';

import labyrinth from './reducers/labyrinth'
import Game from './components/Game';

const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
});

const store = configureStore({reducer});

const Wrapper = styled.div`
width: 100%;
min-height: 100vh;
background: black;
display: flex;
flex-direction: column;
align-items: center;`

const Header = styled.div`
background-image: url("https://upload.wikimedia.org/wikipedia/commons/a/ad/Labyrinth_for_Sword_of_Fargoal_%22Sword_Level%22.png");
height: 200px;
width: 100%;
background-size: cover;
background-repeat: no-repeat;
margin-bottom: 10px;

@media (min-width: 768px){
  height: 400px;
}

@media (min-width: 1024px){
max-width: 800px;
margin-bottom: 40px;
}`

export const App = () => {

  return (
    <Provider store={store}>
      <Wrapper>
        <Header />
        <Game />
      </Wrapper>
    </Provider>
  )
}
