import React, { useState } from "react";
import { useSelector } from "react-redux";

import { fetchDirectionData } from "../reducers/labyrinth";

import { FetchLabyrinthButton } from "./FetchLabyrinthButton";

export const LabyrinthGame = () => {
  const description = useSelector((store) => store.labyrinth.content);
  const loading = useSelector((state) => state.ui.loading);

  return (
    loading === false && (
    <section>
      <FetchLabyrinthButton />

      <p>
        {//den första description refererar till consten, den andra hämtar värdet för description i api:t
          description.description
        }
      </p>
      {description.coordinates && <p>Coordinates:{description.coordinates}</p>}

      {description.coordinates !== undefined &&
        description.actions.map((action) => (
          <button
            action={() =>
              fetchDirectionData({
                direction: action.direction,
              })
            }
            text={`Go ${action.direction}`}
            key={action.description}
          >Go {action.direction}{action.description}</button>
        ))}
    </section>
    )
  );
};