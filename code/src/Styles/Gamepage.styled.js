// /////////////// IMPORTS //////////////////////// //

import styled from 'styled-components/macro'

// /////////////// STYLED SECTIONS //////////////////////// //
// This is were the hints-text get styled

export const DescriptionWrapper = styled.div`
    position: relative;
    display: flex;
    max-width: 500px;
    flex-direction: column;
    font-size: 1.8rem;
    font-family: 'Futura', Geneva, Tahoma, sans-serif;
    color: #fff;

p {
    font-size: 1.8rem;
    color: #ff5a5f;
    font-family: 'Futura', Geneva, Tahoma, sans-serif;
    font-weight: 500;
    margin-bottom: 25px;
}
`
// This is the container to the directions-buttons

export const DirectionWrapper = styled.div`
    display: grid;
    font-family: 'Futura';

&#twoMoves {
    grid-template-columns: 1fr 1fr;
}

&#oneMove {
    grid-template-columns: 1fr;
}

p {
    font-size: 1.5rem;
    font-family: 'Futura', Geneva, Tahoma, sans-serif;
    font-weight: 500;
}

div {
    max-width: 500px;
}   
`
// This is were direction-buttons get styled

export const DirectionBtn = styled.button`
    background: #3d81b8;
    color: #fff;
    border: none;
    padding: 9px;
    border-radius: 14px;
    margin: 0px 10px 0px 10px;    
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
    color: #ff5a5fff;
    cursor: pointer;
    height: 40px;
    width: 265px;
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
    top: 8%;
    font-size: 1.8rem;
    font-family: 'Futura';
    color: #fff;
    transform: rotate(-10deg);
`