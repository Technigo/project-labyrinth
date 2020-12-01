import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

// Functions
import { fetchDirectionData, fetchLabyrinthData } from '../reducers/labyrinth';

// Components
import { Button } from './Button';
import { NameInput } from './NameInput';
import { DirectionButtons } from './DirectionButtons';
import {
  Wrapper,
  InnerFlexWrapper,
  OuterFlexWrapper,
} from '../styling/GlobalStyles';

// ----------------------------------------------------------------

export const Labyrinth = ({ setCurrentCoordinates }) => {
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

  setCurrentCoordinates(content.coordinates);

  return (
    isLoading === false && (
      <MainWrapper>
        <InnerWrapper>
          {/* Name-input */}
          {nameInputVisible && (
            <NameInput setStartButtonVisible={setStartButtonVisible} />
          )}

          {/* Start-button */}
          {startButtonVisible && (
            <InnerFlexWrapper>
              <p>Hello {username}, are you ready to start your journey?</p>
              <Button
                action={() => fetchLabyrinthData(username)}
                text="Start button"
              />
            </InnerFlexWrapper>
          )}

          {/* Descriptive text */}
          <p>{content.description}</p>

          {/* Coordinates */}
          {content.coordinates && <p>Coordinates:{content.coordinates}</p>}
          <InnerFlexWrapper>
            {/* Direction-buttons ---- conditionally rendering on the coordinates */}
            {content.coordinates !== undefined &&
              content.actions.map((action) => (
                <DirectionButtons
                  key={action.description}
                  direction={action.direction}
                  action={() =>
                    fetchDirectionData({
                      direction: action.direction,
                      username: username,
                    })
                  }
                />
                // <Button
                //   action={() =>
                //     fetchDirectionData({
                //       direction: action.direction,
                //       username: username,
                //     })
                //   }
                //   text={`Go ${action.direction}`}
                //   key={action.description}
                // />
              ))}
          </InnerFlexWrapper>

          {/* Restart-button */}
          {content.coordinates === '1,3' && (
            <Button
              text="Restart journey"
              action={() => window.location.reload()}
            />
          )}
        </InnerWrapper>
      </MainWrapper>
    )
  );
};

// ----------------------------------------------------------------

const MainWrapper = styled(OuterFlexWrapper)`
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  text-align: center;
`;

const InnerWrapper = styled.div`
  max-width: 80vw;
`;
