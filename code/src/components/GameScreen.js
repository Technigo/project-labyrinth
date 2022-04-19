import React from "react";
import { useSelector, useDispatch } from "react-redux";
import quotes, { generateQuote } from "reducers/quotes";


const GameScreen = () => {
    const quote = useSelector(store => store.quotes.quote);

    const dispatch = useDispatch();


    const onQuoteRegenerate = (quoteTag) => {
        dispatch(generateQuote(quoteTag))
    };

    return (
        <div>
            <h3>This is a quote: {quote.content}</h3>
            {quote.tags.map(tag => (
                <button key={tag} onClick={() => onQuoteRegenerate(tag)}>{tag}</button>
            ))}
        </div>
    )
};

export default GameScreen;