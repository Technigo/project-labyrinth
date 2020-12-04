import React, { useState } from "react";
import { useSelector } from "react-redux";

import { fetchLabyrinthData, fetchDirectionData } from "../reducers/labyrinth";

import { PlayerInput } from "./PlayerInput"
import { StartLabyrinthButton } from "./StartLabyrinthButton";
import { DirectionButtons } from "./DirectionButtons";

export const LabyrinthGame = ({ setGameCoordinates }) => {
  const description = useSelector((store) => store.labyrinth.content);
  const username = useSelector((store) => store.labyrinth.content);
  const loading = useSelector((state) => state.ui.loading);

  const [startButtonVisible, setStartButtonVisible] = useState(false);
  const [nameInputVisible] = useState(true);

  setGameCoordinates(description.coordinates);

  return (
    loading === false && (
      <section>
        {description.coordinates === undefined && (
          <>
            {/*Player-input*/}
            {nameInputVisible && (
              <PlayerInput setStartButtonVisible={setStartButtonVisible} />
            )}
            {startButtonVisible && (
              <div>
                <p>Hello</p>
                <StartLabyrinthButton
                  action={() => fetchLabyrinthData(username)}
                  text="Go"
                />
              </div>
            )}
          </>
        )}

        <p>{description.description}</p>

        {description.coordinates && (
          <p>Coordinates:{description.coordinates}</p>
        )}

        {
          ///Buttons for move in different directions
          description.coordinates !== undefined &&
            description.actions.map((action) => (
              
              <div key={action.description}>
                <DirectionButtons
                  direction={action.direction}
                  action={() =>
                    fetchDirectionData({
                      direction: action.direction,
                      username: username,
                    })
                  }
                />
                {/* <p>{action.description}</p> */}
              </div>
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
