import React from "react";
import { useSelector, useDispatch } from "react-redux";
import labyrinth, { generateGame } from "reducers/labyrinth";
import { CardContainer, Content, SecondaryText, Action } from "./Styles";


const GameScreen = () => {
    const stage = useSelector(store => store.labyrinth.stage);

    const dispatch = useDispatch();

    const onActionSet = (action) => {

        // dispatch(labyrinth.actions.setPlayer(player));
        dispatch(generateGame(action));
    }
    // const onQuoteRegenerate = (quoteTag) => {
    //     dispatch(generateGame(quoteTag))
    // };

    const onQuoteRevert = () => {
        dispatch(labyrinth.actions.setPreviousStage());
    }

    return (
        <CardContainer>
            <Content>
                <button type="button" class="nes-btn is-primary" disabled={useSelector(store => !store.labyrinth.history.length)} onClick={onQuoteRevert}>go back</button>
                <SecondaryText class="nes-balloon from-left nes-pointer">Description: {stage.description}</SecondaryText>
                {stage.actions.map(action => (
                    <Action key={action.description} >
                        <p>{action.description}</p>
                        <button type="button" class="nes-btn is-success" onClick={() => onActionSet(action)}>{action.direction}</button>
                    </Action>
                ))}
            </Content>
        </CardContainer>
    )
};

export default GameScreen;