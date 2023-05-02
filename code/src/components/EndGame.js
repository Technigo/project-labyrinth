import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Game } from 'reducers/Game';
import { Button } from '../styles/Button';
import { GameScreenSection, GameSection } from '../styles/Sections';

export const EndGame = () => {
  const gameStep = useSelector((store) => store.game.response);
  const dispatch = useDispatch();
  const onRestartGame = () => {
    dispatch(Game.actions.restartGame())
  };

  return (
    <GameScreenSection>
      <GameSection>
        <p> {gameStep.description} </p>
        <Button type="button" onClick={onRestartGame}>Restart Game!</Button>
      </GameSection>
    </GameScreenSection>
  )
}