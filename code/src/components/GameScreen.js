import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { generateAction } from '../reducers/game'
import EndScreen from './EndScreen'
import styled from 'styled-components'


const TextReveal = styled.p`
white-space:nowrap;
overflow:hidden;


animation:typing 4s steps(22,end) forwards,
            blink 1s infinite;

            @keyframes typing {
                0% { width:0% }
                100% { width:100% }
              }
              @keyframes blink {
                0%,100% {
                  border-right:2px solid transparent;
                }
                50% {
                  border-right:2px solid #222;
                }

`

const GameScreen = () => {
    const startDescription = useSelector(store => store.game.actions.description)
    
    const actions = useSelector(store => store.game.actions.actions)
    console.log(actions)
    const dispatch = useDispatch()

    const onActionRegenerate = (type, direction) => {
        dispatch(generateAction(type, direction))
    }

    if (actions?.length === 0) {
        return (
            <EndScreen />
        )
      }


    return (
        <div class="nes-container with-title is-centered">
        <p class="title">The Maze</p>
        <TextReveal>{startDescription}</TextReveal>
        {actions?.map(action => (
            <div>
                <TextReveal>{action.description}</TextReveal>
                <button type="button" class="nes-btn is-success"
                    key={action.description} 
                    onClick={() => onActionRegenerate(action.type, action.direction)}
                    //  onClick={() => dispatch(generateAction(action.type, action.direction))}
                >
                    {action.direction}
                </button>
            </div>
        ))}
    </div>
    )
}
export default GameScreen