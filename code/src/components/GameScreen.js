import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchMove } from "../reducers/directions";
import FinalNeonCat from "./FinalNeonCat";

const GameScreen = () => {
  const step = useSelector((store) => store.directions.step);

  const dispatch = useDispatch();

  const onBtnClick = (type, direction) => {
    dispatch(fetchMove(type, direction));
  };

  return (
    <section className={step.coordinates === '1,3' ? "nes-container game-container end-container" : "nes-container game-container"}>
      <div className="instruction-container">
        <h4>Coordinates {step.coordinates}</h4>
        <h3>{step.description}</h3>
      </div>
      <div className="options-wrapper">
        {step.actions.map((action) => (
          <div className="option-container" key={action.description}>
            <p>{action.description}</p>
            <button className="nes-btn option-btn" onClick={() => onBtnClick(action.type, action.direction)}>
              MEOW <br/>
              {action.direction.toUpperCase()}
            </button>
          </div>
        ))}
      </div>
      {step.coordinates === "1,3" && <FinalNeonCat />}
    </section>
  );
};

export default GameScreen;
