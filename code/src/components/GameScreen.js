import React from "react";
import { useSelector, useDispatch } from "react-redux";
import labyrinth, { generateQuote } from "reducers/labyrinth";

import { CardContainer, Content, SecondaryText } from "./Styles";

const GameScreen = () => {
    const quote = useSelector(store => store.labyrinth.quote);

    const dispatch = useDispatch();


    const onQuoteRegenerate = (quoteTag) => {
        dispatch(generateQuote(quoteTag))
    };

    const onQuoteRevert = () => {
        dispatch(labyrinth.actions.setPreviousQuote());
    }

    return (
        <CardContainer>
            <Content>
                <button disabled={useSelector(store => !store.labyrinth.history.length)} onClick={onQuoteRevert}>go back</button>
                <SecondaryText>This is a quote: {quote.content}</SecondaryText>
                {quote.tags.map(tag => (
                    <button key={tag} onClick={() => onQuoteRegenerate(tag)}>{tag}</button>
                ))}
            </Content>
        </CardContainer>
    )
};

export default GameScreen;