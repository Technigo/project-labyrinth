import React from "react";
import { useSelector } from "react-redux";

export const History = () => {
  const history = useSelector((store) => store.game.history);

  console.log(history);
  return (
    <div>
      {history.map((item) => (
        <p>
          {item.type}d {item.direction}
        </p>
      ))}
    </div>
  );
};
