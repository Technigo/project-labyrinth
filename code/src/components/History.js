import React from "react";
import { useSelector } from "react-redux";

const History = () => {
  const history = useSelector((store) => store.game.history);

  return <div>{history.map((item) => item.description)}</div>;
};

export default History;
