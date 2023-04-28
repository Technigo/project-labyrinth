/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { game, generateMoves } from 'reducers/game';
import styled from 'styled-components/macro';

const GameBoardWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 6rem 0 0 0;
background: rgba(255,255,255, 0.5);
`;

const Description = styled.h1`
font-size: 22px;
color: var(--h1-color);
font-weight: 700;
text-align: center;
margin: 10px 20px;
text-shadow: 6px 2px 0px rgba(225,35,134,1);
max-width: 70vw;
`;

const GoBtn = styled.button`
background: var(--btn-color);
border-radius: 20px;
padding: 10px 30px;
margin-top: 15px;
border: none;
text-transform: uppercase;
color: var(--text2-color);
&:hover {
  background: var(--hover-color);
  color: var(--text-color);
  cursor: pointer;
} 
`;

const ActionDescription = styled.div`
color: var(--text-color);
font-size: 1rem;
font-weight: 300;
text-align: center;
background: rgba(255,255,255, 0.6);
margin: 20px;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 70vw;
box-shadow: 3px 5px 44px -7px rgba(0,0,0,0.75);
-webkit-box-shadow: 3px 5px 44px -7px rgba(0,0,0,0.75);
-moz-box-shadow: 3px 5px 44px -7px rgba(0,0,0,0.75);
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
              <ActionDescription>
                {action.description}
                <GoBtn
                  className={action.direction}
                  direction={action.direction}
                  key={action.direction}
                  onClick={() => dispatch(generateMoves(action.direction))}>
                  {action.direction}
                </GoBtn>
              </ActionDescription>
            </>
          ))}
        </div>
      </GameBoardWrapper>
    </>
  );
};
