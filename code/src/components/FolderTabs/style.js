import styled from 'styled-components/macro';
import Button from 'components/Button';

// import buttonMain from 'assets/button.png';
// import buttonDown from 'assets/button-down.png';
import buttonHover from 'assets/button-hover.png';
import borderImage2 from 'assets/border-image.png';

export const ButtonTab = styled(Button)`
  /* Toggle */
  background-image: url(${buttonHover});
  transform: translateY(-5px);
  @media screen and (max-width: 600px) {
    min-width: 90px;
  }
  
  & :hover {
    border: 1px solid transparent;
  }
  
  ${(props) => (props.selected
      ? `filter: contrast(150%);`
      : `filter: grayscale(50%);`)}
`;

export const TabButtonRow = styled.div`
  transform: translateY(10px);
  z-index: 1;
  border-style: solid;
  border-bottom-style: none;
  border-image-source: url(${borderImage2});
  border-image-repeat: repeat;
  border-image-slice: 6;
  border-width: 1em;
`;

export const TabContent = styled.div`
  /* border & background*/
  z-index: 2;
  border-style: solid;
  border-image-source: url(${borderImage2});
  border-image-repeat: repeat;
  border-image-slice: 6;
  border-width: 1em;
  padding: 1em;
  background-color: var(--background);
  border-radius: 50%;
  min-width: 80%;
`;

export const TabsWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-self: flex-start;
  align-items: flex-start;  
  width: 100%;
`;
