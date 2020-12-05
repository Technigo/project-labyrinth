import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { GoBackButton } from "lib/GoBackButton";

const DescriptionContainer = styled.div`
  display: flex;
`;

export const ActionsDescription = () => {
  const actionDescription = useSelector((store) => store.game.play.actions);
  console.log(`Actions array: ${actionDescription}`);

  return (
    <DescriptionContainer>
      {actionDescription.map((action) => {
        return <p key={action.description}>{action.description}</p>;
      })}
      <GoBackButton />
    </DescriptionContainer>
  );
};
