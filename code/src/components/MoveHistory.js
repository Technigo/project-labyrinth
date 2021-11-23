import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInitialData, fetchNavigationData } from "../reducers/quest";
import { LoadingIndicator } from "./LoadingIndicator";

const Move = ({ move }) => {
  return (
    <div style={{ border: "1px solid #eee" }}>
      <div>coordinates: {move.coordinates}</div>
      {move.description}
    </div>
  );
};

export const MoveHistory = () => {
  const moves = useSelector((state) => state.quest.items);
  return (
    <div>
      <h2>history</h2>
      {moves.map((move, i) => (
        <Move key={i} move={move} />
      ))}
    </div>
  );
};
