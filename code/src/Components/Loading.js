import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Loading = () => (
  <Player
    autoplay
    loop
    src="https://assets1.lottiefiles.com/packages/lf20_de6cmki0.json"
    style={{ height: '400px', width: '400px' }} />
)

export default Loading;