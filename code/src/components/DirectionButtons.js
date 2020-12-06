import React from "react";
import { useDispatch } from "react-redux";

import { DirectionButton } from "styling/lib/Buttons";
import { InnerContainer, ButtonText } from "styling/GlobalStyle";

export const DirectionButtons = ({ direction, action }) => {
  const dispatch = useDispatch();

  return (
    <InnerContainer>
      <DirectionButton
        onClick={(event) => dispatch(action(event))}
        direction={direction}
      >
        <ButtonText direction={direction}>Run {direction}</ButtonText>
      </DirectionButton>
    </InnerContainer>
  );
};