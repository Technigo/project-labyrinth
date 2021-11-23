import React from "react";
import { useSelector } from "react-redux";

// components
import { LoadingIndicator } from "./LoadingIndicator";
import { Start } from "./Start";
// import { MoveHistory } from "./MoveHistory";
import { LandingPage } from "./LandingPage";
import { Opps } from "components/Opps";

export const MainRender = () => {
  const questName = useSelector((state) => state.quest.player);
  const errorStatus = useSelector((store) => store.ui.error);

  if (errorStatus === true) {
    return <Opps />;
  }

  return (
    <>
      {questName === "" ? (
        <LandingPage />
      ) : (
        <>
          <LoadingIndicator />
          <Start />
          {/* <MoveHistory /> */}
        </>
      )}
    </>
  );
};
