import React from 'react'
import { useSelector } from 'react-redux'
import { ChildContainer } from './Styles'
// import { useDispatch } from 'react-redux'
// import game from '../reducers/game'

const EndScreen = () => {
    const endDescription = useSelector(store => store.game.actions.description)
    console.log(endDescription)

    // const dispatch = useDispatch()

    const restartButton = () => {
        window.location.reload()
    }

    return (
        <ChildContainer>
        <div class="nes-container is-dark with-title">
            <p class="title">Congratulations!</p>
            
            <p>{endDescription}</p>
            <button type="button" class="nes-btn is-warning"
            onClick={restartButton}>Restart</button>
        
                    <i class="nes-bulbasaur"></i>
                    <i class="nes-charmander"></i>
                    <i class="nes-squirtle"></i>

            {/* <button onClick={() => dispatch(game.actions.restart())}>Restart</button> */}
        </div>
        </ChildContainer>
    )    
}


export default EndScreen
