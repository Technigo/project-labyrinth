import React from "react";
import { useSelector, useDispatch } from "react-redux";
import labyrinth, { continueGame } from "reducers/labyrinth";

import { CardContainer, Content, SecondaryText } from "./Styles";

const GameScreen = () => {
    const stage = useSelector(store => store.labyrinth.stage);

    const dispatch = useDispatch();


    // const onQuoteRegenerate = (quoteTag) => {
    //     dispatch(generateGame(quoteTag))
    // };

    const onQuoteRevert = () => {
        dispatch(labyrinth.actions.setPreviousQuote());
    }

    return (
        <CardContainer>
            <Content>
                <button disabled={useSelector(store => !store.labyrinth.history.length)} onClick={onQuoteRevert}>go back</button>
                <SecondaryText>Description: {stage.description}</SecondaryText>
                {stage.actions.map(action => (
                    <div key={action.description} >
                        <p>{action.description}</p>
                        <button onClick={() => continueGame(action.type, action.direction)}>{action.direction}</button>
                    </div>
                ))}
            </Content>
        </CardContainer>
    )
};

export default GameScreen;