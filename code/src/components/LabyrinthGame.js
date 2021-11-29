import React from 'react';
import { useSelector } from 'react-redux';
import { StartPage } from './StartPage';
import { Description } from './Description';
import { LoadingLottie } from './Lottie';
import styled from 'styled-components';
/* import { DirectionButtons } from './DirectionButtons'; */

export const LabyrinthGame = () => {
  const currentPosition = useSelector(
    (store) => store.labyrinth.currentPosition
  );

  let coordinates = 'start';

  if (currentPosition) {
    coordinates = currentPosition.coordinates;
  }
  console.log(coordinates);

  return (
    <>
      <Container
        className="labyrinth"
        style={{ background: colorDictionary[coordinates] }}>
        <InnerContainer>
          {currentPosition ? <Description /> : <StartPage />}
          <LoadingLottie />
        </InnerContainer>
      </Container>

      {/* <DirectionButtons /> */}
    </>
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

const colorDictionary = {
  start: 'green',
  '0,0': 'red',
  '0,1': 'yellow',
  '0,2': 'purple',
  '0,3': 'green',
  '1,0': 'magenta',
  '1,1': 'blue',
  '1,3': 'blue'
};
