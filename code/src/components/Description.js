import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContinue, labyrinth } from '../reducers/description';
import styled from 'styled-components';
import { ConfettiLottie } from './Confetti';

export const Description = () => {
  const dispatch = useDispatch();

  const { description, /* coordinates, */ actions } = useSelector(
    (store) => store.labyrinth.currentPosition
  );
  const username = useSelector((state) => state.labyrinth.username);
  const showMap = useSelector((state) => state.labyrinth.storeCoordinates);

  const onButtonClick = (type, direction) => {
    dispatch(fetchContinue(type, direction));
  };

  const Actions = ({ description, type, direction }) => (
    <div>
      <p>{description}</p>
      <Button onClick={() => onButtonClick(type, direction)}>
        {type} {direction.toLowerCase()} {/* To uppercase istället??!=) */}
      </Button>
    </div>
  );

  return (
    <Section>
      <End>
        {actions.length === 0 && (
          <>
            <h1>Congrats {username}!</h1>
            <ConfettiLottie />
            <p>{description}</p>
            <h1>You made it out in {showMap.length} moves!</h1>

            <EndButton
              className="restart-btn"
              type="button"
              onClick={() => {
                dispatch(labyrinth.actions.restart());
              }}>
              Restart
            </EndButton>
          </>
        )}
      </End>
      <Container>
        {actions.length > 0 &&
          actions.map((item) => (
            <InnerContainer>
              <Actions key={item.direction} {...item} />
            </InnerContainer>
          ))}
      </Container>
    </Section>
  );
};

const Section = styled.section`
  font-family: var(--font);
  background-color: white;
`;
const End = styled.div`
  padding: 15px;

  h1 {
    font-style: bold;
    text-transform: uppercase;
    text-align: center;
    font-size: 2em;
    margin-bottom: 40px;
  }

  h2 {
    font-size: 1em;
    font-style: normal;
  }
`;
const EndButton = styled.button`
  background-color: #ff885e;
  align-self: center;
  width: 100%;
  padding: 5px 15px;
  font-size: 1em;
  padding: 5px;
  border: 2px solid black;

  :hover {
    background-color: #ffc16a;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
`;

const InnerContainer = styled.div`
  padding: 10px;
`;

const Button = styled.button`
  align-self: center;
  width: fit-content;
  padding: 5px 15px;
  font-size: 1em;
  border: 2px solid black;
  background-color: #ff885e;

  :hover {
    background-color: #ffc16a;
`;
