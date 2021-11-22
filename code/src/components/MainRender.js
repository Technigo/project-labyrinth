import React from "react";
import { useSelector } from "react-redux";

// components
import { LoadingIndicator } from "./LoadingIndicator";
import { Start } from "./Start";
import { LandingPage } from "./LandingPage";

export const MainRender = () => {
  const questName = useSelector((state) => state.quest.player);

  return (
    <>
      {questName === "" ? (
        <LandingPage />
      ) : (
        <>
          <LoadingIndicator />
          <Start />
        </>
      )}
    </>
  );
};
