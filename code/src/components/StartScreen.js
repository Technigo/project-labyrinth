import React, { useState} from 'react'


const StartScreen = () => {
    
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const [inputValue, setInputValue] = useState('')
    
    return (

        <section>
        <h1>Want to enter the labyrinth?</h1>

        <form onSubmit={handleSubmit}>
        <label>
            Add your username:
            <input 
            type="text"
            value={inputValue}
            onChange={event => setInputValue(event.target.value)} />
        </label>
        <button type="submit">Let's play</button>
        </form>
        </section>

    )

}


export default StartScreen