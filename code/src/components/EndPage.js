import React from "react";
import styled from "styled-components";
import { game } from "../reducers/game";
import { useSelector, useDispatch } from "react-redux";

export const EndPage = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.game.currentStep);
  return (
    <EndPageSection>
      <p>{currentStep.description}</p>
      <Section class="icon-list">
        <Coin>
          <i class="nes-icon is-large star"></i>
        </Coin>
        <Coin>
          <i class="nes-icon is-large star"></i>
        </Coin>
        <Coin>
          <i class="nes-icon is-large star"></i>
        </Coin>
        <Cat>
          <i class="nes-octocat animate"></i>
        </Cat>
        <Coin>
          <i class="nes-icon is-large star"></i>
        </Coin>
        <Coin>
          <i class="nes-icon is-large star"></i>
        </Coin>
        <Coin>
          <i class="nes-icon is-large star"></i>
        </Coin>
      </Section>
      <ButtonContainer>
        <Button
          className="nes-btn is-success"
          onClick={() => dispatch(game.actions.restartGame())}
        >
          Restart
        </Button>
      </ButtonContainer>
    </EndPageSection>
  );
};

const EndPageSection = styled.div`
  display: flex;
  width: 90vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-item: center;

  @media (min-width: 768px) {
    width: 500px;
  }

  @media (min-width: 1200px) {
    width: 800px;
  }
`;

const Button = styled.button`
  width: 200px;
  margin: 10px;
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  margin: 0;
`;

const Coin = styled.div`
  margin: 10px;
  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Cat = styled.div`
  margin: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
