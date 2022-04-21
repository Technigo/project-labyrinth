import Start from "components/Start";
import Game from "components/Game";
import Summary from "components/Summary";
import React from "react";
import { createGlobalStyle } from "styled-components";

import { useSelector } from "react-redux";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 18px;
    color: white;
    background-color: black;
    box-sizing: border-box;
    font-family: Inconsolata, monospace;;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    body {
      width: 768px;
    }
  }

  main {
    display: grid;
    align-content: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
  }
`;

export const App = () => {
  const hasStarted = useSelector((state) => state.gameplay.username);
  const isOver = useSelector((state) => state.gameplay.question.actions?.length === 0);

  return (
    <>
      <GlobalStyle />
      <main>
        {!hasStarted && <Start />}
        {hasStarted && !isOver && <Game />}
        {hasStarted && isOver && <Summary />}
      </main>
    </>
  );
};
