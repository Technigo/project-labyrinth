/*eslint-disable*/
import React from 'react';
import Lottie from 'lottie-react';
//import searchErrorAnimation from './lotties/searchError.json';
import moodyDogAnimation from './lotties/moodyDog.json';

//import ErrorMsg from 'Components/ErrorMsg.js'

//export const App = () => <Lottie animationData={searchErrorAnimation} loop={true} />;
export const App = () => <Lottie animationData={moodyDogAnimation} loop={true} />;

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

/*
export const App = () => {
  return (
    <div>
      Find me in src/app.js!
    </div>
  )
} */