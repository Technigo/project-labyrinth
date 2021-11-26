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

// The Epic 2  by Rafael Krux
// Link: https://filmmusic.io/song/5384-the-epic-2-
// License: http://creativecommons.org/licenses/by/4.0/
//  Music promoted on https://www.chosic.com/free-music/all/

// Forest Walk by Alexander Nakarada | https://www.serpentsoundstudios.com
// Music promoted by https://www.chosic.com/free-music/all/
// Attribution 4.0 International (CC BY 4.0)
// https://creativecommons.org/licenses/by/4.0/
