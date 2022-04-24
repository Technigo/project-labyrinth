import React from 'react';

const handleRestartButton = () => {
    window.location.reload();
  };

const EndScreen = () => {
    return (
        <>
        <section className="endScreen">
            <div className="wrapper"> 
            <p>Congratulations! You made it out the Labyrinth!</p>
            <button onClick={handleRestartButton}> Restart</button>
            </div>
        </section>
    </>
    )

}

export default EndScreen; 