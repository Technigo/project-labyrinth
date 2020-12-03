//Here we fetch the data from the 'action' URL
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { gameDirection } from "../reducers/reusable";
import {GameOver} from "./GameOver"
import {game} from '../reducers/game'
import { Button } from "../lib/Buttons"

import forest from '../img/forest.jpg'
import nature from '../img/nature.jpg'

import styled from 'styled-components'

export const GameRoom = () => {
  const dispatch = useDispatch();

  const gameData = useSelector((state) => state.game.game);
  const userName = useSelector((state) => state.game.name);
  const arrayGame = useSelector((state) => state.game.game.actions);
  const historyGame = useSelector((state) => state.game.history)

  const onGameDirection = (direction) => {
    dispatch(gameDirection(userName, direction));
  };

  const onHistoryBack = () => {
    dispatch(game.actions.historyGoBack());
  };

  const gameImages = () => {
    if (gameData.coordinates === "0,0") {
      return forest;
    } else if (gameData.coordinates === "0,1") {
      return nature;
    } else if (gameData.coordinates === "0,2") {
      return forest;
    } else if (gameData.coordinates === "0,3") {
      return forest;
    } else if (gameData.coordinates === "1,0") {
      return forest;
    } else if (gameData.coordinates === "1,1") {
      return forest;
    }
  };

  if (game.actions.length === 0) {
    return ( 
        <GameOver/>
    ) 
  }
  return (
    <GameImage style={{backgroundImage: `url(${gameImages()})`}}>
       <Description>{gameData.description}</Description>
       
      {arrayGame &&
        arrayGame.map((item, index) => {
          return (
            <div>
              <Button 
                onClick={() => onGameDirection(item.direction)} 
                key={index} 
                title={item.direction}
              />
              <p>{item.description}</p>
            </div>
          );
        })} 
      
        <BackButton 
          type="button" 
          onClick={onHistoryBack} 
          disabled={historyGame.length === 1} 
          background={historyGame.length === 1 ? "grey" : "rgb(32, 8, 191)"}
          title={"back"}
        />
    </GameImage>
    
  );
}
const GameImage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 10% 15% 10%;
  text-align: center;
  background-size: cover;
  background-position: center;
  height: 400px;
  max-width: 1000px;
  margin: auto;
  margin-top: 100px;
    @media (max-width: 768px) {
      height: 1000px;
      margin-top: 0;
    }
`;

const Description = styled.h3`
  justify-content:center;
`;


export const BackButton = styled(Button)`
  font-size: 36px;
  color: white;
  margin-top: 20px;
  border: solid 1px #ffffff;
  width: 200px;
  align-self: center;

  &:hover {
    background-color: rgb(255, 255, 255, 0.4); 
  }
`;
