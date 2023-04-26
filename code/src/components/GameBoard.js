import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { labyrinthProgress } from 'reducers/labyrinth';
import styled from 'styled-components';

export const GameBoard = () => {
  const gameboard = useSelector((store) => store.gameboard);
  const dispatch = useDispatch();

  return (
    <GameWrapper>
      {gameboard.map((item) => (
        <Card key={item.direction}>
          <Description>{item.description}</Description>
          <Button type="submit" onClick={dispatch(labyrinthProgress('move', item.direction))}>{item.direction}</Button>
        </Card>))}
    </GameWrapper>
  )
};
const GameWrapper = styled.section`
  display: flex;
`;
const Card = styled.section`
  display: flex;
`;
const Description = styled.section`
  display: flex;
`;
const Button = styled.section`
  display: flex;
`;