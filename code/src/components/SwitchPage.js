import React from "react";
import { useSelector } from "react-redux";
import { ui } from "reducers/ui";
import { EndPage } from "./EndPage";
import { GamePage } from "./GamePage";
import { StartPage } from "./StartPage";


export const SwitchPage = () => {

  const labyrinth = useSelector((store) => store.labyrinth.location);
  const loadingState = useSelector((store) => store.labyrinth.loading);



  return (
    <div>
  

      {!loadingState && labyrinth === null && <StartPage />}
      {!loadingState && labyrinth !== null && <GamePage />}

    

    </div>
  );
};
