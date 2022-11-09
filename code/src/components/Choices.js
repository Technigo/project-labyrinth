import React from 'react';
import { useSelector } from 'react-redux';
// import labyrinth, { generateFetch } from 'reducers/labyrinth';
// import styled from 'styled-components/macro';
// import {  } from '../styles/mainStyles';

const Choices = () => {
  // const dispatch = useDispatch();

  const quest = useSelector((store) => store.labyrinth.quest);

  // const onChoiceMade = (event) => {
  //   event.preventDefault();
  //   dispatch(labyrinth.actions.setChoice());
  //   dispatch(generateFetch())
  // }

  return (
    <section>
      <div>
        {quest.map((test) => {
          return (
            <p>{test.description}</p>
          )
        })}
        fetch.map
          description
          direction.description
        {/* <button type="button" onClick={onChoiceMade()}>search</button> */}
      </div>
    </section>
  )
}

export default Choices;
