import React from "react";
import { useSelector } from "react-redux";

import { fetchDirectionData, fetchLabyrinthData } from "../reducers/labyrinth";

import { FetchLabyrinthButton } from "./FetchLabyrinthButton";

export const LabyrinthGame = () => {
  const description = useSelector((store) => store.labyrinth.content);
  const loading = useSelector((state) => state.ui.loading);

  return (
    <section>
      <FetchLabyrinthButton />
      <p>
        {
          description.description
          //den första description refererar till consten, den andra hämtar värdet för description i api:t
        }
      </p>
      {description.coordinates && <p>Coordinates:{description.coordinates}</p>}
    </section>
  );
};
