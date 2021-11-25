import React from 'react';
import { useSelector } from 'react-redux';
import { StartPage } from './StartPage';
import { Description } from './Description';
import { LoadingLottie } from './Lottie';
import styled from 'styled-components';

export const LabyrinthGame = () => {
  const currentPosition = useSelector(
    (store) => store.labyrinth.currentPosition
  );

  return (
    <Container>
      <InnerContainer>
        {currentPosition ? <Description /> : <StartPage />}
        <LoadingLottie />
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;

  padding: 50px;
`;

const InnerContainer = styled.div`
  min-width: 334px;
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
`;
