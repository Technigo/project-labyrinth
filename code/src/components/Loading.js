// import { Player } from '@lottie-react';
import React from 'react';
// import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Player } from '@lottiefiles/react-lottie-player'

export const Loading = () => {
  return (
    <loadingcontainer>
      <Player
        autoplay
        loop
        src="https://assets2.lottiefiles.com/packages/lf20_rwbbf6ns.json"
        // style={{ height: '150px', width: '150px' }}
        speed={1}>
        {/* <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
      </Player>
    </loadingcontainer>
  )
}

// const Loading = () => {
//   return (
//     <div
//       src="https://assets8.lottiefiles.com/packages/lf20_3e0g4gjg.json"
//       className="Player"
//       autoPlay
//       speed={2}
//       style={{ height: '300px', width: '300px' }} />
//   )
// }

// export default Loading

// import React from 'react';
// import { Player } from '@lottiefiles/react-lottie-player';
// const Loading = () => (
//   <Player
//     autoplay
//     loop
//     src="https://assets10.lottiefiles.com/packages/lf20_q7uarxsb.json"
//     style={{ height: '300px', width: '300px' }} />
// )

// export default Loading;