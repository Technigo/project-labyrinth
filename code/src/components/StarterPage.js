import React, { useState } from 'react';
import { gameFetch, fetchOne } from 'reducers/gameFetch';
import { useDispatch } from 'react-redux';
import { StartBackground, StarterForm, PlayerWrapper } from 'lib/General';
import { SpaceButton } from 'lib/Buttons';
import { GreetingText } from 'lib/Text';
import startgame from 'images/arrow-button.png';
import { UfoMoving } from './UfoMoving';
import { UfoWaitingStart } from './UfoWaitingStart';

export const StarterPage = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmitUserName = (event) => {
    event.preventDefault();
    dispatch(gameFetch.actions.setName(userName));
    dispatch(fetchOne());
    setSubmitted(true);
  };

  return (
    <StartBackground>
      {submitted ? (
        <>
          <GreetingText>Hello, {userName}!</GreetingText>
          <PlayerWrapper>
            <UfoMoving />
          </PlayerWrapper>
        </>
      ) : (
        <>
          <StarterForm onSubmit={onSubmitUserName}>
            <label htmlFor={userName}>
              <input
                className="input"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter Name"
                required />
            </label>

            <SpaceButton type="submit">
              <img src={startgame} alt="startbutton" />
            </SpaceButton>
          </StarterForm>

          <UfoWaitingStart />
        </>

      )}
    </StartBackground>

  );
};