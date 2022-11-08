/* import "./styles.css"; */
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