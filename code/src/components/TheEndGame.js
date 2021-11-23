import React from "react";
import { useSelector } from "react-redux";
 
export const TheEndGame = ({ description }) => {
  const currentUser = useSelector((state) => state.gamestate.username);
// p description gets duplicated in the end on live server.
  return (
    <>
      <p>Congratulations {currentUser}, you finished the game!</p>
      <p>{description}</p>
    </>
  );
};
