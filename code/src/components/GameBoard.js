import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { labyrinthProgress } from 'reducers/labyrinth';
import styled from 'styled-components';

export const GameBoard = () => {
  const gameboard = useSelector((store) => store.labyrinth.setMoves);
  const description = useSelector((store) => store.labyrinth.description);
  const isLoading = useSelector((store) => store.labyrinth.isLoading);
  const dispatch = useDispatch();

  return (
    <GameWrapper>
      <p>{description}</p>
      <FlexRow>
        {isLoading === false && gameboard.map((item) => (
          <Card key={item.direction}>
            <Description>{item.description}</Description>
            <Button type="submit" onClick={() => dispatch(labyrinthProgress('move', item.direction))}>{item.direction}</Button>
          </Card>))}
      </FlexRow>
    </GameWrapper>
  )
};
const GameWrapper = styled.section`
  display: flex;
  flex-direction:column;
  padding:2em;
  min-height:100vh;
  text-align: center;
  box-sizing:border-box;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction:row;
  min-height:100%;
  justify-content:center;
  align-items:flex-end;
  box-sizing:border-box;
`
const Card = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  width:50%;
  height:100%;
`;
const Description = styled.p`
  display: flex;
`;
const Button = styled.button`
  display: flex;
`;