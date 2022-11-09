import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import games, {GenerateQuestion} from '../reducers/games'

const GameScreen = () => {
    const description = useSelector(store => store.games.description)
    const moves = useSelector(store => store.games.moves)
    // const history = useSelector(store => store.games.history)
    const coordinates = useSelector(store => store.games.coordinates)

    const dispatch = useDispatch()

    const onChooseDirection = (event) => {
        dispatch(games.actions.setDirection(event.target.value))
        dispatch(GenerateQuestion())
    }

    const onRestartButton = () => {
        dispatch(games.actions.setUserName(''))
        window.location.reload()
    }

    return (
        <section>
            <p>{description}</p>
            <p>{coordinates}</p>
            {moves && moves.map(move => (
            <button type="submit" value={move.direction} onClick={(event) => onChooseDirection(event)}>Move {move.direction}</button>
            ))}
            <button type="submit" onClick={onRestartButton}>Restart</button>
            </section>
    )
}

export default GameScreen