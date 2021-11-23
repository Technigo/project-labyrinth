import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLabyrinth, fetchActions } from '../reducers/labyrinth';
import { labyrinth } from '../reducers/labyrinth';

const Labyrinth = () => {
    const labyrinth = useSelector((store) => store.labyrinth.destination);
    const dispatch = useDispatch();
    console.log ('actions', labyrinth.actions)
return (
    <>
    <button
        onClick={() => {
        dispatch(fetchLabyrinth());
        }}
        >
        Start Labyrinth-Game!
    </button>
    <p>
        {labyrinth.description}
        {console.log ('actions2', labyrinth.actions)}
    </p>
    <div>
        
        {labyrinth.actions !== undefined &&
        labyrinth.actions.map((item) => (
        <>
            <p key={item.description}>
                {item.description} 
            </p>
            <button onCLick={() => {
                dispatch(fetchActions(item.direction))
            }}>{item.direction}</button>
        </>    
        )) }

        
    </div>
    
    </>
);
};

export default Labyrinth;
