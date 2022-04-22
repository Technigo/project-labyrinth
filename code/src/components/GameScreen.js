import React from 'react';
import { useSelector } from "react-redux";

import PlayerChoice from './PlayerChoice';
import EndScreen from './EndScreen';

const GameScreen = () => {
    const welcomeDescription = useSelector(store => store.game.currentLocation);
    const playerLocation = useSelector(store => store.game.currentLocation);
    const actions = useSelector(store => store.game.currentLocation.actions);


    return (
        <section>
            <p key={welcomeDescription.description}>{welcomeDescription.description}</p>
            {playerLocation.actions.map(action => (
                <p key={action.description}>{action.description}</p>
            ))}
            <div>
                {actions.map(action => (
                    <PlayerChoice key={action} action={action} />
                ))}
            </div>
            {actions.length === 0 && <EndScreen />}
        </section>
    )
};

export default GameScreen; 