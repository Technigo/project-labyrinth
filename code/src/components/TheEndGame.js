import React from "react";
import { useSelector } from "react-redux";
 
export const TheEndGame = ({ description }) => {
  const currentUser = useSelector((state) => state.gamestate.username);
  const gameStatus = useSelector((store) => store.gamestate.gameStatus);

  return (
    <>
      <p>Congratulations {currentUser}, you made it to the other side!</p>
      <p>{gameStatus.description}</p>
            <button onClick={() => window.location.reload()}>Restart</button>
    </>
  );
};
