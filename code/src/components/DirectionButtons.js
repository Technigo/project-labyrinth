import React from "react"
import { useDispatch } from "react-redux";

export const DirectionButtons = ({ direction, action }) => {
  const dispatch = useDispatch();

  return (
    <button 
    type="button" 
    onClick={(event) => dispatch (action(event))}
    direction={direction}
    > Go {direction} 
    </button>
  );
};


