import React from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingIndicator from "./LoadingIndicator";

import { nextStep } from "reducers/labyrinth";

import End from "./End";

const Gamepage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.labyrinth.loading);
  const description = useSelector(
    (store) => store.labyrinth.gameStatus.description
  );
  const coordinates = useSelector(
    (store) => store.labyrinth.gameStatus.coordinates
  );
  const actions = useSelector((store) => store.labyrinth.gameStatus.actions);

  const handleClick = (type, direction) => {
    dispatch(nextStep(type, direction));
  };

  const GameCard = ({ description, type, direction }) => (
    <div className="main-2">
      <h3 className="nes-balloon from-left nes-pointer">{description}</h3>
      <div className="direction-wrapper">
        <button
          id="direction"
          className="nes-btn is-primary"
          onClick={() => handleClick(type, direction)}
        >
          {type} {direction}
        </button>
      </div>
    </div>
  );
  return (
    <div className="main">
      {isLoading && <LoadingIndicator />}
      {!isLoading && (
        <div className="content">
          {actions.length !== 0 && (
            <>
              <div className="bordered">
                <h3 className="nes-container is-rounded is-dark">
                  {description}
                </h3>
              </div>
              <div className="position-wrapper">
                <h3 className="position-text">Coordinates:</h3>

                <h3 className="nes-badge">
                  <span className="is-success">{coordinates}</span>
                </h3>
              </div>
              <div className="img-container">
                <img
                  className="cavern"
                  src="https://i.ibb.co/W3D338W/cavern.png"
                  alt="cavern"
                />
              </div>
            </>
          )}
          {actions.length === 0 ? (
            <div>
              <End />
            </div>
          ) : (
            actions.length > 0 &&
            actions.map((item) => <GameCard key={item.direction} {...item} />)
          )}
        </div>
      )}
    </div>
  );
};

export default Gamepage;
