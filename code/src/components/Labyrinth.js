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
import { Footer } from './Footer';
import { History } from './History';

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
  imgURL_1_3,
} from '../styling/ImageSources';

// ----------------------------------------------------------------

export const Labyrinth = () => {
  const dispatch = useDispatch();
  const content = useSelector((store) => store.labyrinth.content);
  const username = useSelector((store) => store.labyrinth.username);
  const isLoading = useSelector((state) => state.ui.isLoading);
  const history = useSelector((state) => state.labyrinth.history);

  const [startButtonVisible, setStartButtonVisible] = useState(false);
  const [nameInputVisible, setNameInputVisible] = useState(true);
  const [historyVisible, setHistoryVisible] = useState(false);

  // Check if username is stored in local storage
  const currentUsername = localStorage.getItem('username')
    ? localStorage.getItem('username')
    : username;

  // Restart game - reset all values and reload
  const handleRestartButton = () => {
    dispatch(labyrinth.actions.setUsername(''));
    localStorage.setItem('labyrinth', '{}');
    localStorage.setItem('username', '');
    localStorage.setItem('history', '[]');
    window.location.reload();
  };

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
                <NameInput
                  setStartButtonVisible={setStartButtonVisible}
                  setNameInputVisible={setNameInputVisible}
                />
              )}

              {/* Start-button */}
              {startButtonVisible && (
                <InnerFlexWrapper>
                  <IntroText>
                    Welcome {currentUsername}, are you ready to start your
                    journey?
                  </IntroText>
                  <Button
                    action={() =>
                      fetchLabyrinthData({
                        url: 'https://wk16-backend.herokuapp.com/start',
                        username: currentUsername,
                      })
                    }
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

          {/* Main Description text */}
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

        {/* Show steps taken previously by the user */}
        {historyVisible && (
          <History history={history} setHistoryVisible={setHistoryVisible} />
        )}

        <Footer setHistoryVisible={setHistoryVisible} />
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
  background-position: ${(props) =>
    props.coordinates === '1,3' ? 'right' : 'center'};
  background-image: ${(props) =>
    props.coordinates === '1,3'
      ? imgURL_1_3
      : props.coordinates === '1,1'
      ? imgURL_1_1
      : props.coordinates === '1,0'
      ? imgURL_1_0
      : props.coordinates === '0,3'
      ? imgURL_0_3
      : props.coordinates === '0,2'
      ? imgURL_0_2
      : props.coordinates === '0,1'
      ? imgURL_0_1
      : props.coordinates === '0,0'
      ? imgURL_0_0
      : imgURL_start};
`;

const InnerWrapper = styled.div`
  max-width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroText = styled.p`
  font-size: 36px;
  color: #fff;
  @media (max-width: 450px) {
    font-size: 28px;
  }
`;

const TreasureImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 40px;
  @media (max-width: 376px) {
    margin-bottom: 10px;
  }
`;

const DescriptionText = styled.p`
  font-size: 28px;
  color: #fff;
  line-height: 1.4;
  margin-bottom: 20px;
  max-width: 600px;

  @media (max-width: 420px) {
    margin-top: 20px;
    font-size: 18px;
  }

  @media (max-width: 321px) {
    font-size: 11px;
  }
`;

const ActionText = styled.p`
  font-size: 14px;
  font-style: italic;
  margin-bottom: 20px;
  max-width: 600px;
  line-height: 1.4;
  color: #fff;

  @media (max-width: 376px) {
    font-size: 9px;
  }
`;
