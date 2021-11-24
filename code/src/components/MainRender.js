import React from "react";
import { useSelector } from "react-redux";

// components

import { QuestBody } from "./QuestBody";
import { LandingPage } from "./LandingPage";
import { Opps } from "components/Opps";
import { MoveHistory } from "./MoveHistory";

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
          <div className="players-name">{questName}'s quest</div>
          <QuestBody />
          <MoveHistory />
        </>
      )}
    </>
  );
};
