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
  return (
    <Animation>
      {loading && (
        <>
          <Player
            src="https://assets1.lottiefiles.com/packages/lf20_YrARNi6H6D.json"
            className="lottie"
            loop
            mode="normal"
            autoplay
            speed={1.2}
            style={{ height: '350px', width: '350px' }} />
        </>
      )}
    </Animation>
  );
}

const Animation = styled.div`
//background-color: white;
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