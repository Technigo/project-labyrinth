import styled from 'styled-components';

export const TextAnimation = styled.h1`
  color: #fff;

  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  /* Keeps the content on a single line */
  white-space: nowrap;
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: typing 3.5s steps(19, end), blink-caret 0.5s;
  text-align: left;

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: orange;
    }
  }
`;
