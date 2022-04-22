import styled from 'styled-components'

export const devices = {
  mobile: "(min-width: 375px)",
  tablet: "(min-width: 768px)",
  desktop: "(min-width: 1025px)",
}

export const GameArea = styled.main`
  background-image: url("https://images.pexels.com/photos/1731660/pexels-photo-1731660.jpeg?cs=srgb&dl=pexels-boris-ulzibat-1731660.jpg&fm=jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  position: relative;
`

export const ContainerWrapper = styled.div`
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background: #ffffff61;
  padding: 20px 16px;
  border-radius: 15px;
  width: 80%;
  max-width: 650px;
  margin-bottom: 5vw;
  z-index: 100;

  h3 {
    font-size: 20px;
    font-weight: 500;
    margin: 12px 0;
  }

  h5 {
    font-size: 16px;
    font-weight: 300;
    margin: 0;
    margin: 10px 0;
  }
  label p {
    font-size: 20px;
    font-weight: 500;
  }
`

export const Heading = styled.h1`
  font-size: 40px;
  text-align: center;
  font-family: "Cormorant", serif;
`

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  max-width: 200px;
  text-align: center;
  font-size: 20px;
  background: transparent;
  margin-bottom: 20px;

  &:hover {
    font-style: italic;
  }

  &:-webkit-input-placeholder {
    color: #777;
    text-align: center;
  }

  &:focus,
  &:active {
    outline: none;
    background: transparent;
  }
`

export const StyledButton = styled.button`
  padding: 8px 18px;
  margin: 3px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.unclickable ? "#777" : "#7d553d")};
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${(props) => (props.unclickable ? "#777" : "transparent")};
  color: ${(props) => (props.unclickable ? "#D3D3D3" : "#7d553d")};
  cursor: ${(props) => (props.unclickable ? "auto" : "pointer")};
  pointer-events: ${(props) => (props.unclickable ? "none" : "auto")};
  &:hover {
    background-color: #7d553d;
    color: #fff;
  }
`

export const StyledButtonB = styled.button`
  z-index: 100;
  padding: 8px 18px;
  margin: 3px;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.unclickable ? "#777" : "#7d553d")};
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${(props) => (props.unclickable ? "#777" : "#7d553d")};
  color: ${(props) => (props.unclickable ? "#D3D3D3" : "white")};
  cursor: ${(props) => (props.unclickable ? "auto" : "pointer")};
  pointer-events: ${(props) => (props.unclickable ? "none" : "auto")};
  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    color: #7d553d;
  }
`

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`

export const StyledMsg = styled.p`
  font-weight: 300;
  font-style: italic;
  margin: 0;
  margin-bottom: 12px;
`

export const StyledCongrats = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const StyledGrid = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background-color: rgba(255, 255, 255, 0.6);
`

export const StyledGridItem = styled.li`
  width: 60px;
  height: 60px;
  border: 1px solid #7d553d;
  background-color: ${({ color }) => color};
`

export const FlexCenter = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 10px;
  left: 10px;
  right: 0;
  font-size: 14px;
  font-weight: 300;
  color: white;
  p {
    margin: 10px;
  }
`
