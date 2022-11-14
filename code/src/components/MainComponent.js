/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { useSelector } from 'react-redux';
// import styled from 'styled-components/macro';
import UserInput from './UserInput';
import Choices /* { DirectionButton } */ from './Choices';
import { InnerWrapper } from './mainStyles';

const MainComponent = () => {
  const quest = useSelector((store) => store.labyrinth.quest);

  const usernameTest = useSelector((store) => store.labyrinth.username);

  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    isLoading === false && (
      <>
        <InnerWrapper>
          {quest === '' ? <UserInput /> : <Choices username={usernameTest} />}
        </InnerWrapper>
        {/* <ButtonWrapper>
           button-img
        </ButtonWrapper> */}
      </>
    )
  )
}

export default MainComponent;

// const ButtonWrapper = styled(InnerWrapper)`
// background-color: lightgrey;
// display: flex;
// jusify-content: center;
// align-item: center;`
