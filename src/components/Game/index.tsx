import { useSelector } from "react-redux";

import Intro from "../Intro";
import Decision from "../Decision";

import { Container, GameContainer } from "./style";

const Game: React.FC = () => {
  const username = useSelector((store: any) => store.gameFetch.username);

  return (
    <Container>
      <GameContainer>{username ? <Decision /> : <Intro />}</GameContainer>
    </Container>
  );
};

export default Game;
