import React from "react";
import { useSelector, useDispatch } from "react-redux";
import game, { fetchOtherQuestions } from "../reducers/game";


const GameQuestion = () => {
    //our empty array state with actions, coordinates and description
    const gameQuestions = useSelector((store) => store.game.gameQuestions)
    const userName = useSelector((store) => store.game.username);

    const dispatch = useDispatch()

    const onNextQuestion = (direction) => {
        dispatch(game.actions.setDirection(direction))
        dispatch(fetchOtherQuestions(userName, direction))
    }

    return (
        <div>
            <p> {gameQuestions.description}</p>
            {gameQuestions.actions.map((item, index) => (
                <div key={index}>
                    <p>{item.description}</p>
                    <button
                        onClick={() => onNextQuestion(item.direction)}>
                        Go {item.direction}
                    </button>
                </div>
            ))
            }
        </div>
    )

}

export default GameQuestion