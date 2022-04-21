import React, {useState} from "react"
import { useDispatch } from "react-redux"

import game, {fetchData} from "reducers/game"

const StartPage = () => {
    const [nameInput, setNameInput] = useState("")
    const dispatch = useDispatch()

    const SetName = () => {
        dispatch(game.actions.setUsername(nameInput))
        dispatch(fetchData())
    }

    // fetch('https://labyrinth-technigo.herokuapp.com/start', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             username: nameInput
    //             })
    //         })
    //     .then(res => res.json())
    //     .then(data => console.log(data))

    return (
        <div>
            <h1>Welcome, give us your name!</h1>
            <input type="text"
            value={nameInput}
            onChange={event => setNameInput(event.target.value)} />
            <button onClick={SetName}>Send</button>
        </div>
    )
}

export default StartPage
