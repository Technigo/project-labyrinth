/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { game, generateMoves } from 'reducers/game';
import styled from 'styled-components/macro';

const GameBoardWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10rem 0 0 0;
`;

const Description = styled.h1`
color: white;
`;

const ActionDescription = styled.p`
color: white;
font-size: 18px;
`;

export const GameBoard = () => {
  const description = useSelector((store) => store.game.description);
  const actions = useSelector((store) => store.game.actions);
  const dispatch = useDispatch();

  const onRestartButton = () => {
    dispatch(game.actions.restartGame());
  };

  return (
    <>
      <button restart type="button" onClick={onRestartButton}>
        Restart Game
      </button>
      <GameBoardWrapper>
        <Description>{description}</Description>
        <div className="CompassWrapper">
          {actions.length > 0 && actions.map((action) => (
            <>
              <ActionDescription>{action.description}</ActionDescription>
              <button
                className={action.direction}
                direction={action.direction}
                key={action.direction}
                onClick={() => dispatch(generateMoves(action.direction))}>
                {action.direction}
              </button>
            </>
          ))}
        </div>
      </GameBoardWrapper>
    </>
  );
};
