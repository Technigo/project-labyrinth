import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

// Reducers & Functions
import { fetchLabyrinthData } from '../reducers/labyrinth';
import { labyrinth } from '../reducers/labyrinth';

// Components
import { Button } from './Button';
import { NameInput } from './NameInput';
import { DirectionButtons } from './DirectionButtons';
import { Header } from './Header';

// Styling & Images
import { InnerFlexWrapper, OuterFlexWrapper } from '../styling/GlobalStyles';
import { 
  imgURL_start, 
  imgURL_0_0, 
  imgURL_0_1, 
  imgURL_0_2, 
  imgURL_0_3, 
  imgURL_1_0, 
  imgURL_1_1, 
  imgURL_1_3 
  } from '../styling/ImageSources';

// ----------------------------------------------------------------

export const Labyrinth = ({ setCurrentCoordinates }) => {
  const dispatch = useDispatch();
  const content = useSelector((store) => store.labyrinth.content);
  const username = useSelector((store) => store.labyrinth.username);
  const isLoading = useSelector((state) => state.ui.isLoading);

  const [startButtonVisible, setStartButtonVisible] = useState(false);
  const [nameInputVisible, setNameInputVisible] = useState(true);

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
      <MainWrapper coordinates={content.coordinates}>
        <Header />
        <InnerWrapper>
          {/* Removes the NameInput and start buttons when the journey has started */}
          {content.coordinates === undefined && (
            <>
              {/* Name-input */}
              {nameInputVisible && (
                <NameInput setStartButtonVisible={setStartButtonVisible} setNameInputVisible={setNameInputVisible} />
              )}

              {/* Start-button */}
              {startButtonVisible && (
                <InnerFlexWrapper>
                  <p>{currentUsername}, are you ready to start your journey?</p>
                  <Button
                    action={() => fetchLabyrinthData({
                      url: 'https://wk16-backend.herokuapp.com/start',
                      username: currentUsername,
                    })}
                    text="Yes, start the game"
                  />
                </InnerFlexWrapper>
              )}
            </>
          )}

          {/* Nice picture when coming to the end! */}
          {content.coordinates === '1,3' && (
            <TreasureImage src="./assets/diamond-icon.png" />
          )}

          {/* Coordinates */}
          {content.coordinates && (
            <CoordinatesText>
              Coordinates: {content.coordinates}
            </CoordinatesText>
          )} 

          {/* Descriptive text */}
          <DescriptionText>{content.description}</DescriptionText>

          {/* Direction-buttons */}
          {content.coordinates !== undefined &&
            content.actions.map((action) => (
              <InnerFlexWrapper key={action.description}>
                <DirectionButtons
                  direction={action.direction}
                  action={() =>
                    fetchLabyrinthData({
                      url: 'https://wk16-backend.herokuapp.com/action',
                      username: currentUsername,
                      type: 'move',
                      direction: action.direction,
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
  background-image: url( ${(props) => props.coordinates === '1,3' ? imgURL_1_3 : props.coordinates === '1,1' ? imgURL_1_1 : props.coordinates === '1,0' ? imgURL_1_0 : props.coordinates === '0,3' ? imgURL_0_3 : props.coordinates === '0,2' ? imgURL_0_2 : props.coordinates === '0,1' ? imgURL_0_1 : props.coordinates === '0,0' ? imgURL_0_0 : imgURL_start } );
  
  & p {
    line-height: 1.4;
    color: #fff;
  }
`;

const InnerWrapper = styled.div`
  max-width: 55vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TreasureImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
`;

const DescriptionText = styled.p`
  color: #fff;
  line-height: 1.4;
  margin-bottom: 20px;

  @media (max-width: 376px) {
    margin-top: 60px;
  }

  @media (max-width: 321px) {
    font-size: 13px;
  }
`;

const ActionText = styled.p`
  font-size: 12px;
  font-style: italic;
  margin-bottom: 20px;

  @media (max-width: 320px) {
    font-size: 11px;
  }
`;

const CoordinatesText = styled.p`
  font-size: 12px;
  color: #595959;
`;