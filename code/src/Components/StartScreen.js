import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Description from './Description';
import UserNameInput from './UserNameInput';
// import Loader from './Loader';

const StartScreen = () => {
  const description = useSelector((store) => store.game.description);

  // if (loading) return <Loader />

  return (
    <StartScreenerContainer>
      {description === '' ? <UserNameInput /> : <Description />}
    </StartScreenerContainer>
  );
}

export default StartScreen;

const StartScreenerContainer = styled.section`
border: solid 3px blue;
`