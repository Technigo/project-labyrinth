import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLabyrinth } from '../reducers/labyrinth';
import { labyrinth } from '../reducers/labyrinth';
import styled from 'styled-components';

const StartButton = styled.button`
& checked:
`

const Labyrinth = () => {
    const labyrinth = useSelector((store) => store.labyrinth.destination);
    const dispatch = useDispatch();
    console.log ('actions', labyrinth.actions)
return (
    <>
    {labyrinth.coordinates!== '0,0' && //this makes the "start-button" to just be shown when the game hasn't started 
    <StartButton
        onClick={() => {
        dispatch(fetchLabyrinth({
            url: 'https://wk16-backend.herokuapp.com/start',
        }));
        }}
        >
        Start Labyrinth-Game!
    </StartButton>
    }
    <p>
        {labyrinth.description}
        {console.log ('actions2', labyrinth.actions)}
    </p>
    <div>
        
        {labyrinth.actions !== undefined &&
        labyrinth.actions.map((item) => (
        <div key={item.description}>
            <p>
                {item.description} 
            </p>
            <button onClick={() => {
                dispatch(fetchLabyrinth({
                    url: 'https://wk16-backend.herokuapp.com/action',
                    type: 'move',
                    direction: item.direction,

                }
                    ))
            }}>{item.direction}</button>
        </div>    
        )) }

        
    </div>
    
    </>
);
};

export default Labyrinth;
