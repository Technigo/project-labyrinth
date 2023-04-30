/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import endPageImage from 'images/end-game-image.jpg'
import soundFile from 'images/angels-singing.mp3'
import { Direction } from './Direction';

export const Game = () => {
  const description = useSelector((store) => store.game.description);
  const [showEndPage, setShowEndPage] = useState(false);
  const onRestartButtonClick = () => {
    window.location.reload()
  }
  useEffect(() => {
    const audio = new Audio(soundFile); // Create an Audio object with the sound file
    if (showEndPage) {
      audio.play(); // Play the sound when showEndPage becomes true
    }
  }, [showEndPage]);

  const ResetBtn = styled.button`
  font-family: 'Castoro Titling', cursive;
  background-color: #293d3d;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  color: #FEF5BD;
  &:hover {
  background-color: #FEF5BD;
  color: #000;
  }
  @media (min-width: 668px) and (max-width: 1023px) {
    font-size: 1.2rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.2rem;
    margin-top: 30px;
  }
  `
  const EndBtn = styled(ResetBtn)`
  background-color: #b3cccc;
  font-size: 1.5rem;
  padding: 10px 20px;
`;

  const StyledParagraph = styled.p`
    background-color: #c2d6d6;
    border-radius: 30px;
    padding: 10px;
    text-align: center;
    margin-top: 100px;
 `
  const StyledImage = styled.img`
    max-width: 100%;
    max-height: 500px;
    `;

  return (
    <div className="game-div">
      <p className="game-p">{description.description}</p>
      <Direction actions={description.actions} />
      {description.coordinates === '1,3' && (
        <>
          <ResetBtn type="button" onClick={onRestartButtonClick}>Play again</ResetBtn>
          {!showEndPage && (
            <EndBtn type="button" onClick={() => setShowEndPage(true)}>Show the light!</EndBtn>
          )}
          {showEndPage && (
            <StyledImage src={endPageImage} alt="End Page" />
          )}
          <div>
            <StyledParagraph>~By Nina W~ <br /> Student at Technigo</StyledParagraph>
          </div>
        </>
      )}
    </div>
  )
}