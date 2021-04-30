import styled from 'styled-components/macro';

import borderImage2 from 'assets/border-image.png';

export default styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  text-align: center;
  max-width: 800px;
  margin: 5% auto;

  border-style: solid;
  border-image-source: url(${borderImage2});
  border-image-repeat: repeat;
  border-image-slice: 6 6 6 6;
  border-width: 1em;
  padding: 1em;
  background-color: var(--background);
`;
