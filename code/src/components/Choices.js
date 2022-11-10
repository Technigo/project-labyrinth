import React from 'react';
import { useSelector } from 'react-redux';
// import labyrinth, { generateFetch } from 'reducers/labyrinth';
import styled from 'styled-components/macro';
// import {  } from '../styles/mainStyles';

const Choices = () => {
  // const dispatch = useDispatch();

  const quest = useSelector((store) => store.labyrinth.quest);

  console.log(quest)

  // const onChoiceMade = (event) => {
  //   event.preventDefault();
  //   dispatch(labyrinth.actions.setChoice());
  //   dispatch(generateFetch())
  // }

  return (
    <section>
      <div>
        <MainText>{quest.description}</MainText>
        {quest.actions.map((details) => {
          return (
            // Testar om den blir mindre sur om vi får en "key" att funka,
            // den blev mkt gladare nu:
            <MainText key={details.description}>
              {details.direction}: {details.description}
            </MainText>
          )
        })}
        {/* fetch.map
          description
          direction.description */}
        {/* <button type="button" onClick={onChoiceMade()}>search</button> */}
      </div>
    </section>
  )
}

export default Choices;

const MainText = styled.p`
  color: #43B771;
`