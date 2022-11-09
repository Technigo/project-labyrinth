import styled from 'styled-components/macro'

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
// ------Tv-----------
export const GameContainer = styled.section`
  width: 90%;
  max-width: 450px;
  background: rgb(72, 18, 18);
  max-height: 700px;
  border: 4px solid rgb(0, 0, 0);
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const GameFrame = styled.div`
  background: rgb(155, 151, 151);
  margin: 1em 1em 1em;
  height: 350px;
  width: 90%;
  border: 4px solid rgb(0, 0, 0);
  border-radius: 10px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

export const GameContent = styled.div`
  background: rgb(255, 255, 255);
  height: 320px;
  width: 90%;
  border-radius: 10px;
  border: 2px solid;
`;

export const TvCircelContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;

`;

export const TvCircel = styled.div`
  width: 50%;
  height: 10%;
  background-color: rgb(126, 122, 122);;
  border-radius: 50%;
  margin-top: 30%;
  padding: 5%;
`;

export const TvCircelSmall = styled.div`
  width: 30%;
  height: 5%;
  background-color: rgb(126, 122, 122);;
  border-radius: 50%;
  margin: 10% 0 0 10%;
  padding: 5%;
  
`;
// ------ App.js -----------
export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    /* background-image: url($parantes) ; */
    /* background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 95%; */

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
    justify-content: flex-start;
    width: 100%;
    height: 100vh;
    /* background-image: url($parantes) ; */
    /* background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 95%; */

    /* @media screen and (min-width: 668px) {
        background-position-y: 75%;
        justify-content: space-around;
    } */
`;

export const WelcomeText = styled.h1`
    text-align: center;
    color: white;
    width: 80%;
    font-family: var(--font-pixel);
    font-size: 1.5rem;
    margin-top: 3rem;
    line-height: 1.3em;

  @media screen and (min-width: 668px) {
      width: 80%;
      font-size: 2rem;
      margin: 2rem 0 3rem;
  }
`;

export const NameForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

export const StyledInput = styled.input`
    border: 4px solid;
    border-color: black;
    width: 330px;
    height: 50px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.3rem;
    /* padding: 5px; */
    text-align: center;
    font-family: 'Press Start 2P', cursive;
    &:hover,
    &:focus {
        outline: none;
        border-color: purple;
    }
    @media screen and (min-width: 668px) {
        width: 500px;
        height: 70px;
        margin-bottom: 1rem;
        font-size: 1.8rem;
    }
`;

export const SendNameBtn = styled.button`
    font-size: 1rem;
    border: 4px solid;
    border-color: black;
    width: 330px;
    height: 50px;
    padding: 10px;
    margin-bottom: 2rem;
    font-weight: bold;
    font-family: var(--font-pixel);
    color: black;
    &:hover,
    &:focus {
        border-color: var(--clr-accent);
    }
    @media screen and (min-width: 668px) {
        width: 500px;
        height: 70px;
        font-size: 1.3rem;
        margin-bottom: 10rem;
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