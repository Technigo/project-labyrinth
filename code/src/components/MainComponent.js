/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { useSelector } from 'react-redux';
// import labyrinth from 'reducers/labyrinth';
import styled from 'styled-components/macro';
import UserInput from './UserInput';
import Choices from './Choices';
import { InnerWrapper } from './mainStyles';

const MainComponent = () => {
  const quest = useSelector((store) => store.labyrinth.quest);
  console.log('quest', quest)

  const usernameTest = useSelector((store) => store.labyrinth.username);
  console.log('usernameTest', usernameTest)

  return (
    <>
      <InnerWrapper>
        {quest === '' ? <UserInput /> : <Choices />}
      </InnerWrapper>
      <ButtonWrapper>
        {/* button-img */}
      </ButtonWrapper>
    </>
  )
}

export default MainComponent;

const ButtonWrapper = styled(InnerWrapper)`
  background-color: lightgrey;
`
