import React from 'react';
import { useSelector } from 'react-redux';
import { StartPage } from './StartPage';
import { Description } from './Description';
import { LoadingLottie } from './Lottie';
import { Footer } from './Footer';
import styled from 'styled-components';

export const LabyrinthGame = () => {
  const currentPosition = useSelector(
    (store) => store.labyrinth.currentPosition
  );

  let coordinates = 'start';

  if (currentPosition) {
    coordinates = currentPosition.coordinates;
  }

  return (
    <>
      <Container
        className="labyrinth"
        style={{ backgroundImage: colorDictionary[coordinates] }}>
        <div></div>
        <InnerContainer>
          <LoadingLottie />
          {currentPosition ? <Description /> : <StartPage />}
        </InnerContainer>
        <Footer />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  min-height: 100vh;
`;

const InnerContainer = styled.div`
  min-width: 334px;
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
  backdrop-filter: blur(4px);
  background-color: #ff895e57;
`;

const colorDictionary = {
  start: 'url("/assets/1.png")',
  '0,0': 'url("/assets/2.png")',
  '0,1': 'url("/assets/3.png")',
  '0,2': 'url("/assets/1.png")',
  '0,3': 'url("/assets/2.png")',
  '1,0': 'url("/assets/3.png")',
  '1,1': 'url("/assets/1.png")',
  '1,3': 'url("/assets/2.png")'
};
