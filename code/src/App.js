import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { gameState } from "./reducers/gameState";
import { GameContainer } from "./components/GameContainer";
<<<<<<< HEAD
// import backgroundImage from "./img/creepy_treehouse.png";
=======
// import { Background } from "./components/Background";
import { BackgroundContainer} from "./styling/background"

// import backgroundImage from "./img/creepy_treehouse.png";
import { backgroundImage } from "./components/backgroundImage";
>>>>>>> a68edcb53b7ca09c31ca2817cec4fbece4985413

const reducer = combineReducers({ gameState: gameState.reducer });
const store = configureStore({ reducer });

export const App = () => {

  return (
<<<<<<< HEAD
    <Provider store={store}>
        <GameContainer />
=======
    <Provider store={store}>      
      <BackgroundContainer backgroundImage={backgroundImage}>
        <GameContainer />
     </BackgroundContainer>
>>>>>>> a68edcb53b7ca09c31ca2817cec4fbece4985413
    </Provider>
  );
};
