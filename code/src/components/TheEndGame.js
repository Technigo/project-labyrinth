import React from "react";
import { useSelector } from "react-redux";
 
export const TheEndGame = ({ description }) => {
  const currentUser = useSelector((store) => store.gamestate.username);

  return (
    <>
      <p>Congratulations {currentUser}, you finished the game!</p>

      <p>{description}</p>
    </>
  );
};
