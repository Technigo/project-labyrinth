import Start from "components/Start";
import Game from "components/Game";
import Summary from "components/Summary";
import React from "react";
import { createGlobalStyle } from "styled-components";

import { useSelector } from "react-redux";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: white;
    background-color: black;
    font-family: Inconsolata, monospace;;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0 auto;
    display: block;
    justify-content: center;
    width: 100%;
  }

  @media (min-width: 768px) {
    body {
      width: 768px;
    }
  }

  main {
    box-sizing: border-box;
    padding: 0 20px;
    display: grid;
    align-content: center;
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
