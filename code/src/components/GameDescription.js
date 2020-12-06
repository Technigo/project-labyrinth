import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// --- components
import { Coordinates } from "components/Coordinates";
import { Actions } from "components/Actions";

// --- library
import { Button } from "lib/Button";

// --- STYLED COMPONENTS ---

const Description = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px;
`;

const DescriptionHeading = styled.h1`
  background: rgba(217, 208, 193, 0.45);
  border-radius: 5px;
  font-size: 25px;
  margin: auto 5px;
`;

export const GameDescription = () => {
  //display the description text
  const descriptionText = useSelector((store) => store.game.play.description);

  return (
    <>
      <Description>
        <DescriptionHeading>{descriptionText}</DescriptionHeading>
      </Description>
      <Coordinates />
      {/* display button only at the start of the game */}
      {!descriptionText && <Button />}
      {descriptionText && <Actions />}
    </>
  );
};
