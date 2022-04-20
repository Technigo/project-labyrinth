import React from "react";
import { useSelector, useDispatch } from "react-redux";
import gameplay from "reducers/gameplay";

const Summary = () => {
  const finalDescription = useSelector((state) => state.gameplay.question.description);
  const moves = useSelector((state) => state.gameplay.moves);
  const dispatch = useDispatch();

  return (
    <>
      <h2>{finalDescription}</h2>
			<h3>Your path:</h3>
      {moves.map((move, index) => (
        <p key={index}>{move}</p>
      ))}
      <button type="button" onClick={() => dispatch(gameplay.actions.restart())}>
        Restart
      </button>
    </>
  );
};

export default Summary;
