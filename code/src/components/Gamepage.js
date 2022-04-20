import React from "react";
import { useSelector } from "react-redux";

//import { nextStep } from "reducers/labyrinth";

const Gamepage = () => {
  const { act}
  // const dispatch = useDispatch();

  const gamedescription = useSelector(
    (store) => store.labyrinth.gameStatus.description
  );
  const gamecoordinates = useSelector(
    (store) => store.labyrinth.gameStatus.coordinates
  );
  const actions = useSelector((store) => store.labyrinth.gameStatus.actions);

  return (
    <div>
      <h1>{gamedescription}</h1>
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
      })}
    </div>
  );
};

export default Gamepage;
