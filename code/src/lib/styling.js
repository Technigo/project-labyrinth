import styled from "styled-components";


export const LoaderContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-repeat: repeat;
    background-color: #60cd18;
`

export const LoadingText = styled.h3`
    position: relative;
    color: #1a1a1a;
    font-size: 48px;
    text-align: center;
    margin-top: 0;
`

// TYPOGRAPHY

export const H1 = styled.h1`
    font-size: 56px;
    line-height: 64px;
    text-align: center;
    margin: 0;
    letter-spacing: 0.1rem;
    color: #adadad;
    padding-bottom: 2rem;
`

export const H2 = styled.h2`
    font-size: 1.5rem;
    line-height: 1.875rem;
    text-align: center;
    letter-spacing: 0.1rem;
    padding 0 0 2rem 0;
    color: #adadad;
    margin-top: 0;
    max-width: 500px;
    margin: 0 auto;
`
export const H3 = styled.h3`
    font-size: 56px;
    line-height: 64px;
    text-align: center;
    margin: 0;
    letter-spacing: 0.1rem;
    color: #adadad;
    padding: 2rem 0;
`

export const P = styled.p`
    font-size: 1rem;
    margin-top: 0;
    line-height: 1.275rem;
    text-align: center;
    letter-spacing: 0.1rem;
    color: #adadad;
`

export const Coordinates = styled.p`
    font-size: 1rem;
    line-height: 1.275rem;
    letter-spacing: 0.1rem;
    color: #60cd18;
`

export const QuestionMark = styled.span`
    color: #60cd18;
    margin-left: 1rem;
`


// CONTROLS

export const DirectionBtns = styled.div`
    max-width: 343px;
    margin: 0 auto;
    background-color: #dedede;
    height: 96px;
    border-radius: 48px; 
    display: flex;
    align-items: center;
    padding: 0 1rem;
`

export const BackgroundImg = styled.div`
    position: relative;
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    // padding-bottom: 3rem;
`


// CONTAINERS

export const ContentContainer = styled.section`
    margin-bottom: 4rem;
    max-width: 767px;
    background-color: #111111CC;
    padding: 4rem;
    border-radius: 12px;
    // margin-top: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`

export const FormContainer = styled.form`
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    aling-items: center;
    width: 100%;
`

export const PositionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #adadad;
    background-color: #1a1a1aCC;
    padding: 0.5rem 1rem;
    border-radius: 8px;
`

export const TheCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
`

export const CardItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // background-color: #1a1a1aCC;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
    width: 100%;
`

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 2rem;
    text-align: center;
    box-sizing: border-box;
    gap: 2rem;
`


// INPUTS AND BUTTONS

export const Inputfield = styled.input`
    height: 48px;
    border: none;
    padding: 0 1rem;
    border-radius: 8px;
    background-color: #adadad;
`

export const FormButton = styled.button`
    height: 48px;
    padding: 0 1rem;
    border: none;
    color: #60cd18;
    background-color: #333;
    font-family: Fredoka One;
    letter-spacing: 0.1rem;
    cursor: pointer;
    border-radius: 8px;
    margin-top: 1.5rem;
    position: relative;
    &::before,
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      transition: all .25s ease-out;
    }
    &::before {
    border: 2px solid #60cd18;
    border-radius: 8px;
    top: -8px;
    left: -8px;
    }
    &::after {
        background-color: #60cd18;
        border-radius: 8px;
        bottom: -8px;
        right: -8px;
    }
    &:hover {
      &::before {
        border: 2px solid #60cd18;
        border-radius: 8px;
        top: 8px;
        left: 8px;
      }
      &::after {
        bottom: 8px;
        right: 8px;
      }
    }
`

export const DirectionBtn = styled.button`
    height: 48px;
    padding: 0 1rem;
    border: none;
    color: #60cd18;
    background-color: #333;
    font-family: Fredoka One;
    letter-spacing: 0.1rem;
    cursor: pointer;
    border-radius: 8px;
    position: relative;
    &::before,
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      transition: all .25s ease-out;
    }
    &::before {
    border: 2px solid #60cd18;
    border-radius: 8px;
    top: -8px;
    left: -8px;
    }
    &::after {
        background-color: #60cd18;
        border-radius: 8px;
        bottom: -8px;
        right: -8px;
    }
    &:hover {
      &::before {
        border: 2px solid #60cd18;
        border-radius: 8px;
        top: 8px;
        left: 8px;
      }
      &::after {
        bottom: 8px;
        right: 8px;
      }
    }
`


export const Icon = styled.i`
    font-size: 1.5rem;
    color: #60cd18;
    margin-right: 1rem;
`



