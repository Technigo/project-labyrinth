import React, { useState } from 'react';
import { gameFetch, fetchOne } from 'reducers/gameFetch';
import { useDispatch } from 'react-redux';
import { StartBackground, SpaceButton, GreetingText, StarterForm, PlayerWrapper } from 'lib/Level';
import { Player } from '@lottiefiles/react-lottie-player';
import startgame from 'images/arrow-button.png';

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
            <Player
              src="https://assets2.lottiefiles.com/packages/lf20_cgbjomca.json"
              className="player"
              loop
              autoplay
              speed={1}
              style={{
                width: '150px',
                height: '150px',
                transform: 'translate(0, -100vh)',
                opacity: 0
              }} />
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

          <Player
            src="https://assets2.lottiefiles.com/packages/lf20_cgbjomca.json"
            className="player"
            loop
            autoplay
            speed={1}
            style={{ width: '150px', height: '150px' }} />
        </>

      )}
    </StartBackground>

  );
};

/* 1. en sida för input name(startsidan)
2. vi börjar med att se till att fetchen funkar på vår sida
3. en sida där själva spelet kommer fortgå(spelsidan)
4. knappar så en kan välja vilken väg en ska ta
5. lägga rätt fetch på rätt plats */
