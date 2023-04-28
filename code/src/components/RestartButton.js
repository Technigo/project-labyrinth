import React from 'react'
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { gameFetch } from 'reducers/gameFetch';
import { RestartText } from 'lib/Text';
import startgame from 'images/arrow-button.png';

export const RestartButton = () => {
  const dispatch = useDispatch();

  const onRestartButton = () => {
    dispatch(gameFetch.actions.restartGame());
  };

  const RestartSpaceButton = styled.button`
    background: none;
    border:none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
    height: 130px;
    cursor: pointer;
    position: relative;

    img{
      width: 90%;

      &:hover {
        width: 100%;
      }
    }
  `

  return (
    <RestartSpaceButton type="button" onClick={onRestartButton}>
      <img src={startgame} alt="restartbutton" />
      <RestartText>Restart</RestartText>
    </RestartSpaceButton>
  )
}