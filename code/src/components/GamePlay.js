import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGameSteps, reset } from "../reducers/game";

import { useNavigate } from "react-router-dom";

import {
  GameArea,
  StyledButton,
  StyledButtonB,
  Container,
  Wrapper,
  StyledMsg,
} from "styles";
import Loading from "./Loading";

const GamePlay = () => {
  const gameObject = useSelector((store) => store.game.gameObject);
  const isLoading = useSelector((store) => store.ui.isLoading);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onRestartClick = () => {
    dispatch(reset());
    navigate("/");
  };

  return (
    <GameArea>
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
                          ? " ⬅"
                          : action.direction === "East"
                          ? " ➡"
                          : "")}
                    </span>
                  </StyledButton>
                </Container>
              ))}
              <Wrapper>
                <StyledButtonB onClick={onRestartClick}>RESTART</StyledButtonB>
                <StyledButtonB>GO BACK</StyledButtonB>
              </Wrapper>
            </>
          ) : (
            gameObject.coordinates && (
              <Container>
                <h3>You won!</h3>
                <StyledButton onClick={onRestartClick}>Restart </StyledButton>
              </Container>
            )
          )}
        </>
      )}
    </GameArea>
  );
};

export default GamePlay;
