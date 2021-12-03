import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import { startThunk, actionThunk, game } from "../reducers/game";
import { ui } from "../reducers/ui";

import { LoadingIndicator } from "./LoadingIndicator";

const GameContainer = styled.section`
  display: flex;
  justify-items: center;
  width: 70%;
  margin: 0 auto; 
  min-width: 300px;
  max-width: 400px;
`;
const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-family: 'Press Start 2P', cursive;
  color: #ee088d;
  text-shadow: 3px 3px yellow;
  display: flex;
  text-align: center;
  align-item: center;
  margin: 40px auto 20px auto;
  font-size: 30px;
  letter-spacing: 3px; 
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  `
const Input = styled.input`
  font-family: 'Press Start 2P', cursive;
  text-align: center;
  width:70%;
  margin 0 auto;
  `
const ActionContainer = styled.div`
  width: 80%;
  background-color: #1c362d;
  color: #23c757;
  font-family: "VT323", monospace;
  padding: 15px;
  margin: 0 auto;
`;
const LoadWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin 0 auto;
`;

const ShortDesc = styled.div`
  border-bottom: dashed 2px;
  padding-bottom: 10px;
  font-size: 20px;
`;

const DescButtonWrapper = styled.div`
    display; flex;
    justify-content: center;
    border-bottom: dashed 2px;
    padding: 3px 0 10px 0;`;
const Button = styled.button`
    margin: 10px auto;
    display: flex;
    font-family: 'Press Start 2P', cursive;
`;
const LongDesc = styled.div`
  font-size: 18px`;
const Crown = styled.img`
  width: 30px;
  height: 30px;
  margin 0 auto;`
const EndText = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  `

export const Game = () => {
  const dispatch = useDispatch();
  const gameInformation = useSelector((store) => store.game);
  const loading = useSelector((store) => store.ui.isLoading);
  const showBeginning = useSelector((store) => store.ui.showBeginning);
  const [newUserName, setNewUserName] = useState("");
  

  const onStart = () => {
    dispatch(ui.actions.setNoBeginning(false));
    dispatch(startThunk(newUserName));
    dispatch(game.actions.setUserName(newUserName));
  }; // a function to start the game and invoke the first Thunk to set the username

  const onAction = (action) => {
    dispatch(actionThunk(newUserName, action)); 
  }; // a function to continue the game, invoking the second thunk (and API), with user name and action arguments

  const onRestart = () => {
    dispatch(game.actions.restartGame()); 
    dispatch(ui.actions.setNoBeginning(true));// this is needed to restart the game
    setNewUserName('');// this clears the input field
   
 }
  return (
    <GameContainer>
      {loading && (
        <LoadWrapper>
          <LoadingIndicator />
        </LoadWrapper>
      )}

      {showBeginning && (
        <IntroWrapper>
          <Title>Welcome to the Labryinth</Title>
          <Form onSubmit={() => onStart()}> 
            <Input
              type="text"
              required
              placeholder="Your User Name"
              onChange={(event) => setNewUserName(event.target.value)}
              value={newUserName}
            ></Input>
            <Button type="submit">Start The Game </Button>
          </Form>
        </IntroWrapper>
      )}

      {!showBeginning && !loading && (
        <ActionContainer>
          <ShortDesc>{gameInformation.description}</ShortDesc>

          {gameInformation.actions.map((action) => (
            <DescButtonWrapper>
              <LongDesc key={action.description}>You look to the {action.direction}. {action.description}</LongDesc>

              <Button
                key={action.coordinates}
                onClick={() => onAction(action)}
                disabled={loading}
              >
                {action.type} {action.direction}
              </Button>
            </DescButtonWrapper>
          ))}
          {gameInformation.actions.length === 0 && (
            <EndText>
              
              Congratulations, {newUserName} you have made it!
              <Crown src="./assets/crown.png" alt="Nintendo crown"></Crown>
              <Button onClick={() => onRestart()}> Press to re-start</Button>

            </EndText>
          )}
        </ActionContainer>
      )}
    </GameContainer>
  );
};
