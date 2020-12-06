import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { fetchLabyrinthData, fetchDirectionData } from "../reducers/labyrinth";

import { PlayerInput } from "./PlayerInput";
import { StartLabyrinthButton } from "./StartLabyrinthButton";
import { DirectionButtons } from "./DirectionButtons";

import {
  Container,
  InnerContainer,
  StartContainer,
  Text
} from "styling/GlobalStyle";

export const LabyrinthGame = ({ setGameCoordinates }) => {
  const description = useSelector((store) => store.labyrinth.content);
  const username = useSelector((store) => store.labyrinth.username);
  const loading = useSelector((state) => state.ui.loading);

  const [startButtonVisible, setStartButtonVisible] = useState(false);
  const [nameInputVisible] = useState(true);

  setGameCoordinates(description.coordinates);

  return (
    loading === false && (
      <Container id="start">
        <InnerContainer>
          {description.coordinates === undefined && (
            <>
              {/*Player-input*/}
              {nameInputVisible && (
                <PlayerInput setStartButtonVisible={setStartButtonVisible} />
              )}

              {startButtonVisible && (
                <StartContainer>
                  <StartText>Leave them all behind {username}</StartText>
                  <StartLabyrinthButton
                    action={() => fetchLabyrinthData(username)}
                    text="Run!"
                  />
                </StartContainer>
              )}
            </>
          )}
          <Text>{description.description}</Text>
          {description.coordinates && (
            <CoordinateText>
              Current coordinates:{description.coordinates}
            </CoordinateText>
          )}

          {description.coordinates !== undefined &&
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
              </div>
            ))}
          {description.coordinates === "1,3" && (
            <button
              text="Restart journey"
              action={() => window.location.reload()}
            ></button>
          )}
        </InnerContainer>
      </Container>
    )
  );
};

const StartText = styled.p`
  color: #8a2be2;
  font-size: 20px;
  margin: 0 20px;
  padding: 25px 0 10px 0;
  font-family: "Major Mono Display", monospace;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const CoordinateText = styled.p`
  color: #06a10b;
  padding: 10px 0;
`;
