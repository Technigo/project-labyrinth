import React from 'react';
import { useSelector } from 'react-redux';
import MazePage from './MazePage';
import UserInput from './UserInput';
import Loading from './Loading';

import { Container } from '../styles/GlobalStyles'

const StartScreen = () => {
  const gameStart = useSelector((store) => store.labyrinth.username)
  const isLoading = useSelector((store) => store.labyrinth.isLoading)

  return (
    <Container>
      {isLoading ? <Loading /> : (<div>{gameStart === '' ? <UserInput /> : <MazePage />} </div>)}
    </Container>
  )
}

export default StartScreen;