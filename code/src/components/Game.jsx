import React from "react";
import { useSelector } from "react-redux";
import Typewriter from "typewriter-effect";
import Actions from "./Actions";
import GameOver from "./GameOver";
// import ActionsAlt from "./ActionsAlt";

const Game = () => {
  const positionDescription = useSelector(
    (store) => store.game.position.description
  );
  const actions = useSelector((store) => store.game.position.actions);
  const isLoading = useSelector((store) => store.game.loading);
  const position = useSelector((store) => store.game.position.coordinates);

  return (
    <div>
      <p>The Game {position}</p>
      <hr />
      {isLoading && (
        <Typewriter
          key={positionDescription}
          onInit={(typewriter) => {
            typewriter.changeDelay(60).typeString("Loading...").start();
          }}
        />
      )}
      {!isLoading && (
        <>
          <Typewriter
            key={positionDescription}
            onInit={(typewriter) => {
              typewriter
                .changeDelay(30)
                .typeString(
                  `${positionDescription}${"\n"}${actions
                    .map((desc) => desc.description)
                    .join("\n")}`
                )
                .start();
            }}
          />
          {actions.map((action, index) => (
            <Actions key={index} action={action} />
          ))}
          {actions.length === 0 && <GameOver />}
          {/* <ActionsAlt actions={actions} /> */}
        </>
      )}
    </div>
  );
};

export default Game;
