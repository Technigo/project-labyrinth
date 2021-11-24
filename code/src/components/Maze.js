import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNextStep } from "../reducers/game"; //fetching the second thunk(fetch-request)

const Maze = () => {
  const { description, coordinates, actions } = useSelector(
    (state) => state.game.gameStatus
  );
  const dispatch = useDispatch();

  const handleButtonClick = (type, direction) => {
    dispatch(fetchNextStep(type, direction));
  };
};
