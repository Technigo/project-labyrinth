import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { nextMove } from 'reducers/labyrinth';
import styled from 'styled-components';

export const Direction = ({ actions = [] }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.keyCode) {
        case 37: // left arrow
          dispatch(nextMove('west'));
          break;
        case 38: // up arrow
          dispatch(nextMove('north'));
          break;
        case 39: // right arrow
          dispatch(nextMove('east'));
          break;
        case 40: // down arrow
          dispatch(nextMove('south'));
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  const DirectionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `

  const MoveBtn = styled.button`
  font-family: 'Castoro Titling', cursive;
  background-color: #000;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  color: lightgoldenrodyellow;
  &:hover {
  background-color: #999966;
  color: #000;
  }
  @media (min-width: 668px) {
    font-size: 1.2rem;
  }
  `
  const moveOnClick = (direction) => {
    dispatch(nextMove(direction))
  }
  return (
    actions.map((action) => (
      <DirectionSection>
        <div key={action.direction} className="direction-div">
          <p>{action.description}</p>
          <div>
            <MoveBtn type="button" onClick={() => moveOnClick(action.direction)}>Go {action.direction}</MoveBtn>
          </div>
        </div>
      </DirectionSection>
    ))
  );
};