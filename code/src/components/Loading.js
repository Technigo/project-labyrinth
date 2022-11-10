import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../lottie/duck'

export const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <p>Loading...</p>
      <div>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400} />
      </div>
    </div>
  );
}

//   return (
//     <div>
//       <p>Loading...</p>
//     </div>
//   )
// }

//   const defaultOptions = {
//       loop: true,
//       autoplay: true,
//       animationData: animationData,
//       rendererSettings: {
//         preserveAspectRatio: "xMidYMid slice"
//       }
//     };

//   return (
//     <div>
//       <Lottie
//     options={defaultOptions}
//         height={400}
//         width={400}
//       />
//     </div>
//   );
// }