import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextStep, game } from "../reducers/game";

// datan hämtas från slicen här, slicen är game och currentposition är från initialstate
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

  // här byter vi direction eftersom logiken va crap. Actioncard är en component.
  const ActionCard = ({ description, type, direction }) => {
    let directionName = direction;
    if (direction === "North") {
      directionName = "South";
    } else if (direction === "South") {
      directionName = "North";
    }

    return (
      <div className="action-card">
        <p>{description}</p>
        <button onClick={() => handleButtonClick(type, direction)}>
          {type} {directionName.toLowerCase()}
        </button>
      </div>
    );
  };

  return (
    <section className="labyrinth">
      <h1>{description}</h1>
      {actions.length === 0 && <h3>Yay you made it out!</h3>}
      {actions.length > 0 &&
        actions.map((item) => <ActionCard key={item.direction} {...item} />)}

      {/* om coordinates matchar strängen med coordinates, så blir tilen aktiv */}
      <div className="grid">
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
