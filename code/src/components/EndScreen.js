import React from 'react';

const handleRestartButton = () => {
    window.location.reload();
  };

const EndScreen = () => {
    return (
        <>
    <p>Congratulations! You made it out the Labyrinth!</p>
    <button onClick={handleRestartButton}> Restart</button>
    </>
    )

}

export default EndScreen; 