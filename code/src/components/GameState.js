import React from "react";
import { useSelector } from "react-redux";
import { Action } from "./Action";
import styled from "styled-components";
import { History } from "./History";

export const GameState = () => {
  const username = useSelector((store) => store.game.username);

  const description = useSelector((store) => store.game.gameState.description);
  const coordinates = useSelector((store) => store.game.gameState.coordinates);
  const actions = useSelector((store) => store.game.gameState.actions);

  return (
    <div>
      <p>{username && `Player: ${username}`}</p>
      <p>{coordinates && `Your coordinates: ${coordinates}`}</p>
      <p>{description && description}</p>

      <p>{actions.length > 0 && `You have ${actions.length} option(s):`}</p>
      <div>
        {actions &&
          actions.map((action) => {
            return <Action key={action.description} {...action} />;
            // Spreading action keys as props ---> i.e. description, type, direction
          })}
      </div>
      <History />
    </div>
  );
};
