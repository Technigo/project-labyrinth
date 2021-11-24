import React from "react";
import { useSelector } from "react-redux";
import { ui } from "reducers/ui";
import { GamePage } from "./GamePage";
import { StartPage } from "./StartPage";
import Lottie from 'react-lottie';
import animationData from "../lotties/shark";

export const SwitchPage = () => {
  const loading = useSelector((store) => store.ui.loading);
  const labyrinth = useSelector((store) => store.labyrinth.location);
  const loadingState = useSelector((store) => store.labyrinth.loading);

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
    <div>
  

      {!loadingState && labyrinth === null && <StartPage />}
      {!loadingState && labyrinth !== null && <GamePage />}

      {loading &&  <Lottie className="animationLoading"
options={defaultOptions}
height={50}
width={180}
/>
 }

    </div>
  );
};
