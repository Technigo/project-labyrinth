import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Direction } from "./Direction";
import { EndPage } from "./EndPage";

export const GamePage = () => {
  const labyrinth = useSelector((store) => store.labyrinth.location);
  const username = useSelector((store) => store.labyrinth.username);
  const [direction, setDirection] = useState("");


  if (labyrinth.actions.length === 0) {
    return <EndPage />;
  } else {
    return (
      <div>
       
        <p>{labyrinth.description}</p>
        <p>{labyrinth.coordinates}</p>
        {labyrinth.actions.map((item) => (
          <Direction
            direction={item.direction}
            key={item.description}
            description={item.description}
            direction={item.direction}
            setdDirection={setDirection}
          />
        ))}
      </div>
    );
  }

};
