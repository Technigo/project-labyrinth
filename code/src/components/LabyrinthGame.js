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
        <InnerContainer>
          <LoadingLottie />
          {currentPosition ? <Description /> : <StartPage />}
        </InnerContainer>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 50px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const InnerContainer = styled.div`
  min-width: 334px;
  max-width: 500px;
  margin: 0 auto;
  height: 100%;
  backdrop-filter: blur(4px) contrast(70%);
`;

/* const StyledBackground = styled(MyBackground)`
  height: 100%;
`; */

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
/* const colorDictionary = () => {
  let bg = '';
  switch (coordinates) {
    case '0,0':
      bg = '../assets/1.png';
      break;
    case '1,0':
      bg = '../assets/1.png';
      break;
    case '1,1':
      bg = '../assets/1.png';
      break;
    case '0,1':
      bg = '../assets/1.png';
      break;
    case '0,2':
      bg = '../assets/1.png';
      break;
    case '0,3':
      bg = '../assets/1.png';
      break;
    case '1,3':
      bg = '../assets/1.png';
      break;
    default:
      bg = '../assets/1.png';
  }
  return bg;
};
 */
