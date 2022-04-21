import React from 'react';
import { useSelector } from 'react-redux';
import DirectionButton from 'components/DirectionButton'

const GameScreen = () => {
    const question = useSelector((store) => store.labyrinth.question);

    return (
        <> 
        <h2>{question.description}</h2>
        {question.actions?.map((item, index) => {
        return (
          <h2 key={index}>
            You look to the {item.direction}. {item.description}
          </h2>
        );
    })}    
    {question.actions && <DirectionButton />}
        </>
    )
}

export default GameScreen