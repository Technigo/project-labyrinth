import React from "react";
import { useSelector } from "react-redux";

import { Divider, TextContainer, Text } from "../styling/styling";

export const TheEnd = ({ description }) => {
  const currentUser = useSelector((store) => store.gameState.userName);

  return (
    <>
      <p>Congratulations {currentUser}, you finished the game!</p>
      <Divider />
      <p>{description}</p>
    </>
  );
};
