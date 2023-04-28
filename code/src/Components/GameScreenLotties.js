/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import { Player } from '@lottiefiles/react-lottie-player';

const GameScreenLotties = () => {
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  console.log('coordinates:', coordinates)

  let lottieURL;

  if (coordinates === '0,0') {
    lottieURL = 'https://assets8.lottiefiles.com/packages/lf20_5ttv5UNZN9.json';
  } else if (coordinates === '1,0') {
    lottieURL = 'https://assets7.lottiefiles.com/packages/lf20_imacnre6.json';
  } else if (coordinates === '1,1') {
    lottieURL = 'https://assets5.lottiefiles.com/packages/lf20_pqts4ilz/energyorb.json';
  } else if (coordinates === '0,1') {
    lottieURL = 'https://assets3.lottiefiles.com/packages/lf20_gfp4ynnl.json';
  } else if (coordinates === '0,2') {
    lottieURL = 'https://assets2.lottiefiles.com/packages/lf20_t1NDLE.json';
  } else if (coordinates === '0,3') {
    lottieURL = 'https://assets7.lottiefiles.com/packages/lf20_w1nrx5zt.json';
  } else if (coordinates === '1,3') {
    lottieURL = 'https://assets10.lottiefiles.com/packages/lf20_ndj9fzcd.json';
  } else {
    lottieURL = 'https://assets4.lottiefiles.com/datafiles/sPJTLSWjrBGgvJK/data.json';
  }

  return (
    <Player
      autoplay
      loop
      src={lottieURL}
      style={{ height: '400px', width: '400px' }} />
  )
}

export default GameScreenLotties;

// <img src={lottieURL} alt="background" />