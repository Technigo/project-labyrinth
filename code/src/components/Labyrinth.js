import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import game, { navigateGame } from '../reducer/game'

const Labyrinth = () => {
	const dispatch = useDispatch()
	const items = useSelector((store) => store.game.items)
	console.log('items', items)
	console.log(
		'actions',
		items.actions.map((item) => {
			return item.type
		})
	)
	return (
		<>
			<button onClick={() => dispatch(navigateGame(items.actions[0].type, items.actions[0].direction))}>
				hello
			</button>
			<p>{items.description}</p>
		</>
	)
}

export default Labyrinth
