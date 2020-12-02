import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

// Functions
import { fetchDirectionData, fetchLabyrinthData } from '../reducers/labyrinth';

// Components
import { Button } from './Button';
import { NameInput } from './NameInput';
import { DirectionButtons } from './DirectionButtons';
import {
  InnerFlexWrapper,
  OuterFlexWrapper,
} from '../styling/GlobalStyles';

// ----------------------------------------------------------------

export const Labyrinth = ({ setCurrentCoordinates }) => {
  const content = useSelector((store) => store.labyrinth.content);
  const username = useSelector((store) => store.labyrinth.username);
  const isLoading = useSelector((state) => state.ui.isLoading);

  const [startButtonVisible, setStartButtonVisible] = useState(false);
  const [nameInputVisible] = useState(true);

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
          {/* Removes the NameInput and start buttons when the journey has started */}
          {content.coordinates === undefined &&  
          <>
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
          </>
          }
          {/* Descriptive text */}
          {content.coordinates === '1,3' &&  (
            <TreasureImage src='https://images.unsplash.com/photo-1449049607083-e29383d58423?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyZWFzdXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            )}
          <DescriptionText>{content.description}</DescriptionText>

          {/* Coordinates */}
          {content.coordinates && <CoordinatesText>Coordinates: {content.coordinates}</CoordinatesText>}
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

const TreasureImage = styled.img`
  width: 200px;
  height: 210px;
  margin: 0;
  border-radius: 50%;
`;

const DescriptionText = styled.p`
  width: 200px;
  font-style: italic;
`;

const CoordinatesText = styled.p`
  font-size: 12px;
  color: #595959;
`;