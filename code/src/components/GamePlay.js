import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGameSteps, reset } from "../reducers/game";

import { useNavigate } from "react-router-dom";

import { GameArea, Container } from "styles";

const GamePlay = () => {
  const gameObject = useSelector((store) => store.game.gameObject);
  const isLoading = useSelector((store) => store.ui.isLoading);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onRestartClick = () => {
    dispatch(reset());
    navigate("/");
  };

  return (
    <GameArea>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <Container>
          <div>
            <h3>{gameObject.description}</h3>
          </div>

          <div>
            {gameObject.actions.length !== 0 ? (
              <div>
                {gameObject.actions.map((action) => {
                  return (
                    <div key={action.direction}>
                      <p>{action.description}</p>

                      <button
                        onClick={() => {
                          dispatch(
                            fetchGameSteps({ direction: action.direction })
                          );
                        }}
                      >
                        <span>
                          Go {""}
                          {action.direction +
                            (action.direction === "North"
                              ? " ⬆"
                              : action.direction === "South"
                              ? " ⬇"
                              : action.direction === "West"
                              ? " ⬅"
                              : action.direction === "East"
                              ? " ➡"
                              : "")}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              gameObject.coordinates && (
                <div>
                  <h3>You won!</h3>
                  <button onClick={onRestartClick}>Restart </button>
                </div>
              )
            )}
          </div>
        </Container>
      )}
    </GameArea>
  );
};

export default GamePlay;
