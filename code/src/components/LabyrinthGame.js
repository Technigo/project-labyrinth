import React from 'react';
import { useSelector } from 'react-redux';
import { StartPage } from './StartPage';
import { Description } from './Description';
import { LoadingLottie } from './Lottie';
import styled from 'styled-components';
/* import { ReactComponent as MyBackground } from '../assets/retro_bg.svg'; */
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
          <LoadingLottie />
          {currentPosition ? <Description /> : <StartPage />}
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

/* const StyledBackground = styled(MyBackground)`
  height: 100%;
`; */

const colorDictionary = {
  start: '#ffadad',
  '0,0': '#ffadad',
  '0,1': '#ffadad',
  '0,2': '#ffadad',
  '0,3': '#ffadad',
  '1,0': '#ffadad',
  '1,1': '#ffadad',
  '1,3': '#ffadad'
};
