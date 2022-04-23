import React from 'react'
import { useSelector } from 'react-redux'
import { ChildContainer, Pokemons } from './Styles'


const EndScreen = () => {
    const endDescription = useSelector(store => store.game.actions.description)
    console.log(endDescription)

    const restartButton = () => {
        window.location.reload()
    }

    return (
        <ChildContainer>
            <div class="nes-container is-dark with-title">
                <p class="title">Congratulations!</p>
          
                <p class="nes-balloon from-left nes-pointer is-dark">
                {endDescription}
                </p> 
                <Pokemons>
                    <i class="nes-bulbasaur"></i>
                    <i class="nes-charmander"></i>
                </Pokemons>
                <button type="button" class="nes-btn is-warning"
                onClick={restartButton}>Restart</button>
            </div>
        </ChildContainer>
    )    
}


export default EndScreen
