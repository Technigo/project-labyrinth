/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import backgroundSoundOmnious from '../assets/audio/ambient-wave-48-tribute-17243.mp3';
import backgroundSoundHopeful from '../assets/audio/awaken-136824.mp3';

const myAudio = new Audio(backgroundSoundOmnious);
const myAudioEnd = new Audio(backgroundSoundHopeful);

const BackgroundMusic = () => {
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  console.log('DIRECTIONS coordinates:', coordinates)

  const endposition = coordinates === '1,3';

  const [isMusicPaused, setIsMusicPaused] = useState(true);

  useEffect(() => {
    if (isMusicPaused) {
      myAudio.pause();
      myAudioEnd.pause();
    } else if (endposition) {
      myAudioEnd.play();
      myAudio.pause();
    } else {
      myAudio.play();
      myAudioEnd.pause();
    }
  }, [isMusicPaused, endposition]);

  const handleAudioClick = () => {
    setIsMusicPaused(!isMusicPaused);
  }

  return (
    <div onClick={handleAudioClick} onKeyDown={handleAudioClick} role="presentation">
      {!isMusicPaused && (<img className="soundbutton" src="https://img.icons8.com/ios-filled/50/null/room-sound.png" alt="sound button" />)}
      {isMusicPaused && (<img className="soundbutton" src="https://img.icons8.com/ios-filled/50/null/no-audio--v1.png" alt="sound button" />)}
    </div>
  )
}

export default BackgroundMusic;