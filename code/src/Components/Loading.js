import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => (
  <Player
    autoplay
    loop
    src="https://assets7.lottiefiles.com/datafiles/WZMt4Klgo3TYk1R/data.json"
    style={{ height: '400px', width: '400px' }} />
)

export default Loading;