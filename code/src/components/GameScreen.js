import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import labyrinth from 'reducers/labyrinth';




const GameScreen = () => {

    const question = useSelector((store) => store.labyrinth.question);
    return (
        <> <h2>{question.description}</h2>
    {question.actions.map((item, index) => {
        return (
            <h2 key={index}>{item.direction}. {item.description}</h2>
        );
    })}    
    </>
    )
}

export default GameScreen