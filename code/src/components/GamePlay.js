import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGameSteps, setPreviousGameObject, reset } from "../reducers/game";

import { useNavigate } from "react-router-dom";

import {
  GameArea,
  StyledButton,
  StyledButtonB,
  Container,
  ContainerWrapper,
  Wrapper,
  StyledMsg,
} from "styles";
import Loading from "./Loading";
import Congrats from "./Congrats";
import Grid from "./Grid";
import Footer from "./Footer";

const GamePlay = () => {
  const gameObject = useSelector((store) => store.game.gameObject);
  const history = useSelector((store) => store.game.history);
  const isLoading = useSelector((store) => store.ui.isLoading);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onRestartClick = () => {
    dispatch(reset());
    navigate("/");
  };

  const onGoBack = () => {
    if (!history.length) {
      return;
    }
    dispatch(setPreviousGameObject());
  };

  return (
    <GameArea>
      {isLoading ? (
        <Loading />
      ) : (
        <ContainerWrapper>
          <Container>
            <h3>{gameObject.description}</h3>
            <StyledMsg>- where to go next?</StyledMsg>
          </Container>

          {gameObject.actions.length !== 0 ? (
            <>
              {gameObject.actions.map((action) => (
                <Container key={action.direction}>
                  <h5>{action.description}</h5>
                  <StyledButton
                    onClick={() => {
                      dispatch(fetchGameSteps({ direction: action.direction }));
                    }}
                  >
                    <span>
                      Go {""}
                      {action.direction +
                        (action.direction === "North"
                          ? " ⬆"
                          : action.direction === "South"
                          ? " ⬇"
                          : action.direction === "West"
                          ? " ➡"
                          : action.direction === "East"
                          ? " ⬅"
                          : "")}
                    </span>
                  </StyledButton>
                </Container>
              ))}
              <Wrapper>
                <StyledButtonB onClick={onRestartClick}>RESTART</StyledButtonB>
                <StyledButtonB unclickable={!history.length} onClick={onGoBack}>
                  GO BACK
                </StyledButtonB>
              </Wrapper>
              <Grid />
            </>
          ) : (
            gameObject.coordinates && (
              <>
                <Congrats />
                <Container>
                  <h3>You won!</h3>
                  <StyledButton onClick={onRestartClick}>Restart </StyledButton>
                </Container>
              </>
            )
          )}
        </ContainerWrapper>
      )}
      <Footer />
    </GameArea>
  );
};

export default GamePlay;
