import React from 'react';
import styled from 'styled-components';
import { game } from 'reducers/game';
import { useDispatch } from 'react-redux';
import { StartPage } from './StartPage';

const RestartBtn = styled.button`
  color: black;
  background-color: yellow;
  position: absolute;
  top: 70%;
`;
const RestartButton = () => {
  const dispatch = useDispatch();

  const onNameSubmit = (name) => {
    dispatch(game.actions.setUserName(name));
  };

  return (
    <RestartBtn onClick={() => onNameSubmit('') && <StartPage />}>
      Restart
    </RestartBtn>
  );
};

export default RestartButton;
