import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGameSteps, setPreviousGameObject, reset } from "../reducers/game";

import { useNavigate } from "react-router-dom";

import {
  GameArea,
  StyledButton,
  StyledButtonB,
  Container,
  Wrapper,
  StyledMsg,
  StyledAlert,
} from "styles";
import Loading from "./Loading";

const GamePlay = () => {
  const [onAlert, setAlert] = useState(false);
  const gameObject = useSelector((store) => store.game.gameObject);
  const history = useSelector((store) => store.game.history);
  const isLoading = useSelector((store) => store.ui.isLoading);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    history.length && setAlert(false);
  }, [history]);
  const onRestartClick = () => {
    dispatch(reset());
    navigate("/");
  };

  const onGoBack = () => {
    if (history.length === 0) {
      setAlert(true);
      return;
    }
    dispatch(setPreviousGameObject());
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
                <StyledButtonB onClick={onGoBack}>GO BACK</StyledButtonB>
              </Wrapper>
              <StyledAlert
                style={{ visibility: onAlert ? "visible" : "hidden" }}
              >
                Cannot go back
              </StyledAlert>
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
