import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContinue } from '../reducers/description';
import styled from 'styled-components';

// Importing BG URLS
// import realentrance from '../assets/realentrance.jpg';
// import Light from '../assets/Light.jpg';
// import Light2 from '../assets/Light2.jpg';
// import cave from '../assets/cave.jpg';
// import cave2 from '../assets/cave2.jpg';
// import cave23 from '../assets/cave23.jpg';
// import Ending from '../assets/Ending.jpg';

export const Description = () => {
  const { description, coordinates, actions } = useSelector(
    (store) => store.labyrinth.currentPosition
  );
  const dispatch = useDispatch();

const colorDictionary = {
  '0,0': 'red',
  '1,0': 'pink',
  '1,1': 'blue',
  '0,1': 'yellow',
  '0,2': 'purple',
  '0,3': 'green',
  '1,3': 'orange',
  }

  const onButtonClick = (type, direction) => {
    dispatch(fetchContinue(type, direction));
  };

  const Actions = ({ description, type, direction }) => (
    <Div>
      <p>{description}</p>
      <Button onClick={() => onButtonClick(type, direction)}>
        {type} {direction.toLowerCase()}
      </Button>
    </Div>
  );
  
  return (
    <Section style={{ background: colorDictionary[coordinates] }}>
      <Article>
      <h1>{description}</h1>
      {actions.length === 0 && <h3>Yay you made it out!</h3>}

      {actions.length > 0 &&
        actions.map((item) => <Actions key={item.direction} {...item} />)}
      </Article>
    </Section>
  );
};
const Button = styled.button`
  align-self: center;
  width: fit-content;
  padding: 5px 15px;
  font-size: 1em;
  border: none;
`;

const Div = styled.div`
display:flex;
flex-direction: column;
/* margin: 0 0 1em 1em; */
`;

const Section = styled.section`
width:100vw;
height:100%;
display:flex;
text-align: center;

`;

const Article =styled.article`
display:flex;
flex-direction: column;
justify-content: center;
/* align-content: center; */


@media (min-width:1025px) {
width:50%;
padding: 25%;
}
`;