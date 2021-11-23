import React from "react";
import { useSelector } from "react-redux";
//import {LoadingPage} from './LoadingPage'

const GamePage = () => {
  //   const userName = useSelector((state) => state.game.setUserName);
  const gameStatus = useSelector((state) => state.game.setGameStatus);
  const actions = useSelector((state) => state.game.gameStatus.actions);
  //   const goBack = useSelector((state) => state.game.set.setGoBack);

  //   const dispatch = useDispatch();

  return (
    <>
      {actions.map((action) => (
        <div key={action.description}>
          <p>{action.description}</p>
        </div>
      ))}
    </>
  );
};

export default GamePage;
