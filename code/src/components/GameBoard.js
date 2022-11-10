import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import labyrinth, { nextStage } from 'reducers/labyrinth';

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
      <div>Player {userName}</div>
      <div>{description}</div>
      <button type="button" onClick={() => goToPreviousStage()}>Go back</button>
      {actions && actions.map((item) => {
        return (
          <div key={item.description}>
            <p>{item.description}</p>
            <button type="button" onClick={() => onDirectionButtonClick(item.type, item.direction)}>Go {item.direction}</button>
          </div>
        )
      })}
    </>
  )
};

export default GameBoard;