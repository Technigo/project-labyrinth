/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Direction } from './Direction';

export const Game = () => {
  const description = useSelector((store) => store.game.description);
  const onRestartButtonClick = () => {
    window.location.reload()
  }

  const ResetBtn = styled.button`
  font-family: 'JetBrains Mono', monospace;
  background-color: #000;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  color: #FEF5BD;
  &:hover {
  background-color: #FEF5BD;
  color: #000;
  }
  @media (min-width: 668px) and (max-width: 1023px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.2rem;
    margin-top: 30px;
  }
  `

  return (
    <div className="game-div">
      <p className="game-p">{description.description}</p>
      <Direction actions={description.actions} />
      {description.coordinates === '1,3' && (
        <>
          <ResetBtn type="button" onClick={onRestartButtonClick}>Play again</ResetBtn>
          <p>By NinaW</p>
        </>
      )}
    </div>
  )
}