import React from 'react'


const StartScreen = () => {
    
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    
    return (
    
    <>
        <section className="first-page">
        <h1>Want to enter the labyrinth?</h1>

        <form onSubmit={handleSubmit}>
        <label>
            Add your username:
            <input type="text" />
        </label>
        <button type="submit">Let's play</button>
        </form>
        </section>       
    </>

    )

}


export default StartScreen