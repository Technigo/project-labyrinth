import React from "react";
import GamePicture from '../assets/GameScreenPicture.jpg';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components/macro'

import game, { continueGame } from "../reducers/game";

const GameContainer = styled.div`
 display: flex:
 flex-direction: column;
 height: 100vh;
`
const GameBoardPicture = styled.main `
background-image: url(${GamePicture});
background-size: cover;
`
const GameBoardInfo = styled.div`
 background-color: #FFF;
 padding: 30px;
 margin: 20px;
 `

const GoBackButton = styled.button` 
  font-size: 16px;
  padding: 8px;
`

const GameScreen = ({username}) => {
  const currentStep= useSelector((store) => store.game.currentStep);
  const history = useSelector((store) => store.game.history);
  const userActions = useSelector ((store) => store.game.currentStep.actions)
  
  const dispatch = useDispatch();
  
  const onGameRevert = () => {
    dispatch(game.actions.setHistory());
  };

  return (

    <GameBoardPicture>
    <GameContainer>
        <GoBackButton disabled={!history.length} onClick={onGameRevert}>
        Go back
      </GoBackButton>
      <GameBoardInfo>
        <h2>Hello {username}</h2>
      <h3>{currentStep.description}</h3>
      {userActions.map((action) => (
          <div key={action.direction}>
              <p>{action.description}</p>
              <button onClick={() =>
                dispatch(continueGame(action.type, action.direction)) }>
                  Go to {action.direction}
              </button>

          </div>
      ))}
      </GameBoardInfo>
    </GameContainer>
    </GameBoardPicture>
  )
  
};

export default GameScreen;
