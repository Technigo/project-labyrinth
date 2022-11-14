import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import labyrinth, { GameNextFetch } from 'reducers/labyrinth';
import styled from 'styled-components/macro'
import { ChildContainer, Button } from '../styles/GlobalStyles'

const MazePage = () => {
  const dispatch = useDispatch();
  const description = useSelector((store) => store.labyrinth.status.description);
  const actions = useSelector((store) => store.labyrinth.status.actions);
  const onTypeButtonClick = (type, direction) => {
    dispatch(GameNextFetch(type, direction));
  }
  const goToPreviousStatus = () => {
    dispatch(labyrinth.actions.setPreviousStatus())
  }

  return (
    <ChildContainer>
      <div>
        <GoBackButton type="button" onClick={() => goToPreviousStatus()}>Go back</GoBackButton>
      </div>
      <GameAlternatives>{description}</GameAlternatives>
      {actions.length === 0 && (
        <>
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_zdouw3jj.json"
            background="transparent"
            speed="1"
            style={{
              width: '150px',
              height: '150px'
            }}
            loop
            autoplay />
          <Button
            type="button"
            onClick={() => dispatch(labyrinth.actions.resetGame())}>
            RESTART GAME
          </Button>
        </>)}
      {actions && actions.map((singleType) => (
        <GameAlternatives>
          <p key={singleType.description}>
            {singleType.description}
          </p>
          <Button onClick={() => onTypeButtonClick(singleType.type, singleType.direction)} type="button">Go {singleType.direction}</Button>
        </GameAlternatives>
      ))}
    </ChildContainer>
  )
};

export default MazePage;

const GameAlternatives = styled.div`
margin: 1em 0;
width: 70vw;
font-size: 0.6em;
line-height: 1.5em;

@media (min-width: 667px) {
  font-size: .6em;
  line-height: 1.5em;
  width: 40vw;
  }
`
const GoBackButton = styled(Button)`
position: absolute;
top: 0;
left: 0;
margin: 2%;
font-size: 0.8em;
`
