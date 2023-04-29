import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { labyrinthProgress } from 'reducers/labyrinth';
// import { Button } from 'reusableComponents/Button';
import { Description } from 'reusableComponents/Description';
import { Title } from 'reusableComponents/Title';
import styled from 'styled-components';
import { Button } from 'reusableComponents/Button'
import { BackgroundImage } from './BackgroundImages';
import { DirectionButton } from './DirectionButton';

export const GameBoard = () => {
  const gameboard = useSelector((store) => store.labyrinth.setMoves);
  const description = useSelector((store) => store.labyrinth.description);
  const isLoading = useSelector((store) => store.ui.isLoading);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false)
  return (
    <GameWrapper>
      <BackgroundImage />
      {active === false && (
        <>
          <Title>{description}</Title>
          <Button onClick={() => setActive(true)}>Choose your path</Button>
        </>
      )}
      {isLoading === false && active === true && (
        <CardsContainer>
          {gameboard.map((item) => (
            <Card key={item.direction} direction={item.direction}>
              <Description>{item.description}</Description>
              <DirectionButton direction={item.direction} onClick={() => dispatch(labyrinthProgress('move', item.direction))} />
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