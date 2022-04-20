import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loading, Loading } from "./Loading";
import { nextStep } from "reducers/labyrinth";

const Gamepage = () => {
  const dispatch = useDispatch();

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
        {loading && <Loading />}
        {!loading && (
          <div>
            {actions.length !== 0 && (
              <>
                <h1>{description}</h1>
                <p>Your position is {coordinates}</p>
              </>
            )}
            {actions.length === 0 ? (
              <div>This is the end of the game</div>
            ) : (
              actions.length > 0 &&
              actions.map((item) => <GameCard {...item} />)
            )}
          </div>
        )}
      </div>
      {/* <h1>{gamedescription}</h1>
      <h2>you are at coordinates {gamecoordinates}</h2>
      {actions.map((action) => {
        return (
          <div>
            <h1>{action.description}</h1>
            <button>
              {action.type} {action.direction}
            </button>
          </div>
        );
      })} */}
    </>
  );
};

export default Gamepage;
