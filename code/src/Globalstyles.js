import styled from 'styled-components/macro'
import bgStart from './assets/bg_start.svg'

/* export default function App() {
  return (
    <GameContainer>
      <GameFrame>
      <GameContent> Hello CodeSandbox</GameContent>
      </GameFrame>
      <TvCircelContainer>
      <TvCircel />
      <TvCircelSmall />
      </TvCircelContainer>
    </GameContainer>
  );
}
 */
// // ------Tv-----------
// export const GameContainer = styled.section`
//   width: 90%;
//   max-width: 450px;
//   background: rgb(72, 18, 18);
//   max-height: 700px;
//   border: 4px solid rgb(0, 0, 0);
//   position: relative;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: row;
//   -webkit-box-pack: justify;
//   justify-content: space-between;
//   border: 2px solid blue;
// `;

// export const GameFrame = styled.div`
//   background: rgb(155, 151, 151);
//   margin: 1em 1em 1em;
//   height: 350px;
//   width: 90%;
//   border: 4px solid rgb(0, 0, 0);
//   border-radius: 10px;
//   display: flex;
//   -webkit-box-align: center;
//   align-items: center;
//   -webkit-box-pack: center;
//   justify-content: center;
// `;

export const GameContent = styled.div`
  background: rgb(255, 255, 255);
  height: 320px;
  width: 90%;
  border-radius: 10px;
  border: 2px solid;
`;

// export const TvCircelContainer = styled.div`
//   width: 20%;
//   display: flex;
//   flex-direction: column;

// `;

// export const TvCircel = styled.div`
//   width: 50%;
//   height: 10%;
//   background-color: rgb(126, 122, 122);;
//   border-radius: 50%;
//   margin-top: 30%;
//   padding: 5%;
// `;

// export const TvCircelSmall = styled.div`
//   width: 30%;
//   height: 5%;
//   background-color: rgb(126, 122, 122);;
//   border-radius: 50%;
//   margin: 10% 0 0 10%;
//   padding: 5%;
// `;
// ------ App.js -----------

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    background-image: url(${bgStart}) ;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 95%;
    border: 2px solid green;

    /* @media screen and (min-width: 668px) {
        background-position-y: 75%;
        justify-content: space-around;
    } */
`;
// ------ StartPage---------

export const StartPageWrapper = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-color: var(--clr-lilac); */
    
    width: 80%;
    height: 100vh;
    /* background-image: url($parantes) ; */
    /* background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 95%; */
    border: 3px solid lightblue;

    /* @media screen and (min-width: 668px) {
        background-position-y: 75%;
        justify-content: space-around;
    } */
`;

export const WelcomeText = styled.h1`
    text-align: center;
    color: var(clr-accent);
    width: 80%;
    font-family: var(--font-pixel);
    font-size: 1.5rem;
    text-shadow: 1px 1px 1px var(--clr-darkgrey);
    margin-top: 4rem;
    margin-bottom: 3rem;
    line-height: 1.3em;

  @media screen and (min-width: 668px) {
      width: 70%;
      font-size: 2rem;
      margin: 2rem 0 3rem;
  }
`;

export const NameForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    border: 2px solid red;
`;

export const StyledInput = styled.input`
    border: 4px solid;
    border-color: black;
    width: 320px;
    height: 50px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 0.7rem;
    /* padding: 5px; */
    text-align: center;
    font-family: 'Press Start 2P', cursive;
    &:hover,
    &:focus {
        outline: none;
        border-color: purple;
    }
    @media screen and (min-width: 668px) {
        width: 400px;
        height: 70px;
        margin-bottom: 1rem;
        font-size: 1rem;
    }
`;

export const SendNameBtn = styled.button`
    font-size: 1rem;
    border: 4px solid;
    border-color: black;
    width: 320px;
    height: 50px;
    padding: 10px;
    margin-bottom: 2rem;
    font-weight: bold;
    font-family: var(--font-pixel);
    color: black;
    &:hover,
    &:focus {
        border-color: purple;
    }
    @media screen and (min-width: 668px) {
        width: 400px;
        height: 70px;
        font-size: 1.3rem;
        margin-bottom: 8rem;
    }
`;

// -----Nina test appwrapper app.js

export const AppWrapper = styled.div`
    width: 350px;
    margin: 3em 0 4em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    @media (min-width: 667px) {
      width: 500px;
      }
`;