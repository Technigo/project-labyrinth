/* eslint-disable linebreak-style */
import styled from 'styled-components'

export const DescriptionWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
    color: #fff;
    padding-bottom: 30px;
    text-shadow: 1px 1px 2px #209b1a, 0 0 1em #21137aed, 3px 2px 0em #03493aed;

    @media (max-width: 375px) {
        padding-bottom: 10px;
        font-size: 1rem;
        }

`

export const DirectionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 250px;

    p {
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
    }

    div {
        max-width: 200px;
    }

    
`

export const DirectionBtn = styled.button`
    background: #044704ab;
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
export const StartBtn = styled.button`
    align-items: center;
    font-weight: 700;
    margin: 30px 0 10px;
    appearance: none;
    background-color: #fcfdfc;
    border-radius: 4px;
    border-width: 0;
    box-shadow: rgb(2 2 156 / 40%) 0 2px 4px, rgb(46 123 70 / 30%) 0 7px 13px -3px, #d6e7d9 0 -3px 0 inset;
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

    & :focus {
      box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    }

    &:hover {
      box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
      transform: translateY(-2px);
    }

    &:active {
      box-shadow: #D6D6E7 0 3px 7px inset;
      transform: translateY(2px);
    }
`

export const GoBackBtn = styled(StartBtn)`
    position: absolute;
    top: 72vh;
    left: 10px;
    width: 110px;
    height: 35px;

    label {
        color: #233924
    }

    @media (max-width: 360px) {
            top: 80vh;
            width: 100px;
            font-size: 0.8rem;
        }

    @media (min-width: 1280px) {
            top: 50vh;
            left: 30px;
        }
    

`

export const RestartBtn = styled(StartBtn)`
    position: absolute;
    top: 72vh;
    right: 10px;
    width: 110px;
    height: 35px;

    label {
        color:#233924
    }

    img {
        width: 30px;
    }

    
    @media (max-width: 360px) {
            top: 80vh;
            width: 100px;
            font-size: 0.8rem;
        }

    @media (min-width: 1280px) {
            top: 50vh;
            right: 30px;
        }
    

`

export const GameEnd = styled.div`
    position: absolute;
    top: 50%;
    font-size: 1.1rem;
    font-family: 'Roboto', sans-serif;

`