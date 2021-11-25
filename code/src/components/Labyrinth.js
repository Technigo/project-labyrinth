import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextStep, game } from "../reducers/game";

// data is collected from the slice (game) with currentposition from the initialstate.
export const Labyrinth = () => {
  const { description, coordinates, actions } = useSelector(
    (store) => store.game.currentPosition
  );
  const dispatch = useDispatch();

  const handleButtonClick = (type, direction) => {
    dispatch(game.actions.setPreviousCoordinates(coordinates));
    // call the api, pass along type and direction to use as part of the body
    dispatch(nextStep(type, direction));
  };

  // changed the logic of direction to the opposite, to match our css grid
  const ActionCard = ({ description, type, direction }) => {
    let directionName = direction;
    if (direction === "North") {
      directionName = "South";
    } else if (direction === "South") {
      directionName = "North";
    }
    // direction-buttons here
    return (
      <div className="actionCard">
        <p>{description}</p>
        <button onClick={() => handleButtonClick(type, direction)}>
          {type} {directionName.toLowerCase()}
        </button>
      </div>
    );
  };
  // If the possible actions is only 1 (0), the user has made it out. If there are more than 1 (0) possible actions, display the actioncard featuring the content of the labyrinth
  return (
    <section className="labyrinth">
      <h3>{description}</h3>
      {actions.length === 0 && <h3>Yay you made it out!</h3>}
      {actions.length > 0 &&
        actions.map((item) => <ActionCard key={item.direction} {...item} />)}

      <div className="grid">
        {/* if coordinates match the string coordinates, the tile will be the active class */}
        <div className="row">
          <div
            className={`tile ${coordinates === "0,0" ? "active-tile" : ""}`}
          ></div>
          <div
            className={`tile ${coordinates === "1,0" ? "active-tile" : ""}`}
          ></div>
          <div
            className={`tile ${coordinates === "2,0" ? "active-tile" : ""}`}
          ></div>
          <div
            className={`tile ${coordinates === "3,0" ? "active-tile" : ""}`}
          ></div>
        </div>

        <div className="row">
          <div
            className={`tile ${coordinates === "0,1" ? "active-tile" : ""}`}
          ></div>
          <div
            className={`tile ${coordinates === "1,1" ? "active-tile" : ""}`}
          ></div>
          <div
            className={`tile ${coordinates === "2,1" ? "active-tile" : ""}`}
          ></div>
          <div
            className={`tile ${coordinates === "3,1" ? "active-tile" : ""}`}
          ></div>
        </div>

        <div className="row">
          <div
            className={`tile ${coordinates === "0,2" ? "active-tile" : ""}`}
          ></div>
          <div
            className={`tile ${coordinates === "1,2" ? "active-tile" : ""}`}
          ></div>
          <div
            className={`tile ${coordinates === "2,2" ? "active-tile" : ""}`}
          ></div>
          <div
            className={`tile ${coordinates === "3,2" ? "active-tile" : ""}`}
          ></div>
        </div>

        <div className="row">
          <div
            className={`tile ${coordinates === "0,3" ? "active-tile" : ""}`}
          ></div>
          <div
            className={`tile ${coordinates === "1,3" ? "active-tile" : ""}`}
          ></div>
          <div
            className={`tile ${coordinates === "2,3" ? "active-tile" : ""}`}
          ></div>
          <div
            className={`tile ${coordinates === "3,3" ? "active-tile" : ""}`}
          ></div>
        </div>
      </div>
    </section>
  );
};

/* 
  [0, 0, 0, 0],   x: 1, y: 3
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0]
*/
