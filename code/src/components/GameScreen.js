import React from "react";
import { useSelector, useDispatch } from "react-redux";

import game, { continueGame } from "../reducers/game";

export const GameScreen = () => {
  const gameData = useSelector((store) => store.game.gameData);
  const history = useSelector((store) => store.game.history);
  const dispatch = useDispatch();
  const onContinueGame = (direction) => {
    dispatch(continueGame(direction));
  };

  const onGoBack = () => {
    dispatch(game.actions.setPreviousStep());
  };

  if (gameData) {
    return (
      <main>
        <section className="pokemon-container">
          <p className="nes-balloon is-dark from-right nes-pointer nes-text is-success">
            {gameData.description}
          </p>
          <i className="nes-bulbasaur"></i>
        </section>
        <div>
          {gameData.actions.map((action) => {
            return (
              <div className="nes-container is-rounded is-dark">
                <p className="nes-text is-primary">{action.description}</p>
                <button
                  className="nes-btn is-primary"
                  onClick={() => onContinueGame(action.direction)}
                >
                  {action.direction}
                </button>
              </div>
            );
          })}
        </div>
        <div className="navigation-container">
          <button
            className={
              !history.length > 0 ? "nes-btn is-disabled" : "nes-btn is-warning"
            }
            onClick={onGoBack}
          >
            Run back!
          </button>
          <div>
            <p className="coordinates nes-text is-disabled">
              Location: {gameData.coordinates}
            </p>
          </div>
        </div>
      </main>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

