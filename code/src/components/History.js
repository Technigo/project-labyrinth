import React from "react";
import { useSelector } from "react-redux";

import { HistoryHeading, HistoryText } from "lib/Text";
import styled from "styled-components/macro";

const HistoryContainer = styled.div`
  @media (max-width: 668px) {
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const History = () => {
  const history = useSelector((store) => store.game.history);

  return (
    <HistoryContainer>
      {history.length > 0 && <HistoryHeading>Actions:</HistoryHeading>}
      {history
        .slice(-9)
        .reverse()
        .map((item) => (
          <HistoryText>
            {item.type}d {item.direction}
          </HistoryText>
        ))}
    </HistoryContainer>
  );
};
