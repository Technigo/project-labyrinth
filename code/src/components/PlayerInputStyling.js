import styled from 'styled-components';
import HeroPlayerInputContainer from '../assets/hero-start-page.jpg';

export const StyledHeroPlayerInputContainer = styled.div`
  background-image: url(${HeroPlayerInputContainer});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  object-fit: cover;
  position: relative;
  min-height: 100vh;
  align-items: center;
  text-align: center;
`;

export const UserNameForm = styled.form`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

@media (min-width: 1440px) {
    flex-direction: row;;
  }
`;

export const SecondHeadingLabel = styled.label`
  font-family: var(--paragraph-font-family);
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
`;

export const SecondHeading = styled.h2`
  font-family: var(--second-headings-font-family);
  font-weight: 100;
  font-size: 1.7rem;
  text-align: center;
  margin: 0.5rem 2rem;
`;

export const StyledInput = styled.input`
  padding: 0.625rem;
  border: 0.063rem solid gray;
  border-radius: 0.313rem;
  font-family: var(--paragraph-font-family);
  font-size: 1.3rem;
  margin: 0.625rem;
`;