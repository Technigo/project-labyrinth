import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Direction } from "./Direction";

export const GamePage = () => {
  const labyrinth = useSelector((store) => store.labyrinth.location);
  const username = useSelector((store) => store.labyrinth.username);
  const [direction, setDirection] = useState("");

  return (
    <div>
      <p> Welcome {username} </p>
      <p> {labyrinth.description} </p>
      <p> {labyrinth.coordinates} </p>
      


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
};
