import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import labyrinth, { nextStage } from 'reducers/labyrinth';
import styled from 'styled-components/macro';
import { Container } from 'styles/GlobalWrappers';
import MiniMaze from './MiniMaze';

const GameBoard = () => {
  const dispatch = useDispatch();
  const { description, actions } = useSelector((store) => store.labyrinth.stage);
  const userName = useSelector((store) => store.labyrinth.username);

  const onDirectionButtonClick = (type, direction) => {
    dispatch(nextStage(type, direction));
  };
  const goToPreviousStage = () => {
    dispatch(labyrinth.actions.setPreviousStage());
  };

  return (
    <>
      <Top>
        <button type="button" onClick={() => goToPreviousStage()}>Go back</button>
        <p>Player: {userName}</p>
      </Top>
      <Container>
        <div>
          <Description>
            <p>{description}</p>
          </Description>
        </div>
        <MiniMaze />
        <ActionsWrapper>
          {actions && actions.map((item) => {
            return (
              <div key={item.description}>
                <p>{item.description}</p>
                <ButtonWrapper>
                  <button type="button" onClick={() => onDirectionButtonClick(item.type, item.direction)}>Go {item.direction}</button>
                </ButtonWrapper>
              </div>
            );
          })}
        </ActionsWrapper>
      </Container>
    </>

  )
};

export default GameBoard;

const ButtonWrapper = styled.div`
  margin-top: 5px;
`
const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  row-gap: 20px;
`

const Top = styled.div`
  color: red;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

const Description = styled.div`
  display: flex;
  justify-content: center;
  border: 1px dotted;
  color: #00cf00;
  padding: 10px;
  margin-top: 10px;
`