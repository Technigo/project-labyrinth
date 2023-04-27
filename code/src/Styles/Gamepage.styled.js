// /////////////// IMPORTS //////////////////////// //

import styled from 'styled-components/macro'

// /////////////// STYLED SECTIONS //////////////////////// //
// This is were the hints-text get styled

export const DescriptionWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    font-size: 4rem;
    font-family: 'Futura', Geneva, Tahoma, sans-serif;
    color: #fff;
    padding-bottom: 30px;

p {
    font-size: 1.8rem;
    color: #ff5a5f;
    font-family: 'Futura', Geneva, Tahoma, sans-serif;
    font-weight: 500;
}
`

// This is the container to the directions-buttons

export const DirectionWrapper = styled.div`
    display: grid;
    min-height: 250px;
    font-family: 'Futura';

&#twoMoves {
    grid-template-columns: 1fr 1fr;
}

&#oneMove {
    grid-template-columns: 1fr;
}

p {
    font-size: 6rem;
    font-family: 'Futura', Geneva, Tahoma, sans-serif;
    font-weight: 500;
    text-shadow: 4px -2px 20px white;
}

div {
    max-width: 500px;
    padding: 10px;
}   
`
// This is were direction-buttons get styled

export const DirectionBtn = styled.button`
    background: #3d81b8;
    box-shadow: inset 0 -0.6em 0 -0.35em rgb(0 0 0 / 17%);
    color: #fff;
    border: none;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 10px;
    
&:hover {
    transform: scale(1.1)
}
`

// This is the Startbutton

export const StartBtn = styled.button`
    align-items: center;
    font-weight: 700;
    margin: 30px 0 10px;
    appearance: none;
    background-color: #fcfdfc;
    border-radius: 14px;
    border-width: 0;
    box-sizing: border-box;
    color: #233924;
    cursor: pointer;
    height: 40px;
    width: 80px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    transition: box-shadow .15s,transform .15s;
    user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow,transform;
    font-size: 15px;

&:hover {
    transform: scale(1.1)
}
`

export const RestartBtn = styled(StartBtn)`
    height: 35px;
label {
    color: red;
}  

&:hover {
    transform: scale(1.1)
}
`

export const GameEnd = styled.div`
    position: absolute;
    top: 50%;
    font-size: 1.1rem;
    font-family: 'Futura';
`