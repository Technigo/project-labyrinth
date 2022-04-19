import React from "react";
import { useSelector } from "react-redux";

import StartPage from './StartPage';
import GameScreen from "./GameScreen";

const Quotes = () => {
    const quote = useSelector(store => store.quotes.quote);


    //v3
    // const renderScreen = () => {
    //     if (quote) {
    //         return <GameScreen/>
    //     }
    //     return <StartPage/>
    // }
    return (
        <div>
            {quote 
                ? <GameScreen/>
                : <StartPage/> 
            }
        </div>
        
    )

    // v3
    // return renderScreen();
}

export default Quotes;