import React from "react";
import { useSelector } from "react-redux";
import GameOver from "./GameOver";
import StartPage from './StartPage';
import GameScreen from "./GameScreen";
import Loading from "./Loading";

import { Container } from "./Styles";

const Labyrinth = () => {
    const stage = useSelector(store => store.labyrinth.stage);
    const isLoading = useSelector(store => store.labyrinth.isLoading);

    return (
        <>
            {isLoading && <Loading />}
            {!isLoading && (
                <Container>
                    {stage 
                        ? stage.actions.length !== 0
                            ? <GameScreen />
                            : <GameOver />
                        : <StartPage/> 
                    }
                </Container>
            )}
        </>
    )
    
}

export default Labyrinth;
