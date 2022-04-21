import React from "react";
import { useSelector } from "react-redux";
import GameOver from "./GameOver";
import StartPage from './StartPage';
import GameScreen from "./GameScreen";

import { Container } from "./Styles";

const Quotes = () => {
    const stage = useSelector(store => store.labyrinth.stage);


    //v3
    // const renderScreen = () => {
    //     if (quote) {
    //         return <GameScreen/>
    //     }
    //     return <StartPage/>
    // }
    console.log(stage)
    return (
        <Container>
            {stage 
                ? stage.actions.length !== 0
                    ? <GameScreen/>
                    : <GameOver />
                : <StartPage/> 
            }
        </Container>
        
    )

    // v3
    // return renderScreen();
}

export default Quotes;