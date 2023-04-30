import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import game from 'reducers/game';
import styled, { keyframes } from 'styled-components';
import TypeIt from 'typeit-react';

const fadeIn = keyframes`
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
`;

const EndContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80vh;
  width: 80vw;
  background: rgba(255, 255, 255, 0.21);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.9px);
  -webkit-backdrop-filter: blur(4.9px);

  @media (min-width: 667px) {
    width: 40vw;
    height: 50vh;
  }
`;

const StyledTypeIt = styled(TypeIt)`
  font-size: 1.8em;
  font-family: var(--font-family);
  margin: 10px;

  @media (max-width: 340px) {
    font-size: 1.6em;
  }

  @media (min-width: 667px) {
    margin: 30px;
  }
`;

const StartOverBtn = styled.button`
  font-size: 20px;
  margin-top: 30px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  animation: ${fadeIn} 17s ease-in;
`;

const EndScreen = () => {
  const dispatch = useDispatch();
  const currentLocation = useSelector((store) => store.game.currentLocation);

  return (
    <EndContainer>
      <StyledTypeIt
        options={{
          strings: currentLocation.description,
          speed: 60
        }} />
      <StartOverBtn
        type="button"
        onClick={() => {
          dispatch(game.actions.restart())
        }}>Start over
      </StartOverBtn>
    </EndContainer>
  )
};

export default EndScreen;