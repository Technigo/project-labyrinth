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
  height: 100vh;
  display: flex;
  
  
`;

const InnerContainer = styled.div`
  
  display:flex;
  justify-content:center;
  align-items: center;
  margin: 0 auto;
  
`;
