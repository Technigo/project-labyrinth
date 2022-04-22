import React from "react";
import { useSelector } from "react-redux";

import { TextContainer } from "./StartScreen";
import { GameContainer } from "./GameScreen";

export const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    isLoading && (
      <>
        <GameContainer>
          <TextContainer>
            <div>!! Loading !!</div>
          </TextContainer>
        </GameContainer>
      </>
    )
  );
};
