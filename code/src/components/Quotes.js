import React from "react";
import { useSelector } from "react-redux";

import StartPage from './StartPage';
import GameScreen from "./GameScreen";

import { Container } from "./Styles";

const Quotes = () => {
    const quote = useSelector(store => store.labyrinth.quote);


    //v3
    // const renderScreen = () => {
    //     if (quote) {
    //         return <GameScreen/>
    //     }
    //     return <StartPage/>
    // }
    return (
        <Container>
            {quote 
                ? <GameScreen/>
                : <StartPage/> 
            }
        </Container>
        
    )

    // v3
    // return renderScreen();
}

export default Quotes;