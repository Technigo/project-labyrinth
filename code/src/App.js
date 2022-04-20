import Start from "components/Start";
import Game from "components/Game";
import Summary from "components/Summary";
import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

export const App = () => {
  const hasStarted = useSelector((state) => state.gameplay.username);
  const isOver = useSelector((state) => state.gameplay.question.actions?.length === 0);

  return (
    <main>
      {!hasStarted && <Start />}
      {hasStarted && !isOver && <Game />}
      {hasStarted && isOver && <Summary />}
    </main>
  );
};
