import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { LoadingIndicator } from "../components/LoadingIndicator";
import { moveFurther } from "../reducers/game";



const Game = () => {
  const places = useSelector(state => state.game.places)
  const end = useSelector(state => state.game.places.actions.length === 0)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleMoveFurther = (type, direction) => {
    dispatch(moveFurther(type, direction))
  }

  return (
    <div>
      <LoadingIndicator />
      <p>{places.description}</p>
      {places.actions.map((item) =>
      <div key={item.direction}>
        <p>{item.description}</p>
        <button
          type="submit"
          onClick={() => handleMoveFurther(item.type, item.direction)}
        >{item.type} {item.direction}</button>
      </div>)}
      {end && 
      <button
        type="button"
        onClick={() => navigate('/')}
      >Restart</button>}
    </div>
  );
};

export default Game;
