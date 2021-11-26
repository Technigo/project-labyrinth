import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGameSteps } from '../reducers/game';
import LoadingSpinner from './LoadingSpinner';
import styled from 'styled-components/macro';

import { DirectionButton } from './DirectionButton';
import { StartButton } from './StartButton';
import CreepyGirl from './CreepyGirl';
import { useNavigate } from 'react-router-dom';

const StyledMainGame = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111;
  background-image: radial-gradient(#333, #111);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #fff;
  text-align: center;

  .main-game-card {
    max-width: 90%;
    min-height: 50%;
    max-height: 90%;
    overflow: auto;
    border: 2px solid gray;

    @media (min-width: 800px) {
      padding: 30px;
      max-width: 600px;
    }
  }

  h2 {
    font-size: 20px;
    @media (max-width: 500x) {
      font-size: 16px;
    }
  }
`;

const DirectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const DirectionCard = styled.div`
  width: 50%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

const EndWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h3 {
    margin: 10px 15px;
  }
`;

const MainGame = ({ stopMusic }) => {
  const gameObject = useSelector((store) => store.game.gameObject);
  const username = useSelector((store) => store.game.username);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onRestartClick = () => {
    navigate('/');
    stopMusic();
  };

  return (
    <StyledMainGame>
      <LoadingSpinner />
      <div className='main-game-card'>
        <p>
          User:
          {username}
        </p>
        <h2>{gameObject.description}</h2>

        {gameObject.actions.length > 0 && (
          <DirectionWrapper>
            {gameObject.actions.map((action) => (
              <DirectionCard key={action.direction}>
                <p>{action.description}</p>

                <DirectionButton
                  onClick={() => {
                    dispatch(fetchGameSteps({ direction: action.direction }));
                  }}
                >
                  <span>
                    Go {''}
                    {action.direction +
                      (action.direction === 'North'
                        ? ' ⬆' //&#8593;
                        : action.direction === 'South'
                        ? ' ⬇' //&#8595;
                        : action.direction === 'West'
                        ? ' ⬅' //&#8592;
                        : action.direction === 'East'
                        ? ' ➡' //&#8594;
                        : '')}
                  </span>
                </DirectionButton>
              </DirectionCard>
            ))}
          </DirectionWrapper>
        )}
        {gameObject.actions.length === 0 && (
          <EndWrapper>
            <h3>You made it out alive!</h3>

            <CreepyGirl />
            <StartButton onClick={onRestartClick}>
              Restart{' '}
              <img
                src='https://img.icons8.com/ios/50/000000/bat--v2.png'
                alt='a bat'
              />
            </StartButton>
          </EndWrapper>
        )}
      </div>
    </StyledMainGame>
  );
};

export default MainGame;
