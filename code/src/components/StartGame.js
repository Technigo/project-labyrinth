import React from "react";
import { useSelector } from "react-redux";

import Game from "components/Game";
import Username from "components/Username";
import { Loading } from "./Loading";

const StartGame = () => {
  const userName = useSelector((store) => store.game.username);
  const loading = useSelector((store) => store.ui.loading);

  return (
    <>
      {loading && <Loading />}
      {!userName ? <Username /> : <Game />}
    </>
  );
};
export default StartGame;
