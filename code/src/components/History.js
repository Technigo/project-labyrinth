import React from "react";
import { useSelector } from "react-redux";
import { HistoryHeading, HistoryText } from "lib/Text";

export const History = () => {
  const history = useSelector((store) => store.game.history);

  return (
    <div>
      <HistoryHeading>Actions:</HistoryHeading>
      {history
        .slice(-9)
        .reverse()
        .map((item) => (
          <HistoryText>
            {item.type}d {item.direction}
          </HistoryText>
        ))}
    </div>
  );
};
