/* eslint-disable linebreak-style */
import styled from 'styled-components'

export const DescriptionWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    color: #fff;
    padding-bottom: 30px;
    text-shadow: 1px 1px 2px #209b1a, 0 0 1em #21137aed, 3px 2px 0em #03493aed;

    @media (max-width: 375px) {
        padding-bottom: 10px;
        }

`

export const Direction = styled.div`
    position: relative;
    width: 200px;
    height: 400px;

    img {
        filter: invert(1);
        width: 30px;
        cursor: pointer;

        &:hover {
            opacity: 0.7
        }
    }

    #North {
        position: absolute;
        top: 10px;
        left: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #East {
        position: absolute;
        right: 0;
        top: 40%;
        display: flex;
        flex-direction: row-reverse;

        img {
            transform: rotate(90deg);
        }
    }

    #West {
        position: absolute;
        left: 10px;
        top: 50%;
        display: flex;

        img {
            transform: rotate(-90deg);
        }
    }

    #South {
        position: absolute;
        bottom: 0;
        left: 80px;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
   

        img {
            transform: rotate(180deg);
        }
    }

        @media (max-width: 375px) {
            height: 300px;
        }
    
`

export const DirectionBtn = styled.button`
    background: transparent;
    color: #fff;
    border: none;

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
    top: 75vh;
    left: 10px;
    width: 110px;
    height: 35px;

    label {
        color: #233924
    }

    @media (min-width: 1280px) {
            top: 50vh;
            left: 30px;
        }
    

`

export const RestartBtn = styled(StartBtn)`
    position: absolute;
    top: 75vh;
    right: 10px;
    width: 110px;
    height: 35px;

    label {
        color:#233924
    }

    img {
        width: 30px;
    }

    @media (min-width: 1280px) {
            top: 50vh;
            right: 30px;
        }
    

`