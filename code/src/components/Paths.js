import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

import './paths.css'

const Paths = () => {
    const path = useSelector((store) => store.paths.path)
    const error = useSelector((store) => store.paths.error)
    const loading = useSelector((store) => store.paths.loading)
    return (
        <div>
            {error && `Something went wrong, reason: ${error}`}
            {path
                ? <GameScreen />
                : <StartScreen />}

            {loading && <div className="loading-spinner">LOADING</div>}

        </div>

    )
}

export default Paths