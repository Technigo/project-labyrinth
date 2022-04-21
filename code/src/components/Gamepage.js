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
    <>
      <p>{description}</p>
      <>
        <button onClick={() => handleClick(type, direction)}>
          {type} {direction}
        </button>
      </>
    </>
  );
  return (
    <>
      <div>
        {isLoading && <LoadingIndicator />}
        {!isLoading && (
          <div>
            {actions.length !== 0 && (
              <>
                <h1>{description}</h1>
                <p>Your position is {coordinates}</p>
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
    </>
  );
};

export default Gamepage;
