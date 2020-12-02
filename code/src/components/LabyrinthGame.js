import React, { useState } from "react";
import { useSelector } from "react-redux";

import { fetchLabyrinthData, fetchDirectionData } from "../reducers/labyrinth";

import { PlayerInput } from "./PlayerInput"
import { StartLabyrinthButton } from "./StartLabyrinthButton";
import { DirectionButton } from "./DirectionButtons";

export const LabyrinthGame = ({ setGameCoordinates }) => {
  const description = useSelector((store) => store.labyrinth.content);
  const loading = useSelector((state) => state.ui.loading);
  const username = useSelector((store) => store.labyrinth.content);

  const [startButtonVisible, setStartButtonVisible] = useState(false);
  const [nameInputVisible] = useState(true);

  setGameCoordinates(description.coordinates);

  return (
    loading === false && (
      <section>
        {/*Player-input*/}
        {nameInputVisible && (
          <PlayerInput setStartButtonVisible={setStartButtonVisible} />
        )}
      {startButtonVisible && (
        <div>
          <p>Hello</p>
          <StartLabyrinthButton 
            action={() => fetchLabyrinthData(username)}
            text="Start"
          />
        </div>
      )}

        <p>{description.description}</p>
        {description.coordinates && (
          <p>Coordinates:{description.coordinates}</p>
        )}

        {
          ///Buttons for move in different directions
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