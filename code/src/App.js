/*eslint-disable*/
import React from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import labyrinth from 'reducers/labyrinth';
import StartScreen from 'components/StartScreen';
import Lottie from 'lottie-react';
import searchErrorAnimation from './lotties/searchError.json';
import loadingStateAnimation from './lotties/loadingState.json';
import { Provider } from 'react-redux';

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer
  });

const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  )
}

//export const App = () => <Lottie animationData={searchErrorAnimation} loop={true} />;
//export const App = () => <Lottie animationData={loadingStateAnimation} loop={true} />;
/*
export const App = () => {
  return (
    <div>
      <Lottie animationData={searchErrorAnimation} loop={true} />
      <Lottie animationData={loadingStateAnimation} loop={true} />
    </div>
  )
}*/

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