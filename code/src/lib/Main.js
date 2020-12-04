import styled from 'styled-components/macro'
// This should maybe be moved into lib-folder since it is only styling
export const Main = styled.main`
  display: grid;
  grid-template-rows: min-content;
  justify-content: center;
  padding: 10px;
  background-size: cover;
  background-position: center;
  //background-image: url(${(props) => props.backgroundImage })

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 60px;
    gap: 15px;
    align-items: center;
  }
  `

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media(min-width:768px) {
    grid-column: span 2;
  }

  @media(min-width: 1024px) {
    flex-direction: column;
    grid-column: 3;
  }
  `