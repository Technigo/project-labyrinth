import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import game from '../reducer/game'
import Game from './Game'
import Labyrinth from './Labyrinth'

const StartPage = () => {
	const items = useSelector((store) => store.game.items)
	return <>{items ? <Labyrinth /> : <Game />}</>
}

export default StartPage
