import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { gameState } from "./reducers/gameState";
import { GameContainer } from "./components/GameContainer";
// import { Background } from "./components/Background";
import { BackgroundContainer} from "./styling/background"

// import backgroundImage from "./img/creepy_treehouse.png";
import { backgroundImage } from "./components/backgroundImage";

const reducer = combineReducers({ gameState: gameState.reducer });
const store = configureStore({ reducer });

export const App = () => {

  return (
    <Provider store={store}>      
      <BackgroundContainer backgroundImage={backgroundImage}>
        <GameContainer />
     </BackgroundContainer>
    </Provider>
  );
};
