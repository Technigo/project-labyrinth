import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Start from "./Start";
import gameplay from "reducers/gameplay";

const Summary = () => {
  const finalDescription = useSelector((state) => state.gameplay.question.description);
  const dispatch = useDispatch();

  return (
    <>
      <h2>{finalDescription}</h2>
      <button type="button" onClick={() => dispatch(gameplay.actions.restart())}>
        Restart
      </button>
    </>
  );
};

export default Summary;
