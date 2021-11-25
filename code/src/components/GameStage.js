import React from 'react';
import { useSelector } from 'react-redux';
import Button from './Button';
import styled from 'styled-components';

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: auto;
  padding: 1em;
  margin-top: 50%;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .step-container {
    margin: 10px 0px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    align-items: center;
    width: 70%;
    height: 50vh;
  }
`;

const GameStage = () => {
  const gameList = useSelector((store) => store.game.gameList);
  return (
    <TextBox>
      {gameList.actions.map((item) => (
        <div key={item.direction} className='step-container'>
          <Button item={item} />
        </div>
      ))}
    </TextBox>
  );
};

export default GameStage;
