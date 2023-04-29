import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { labyrinthProgress } from 'reducers/labyrinth';
import { Description } from 'reusableComponents/Description';
import { Title } from 'reusableComponents/Title';
import styled from 'styled-components/macro';
import { Button } from 'reusableComponents/Button'
import { BackgroundImage } from './BackgroundImages';
import { DirectionButton } from './DirectionButton';
import { Map } from './Map'

export const GameBoard = () => {
  const gameboard = useSelector((store) => store.labyrinth.moves);
  const description = useSelector((store) => store.labyrinth.description);
  const isLoading = useSelector((store) => store.ui.isLoading);
  const coordinates = useSelector((store) => store.labyrinth.coordinates);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false)
  const selectDirection = (direction) => {
    dispatch(labyrinthProgress('move', direction))
  }
  const handleKeyDown = (event, direction) => {
    console.log(event.key)
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      console.log('Arrow key pressed!', event.key);
      dispatch(labyrinthProgress('move', direction))
    }
    console.log(event.key)
  }

  return (
    <GameWrapper>
      <BackgroundImage />
      {active === false && (
        <>
          <Title>{description}</Title>
          {coordinates === '1,3' ? <Button onClick={() => window.location.reload()}>Restart game</Button> : <Button onClick={() => setActive(true)}>Choose your path</Button>}
          <Map />
        </>
      )}
      {isLoading === false && active === true && (
        <CardsContainer>
          {gameboard.map((item) => (
            <Card key={item.direction} direction={item.direction}>
              <Description>{item.description}</Description>
              <DirectionButton
                route={item.direction}
                onClick={() => selectDirection(item.direction)}
                onKeyDown={(e) => handleKeyDown(e, item.direction)} />
            </Card>
          ))}
        </CardsContainer>
      )}
    </GameWrapper>
  )
};
const GameWrapper = styled.section`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100vh;
  min-height:100vh;
  text-align: center;
  box-sizing:border-box;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction:column;
  height:100%;
  justify-content:center;
  align-items:center;
  box-sizing:border-box;
  gap:5px;
    @media (min-width: 768px) {
        flex-direction:row;
    }
`

const Card = styled.div`
  display: flex;
  position:absolute;
  top: ${(props) => props.direction === 'North' && '0'};
  bottom: ${(props) => props.direction === 'South' && '0'};
  left: ${(props) => props.direction === 'West' && '0'};
  right: ${(props) => props.direction === 'East' && '0'};
  flex-direction: ${(props) => props.direction === 'North' && 'column-reverse'};
  flex-direction: ${(props) => props.direction === 'South' && 'column'};
  flex-direction: ${(props) => props.direction === 'East' && 'row'};
  flex-direction: ${(props) => props.direction === 'West' && 'row-reverse'};
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  padding:15px;
  min-height: max-content;
  height:50%;
  max-width:70%;
  border-radius:20px;
  background-color: none;
   @media (min-width: 768px) {
          width:40%;
          max-height:40%;
    }
`;