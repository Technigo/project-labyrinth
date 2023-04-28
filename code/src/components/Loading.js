/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components/macro';

export const Loading = () => {
  const isLoading = useSelector((state) => state.labyrinth.isLoading);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);
  // const [loadingDot, setLoadingDot] = useState('');
  // const loadingAnimation = () => {
  //  if (loadingDot === '....') {
  //    setLoadingDot('');
  //  } else {
  //    setTimeout(() => setLoadingDot(`${loadingDot}.`), 250);
  //  }
  // };

  //   <h4>
  //   Loading{loadingAnimation()}
  //     {loadingDot}
  //   </h4>
  // )}
  return (
    <Animation>
      {loading && (
        <>
          <Player
            src="https://assets5.lottiefiles.com/packages/lf20_0ifhkw8a.json"
            className="lottie"
            loop
            mode="normal"
            autoplay
            speed={1.2}
            style={{ height: '400px', width: '400px' }} />
        </>
      )}
    </Animation>
  );
<<<<<<< HEAD
}

const Animation = styled.div`
background-color: black;
width: 100%;
height: 100%;
//background-size: cover;
//position: absolute;
/* top: 0;
right: 0;
bottom: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
z-index: 9999; */
`
=======
};
>>>>>>> de205ff1ea26388a07aeefa3a4be59bd45681194
