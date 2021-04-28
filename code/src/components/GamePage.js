import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { game, generateMove } from "../reducers/game";

import styled from "styled-components";
import "nes.css/css/nes.min.css";

export const GamePage = () => {
  const gameUsername = useSelector((store) => store.game.username);
  const gameActions = useSelector((store) => store.game.currentStep.actions);
  const history = useSelector((store) => store.game.history);

  const dispatch = useDispatch();

  return (
    <Main>
      {gameActions.map((action) => (
        <div key={action}>
          <div className="nes-container is-rounded">
            <p className="nes-text">{action.description}</p>
          </div>
          <Button
            className="nes-btn is-primary"
            onClick={() =>
              dispatch(generateMove(gameUsername, action.direction))
            }
          >
            {action.direction}
          </Button>
        </div>
      ))}

      <Button
        disabled={!history.length}
        onClick={() => dispatch(game.actions.setPreviousStep())}
        className="nes-btn is-warning"
      >
        Go back
      </Button>
    </Main>
  );
};
const Main = styled.div``;

const Button = styled.button`
  width: 200px;
`;
