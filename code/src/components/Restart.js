import React from 'react';
import styled from 'styled-components';

const Restart = () => {
    const restart = () => {
        window.location.reload();
    };
    return (
        <>
            <button onClick={restart}>Restart game</button>
        </>   
    )
}
export default Restart;