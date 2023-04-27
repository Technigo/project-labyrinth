import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import game from 'reducers/game';
import styled from 'styled-components';
import TypeIt from 'typeit-react';

const EndContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  width: 40vw;
  height: 50vh;
  border-radius: 10%;
  text-align: center;
`;

const StyledTypeIt = styled(TypeIt)`
  font-size: 2em;
  font-family: var(--font-family);
`;

const StartOverBtn = styled.button`
  font-size: 1em;
  margin-top: 30px;
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