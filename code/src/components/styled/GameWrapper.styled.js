import styled from 'styled-components';
import game_background from '../../assets/end_screen.png';

export const GameWrapper = styled.section`
  background-color: black;
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
  
  display: flex;
  justify-content: center;

  & div {
    // background: rgba(0, 0, 0, 0.616);
    background-image: url(${game_background});
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    color: white;
    font-size: .9rem;
    width: 80%;
    max-width: 800px;
    height: 600px;
    padding-top:5rem;

    & p {
      background-color: rgba(0, 0, 0, 0.616);
      padding: 1rem;
      width: fit-content;
    }

    & h6 {
      background-color: rgba(0, 0, 0, 0.616);
      font-size: 1rem;
      padding: 1rem;
      width: 12rem;
    }

    & progress {
      height: 1.5rem;
    }
  }
  `
