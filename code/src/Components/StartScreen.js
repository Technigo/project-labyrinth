import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Description from './Description';
import UserNameInput from './UserNameInput';

const StartScreen = () => {
  // const quote = useSelector((store) => store.quotes.quote);
  const description = useSelector((store) => store.game.description); // ändra?

  return <StartScreenerContainer>{description === '' ? <UserNameInput /> : <Description />}</StartScreenerContainer>;
}

export default StartScreen;

const StartScreenerContainer = styled.section`
border: solid 3px blue;
`