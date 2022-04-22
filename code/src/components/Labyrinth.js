import React from "react";
import { useSelector } from "react-redux";
import GameOver from "./GameOver";
import StartPage from './StartPage';
import GameScreen from "./GameScreen";

import { Container } from "./Styles";

const Labyrinth = () => {
    const stage = useSelector(store => store.labyrinth.stage);

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
}

export default Labyrinth;