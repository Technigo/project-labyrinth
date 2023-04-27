import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import Loading from './Loading';
import GameScreenLotties from './GameScreenLotties';

const BackgroundLottie = () => {
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  const loading = useSelector((store) => store.loading.isLoading)
  console.log('coordinates:', coordinates)
  console.log('loading:', loading)

  let lottieURL;

  if (coordinates === '0,0') {
    lottieURL = 'https://assets3.lottiefiles.com/packages/lf20_ypej3gd9.json';
  } else {
    lottieURL = 'https://assets3.lottiefiles.com/packages/lf20_hvlfn70n.json';
  }

  return (
    <>
      <GameScreenLotties LottieURL={lottieURL} />
      <img src={lottieURL} alt="Background" />
    </>
  );
};
