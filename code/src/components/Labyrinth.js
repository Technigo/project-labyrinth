import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

// Functions
import { fetchDirectionData, fetchLabyrinthData } from '../reducers/labyrinth';

// Components
import { Button } from './Button';
import { NameInput } from './NameInput';
import { DirectionButtons } from './DirectionButtons';
import { InnerFlexWrapper, OuterFlexWrapper } from '../styling/GlobalStyles';
import { labyrinth } from '../reducers/labyrinth';

// images
import { img_0_1 } from '../styling/ImageSources';

// ----------------------------------------------------------------

export const Labyrinth = ({ setCurrentCoordinates }) => {
  const dispatch = useDispatch();
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

  // Check if username is stored in local storage
  const currentUsername = localStorage.getItem('username')
    ? localStorage.getItem('username')
    : username;

  // Restart game - reset all values and reload
  const handleRestartButton = () => {
    dispatch(labyrinth.actions.setUsername(''));
    localStorage.setItem('labyrinth', '{}');
    localStorage.setItem('username', '');
    window.location.reload();
  };

  // Send current coordinates to parent component for styling
  setCurrentCoordinates(content.coordinates);

  return (
    isLoading === false && (
      <MainWrapper>
        <InnerWrapper>
          {/* Removes the NameInput and start buttons when the journey has started */}
          {content.coordinates === undefined && (
            <>
              {/* Name-input */}
              {nameInputVisible && (
                <NameInput setStartButtonVisible={setStartButtonVisible} />
              )}

              {/* Start-button */}
              {startButtonVisible && (
                <InnerFlexWrapper>
                  <p>{currentUsername}, are you ready to start your journey?</p>
                  <Button
                    action={() => fetchLabyrinthData(currentUsername)}
                    text="Yes, start the game"
                  />
                </InnerFlexWrapper>
              )}
            </>
          )}

          {/* Nice picture when coming to the end! */}
          {content.coordinates === '1,3' && (
            <TreasureImage src="https://images.unsplash.com/photo-1449049607083-e29383d58423?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyZWFzdXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          )}

          {/* Coordinates */}
          {/* {content.coordinates && (
            <CoordinatesText>
              Coordinates: {content.coordinates}
            </CoordinatesText>
          )} */}

          {/* Descriptive text */}
          <DescriptionText>{content.description}</DescriptionText>

          {/* Direction-buttons */}
          {content.coordinates !== undefined &&
            content.actions.map((action) => (
              <InnerFlexWrapper key={action.description}>
                <DirectionButtons
                  direction={action.direction}
                  action={() =>
                    fetchDirectionData({
                      direction: action.direction,
                      username: currentUsername,
                    })
                  }
                />
                <ActionText>
                  You look to the {action.direction}. {action.description}
                </ActionText>
              </InnerFlexWrapper>
            ))}

          {/* Restart-button */}
          {content.coordinates === '1,3' && (
            <Button text="Restart journey" action={handleRestartButton} />
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
  background-size: cover;
  background-image: url(${img_0_1});

  & p {
    line-height: 1.4;
    color: #fff;
  }
`;

const InnerWrapper = styled.div`
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TreasureImage = styled.img`
  width: 200px;
  height: 210px;
  margin: 0;
  border-radius: 50%;
`;

const DescriptionText = styled.p`
  line-height: 1.4;
`;

const ActionText = styled(DescriptionText)`
  font-size: 12px;
  font-style: italic;
`;

const CoordinatesText = styled.p`
  font-size: 12px;
  color: #595959;
`;
