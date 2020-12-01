import React from "react";
import styled from "styled-components/macro";

import { useSelector } from "react-redux";

export const Square = ({ value }) => {
  const gamePosition = useSelector(
    store => store.game.currentGameState.gameData.coordinates
  );
  return (
    <div className={value === gamePosition ? "red" : "black"}>{value}</div>
  );
};
