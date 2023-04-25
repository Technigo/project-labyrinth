import styled from 'styled-components';

export const OuterWrapper = styled.div`
// the bc-color will change later when we style the game
  background-color: hotpink;
  min-height: 100vh; //vh = view-height
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const InnerWrapper = styled.div`
// all these can be changed later on when we work on the styling
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 2rem;
`;

export const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 0.2rem solid #9b9b9b;
  border-radius: 5px;
  min-height: 60vh;
  width: calc(50% - 5rem);
  min-width: 350px;
  background-color: #ffffff33;
  padding: 20px;
// more to be added later on
`;