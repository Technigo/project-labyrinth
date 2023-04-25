/*eslint-disable*/
import React from 'react';
import Lottie from 'lottie-react';
import searchErrorAnimation from './lotties/searchError.json';
import moodyDogAnimation from './lotties/moodyDog.json';
import errorDogAnimation from './lotties/errorDog.json';
//import ErrorMsg from 'Components/ErrorMsg';

//export const App = () => <Lottie animationData={searchErrorAnimation} loop={true} />;
//export const App = () => <Lottie animationData={moodyDogAnimation} loop={true} />;

export const App = () => {
  return (
    <div>
      <Lottie animationData={moodyDogAnimation} loop={true} />
      <Lottie animationData={searchErrorAnimation} loop={true} />
      <Lottie animationData={errorDogAnimation} loop={true} />
    </div>
  )
}

/*export const App = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
    </div>
  );
}*/