import styled from 'styled-components'

export const Styled = {
  Container: styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: 100%;
    margin: 0px auto;
    margin-top: 7rem;
    margin-bottom: 10rem;
    text-align: center;
    padding: 20px;
    box-shadow: 7px 11px #888888;
    @media only screen and (max-width: 1000px) {
      width: 70%;
    }
`,
  GamePlayText: styled.p`
    font-family: 'Retro Gaming', sans-serif;
    font-size: 20px;
    @media only screen and (max-width: 1000px) {
      transform: scale(0.8)
    }
  `,
  GamePlayButton: styled.button`
    font-family: 'Retro Gaming', sans-serif;
    font-size: 1em;
    border-radius: 0;
    margin-top: 0,5em;
  `,
  Footer: styled.div`
    opacity: 0.5;
    width: 35%;
    height: auto;
    background-color: #888;
    margin: 0px auto;
    @media only screen and (max-width: 1000px) {
      width: 100%;
    }
`,
  FooterText: styled.p`
    font-size: 15px;
    text-align: center;
    font-family: 'Retro Gaming', sans-serif;
    color: white;
`
}