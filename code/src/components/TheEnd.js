import React from "react";
import { useSelector } from "react-redux";

import { Description, Divider } from "../styling/styling";

export const TheEnd = ({ description }) => {
  const currentUser = useSelector((store) => store.gameState.userName);

  return (
    <>
      <p>Congratulations {currentUser}, you finished the game!</p>
      <Divider />
      <Description>{description}</Description>
    </>
  );
};
