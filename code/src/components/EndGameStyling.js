import styled from 'styled-components';
import HeroContainer from '../assets/end.jpg';

export const StyledHeroContainer = styled.div`
  background-image: url(${HeroContainer});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  object-fit: cover;
  position: relative;
  min-height: 100vh;
  max-width: 100%;
  align-items: center;
  text-align: center;
`;