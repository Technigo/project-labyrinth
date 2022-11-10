/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import MazePage from './MazePage';
import UserInput from './UserInput';
import Loading from './Loading';

import { Container } from '../styles/GlobalStyles'

const StartScreen = () => {
  const gameStart = useSelector((store) => store.labyrinth.username)
  const isLoading = useSelector((store) => store.labyrinth.isLoading)
  // if statement /if the quote is equal to an empty screen then show AutherInput otherswise return Quotes
  return (
    <Container>
      {isLoading ? <Loading /> : (<div>{gameStart === '' ? <UserInput /> : <MazePage />} </div>)}
    </Container>
  )
}

export default StartScreen;