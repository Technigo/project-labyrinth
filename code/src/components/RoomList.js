import React from "react";
import { useSelector } from 'react-redux'

//import {game} from '../reducers/game'

import { StartRoom } from "./StartRoom";
import { GameRoom } from "./GameRoom";
import { LoadingIndicator } from "./LoadingIndicator";

export const RoomList = () => {
  const startGame = useSelector((store) => store.game.isGameStarted)

  return (
    <section>
      {!startGame && <StartRoom />}
      <GameRoom />
      <LoadingIndicator />
    </section>
  );
};
