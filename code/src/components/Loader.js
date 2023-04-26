import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

/* const LoaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 30px
    justify-self: center;
    width: 90%;
    max-width: 300px;
    background: #fff;
    margin-bottom: 20px;
` */

export const Loader = () => {
  return (
    <Player
      autoplay
      loop
      src="https://assets7.lottiefiles.com/private_files/lf30_dz8ymnuq.json"
      style={{ height: '300px', width: '300px' }}>
      <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
    </Player>
  )
}