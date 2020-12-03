import React, { useState } from "react";
import { useSelector } from "react-redux";

import { fetchDirectionData } from "../reducers/labyrinth";

import { PlayerInput } from "./PlayerInput"
import { FetchLabyrinthButton } from "./FetchLabyrinthButton";
import { DirectionButtons } from "./DirectionButtons";

export const LabyrinthGame = ({ setGameCoordinates }) => {
  const description = useSelector((store) => store.labyrinth.content);
  const loading = useSelector((state) => state.ui.loading);

  return (
    loading === false && (
      <section>
        <FetchLabyrinthButton />
        <p>{description.description}</p>
        {description.coordinates && (
          <p>Coordinates:{description.coordinates}</p>
        )}

        {
          ///Knappar för att gå vidare
          description.coordinates &&
            description.actions.map((action) => (
              <>
                <DirectionButton
                  direction={action.direction}
                  key={action.description}
                  action={() =>
                    fetchDirectionData({
                      direction: action.direction,
                    })
                  }
                />
                <p>{action.description}</p>
              </>
            ))
        }
        {description.coordinates === "1,3" && (
          <button
            text="Restart journey"
            action={() => window.location.reload()}
          ></button>
        )}
      </section>
    )
  );
};