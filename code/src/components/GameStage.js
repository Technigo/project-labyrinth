import React from 'react';
import { useSelector } from 'react-redux';
import Button from './Button';
import styled from 'styled-components';

const NextStepText = styled.p`
  font-size: 1em;
  margin: 0px 0px 20px 0px;
  &.show {
    font-size: 1em;
    margin: 0px 0px 20px 0px;
  }

  &.hide {
    display: none;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1b1a187a;
  width: 70%;
  height: auto;
  padding: 1em;

  .step-container {
    margin: 10px 0px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: #8b0000a1;
  }
`;

const GameStage = () => {
  const gameList = useSelector((store) => store.game.gameList);
  return (
    <TextBox>
      {gameList.actions.map((item, index) => (
        <div key={item.direction} className='step-container'>
          <NextStepText>{item.description}</NextStepText>
          <Button item={item} />
        </div>
      ))}
    </TextBox>
  );
};

export default GameStage;
