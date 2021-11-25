import React from 'react';
import styled from 'styled-components';
import { game } from 'reducers/game';
import { useDispatch } from 'react-redux';
import { StartPage } from './StartPage';

const RestartBtn = styled.button`
  margin: 10px auto;
  width: 53px;
  letter-spacing: 2px;
  border-radius: 50%;
  font-family: 'Libre Baskerville', serif;
  color: #ffc000;
  font-size: 18px;
  font-weight: 400;
  text-shadow: 0 1px 3px #000;
  text-align: center;
  padding: 10px 0;
  background: radial-gradient(circle, #8b0000, #8b0000);
  border-top: 4px ridge #ffb000;
  border-left: 4px groove #ffb000;
  border-right: 4px ridge #ffb000;
  border-bottom: 4px groove #ffb000;
  box-shadow: inset 0px 0px 5px 3px rgba(1, 1, 1, 0.3);
  position: absolute;
  top: 3%;
  right: 10%;
`;
const RestartButton = ({ stopBgMusic }) => {
  const dispatch = useDispatch();

  const onNameSubmit = (name) => {
    dispatch(game.actions.setUserName(name));
    stopBgMusic();
  };

  return (
    <RestartBtn onClick={() => onNameSubmit('') && <StartPage />}>
      &#8634;
    </RestartBtn>
  );
};

export default RestartButton;
