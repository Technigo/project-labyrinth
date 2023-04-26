import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { labyrinthProgress } from 'reducers/labyrinth';
import { Button } from 'reusableComponents/Button';
import { Description } from 'reusableComponents/Description';
import { Title } from 'reusableComponents/Title';
import styled from 'styled-components';

export const GameBoard = () => {
  const gameboard = useSelector((store) => store.labyrinth.setMoves);
  const description = useSelector((store) => store.labyrinth.description);
  const isLoading = useSelector((store) => store.labyrinth.isLoading);
  const dispatch = useDispatch();

  return (
    <GameWrapper>
      <Title>{description}</Title>
      <CardsContainer>
        {isLoading === false && gameboard.map((item) => (
          <Card key={item.direction}>
            <Description>{item.description}</Description>
            <Button direction type="submit" onClick={() => dispatch(labyrinthProgress('move', item.direction))}>{item.direction}</Button>
          </Card>))}
      </CardsContainer>
    </GameWrapper>
  )
};
const GameWrapper = styled.section`
  display: flex;
  flex-direction:column;
  padding:2em;
  height:100vh;
  min-height:100vh;
  text-align: center;
  box-sizing:border-box;
  background-image: url('/images/welcomeScreen.jpg'); // I just added it to see how it looks with the background
  background-repeat: no-repeat;
  background-size: cover;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding:15px;
  min-height: max-content;
  height:50%;
  max-width:70%;
  border-radius:20px;
  background-color: rgb(0 0 0 / 50%);
   @media (min-width: 768px) {
          width:40%;
          max-height:40%;
    }
`;