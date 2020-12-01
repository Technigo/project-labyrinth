import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

// Functions
import { fetchDirectionData, fetchLabyrinthData } from '../reducers/labyrinth';

// Components
import { Button } from './Button';
import { NameInput } from './NameInput';

// ----------------------------------------------------------------

export const Labyrinth = () => {
  const content = useSelector((store) => store.labyrinth.content);
  const username = useSelector((store) => store.labyrinth.username);
  const isLoading = useSelector((state) => state.ui.isLoading);

  const [startButtonVisible, setStartButtonVisible] = useState(false);
  const [nameInputVisible, setNameInputVisible] = useState(true);

  // const handleStartButton = () => {
  //   fetchLabyrinthData(username).then(() => {
  //     setStartButtonVisible(false);
  //     setNameInputVisible(false);
  //   });
  // };

  return (
    isLoading === false && (
      <Wrapper>
        {/* Name-input */}
        {nameInputVisible && (
          <NameInput setStartButtonVisible={setStartButtonVisible} />
        )}

        {/* Start-button */}
        {startButtonVisible && (
          <>
            <p>Hello {username}, are you ready to start your journey?</p>
            <Button
              action={() => fetchLabyrinthData(username)}
              text="Start button"
            />
          </>
        )}

        {/* Descriptive text */}
        <p>{content.description}</p>

        {/* Coordinates */}
        {content.coordinates && <p>Coordinates:{content.coordinates}</p>}

        {/* Direction-buttons ---- conditionally rendering on the coordinates */}
        {content.coordinates !== undefined &&
          content.actions.map((action) => (
            <Button
              action={() =>
                fetchDirectionData({
                  direction: action.direction,
                  username: username,
                })
              }
              text={`Go ${action.direction}`}
              key={action.description}
            >
              {action.direction}
            </Button>
          ))}

        {/* Restart-button */}
        {content.coordinates === '1,3' && (
          <Button
            text="Restart journey"
            action={() => window.location.reload()}
          />
        )}
      </Wrapper>
    )
  );
};

// ----------------------------------------------------------------

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;
