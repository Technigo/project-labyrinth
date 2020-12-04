import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";

const UsernamePlaceholder = styled.div`
  grid-area: status;
  justify-self: start;
`;

export const Username = () => {
  const stateUsername = useSelector((state) => state.game.username);

  return <UsernamePlaceholder>Username: {stateUsername}</UsernamePlaceholder>;
};
