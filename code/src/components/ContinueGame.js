import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "nes.css/css/nes.min.css";
import styled from "styled-components";
import { EndPage } from "./EndPage";

import { labyrinth, generateGameProgress } from "../reducers/game";

const Border = styled.div`
  border: 3px solid whitesmoke;
  padding: 15px;
  margin-bottom: 15px;
`;

const Container = styled.div`
  width: 900px;
  margin-top: 50px;

  @media (max-width: 768px) {
    margin-top: 20px;
    height: 950px;
  } ;
`;

const ContinueGame = () => {
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state);
  const playerName = currentState.labyrinth.username;
  const actions = currentState.labyrinth.game.actions;

  const onGameContinue = (direction) => {
    dispatch(generateGameProgress(playerName, direction));
  };

  // Function that gets invoked by clicking the back button
  const onGoBack = () => {
    dispatch(labyrinth.actions.historyGoBack());
  };

  console.log("Current state of the game: ", currentState);

  if (actions.length === 0) {
    return <EndPage />;
  }

  return (
    <Container className="nes-container is-dark with-title">
      <h3>{currentState.labyrinth.game.description}</h3>
      <div>
        {actions.map((action) => (
          <div>
            <Border className="button-text-container">
              <p>{action.description}</p>
              <button
                type="button"
                class="nes-btn is-primary"
                key={action.description}
                onClick={() => onGameContinue(action.direction)}
              >
                Go {action.direction}
              </button>
            </Border>
          </div>
        ))}
      </div>

      <div>
        <button type="button" class="nes-btn is-error" onClick={onGoBack}>
          BACK
        </button>
      </div>
    </Container>
  );
};

export default ContinueGame;
