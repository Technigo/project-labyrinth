import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startThunk, actionThunk, game } from "../reducers/game";
//import { Welcome } from './Welcome'
//import { Endscreen } from './Endscreen'
import { LoadingIndicator } from "./LoadingIndicator";
import styled from "styled-components/macro";
import { ui } from "../reducers/ui";

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`;
const Title = styled.h1`
  font-family: "Permanent Marker", cursive;
  color: #ee088d;
  text-shadow: 3px 3px yellow;
  display: flex;
  text-align: center;
  align-item: center;
  margin: 40px auto 20px auto;
  font-size: 35px;
  letter-spacing: 3px;
  
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  `
const GameContainer = styled.section`
  display: flex;
  justify-items: center;
  width: 70%;
  margin 0 auto;
  
`;
const ActionContainer = styled.div`
  width: 70%;
  background-color: #1c362d;
  color: #23c757;
  font-family: "VT323", monospace;
  padding: 15px;
  margin: 0 auto;
`;
const LoadWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ShortDesc = styled.div`
  border-bottom: dashed 2px;
  padding-bottom: 10px;
`;

const DescButtonWrapper = styled.div`
    display; flex;
    justify-content: center;
    border-bottom: dashed 2px;
    padding: 3px 0 10px 0;`;
const Button = styled.button`
  margin: 10px auto;
  display: flex;
`;
const LongDesc = styled.div``;

export const Game = () => {
  const dispatch = useDispatch();
  const gameInformation = useSelector((store) => store.game);
  const loading = useSelector((store) => store.ui.isLoading);
  const showBeginning = useSelector((store) => store.ui.showBeginning);
  const [newUserName, setNewUserName] = useState("");
  //const [showBeginning, setShowBeginning] = useState(true)

  const onStart = () => {
    dispatch(ui.actions.setNoBeginning(false));
    dispatch(startThunk(newUserName));
    dispatch(game.actions.setUserName(newUserName));
  }; // a function to start the game and invoke the first Thunk whilst setting the username

  const onAction = (action) => {
    dispatch(actionThunk(newUserName, action));
  }; // a function to continue the game, invoking the second thunk (and API), with user name and action arguments

  const onRestart = () => {
    dispatch(game.actions.restartGame())
    dispatch(ui.actions.setNoBeginning(true))// this is needed to restart the game
   
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
            <input
              type="text"
              required
              placeholder="Your User Name"
              onChange={(event) => setNewUserName(event.target.value)}
              value={newUserName}
            ></input>
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
          {gameInformation.coordinates === "1,3" && (
            <div>
              Congratulations, {newUserName} you have made it!
             
              <button onClick={() => onRestart()}> Press to re-start</button>

            </div>

            //<Endscreen/>
          )}
        </ActionContainer>
      )}
    </GameContainer>
  );
};
